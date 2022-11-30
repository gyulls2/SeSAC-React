import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const UIDesign = () => {
  const movieList = [
    {
      title: "공조 2: 인터내셔날",
      open: "2022.09.07",
      poster:
        "https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "인생은 아름다워",
      open: "2022.09.28",
      poster:
        "https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "정직한 후보 2",
      open: "2022.09.28",
      poster:
        "https://movie-phinf.pstatic.net/20220928_85/1664332929020nYWPc_JPEG/movie_image.jpg?type=m203_290_2",
    },
  ];

  return (
    <div>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }}>
            <TableCell>순번</TableCell>
            <TableCell>영화제목</TableCell>
            <TableCell>개봉날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.poster} width={"50px"} />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.open}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="text">하이~~</Button>
        <Button variant="contained">바이~~</Button>
        <Button variant="outlined">Outlined</Button>
      </ButtonGroup>
    </div>
  );
};

export default UIDesign;
