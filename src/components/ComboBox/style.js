import styled from 'styled-components';
import arrow from '../../assets/arrow_down.svg'

export const Container = styled.select`
  width: 100%;
  height: 48px;

  border-radius: 8px;
  border: none;

  padding: 16px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  color: ${({theme}) => theme.COLORS.LIGHT_400};
  background: url(${arrow}) 96% / 24px no-repeat ${({theme}) => theme.COLORS.DARK_900};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  > option {
    height: 32px;
    padding: 5px;
  }

`;
