// "use server";

// import { redirect } from "next/navigation";
// import { FormSchema } from "./validation";

// export interface ActionResult {
//   errorTitle: string | null;
//   errorDesc: string[] | null;
// }

// export async function handleSignIn(
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   prevState: any,
//   formData: FormData,
// ): Promise<ActionResult> {
//   console.log(formData.get("email"));

//   const values = FormSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (!values.success) {
//     const errorDesc = values.error.issues.map((issue) => issue.message);

//     return {
//       errorTitle: "Error Validation",
//       errorDesc,
//     };
//   }

//   return redirect("/dashboard/signin");
// }
