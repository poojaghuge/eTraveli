import React, { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@mui/material";

const MovieDetails = (props) => {
  const { selected } = props;
  if (!selected) {
    return (
      <div className="default">
        No Movie Selected
      </div>
    );
  }

  return (
    <div className="movieDetails">
      <h4>{selected?.title}</h4>
      <section>
        <div className="description" data-testid="description">
          {selected?.opening_crawl}
        </div>
        <br />
        <div data-testid="directedBy">Directed By: {selected?.director}</div>
      </section>
    </div>
  );
};

export const MemoisedMovieDetails = React.memo(MovieDetails);
