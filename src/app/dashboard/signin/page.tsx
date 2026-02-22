"use client";

import { Metadata } from "next";
// import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../../../lib/auth-client";

export const metaData: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const route = useRouter();

  const handleSubmit = async () => {
    await authClient.signIn.email(
      { email, password },
      {
        async onSuccess(context) {
          if (context.data.twoFactorRedirect) {
            route.push("/dashboard/two-factor");
          } else {
            route.push("/dashboard");
          }
          console.log({ email, password });
        },
      },
    );
  };

  return (
    <div className="w-7xl flex items-center justify-center mx-auto flex-col h-screen">
      <div className="mb-7 text-2xl font-semibold">Sign in to your account</div>
      <form>
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
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
