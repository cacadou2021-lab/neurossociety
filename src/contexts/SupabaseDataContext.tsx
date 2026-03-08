import { createContext, useContext, type ReactNode } from "react";
import useSupabaseData, { type SupabaseData } from "@/hooks/useSupabaseData";

const SupabaseDataContext = createContext<SupabaseData | null>(null);

export function SupabaseDataProvider({ children }: { children: ReactNode }) {
  const data = useSupabaseData();
  return (
    <SupabaseDataContext.Provider value={data}>
      {children}
    </SupabaseDataContext.Provider>
  );
}

export function useSharedData(): SupabaseData {
  const ctx = useContext(SupabaseDataContext);
  if (!ctx) throw new Error("useSharedData must be used within SupabaseDataProvider");
  return ctx;
}
