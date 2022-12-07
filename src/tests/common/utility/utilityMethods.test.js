import { compare, sortArray } from "../../../common/utility/utilityMethods";
import dummyJson from "../services/dummy.json";
import { sortedArrayByEpisode, sortedArrayByYear } from "./data";

const array = dummyJson.data.results;

describe("Utility Methods", () => {
  it("test compare function with number values which needs position change", async () => {
    const result = compare(15, 10);
    expect(result).toEqual(1);
  });
  it("test compare function with number values which don't need to change position", async () => {
    const result = compare(8, 10);
    expect(result).toEqual(-1);
  });

  it("test compare function strings which are in ascending order", async () => {
    const result = compare("abc", "def");
    expect(result).toEqual(-1);
  });

  it("test compare function which are in descending order", async () => {
    const result = compare("zbc", "def");
    expect(result).toEqual(1);
  });
  it("test sortArray function by passing release_date", async () => {
    const result = sortArray(array, "release_date");
    expect(result).toEqual(sortedArrayByYear);
  });
  it("test sortArray function by passing release_date", async () => {
    const result = sortArray(array, "episode_id");
    expect(result).toEqual(sortedArrayByEpisode);
  });
});
