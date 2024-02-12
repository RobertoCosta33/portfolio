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

export const NavbarContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
      color: ${theme.palette.text.primary};
      width: 2.4rem;
      height: 2.4rem;

      cursor: pointer;
    }

    :hover {
      svg {
        color: ${theme.palette.primary.main};
        transition: color 0.2s ease-in-out;
      }
    }
  `}
`;
