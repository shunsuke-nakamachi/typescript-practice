export { };
import { OpenAPIHono, z, createRoute } from '@hono/zod-openapi'

// 型定義
const BookSchema = z.object({
    id: z.string().openapi({ example: '1' }),
    title: z.string().min(1).openapi({ example: 'TypeScript Guide' }),
    author: z.string().min(1).openapi({ example: 'John Doe' }),
})

const app = new OpenAPIHono()

// モック DB
let books = [
    { id: '1', title: 'Hono Intro', author: 'Hono Dev' }
]

// ルート定義: Get All
const listRoute = createRoute({
    method: 'get',
    path: '/books',
    responses: {
        200: {
            content: { 'application/json': { schema: z.array(BookSchema) } },
            description: 'Get books list',
        },
    },
})

app.openapi(listRoute, (c) => {
    return c.json(books)
})

// TODO: 他のルートも同様に実装する
export default app
