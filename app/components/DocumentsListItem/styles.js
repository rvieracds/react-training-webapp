import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 630px) {
    display: block;
    text-align: center;
  }
`;

export const RightWrapper = styled.div`
  @media screen and (max-width: 630px) {
    margin-top: 10px;
    text-align: center;
  }

  @media screen and (max-width: 690px) {
    text-align: center;
  }
`;

export const LeftLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftTitleLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #22000e;
  margin-left: 24px;

  @media screen and (max-width: 320px) {
    font-size: 5.5vw;
  }

  @media screen and (max-width: 630px) {
    margin-left: 0px;
    padding-top: 5px;
  }
`;

export const LeftSubtitleLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #22000e;
  margin-left: 24px;

  @media screen and (max-width: 320px) {
    font-size: 4.5vw;
  }

  @media screen and (max-width: 630px) {
    margin-left: 0px;
    padding-top: 5px;
  }
`;

export const Icon = styled.img`
  width: 41px;
  height: 48px;
  object-fit: contain;
`;

export const StyledInputFile = styled.input`
  display: none;
`;

export const UnfilledButton = styled(Button)`
  background-color: #fff;
  box-shadow: none;
  color: #ff086e;
  &:hover {
    background-color: #fff;
    box-shadow: none;
  }

  @media screen and (max-width: 320px) {
    font-size: 4vw;
  }
`;

export const FilledButton = styled(Button)`
  width: 93px;
  height: 42px;
  border-radius: 4px;
  background-color: #ff086e;
  box-shadow: none;
  padding: 7px 14px;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #ff086e;
    box-shadow: none;
  }

  @media screen and (max-width: 320px) {
    font-size: 4vw;
  }
`;
