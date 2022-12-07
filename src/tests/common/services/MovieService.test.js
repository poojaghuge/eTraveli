import { mockDeep, mockReset } from "jest-mock-extended";
import { getMovies } from "../../../common/service/MovieService";
import axios from "axios";
import dummyJson from "./dummy.json";

jest.mock("axios");

const mock = mockDeep(axios);

describe("Movie service", () => {
  it("getMovies call should return data", async () => {
    mock.get.mockResolvedValueOnce(dummyJson);
    const result = await getMovies();
    expect(mock.get).toHaveBeenCalledWith(
      "https://swapi.dev/api/films/?format=json"
    );
    expect(result).toEqual(dummyJson.data);
  });

  it("getMovies call should return error", async () => {
    mock.get.mockRejectedValueOnce({ error: "Something went wrong" });
    try {
      const result = await getMovies();
    } catch (error) {
      console.log(result);
      expect(mock.get).toHaveBeenCalledWith(
        "https://swapi.dev/api/films/?format=json"
      );
      expect(console.log).toBe("Something went wrong");
    }
  });
});
