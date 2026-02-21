"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActionResult, handleSignIn } from "./action";
import { useActionState } from "react";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormSignIn() {
  const [state, formAction] = useActionState(handleSignIn, initialFormState);

  console.log(state);

  return (
    <div className="w-7xl flex items-center justify-center mx-auto flex-col h-screen">
      <div className="mb-7 text-2xl font-semibold">Sign in to your account</div>
      <form action={formAction}>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your email"
            typeof="email"
            name="email"
          />
          <Input
            type="text"
            placeholder="Enter your password"
            typeof="password"
            name="password"
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
