import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleSignIn } from "./form/action";
import { Metadata } from "next";
import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SignInPageProps {}

export const metaData: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC<SignInPageProps> = ({}) => {
  return (
    <div className="w-7xl flex items-center justify-center mx-auto flex-col h-screen">
      <div className="mb-7 text-2xl font-semibold">Sign in to your account</div>
      <form action={handleSignIn}>
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
};

export default SignInPage;
