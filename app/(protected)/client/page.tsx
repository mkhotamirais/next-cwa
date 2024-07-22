"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hookes/useCurrentUser";

export default function ClientPage() {
  const user = useCurrentUser();

  return <UserInfo label="Client component" user={user} />;
}
