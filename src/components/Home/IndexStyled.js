import styled from 'react-emotion';

const IndexStyled = styled.div`
  margin: 80px 40px;
  font-size: 1.4rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  line-height: 1.5;
  p {
    color: ${props => props.theme.color};
  }
  h2 {
    color: purple;
    font-size: 2.4rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  #name {
    color: #e53935;
    font-weight: 800;
  }
`;

export default IndexStyled;
