import express from 'express'
import productsRouter from './routers/products.router.js'



const app = express() 
app.use(express.json())


app.use('/products',productsRouter)


app.listen(8080, () => console.log('server up')) 