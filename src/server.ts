import express from 'express'

const app = express();

app.get('/', (request, response) => {
  return response.json("Hollo Wold NLW")
})

app.post('/', (request, response) => {
  return response.json({mensage: "Os dados foram salvos com sucesso!"})
}) 






app.listen('3333', () => console.log('Server is running!'))