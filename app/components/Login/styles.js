import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const ListTitleLabel = styled.p`
  font-family: ObjektivMk2;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #22000e;
  margin-bottom: 24px;
  text-align: left;

  @media screen and (max-width: 470px) {
    font-size: 6vw;
  }
`;
