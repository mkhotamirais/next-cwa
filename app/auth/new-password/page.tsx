import { NewPasswordForm } from "@/components/auth/new-password-form";
import SuspenseWrapper from "@/components/auth/suspense-wrapper";

export default function NewPasswordPage() {
  return (
    <SuspenseWrapper>
      <NewPasswordForm />;
    </SuspenseWrapper>
  );
}
