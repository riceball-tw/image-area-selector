import "./App.css";
import { useState } from "react";
import Window from "@components/Window";
import ImageUploader from "@components/ImageUploader";
import Terminal from "@components/Terminal";
import { type IArea } from "@bmunozg/react-image-area";
import type { ImageDimension } from "@type/ImageSelector";

export function App() {
  const [areas, setAreas] = useState<IArea[]>([]);
  const [imageDimension, setImageDimension] = useState({
    width: 0,
    height: 0,
  });

  const getAreasInfo = (areas: IArea[], imageDimension: ImageDimension) => {
    return areas.map((area) => {
      return {
        x: Math.round((area.x / 100) * imageDimension.width),
        y: Math.round((area.y / 100) * imageDimension.height),
        width: Math.round((area.width / 100) * imageDimension.width),
        height: Math.round((area.height / 100) * imageDimension.height),
      };
    });
  };

  const areasInfo = getAreasInfo(areas, imageDimension);

  return (
    <div className="wrapper">
      <Window>
        <ImageUploader
          areas={areas}
          setAreas={setAreas}
          setImageDimensions={setImageDimension}
        />
      </Window>
      <Terminal areasInfo={areasInfo} />
    </div>
  );
}
