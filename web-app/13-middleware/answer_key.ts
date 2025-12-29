export { };
import { Hono } from 'hono'

const app = new Hono()

// 演習 13-1
app.use('*', async (c, next) => {
    console.log(`Request received: ${c.req.method} ${c.req.path}`)
    await next()
})

// 演習 13-2
app.use('/admin/*', async (c, next) => {
    const adminKey = c.req.header('x-admin-key')
    if (adminKey !== 'secret') {
        return c.text('Forbidden', 403)
    }
    await next()
})

app.get('/admin/dashboard', (c) => c.text('Welcome Admin'))

export default app
