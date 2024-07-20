import { type IArea } from "@bmunozg/react-image-area";

type Area = Omit<IArea, "unit">;

function is2AreaOverlapping(areaA: Area, areaB: Area) {
  // A area boundaries
  const leftA = areaA.x;
  const rightA = areaA.x + areaA.width;
  const topA = areaA.y;
  const bottomA = areaA.y + areaA.height;

  // B area boundaries
  const leftB = areaB.x;
  const rightB = areaB.x + areaB.width;
  const topB = areaB.y;
  const bottomB = areaB.y + areaB.height;

  // Is A/B overlapping?
  return leftA < rightB && rightA > leftB && topA < bottomB && bottomA > topB;
}

export function areAnyAreasOverlapping(areas: Area[]) {
  return areas.some((currentArea, index) => {
    const remainingAreas = areas.slice(index + 1);
    return remainingAreas.some((targetArea) =>
      is2AreaOverlapping(currentArea, targetArea),
    );
  });
}
