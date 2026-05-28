import Features from "@/components/features";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default function ProductPage() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <Spinner className="size-8" />
          </div>
        }
      >
        <Features />
      </Suspense>
    </div>
  );
}