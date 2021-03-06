import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import IconPlay from 'react-native-vector-icons/Entypo';

export const Container = styled(LinearGradient).attrs({
  colors: ['#000', '#000'],
})`
  flex: 1;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})``;

export const PodcastDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const BackgroundGradient = styled.View`
  position: absolute;
  background: #000;
  width: 100%;
  height: ${320 + getStatusBarHeight()}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${320 + getStatusBarHeight()}px;
  opacity: 0.1;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, left: 5, right: 5, bottom: 5 },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 30}px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

export const PodcastTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const Count = styled.Text`
  color: #33c1ff;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 55px;
  width: 55px;
  background: #33c1ff;
  margin: -6px 0 0 75%;
  border-radius: 50px;
  elevation: 10;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

export const PlayButtonIcon = styled(IconPlay).attrs({
  color: '#000',
  size: 28,
})`
  margin-left: 3px;
`;

export const Episode = styled.TouchableOpacity`
  margin: 10px 5px 0;
  padding: 15px 20px;
  background: #191919;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#33c1ff' : '#fff')};
`;

export const Author = styled.Text`
  color: #777;
  font-size: 12px;
  margin-top: 3px;
`;
