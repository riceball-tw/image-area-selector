import type { AreaInfo } from "@type/ImageSelector";

export default function Terminal({ areasInfo }: { areasInfo: AreaInfo[] }) {
  return <div className="terminal">{JSON.stringify(areasInfo)}</div>;
}
