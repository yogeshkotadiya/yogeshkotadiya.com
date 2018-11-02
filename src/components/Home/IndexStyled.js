import styled from 'react-emotion';

const IndexStyled = styled.div`
  width: 680px;
  margin: 0 auto;
  font-size: 2.2rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  line-height: 1.5;
  p {
    color: ${props => props.theme.color};
  }
  h2 {
    color: purple;
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2rem;
  }
  p:nth-child(1) {
    text-align: center;
  }
  #name {
    text-align: center;
    display: block;
    color: #e53935;
    font-weight: 800;
    font-size: 3.4rem;
  }
`;

export default IndexStyled;
