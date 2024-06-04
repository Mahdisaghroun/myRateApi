const mongoose = require('mongoose')

const MONGOURI = process.env.MONGODB_URI || "mongodb+srv://zerobug:zerobug@cluster0.qcpjkam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
console.log('MONGOURI',MONGOURI)
const InitiateMongoServer = () => {
	mongoose.connect(MONGOURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.log('connected to mongodb!')
	}).catch(() => {
		console.log('error connecting to db')
	})
}

module.exports = InitiateMongoServer
