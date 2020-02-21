import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.div`
  @media screen and (min-width: 320px) {
    display: flex !important;
  }
`;

export const HeaderTitleIcon = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
`;

export const HeaderTitleLabel = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #22000e;
  margin-top: 38px;

  @media screen and (max-width: 780px) {
    font-size: 4.5vw;
  }

  @media screen and (max-width: 470px) {
    font-size: 7vw;
  }
`;

export const HeaderSubtitleLabel = styled.div`
  font-family: Roboto;
  font-size: 24px;
  color: #22000e;
  margin-top: 8ox;
  margin-bottom: 38px;

  @media screen and (max-width: 600px) {
    margin-bottom: 18px;
  }

  @media screen and (max-width: 470px) {
    font-size: 5vw;
    margin-top: 10px;
    margin-bottom: 18px;
  }
`;

export const FooterLabel = styled.div`
  opacity: 0.54;
  font-family: Roboto;
  font-size: 16px;
  color: #22000e;
  margin-top: 60px;

  @media screen and (max-width: 320px) {
    font-size: 4.5vw;
  }
`;
