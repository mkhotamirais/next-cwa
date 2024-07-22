import { NewVerificationForm } from "@/components/auth/new-verification-form";
import SuspenseWrapper from "@/components/auth/suspense-wrapper";

export default function NewVerificationPage() {
  return (
    <SuspenseWrapper>
      <NewVerificationForm />;
    </SuspenseWrapper>
  );
}
