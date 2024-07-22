"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const githubSignin = async () => {
  await signIn("github");
};

export const googleSignin = async () => {
  await signIn("google");
};
