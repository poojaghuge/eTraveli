import React, { useState, useEffect, useCallback } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { getMovies } from "../common/service/MovieService";
import { MemoisedBasicTable } from "../common/components/BasicTable";
import { MemoisedMovieDetails } from "./MovieDetails";
import { MemoisedActionBar } from "./ActionBar";
import { sortArray } from "../common/utility/utilityMethods";

export const MovieContainer = () => {
  const [response, setResponse] = useState([]);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await getMovies();
    setResponse(response.results);
    setData(response.results);
  };

  const showDetails = (item) => {
    setSelected(item);
  };

  const handleChange = (val) => {
    if (!val) {
      setData(response);
      return;
    }
    const result = data.filter((item) => {
      return item.title.toLowerCase().includes(val.toLowerCase());
    });
    setData(result);
  };

  const handleSort = (order) => {
    console.log(order);
    const array = sortArray([...data], order);
    console.log(array);
    setData(array);
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  const showDetailsMemo = useCallback(showDetails, []);
  const handleSortMemo = useCallback(handleSort, [data]);

  return (
    <>
      <MemoisedActionBar
        handleChange={handleChange}
        handleSort={handleSortMemo}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="container">
          <Grid item xs={7}>
            <MemoisedBasicTable data={data} showDetails={showDetailsMemo} />
          </Grid>
          <Grid item xs={5}>
            <MemoisedMovieDetails selected={selected} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
