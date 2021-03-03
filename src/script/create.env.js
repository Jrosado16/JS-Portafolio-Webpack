const fs = require('fs')

fs.writeFileSync('./.env', `API=${API.process.env.API}\n`)