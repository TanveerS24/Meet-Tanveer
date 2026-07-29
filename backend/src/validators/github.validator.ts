import { z } from 'zod';

export const getGitHubQuerySchema = z.object({
  query: z.object({
    username: z.string().optional(),
  }),
});
