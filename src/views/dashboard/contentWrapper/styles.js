import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  @media (max-width: 768px) {
    width: calc(100% - 65px);
    margin-left: 65px;
  }
`;