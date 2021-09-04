import styled from "styled-components";


// attrs() 로 attribute를 받아 설정해 줄 수 있다.
const StyledA = styled.a.attrs(props => ({
    target: "_BLANK"
}))`
    color :${(props) => (props.color)}
`;

export default StyledA;