"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface IUserInfo {
  session: Session | null;
}

export function UserInfo({ session }: IUserInfo) {
  if (!session) return;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Avatar>
        <AvatarFallback>
          {session?.user?.email ? session.user.email[0].toUpperCase() : "U"}
        </AvatarFallback>
      </Avatar>
      <span>{session?.user?.email}</span>

      <Button variant="link" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}
