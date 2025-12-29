import { Hono } from 'hono'

const app = new Hono()

/**
 * 演習 11-1:
 * '/hello' というパスに GET リクエストを送った際、
 * JSON 形式で { message: "Hello from exercise" } を返すように実装してください。
 */

// app.get('/hello', (c) => { ... })

export default app
