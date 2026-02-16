"use client";

import { Button } from "../../stories/button/Button";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Button primary size="large" label="Sign in with Google" />
    </div>
  );
}
