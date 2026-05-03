import z from "zod";

export const RequestSignInSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type RequestSignIn = z.infer<typeof RequestSignInSchema>;
