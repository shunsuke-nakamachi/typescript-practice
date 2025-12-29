export { };
import { Hono } from 'hono'

const app = new Hono()

/**
 * 演習 13-1:
 * 全てのリクエストに対して、
 * コンソールに "Request received: [メソッド] [パス]"
 * と出力するカスタムミドルウェアを作成してください。
 */

// app.use('*', async (c, next) => { ... })

/**
 * 演習 13-2:
 * "/admin/*" のパスに対して、
 * リクエストヘッダー `x-admin-key` が "secret" でない場合に
 * 403 Forbidden を返すシンプルな認証ミドルウェアを作成してください。
 */

// app.use('/admin/*', async (c, next) => { ... })

export default app
