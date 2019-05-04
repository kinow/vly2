const mongooseCrudify = require('mongoose-crudify')

const helpers = require('../../services/helpers')
const Interest = require('./interest')

module.exports = (server) => {
    // Docs: https://github.com/ryo718/mongoose-crudify
    server.use(
      '/api/interest',
      mongooseCrudify({
        Model: Interest,
        selectFields: '-__v', // Hide '__v' property
        endResponseInAction: false,
  
        // beforeActions: [],
        // actions: {}, // list (GET), create (POST), read (GET), update (PUT), delete (DELETE)
        afterActions: [
          // this is the place to require user be authed.
          { middlewares: [helpers.formatResponse] }
        ]
      })
    )
  }