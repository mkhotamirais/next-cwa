import { RegisterForm } from "@/components/auth/register-form";
import SuspenseWrapper from "@/components/auth/suspense-wrapper";

export default function RegisterPage() {
  return (
    <SuspenseWrapper>
      <RegisterForm />;
    </SuspenseWrapper>
  );
}
