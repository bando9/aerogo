"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActionResult, handleSignIn } from "./action";
import { useActionState, useState } from "react";
import { authClient } from "../../../../../lib/auth-client";
import { useRouter } from "next/navigation";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormSignIn() {
  const [state, formAction] = useActionState(handleSignIn, initialFormState);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const route = useRouter();

  const submit = async () => {
    await authClient.signIn.email(
      { email, password },
      {
        async onSuccess(context) {
          if (context.data.twoFactorRedirect) {
            route.push("/two-factor");
          } else {
            route.push("/dashboard");
          }
        },
      },
      setLoading(false),
    );
  };

  console.log(state);

  return (
    <div className="w-7xl flex items-center justify-center mx-auto flex-col h-screen">
      <div className="mb-7 text-2xl font-semibold">Sign in to your account</div>
      <form action={formAction}>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full" onClick={submit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
