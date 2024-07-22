import { ExtendedUser } from "@/next.auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function UserInfo({ user, label }: { user?: ExtendedUser; label: string }) {
  return (
    <Card className="w-[500px] shadow-sm">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent>
        <div className="flex  flex-row items-center justify-between rounded-lg border p-2 mb-1 shadow-sm">
          <div>id</div>
          <div>{user?.id}</div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-2 mb-1 shadow-sm">
          <div>name</div>
          <div>{user?.name}</div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-2 mb-1 shadow-sm">
          <div>email</div>
          <div>{user?.email}</div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-2 mb-1 shadow-sm">
          <div>role</div>
          <div>{user?.role}</div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-2 mb-1 shadow-sm">
          <div>two factor auth</div>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
