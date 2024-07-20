import { useState } from "react";
import {
  AreaSelector,
  type IArea,
  type IAreaRendererProps,
} from "@bmunozg/react-image-area";
import FloatButton from "@components/FloatButton";
import { areAnyAreasOverlapping } from "@utility/2dCollisionDetection";

export default function ImageUploader({
  areas,
  setAreas,
}: {
  areas: IArea[];
  setAreas: (areas: IArea[]) => void;
}) {
  const [file, setFile] = useState<string>("");

  /**
   * Update Selection Areas when no areas are overlapping
   */
  function handleSelectionChange(newSelectionAreas: IArea[]) {
    if (!areAnyAreasOverlapping(newSelectionAreas)) {
      setAreas(newSelectionAreas);
    }
  }

  function handleSubmitImage(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      setFile(URL.createObjectURL(files[0]));
    }
  }

  /**
   *  Custom render function to display info inside the areas
   *  @url https://github.com/ByronMunozG/react-image-area?tab=readme-ov-file#optional-props
   */
  const customRender = ({ isChanging, areaNumber }: IAreaRendererProps) => {
    /**
     * Remove Area By Given Area Number
     */
    function removeTargetArea(targetAreaNumber: number) {
      setAreas(areas.filter((_, index) => index + 1 !== targetAreaNumber));
    }

    if (!isChanging) {
      return (
        <div key={areaNumber}>
          {/* Delete Area Button */}
          <FloatButton
            handleAction={() => {
              removeTargetArea(areaNumber);
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6Zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7q0 .425.288.713T10 17Zm4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7q0 .425.288.713T14 17ZM7 6v13V6Z"
                />
              </svg>
            </div>
          </FloatButton>
        </div>
      );
    }
  };

  return (
    <>
      {file ? (
        <AreaSelector
          unit="percentage"
          areas={areas}
          globalAreaStyle={{
            border: "1px solid var(--selection)",
          }}
          onChange={handleSelectionChange}
          customAreaRenderer={customRender}
        >
          <img className="previewImage" src={file} alt="Preview Image" />
        </AreaSelector>
      ) : (
        <label className="imageUploader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14Zm0 0V5v14Zm2-2h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17Zm1.5-7q.625 0 1.063-.438T10 8.5q0-.625-.438-1.063T8.5 7q-.625 0-1.063.438T7 8.5q0 .625.438 1.063T8.5 10Z"
            />
          </svg>
          Upload image
          <input
            onChange={handleSubmitImage}
            className="visually-hidden"
            type="file"
            accept="image/*"
          />
        </label>
      )}
    </>
  );
}
