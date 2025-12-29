export { };
import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

/**
 * プロのステータスコード使い分け例
 */

// 1. 取得 (200 OK)
app.get('/users', (c) => {
    return c.json([
        { id: 1, name: 'Alice' }
    ], 200);
});

// 2. 作成 (201 Created)
app.post('/users', async (c) => {
    const body = await c.req.json();
    // 実際に作成したテイで ID を付与して返す
    return c.json({ id: 2, ...body }, 201);
});

// 3. 削除 (204 No Content)
app.delete('/users/:id', (c) => {
    console.log(`Deleting ID: ${c.req.param('id')}`);
    // 成功を伝えるが、中身は空にする
    return c.body(null, 204);
});

// 4. エラー (400 Bad Request)
app.get('/error-example', (c) => {
    return c.json({ error: 'Invalid parameters' }, 400);
});

console.log('Ch 21 server running on http://localhost:3000');
serve({ fetch: app.fetch, port: 3000 });
