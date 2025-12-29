export { };
import { Hono } from 'hono'

const app = new Hono()

/**
 * 演習 12-1:
 * パスパラメータ `:id` を受け取り、
 * { id: "受け取ったID" } を JSON で返す GET エンドポイントを作成してください。
 */

// app.get('/user/:id', (c) => { ... })

/**
 * 演習 12-2:
 * クエリパラメータ `name` を受け取り、
 * { message: "Hello, nameさん!" } を返す GET エンドポイントを作成してください。
 * `name` がない場合は "Guestさん" としてください。
 */

// app.get('/greet', (c) => { ... })

export default app
