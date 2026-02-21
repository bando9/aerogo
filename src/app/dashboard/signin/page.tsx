import { Metadata } from "next";
import { FC } from "react";
import FormSignIn from "./form";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SignInPageProps {}

export const metaData: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC<SignInPageProps> = ({}) => {
  return <FormSignIn />;
};

export default SignInPage;
