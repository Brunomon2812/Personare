import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
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
  width: 100%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background to dim the background content */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Adjust the z-index value to ensure it's above other elements */
`;

// Styled modal container (the inner white container)
export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  width: 30%;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001; /* Ensure it's above the overlay */
`;


// Styled close button (inside the inner container)
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

// Styled modal content
export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
`;

// Styled modal content
export const CardImage = styled.img`
  padding: 20px;
`;

export const CardDescription = styled.p`
  width: 100%;
  word-wrap: break-word; 
  overflow: hidden;
  text-overflow: ellipsis;
`;