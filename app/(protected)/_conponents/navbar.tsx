"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@/components/auth/user-button";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex bg-secondary justify-between items-center p-4 rounded-xl w-[500px] shadow-sm">
      <div className="flex gap-x-2">
        <Button asChild size="sm" variant={pathname === "/settings" ? "default" : "outline"}>
          <Link href="/settings">Settings</Link>
        </Button>
        <Button asChild size="sm" variant={pathname === "/server" ? "default" : "outline"}>
          <Link href="/server">Server</Link>
        </Button>
        <Button asChild size="sm" variant={pathname === "/client" ? "default" : "outline"}>
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild size="sm" variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/admin">Admin</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
}
