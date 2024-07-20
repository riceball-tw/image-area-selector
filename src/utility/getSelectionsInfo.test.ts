import { describe, it, expect } from "vitest";
import { getSelectionsInfo } from "@utility/getSelectionsInfo";

describe("getSelectionsInfo", () => {
  it("Calculate selection pixel from percentage", () => {
    const selections = [
      { x: 10, y: 20, width: 30, height: 40 },
      { x: 50, y: 60, width: 70, height: 80 },
    ];
    const imageDimension = {
      width: 1000,
      height: 800,
    };

    expect(getSelectionsInfo(selections, imageDimension)).toEqual([
      { x: 100, y: 160, width: 300, height: 320 },
      { x: 500, y: 480, width: 700, height: 640 },
    ]);
  });

  it("Selection info should round the calculated values", () => {
    const selections = [{ x: 33.33, y: 66.67, width: 50, height: 25 }];
    const imageDimension = {
      width: 600,
      height: 400,
    };

    expect(getSelectionsInfo(selections, imageDimension)).toEqual([
      { x: 200, y: 267, width: 300, height: 100 },
    ]);
  });

  it("No Selections", () => {
    const selections: [] = [];
    const imageDimension = {
      width: 800,
      height: 600,
    };

    expect(getSelectionsInfo(selections, imageDimension)).toEqual([]);
  });
});

it("No Image Dimension", () => {
  const selections = [{ x: 33.33, y: 66.67, width: 50, height: 25 }];
  const imageDimension = {};
  // @ts-expect-error Ignore type error for checking is runtime check working
  expect(getSelectionsInfo(selections, imageDimension)).toEqual([]);
});
