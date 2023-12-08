import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center; /* This will centralize the logo */
  align-items: center;
  padding: 10px 20px; /* Adjust padding to match your design */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  position: relative; /* Ensures that the header is positioned in relation to its container */
  z-index: 10; /* Adjust z-index to ensure the header is above other content */
`;

export const Title = styled.h1`
    color: #4d538c;
    font-size: 42px;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    margin: 10px 0;
    text-transform: uppercase;
    letter-spacing: normal;
`;

// const Navigation = styled.nav`
//   position: absolute;
//   left: 0;
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   padding: 0 20px; /* Adjust padding to match your design */
// `;

// const NavItem = styled.a`
//   text-decoration: none;
//   color: #333; /* Adjust color to match your design */
//   font-size: 16px; /* Adjust font-size to match your design */
// `;

