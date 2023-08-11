import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  border: 1px solid black;
  width: 81px;
  height: 154px;
  border: 1px solid black;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px RGB(128, 126, 126);
  text-align: center;
  margin: 15px 15px;
  background-color: #f2d0a7;
  border-color: #f2d0a7;
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  width: 80%;
`;
