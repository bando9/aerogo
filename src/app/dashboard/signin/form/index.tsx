"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ActionResult, createSignIn } from "./actions";
import { useActionState } from "react";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDescription: [],
};

function FormSignIn() {
  const [state, formAction, isPending] = useActionState(
    createSignIn,
    initialFormState,
  );

  console.log(state);

  return (
    <div className="w-full h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="w-full max-w-sm" action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-email">Email</FieldLabel>
                <Input
                  id="form-email"
                  type="email"
                  name="email"
                  placeholder="bando@example.com"
                />
                <FieldDescription>
                  We&apos;ll never share your email with anyone.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="form-password">Password</FieldLabel>
                <Input
                  id="form-password"
                  type="password"
                  name="password"
                  placeholder="********"
                />
              </Field>
              <Field orientation="horizontal">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Loading..." : "Submit"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSignIn;
