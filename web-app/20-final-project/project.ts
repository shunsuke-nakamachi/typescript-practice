export { };
import { OpenAPIHono, z } from '@hono/zod-openapi'

/**
 * Bookstore API Project Template
 * 
 * これまでのチャプター（Zod, OpenAPI, Middleware, CRUD）を総動員して
 * 本の管理システムを完成させてください。
 */

const BookSchema = z.object({
    id: z.string().openapi({ example: '1' }),
    title: z.string().min(1).openapi({ example: 'TypeScript Guide' }),
    author: z.string().min(1).openapi({ example: 'John Doe' }),
})

const app = new OpenAPIHono()

// TODO: GET /books (一覧取得)
// TODO: POST /books (新規登録、認証付き)
// TODO: GET /books/:id (単体取得)

export default app
