import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 70,
    alignSelf: 'stretch',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,

    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 25,
  },
});

export default styles;

// export const Container = styled.View`
//   background: #fff;
//   height: ${74 + getBottomSpace()}px;
//   width: 100%;

//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px ${getBottomSpace()}px;
// `;

export const CoverBackground = styled.Image.attrs({
  // blurRadius: 9,
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #33c1ff;
  margin-top: 3px;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, left: 5, right: 5, bottom: 5 },
})`
  margin-left: 10px;
`;

export const ControlIcon = styled(Icon).attrs({
  color: '#33c1ff',
  size: 32,
})``;
