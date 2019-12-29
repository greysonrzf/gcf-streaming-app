import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import IconLoading from 'react-native-vector-icons/Fontisto';
import IconDots from 'react-native-vector-icons/FontAwesome';

export const PageBar = styled(LinearGradient).attrs({
  colors: ['#00241e', '#097967', '#00ffaf'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 30px 20px 10px;
  margin-bottom: 0px;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  color: #fff;
`;

export const PageSubtitle = styled.Text`
  font-size: 22px;
  font-weight: normal;
  color: #000;
`;
