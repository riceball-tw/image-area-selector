import type { ImageDimension, AreaInfo } from "@type/ImageSelector";

export function getSelectionsInfo(
  selections: AreaInfo[],
  imageDimension: ImageDimension,
) {
  if (!imageDimension.width || !imageDimension.height) return [];
  return selections.map((area) => {
    return {
      x: Math.round((area.x / 100) * imageDimension.width),
      y: Math.round((area.y / 100) * imageDimension.height),
      width: Math.round((area.width / 100) * imageDimension.width),
      height: Math.round((area.height / 100) * imageDimension.height),
    };
  });
}
