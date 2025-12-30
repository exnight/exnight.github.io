import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    publishedOn: z.coerce.date(),
    updatedOn: z.coerce.date().optional(),
    summary: z.string().optional(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    readTime: z.number().default(5),
  }),
})

export const collections = { blog }
