import type { ReactNode } from "react";

export default function Window({ children }: { children: ReactNode }) {
  return <div className="window">{children}</div>;
}
