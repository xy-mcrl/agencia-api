import express, { Router } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
app.use(router)

type Pessoa = {
  nome: string
  email: string
}

const listPessoas: Pessoa[] = []

router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'Glêsio' }))

router.post('/formulario', (request, response) => {
  const { nome, email } = request.body
  return response.json({ nome, email })
})

router.get('/carregar', (request, response) => {
  const list: Pessoa[] = []

  list.push({ nome: 'Maria Clara', email: 'mary@gmail.com' })
  list.push({ nome: 'Levi', email: 'levi@gmail.com' })
  list.push({ nome: 'Rafael', email: 'rafael@gmail.com' })

  return response.json({ list: listPessoas })
})

app.listen(3000, () => { console.log('Running port 3000') })
