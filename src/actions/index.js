"use server";

import { signIn, signOut } from "@/auth";

export async function handleSignIn(provider) {
  return signIn(provider);
  // return signIn("google");
}

export async function handleSignOut() {
  return signOut();
}
