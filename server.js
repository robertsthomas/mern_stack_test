const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const config = require('config')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))


//  Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
	// Set static folder
	app.use(express.static('client/dist'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}

const db = config.get("mongoURI")
mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true})
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))