import "./App.css";
import Window from "@components/Window";
import ImageUploader from "@components/ImageUploader";
import Terminal from "@components/Terminal";

export function App() {
  return (
    <div className="wrapper">
      <Window>
        <ImageUploader />
      </Window>
      <Terminal />
    </div>
  );
}
