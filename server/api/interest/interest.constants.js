const InterestFields = {
  ID: '_id',
  COMMENT: 'comment',
  STATUS: 'status',
  DATE_ADDED: 'dateAdded',
  PERSON: 'person',
  OPPORTUNITY: 'opportunity'
}

const InterestStatus = {
  INTERESTED: 'interested',
  INVITED: 'invited',
  COMMITTED: 'committed',
  DECLINED: 'declined',
  ATTENDED: 'attended',
  NOTATTENDED: 'not attended'
}

module.exports = {
  SchemaName: 'Interest',
  InterestFields,
  InterestStatus
}
