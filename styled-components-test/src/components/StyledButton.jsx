import styled,{css} from 'styled-components';

const StyledButton = styled.button`
    background:transparent;
    border :2px solid palevioletred;
    color : palevioletred;
    margin : 0.1em;
    padding : 0.25em 1em;
    font-size : 20px;
    
    ${props => props.primary && css`
        background: coral;
        color: white;
    `}
`;

export default StyledButton;