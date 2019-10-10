#!/usr/bin/env node
/* eslint-disable no-console */
const axios = require('axios')
const { sortedLocations } = require('../../server/api/location/locationData')
const { jwtData } = require('../../server/middleware/session/__tests__/setSession.fixture')

const API_URL = process.env.VLY_URL || 'http://localhost:3122'
const ops = [
  require('./op-cars.json'),
  require('./op-impact.json'),
  require('./op-litter.json'),
  require('./op-rocket.json')
]

const walt = require('./walt.person.json')

const postPerson = async (person) => {
  await axios.post(`${API_URL}/api/people`, person)
}

const postOp = async (op) => {
  await axios.post(`${API_URL}/api/opportunities`, op,
    { headers: { Cookie: `idToken=${jwtData.idToken}` } })
}

const createOps = async () => {
  await postPerson(walt)
  for (let i = 0; i < 500; i++) {
    const newOp = ops[i % ops.length]
    newOp.location = sortedLocations[i % sortedLocations.length]
    await postOp(newOp)
  }
}

createOps()
