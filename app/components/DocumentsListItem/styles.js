import styled from 'styled-components';
// import { fonts, colors } from 'assets/css/style-utils';

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
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const ButtonWrapper = styled.div`
  width: 93px;
  height: 42px;
  border-radius: 4px;
  background-color: #ff086e;
`;

export const IconWrapper = styled.div`
  width: 41px;
  height: 48px;
  object-fit: contain;
`;

export const UnfilledButton = styled.div`
  
`;

export const FilledButton = styled.button`
  background-color: #ff086e;
  box-shadow: none;

  font-size: 16;
  color: #fff;
  font-weight: bold;

  '& :hover': {
    background-color: #ff086e;
    box-shadow: none;
  };
`;


// export const RemoveButton = styled.img`
//   cursor: pointer;
//   margin: 0 12px 0 24px;
// `;

// export const ExpiresLabel = styled.label`
//   font-family: ${fonts.roboto};
//   font-size: 16px;
//   font-weight: 300;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: ${colors.black};
// `;

// export const ExpiresValue = ExpiresLabel.extend`
//   font-weight: 400;
//   margin-left: 8px;
// `;

// export const CardInfo = styled.label`
//   flex-grow: 1;
//   opacity: 0.87;
//   font-family: ${fonts.roboto};
//   font-size: 16px;
//   font-weight: 400;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   color: ${colors.black};
// `;
