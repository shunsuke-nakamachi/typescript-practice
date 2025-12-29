export { };
import { Hono } from 'hono'
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'

const app = new OpenAPIHono()

const UserSchema = z.object({
    id: z.string().openapi({ example: '123' }),
    name: z.string().openapi({ example: 'John Doe' }),
})

const route = createRoute({
    method: 'get',
    path: '/users/{id}',
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: UserSchema,
                },
            },
            description: 'Retrieve the user',
        },
    },
})

app.openapi(route, (c) => {
    const { id } = c.req.valid('param')
    return c.json({
        id,
        name: 'John Doe',
    })
})

// OpenAPI JSON
app.doc('/doc', {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'My API',
    },
})

// Swagger UI
app.get('/ui', swaggerUI({ url: '/doc' }))

export default app
/**
 * 演習:
 * 上記のコードを参考に、新しいルート（ユーザー登録など）を追加して、
 * '/ui' にアクセスした際に Swagger UI に反映されることを確認してみましょう。
 */
