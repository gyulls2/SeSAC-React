import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";

const Prac02 = () => {
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

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "95%",
          margin: "0 auto",
          flexFlow: "wrap",
          padding: "30px",
        }}
      >
        {movieList.map((item) => (
          <Card sx={{ minWidth: 300, margin: "0 30px 30px 0" }}>
            <CardMedia component="img" height="400" image={item.poster} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.open}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Prac02;
