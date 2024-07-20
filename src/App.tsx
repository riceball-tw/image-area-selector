import "./App.css";
import { useState } from "react";
import Window from "@components/Window";
import ImageUploader from "@components/ImageUploader";
import Terminal from "@components/Terminal";
import { type IArea } from "@bmunozg/react-image-area";

export function App() {
  const [areas, setAreas] = useState<IArea[]>([]);

  return (
    <div className="wrapper">
      <Window>
        <ImageUploader areas={areas} setAreas={setAreas} />
      </Window>
      <Terminal areas={areas} />
    </div>
  );
}
