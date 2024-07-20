import type { ReactNode } from "react";

interface FloatButtonProps {
  children: ReactNode;
  handleAction: () => void;
}

export default function FloatButton({
  children,
  handleAction,
}: FloatButtonProps) {
  return (
    <button type="button" className="floatButton" onClick={handleAction}>
      {children}
    </button>
  );
}
