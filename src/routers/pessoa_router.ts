 import { type Router } from 'express'

 type Pessoa = {
   nome: string
   email: string
 }
   
   const listPessoas: Pessoa[] = []
  
   export default (router: Router ): void => {
   router.post('/formulario', (request, response) => {
     //const { nome, email } = request.body
     return response.json({ nome, email })
    })
   
   router.get('/carregar', (request, response) => {
     const list: Pessoa[] = []
   
     list.push({ nome: 'Maria Clara', email: 'mary@gmail.com' })
     list.push({ nome: 'Levi', email: 'levi@gmail.com' })
     list.push({ nome: 'Rafael', email: 'rafael@gmail.com' })
   
     return response.json({ list: listPessoas })
 })
 