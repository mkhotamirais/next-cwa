"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BackButton({ href, label }: { href: string; label: string }) {
  return (
    <Button variant="link" size="sm" asChild className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
