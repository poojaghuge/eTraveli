import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Paper,
  Box,
  Toolbar,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Movie.css";

const StyledSelect = styled(Select)(({ theme }) => ({
  color: "inherit",
  "& .MuiSelect-select, .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `${theme.spacing(4)})`,
    [theme.breakpoints.up("md")]: {
      width: "10ch",
    },
  },
}));



function ActionBar(props) {
  const [selectedValue, setSelectedValue] = useState("");

  const sortBy = ["Year", "Episode"];
  const handleSortChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValue(value);
    const order = value == "Year" ? "release_date" : "episode_id";
    props.handleSort(order);
  };

  return (
    <Paper sx={{ flexGrow: 1 }} variant={"outlined"}>
      <Toolbar>
        <FormControl sx={{ m: 1 }} className="sortBy">
          <StyledSelect
            labelId="sort-label"
            id="sort"
            displayEmpty
            value={selectedValue}
            onChange={handleSortChange}
            renderValue={(selectedValue) => {
              return <em>Sort by...{selectedValue}</em>;
            }}>
            <MenuItem disabled value="">
              <em>Sort by...</em>
            </MenuItem>
            {sortBy.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <div className="search">
          <SearchIcon className="searchIcon" />
          <InputBase
            className="searchInput"
            placeholder="Type to search..."
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => props.handleChange(event.target.value)}
          />
        </div>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </Paper>
  );
}

export const MemoisedActionBar = React.memo(ActionBar);
