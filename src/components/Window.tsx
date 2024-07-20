import type { ReactNode } from "react";

interface WindowProps {
  children: ReactNode;
}

export default function Window({ children }: WindowProps) {
  return <div className="window">{children}</div>;
}
