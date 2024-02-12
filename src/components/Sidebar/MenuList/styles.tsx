import styled, { css } from "styled-components";

export const Menu = styled.ul`
  ${({ theme }) => css`
    a {
      :hover {
        background-color: ${theme.palette.primary[300]};
        transition: background-color 0.3s ease-in-out;
      }
    }

    li {
      color: ${theme.palette.text.primary};
      padding: "0.8rem";
    }

    h6 {
      color: ${theme.palette.text.primary};
    }
  `}
`;
