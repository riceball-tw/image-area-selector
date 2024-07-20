import { type IArea } from "@bmunozg/react-image-area";

export default function Terminal({ areas }: { areas: IArea[] }) {
  return <div className="terminal">{JSON.stringify(areas)}</div>;
}
