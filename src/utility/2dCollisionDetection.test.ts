import { expect, test, describe } from "vitest";
import { areAnyAreasOverlapping } from "./2dCollisionDetection";

describe("areAnyAreasOverlapping", () => {
  test("Is Not Overlapping", () => {
    const areas = [
      { x: 0, y: 0, width: 10, height: 10 },
      { x: 20, y: 20, width: 10, height: 10 },
    ];
    expect(areAnyAreasOverlapping(areas)).toBe(false);
  });

  test("Is Overlapping", () => {
    const areas = [
      { x: 0, y: 0, width: 10, height: 10 },
      { x: 5, y: 5, width: 10, height: 10 },
    ];
    expect(areAnyAreasOverlapping(areas)).toBe(true);
  });

  test("Has Empty Areas", () => {
    const areas: [] = [];
    expect(areAnyAreasOverlapping(areas)).toBe(false);
  });

  test("Has Single Area", () => {
    const areas = [{ x: 0, y: 0, width: 10, height: 10 }];
    expect(areAnyAreasOverlapping(areas)).toBe(false);
  });

  test("Has Multiple Overlapping", () => {
    const areas = [
      { x: 0, y: 0, width: 20, height: 20 },
      { x: 5, y: 5, width: 20, height: 20 },
      { x: 10, y: 10, width: 20, height: 20 },
    ];
    expect(areAnyAreasOverlapping(areas)).toBe(true);
  });
});
