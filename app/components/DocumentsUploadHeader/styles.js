import styled from 'styled-components';

// margin-top: 62;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  background-color: red;

  @media screen and (max-width: 690px) {
    display: block;
    text-align: right;
  }
`;

export const HeaderTitleLabel = styled.p`
  font-family: ObjektivMk2-X;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0;
  letter-spacing: normal;
  color: #22000e;
  text-align: left;

  @media screen and (max-width: 780px) {
    font-size: 4.5vw;
  }

  @media screen and (max-width: 470px) {
    font-size: 7vw;
  }
`;

export const HeaderTitleIcon = styled.img``;
