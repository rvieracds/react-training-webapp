import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: solid 1px rgba(34, 0, 14, 0.12);
  background-color: #ffffff;

  @media screen and (max-width: 630px) {
    height: fit-content;
    display: block;
    padding-top: 24px;
    padding-bottom: 24px;
    justify-content: center;
    align-items: center;
  }
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
