import axios from "axios";

export const getMovies = async () => {
  const BASE_URL = "https://swapi.dev/api/films/?format=json";
  try {
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
