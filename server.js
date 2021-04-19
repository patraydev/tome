const app = require('./app.js')
const db = require('./db/connection')

const PORT = process.env.PORT

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))