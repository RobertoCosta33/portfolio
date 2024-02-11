import styled, { css } from "styled-components";

export const MainContentWrapper = styled.section`
  ${({ theme }) => css`
    flex: 9;

    padding: 4rem;
    background-color: ${theme.palette.background.default};
    overflow-y: auto;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h1,
    h2,
    p {
      color: ${theme.palette.text.primary};
    }
  `}
`;
