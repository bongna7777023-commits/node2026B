import express from 'express'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())

// Home route
app.get('/', (req, res) => {
  res.send('Hello World')
})

// User routes
app.use('/users', userRoutes)

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
