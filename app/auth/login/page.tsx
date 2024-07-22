import { LoginForm } from "@/components/auth/login-form";
import SuspenseWrapper from "@/components/auth/suspense-wrapper";

export default function LoginPage() {
  return (
    <SuspenseWrapper>
      <LoginForm />;
    </SuspenseWrapper>
  );
}
