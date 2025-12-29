export { };
import { z } from 'zod'

// 演習 14-1 解答
const postSchema = z.object({
    title: z.string().min(3, "タイトルは3文字以上で入力してください"),
    content: z.string(),
    tags: z.array(z.string()),
    published: z.boolean()
})

// テスト用
const sample = {
    title: "TS",
    content: "Hello",
    tags: ["ts", "hono"],
    published: true
}

const result = postSchema.safeParse(sample)
if (!result.success) {
    console.log(result.error.issues)
}

export { postSchema }
