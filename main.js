import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

//Crud Funtionality


app.get('/movies', () => {

})

app.post('/movies', () => {
    
})


app.put('/movies/:id', () => {
    
})


app.delete('/movies/:id', () => {
    
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

//Dry Principle: Keep your code DRY (Don't Repeat Yourself) by creating reusable functions and modules.
//Kiss Principle: Keep your code simple and straightforward. Avoid unnecessary complexity.
//Yagni Principle: You Aren't Gonna Need It. Don't add features until they are necessary.