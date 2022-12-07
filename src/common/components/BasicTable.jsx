import React, { useState, useEffect } from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";

function BasicTable(props) {
  const [rows, setRows] = useState(props.data);

  const handleClick = (item) => {
    console.log(item);
    props.showDetails(item);
  };

  useEffect(() => {
    setRows(props.data);
  }, [props.data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row) => (
              <TableRow key={row.episode_id} onClick={() => handleClick(row)}>
                <TableCell component="th" scope="row" role="episode">
                  EPISODE {row.episode_id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.release_date}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const MemoisedBasicTable = React.memo(BasicTable);
