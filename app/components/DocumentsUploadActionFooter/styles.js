import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 62;
  align-items: center;
  text-align: right;

  @media screen and (max-width: 690px) {
    display: block;
    text-align: right;
  }
`;

export const StyledLabel = styled.p`
  padding-right: 24px;
  margin: 0;
  margin-left: auto;

  @media screen and (max-width: 320px) {
    margin: 0;
    font-size: 3.5vw;
  }

  @media screen and (max-width: 690px) {
    padding-right: 0;
  }
`;

export const FilledButton = styled(Button)`
  box-shadow: none;
  font-family: ObjektivMk2;
  font-weight: 500;
  text-align: center;
  color: rgba(34, 0, 14, 0.32);
  width: 302;
  height: 43;
  border-radius: 8;
  background-color: #d3cccf;

  @media screen and (max-width: 690px) {
    flex: 1;
    margin-top: 5;
  }
  ,
  @media screen and (max-width: 320px) {
    width: auto;
    font-size: 4vw;
  }

  ,
  &:hover {
    background-color: #d3cccf;
    box-shadow: none;
  }
`;
