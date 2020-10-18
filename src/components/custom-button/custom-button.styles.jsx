import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: #2e5daa;
    border: none;
    color: white;
  }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return googleStyles;
    }

    return props.inverted ?  invertedStyles : buttonStyles;
}

export const StyledCustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
