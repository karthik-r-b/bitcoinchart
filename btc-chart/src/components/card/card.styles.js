import styled,{css} from 'styled-components';

export const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:30px;
    margin-bottom:30px;
`;

export const CardContentContainer = styled.div`
    width:300px;
    border:2px solid black;
    text-align:center;
`;

const paraCss = css`
    font-size:1.2em;
    font-weight:bold;
`;
export const CryptoTitleContainer = styled.p`
    ${paraCss}
`

export const PriceContainer = styled.p`
    ${paraCss}
    color:#008dc9
`;

