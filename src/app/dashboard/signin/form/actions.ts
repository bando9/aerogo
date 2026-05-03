"use server";

import { redirect } from "next/navigation";
import { RequestSignInSchema } from "./schema";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export interface ActionResult {
  errorTitle: string | null;
  errorDescription: string[] | null;
}

export async function createSignIn(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<ActionResult> {
  const values = RequestSignInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!values.success) {
    const errorDescription = values.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validatoin",
      errorDescription,
    };
  }
  const existingUser = await prisma.user.findFirst({
    where: { email: values.data.email },
  });

  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDescription: ["user doesn't exist"],
    };
  }

  const validPassword = bcrypt.compare(
    values.data.password,
    existingUser.password,
  );

  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDescription: ["email / password is wrong"],
    };
  }
  return redirect("/dashboard/signin");
}
