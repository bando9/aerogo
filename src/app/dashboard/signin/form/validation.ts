import z from "zod";

export const FormSchema = z.object({
  email: z
    .email({
      error: (issue) => {
        if (issue.input === "undefined") {
          return { message: "email tidak valid" };
        }
      },
    })
    .nonempty({ message: "email required" }),
  password: z
    .string()
    .nonempty({ message: "password required" })
    .min(5, { message: "min 5 character" }),
});
