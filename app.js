//dot env instantiate
require('dotenv').config()
//mongoose instantiate
require('./model/moongose')

const config = require('./config/serverConfig')
const app = config.setUpServer()

app.listen(3000, () => console.log('server running on port 3000'))