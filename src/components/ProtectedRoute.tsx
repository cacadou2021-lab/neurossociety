import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import type { User } from "@supabase/supabase-js";

interface Props {
  user: User | null;
  loading: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, loading, children }: Props) {
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-accent animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}
