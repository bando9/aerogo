"use server";

export interface ActionResult {
  errorTitle: string | null;
  errorDesc: string | null;
}

export async function handleSignIn(formData: FormData) {
  console.log(formData.get("email"));

  // const values =
}
