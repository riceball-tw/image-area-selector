import type { AreaInfo } from "@type/ImageSelector";

interface TerminalProps {
  areasInfo: AreaInfo[];
}

export default function Terminal({ areasInfo }: TerminalProps) {
  return <div className="terminal">{JSON.stringify(areasInfo)}</div>;
}
