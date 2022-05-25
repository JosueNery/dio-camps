import Express from 'express'
import bodyParser from 'body-parser'

import {
    verifyToken,
    protectRoute
} from './middlewares/auth'

import { generateToken } from './services/auth'

const app = Express()
const port = 3000

app.set('json spaces', 2)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(verifyToken)

app.get('/', (req, res) => res.send(' Vivah '))

app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username !== 'admin' || password !== '123456') {
        return res.status(400).send({ error: 'Invalid username or password' })
    }

    const payload = {
        sub: 1,
        name: 'Usuario',
        roles: ['admin']
    }
    const token = generateToken(payload)

    res.send({
        token
    })
})

app.get('/protected', protectRoute, (req, res) => res.send(req.decoded))

app.listen(port, () => console.log('API rodando na porta 3000'))