import styled, { css } from "styled-components";

export const Menu = styled.ul`
  ${({ theme }) => css`
    li {
      color: ${theme.palette.text.primary};
      padding: "0.8rem";
    }

    h6 {
      color: ${theme.palette.text.primary};
    }
  `}
`;
