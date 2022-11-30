import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Prac03 = () => {
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
    {
      title: "아마겟돈 타임",
      open: "2022.09.10",
      poster:
        "https://movie-phinf.pstatic.net/20221108_79/1667874477412kEhtg_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "블랙 팬서: 와칸다 포에버",
      open: "2022.09.30",
      poster:
        "https://movie-phinf.pstatic.net/20221109_104/16679823446027N0KD_JPEG/movie_image.jpg?type=m203_290_2",
    },
    {
      title: "동감",
      open: "2022.09.11",
      poster:
        "https://movie-phinf.pstatic.net/20221116_268/1668561350236xPB9j_JPEG/movie_image.jpg?type=m203_290_2",
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>포스터</StyledTableCell>
          <StyledTableCell>영화제목</StyledTableCell>
          <StyledTableCell>개봉일</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movieList.map((row) => (
          <StyledTableRow key={row.title}>
            <StyledTableCell component="th" scope="row">
              <img src={row.poster} width={"100px"} />
            </StyledTableCell>
            <StyledTableCell>{row.title}</StyledTableCell>
            <StyledTableCell>{row.open}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Prac03;
