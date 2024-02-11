import styled, { css } from "styled-components";

export const NavbarWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    flex: 9;

    border-bottom: 1px solid ${theme.palette.text.primary};
    background-color: ${theme.palette.background.default};
    max-height: 4rem;
    padding: 2rem;

    h1,
    h2,
    p {
      color: ${theme.palette.text.primary};
    }
  `}
`;
