import styled, { css } from "styled-components";

export const NavbarWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: end;
    flex: 9;

    border: 1px solid #000;
    background-color: ${theme.palette.background.default};
    max-height: 9rem;
    padding: 2rem;
  `}
`;
