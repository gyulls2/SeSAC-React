// import React from "react";

// const Movie = (props) => {
//   return (
//     <div>
//       <p>영화 제목 : {props.title} </p>
//       <p>개봉 : {props.open}</p>
//       <p>배우 : {props.actor}</p>
//     </div>
//   );
// };

// export default Movie;

// import React from "react";

// const Movie = ({ title, open }) => {
//   return (
//     <div>
//       <p>영화 제목 : {title} </p>
//       <p>개봉 : {open}</p>
//     </div>
//   );
// };

// export default Movie;

// 구조 분해 할당 => 주로 사용
import React from "react";
const Movie = (props) => {
  const { title, open, poster } = props;
  return (
    <div>
      <p>영화 제목 : {title} </p>
      <p>개봉 : {open}</p>
      <img src={poster} width={"100px"} />
    </div>
  );
};

export default Movie;
