import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/mygame',{useNewUrlParser: true})

mongoose.Promise = global.Promise

export default mongoose