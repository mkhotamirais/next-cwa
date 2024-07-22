"use client";

import { useCurrentRole } from "@/hookes/user-current-role";
import { UserRole } from "@prisma/client";
import React from "react";
import { FormError } from "../form-error";

export function RoleGate({ children, allowRole }: { children: React.ReactNode; allowRole: UserRole }) {
  const role = useCurrentRole();
  if (role !== allowRole) {
    return <FormError message="you do not have permission to view this content" />;
  }
  return <>{children}</>;
}
