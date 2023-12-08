import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background-color: #cd006b; /* Pink shade for the button background */
  color: #faf9fa; /* Off-white color for the text */
  padding: 12px 30px; /* Example padding, adjust as needed */
  border: none;
  border-radius: 6px; /* Rounded corners */
  font-size: 16px; /* Adjust to your design */
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #b6b6b6;

  &:hover {
    background-color: #a51c5b; /* Slightly darker shade for the hover state */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Slightly larger shadow for hover */
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Smaller shadow for active click */
  }

  &:focus {
    outline: none; /* Removes the outline on focus */
  }

  &:disabled {
    background-color: #e0a1c0; /* Lighter pink for disabled state */
    cursor: not-allowed;
  }
`;
