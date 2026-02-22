"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../../../../lib/auth-client";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async () => {
    await authClient.signUp.email({ name, email, password });
    router.push("/dashboard/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow p-8 rounded max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          className="w-full mb-4 border px-3 py-2 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mb-4 border px-3 py-2 rounded"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 border px-3 py-2 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
