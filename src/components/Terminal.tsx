import type { SelectionInfo } from "@type/ImageSelector";

interface TerminalProps {
  selectionsInfo: SelectionInfo[];
}

export default function Terminal({ selectionsInfo }: TerminalProps) {
  return <div className="terminal">{JSON.stringify(selectionsInfo)}</div>;
}
