const fs = require('fs')
const payload = require('./payload.json')
const answers = payload.testResults[0].assertionResults.map(test => test.status === 'passed')

fs.writeFileSync(process.env.UNIT_TEST_OUTPUT_FILE, JSON.stringify(answers))
