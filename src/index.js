import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRouter from './router/index.js'
import { Conectar } from './public/services/conexion.js'
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')



app.use(indexRouter)

app.use(express.static(join(__dirname, 'public')))

Conectar()

app.listen(8080)
console.log('El servidor se escucha en el puerto', 8080)