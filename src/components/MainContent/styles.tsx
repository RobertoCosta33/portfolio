import styled, { css } from "styled-components";

export const MainContentWrapper = styled.section`
    ${({ theme }) => css`
        flex: 9;
        border: 1px solid #000;

        padding: 4rem;
        background-color: ${theme.palette.background.default};

        h1, h2 {
            color: ${theme.palette.text.primary};
        }
    `}
`
