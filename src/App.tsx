import "./App.css";
import { useState } from "react";
import Window from "@components/Window";
import ImageUploader from "@components/ImageUploader";
import Terminal from "@components/Terminal";
import { type IArea } from "@bmunozg/react-image-area";
import { getSelectionsInfo } from "@utility/getSelectionsInfo";

export function App() {
  const [selections, setSelections] = useState<IArea[]>([]);
  const [imageDimension, setImageDimension] = useState({
    width: 0,
    height: 0,
  });

  const selectionsInfo = getSelectionsInfo(selections, imageDimension);

  return (
    <div className="wrapper">
      <Window>
        <ImageUploader
          selections={selections}
          setSelections={setSelections}
          setImageDimensions={setImageDimension}
        />
      </Window>
      <Terminal selectionsInfo={selectionsInfo} />
    </div>
  );
}
