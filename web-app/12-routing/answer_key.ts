export { };
import { Hono } from 'hono'

const app = new Hono()

// 演習 12-1
app.get('/user/:id', (c) => {
    const id = c.req.param('id')
    return c.json({ id })
})

// 演習 12-2
app.get('/greet', (c) => {
    const name = c.req.query('name') || 'Guest'
    return c.json({ message: `Hello, ${name}さん!` })
})

export default app
