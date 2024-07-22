"use client";

import React, { Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

export function CardWrapper({
  children,
  backButtonHref,
  backButtonLabel,
  headerLabel,
  showSocial,
}: {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
    </Suspense>
  );
}
