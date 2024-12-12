import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    publishedOn: z.coerce.date(),
    updatedOn: z.coerce.date().optional(),
    summary: z.string().optional(),
    published: z.boolean().default(false),
  }),
})

export const collections = { blog }
