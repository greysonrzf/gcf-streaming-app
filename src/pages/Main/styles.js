import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import IconLoading from 'react-native-vector-icons/Fontisto';
import IconDots from 'react-native-vector-icons/FontAwesome';

export const Container = styled(LinearGradient).attrs({
  colors: ['#000', '#000'],
})`
  flex: 1;
`;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})``;

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
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
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

export const Error = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  margin: 10px 10px 0;
  background: #ff7575;
  border-radius: 25px;
`;

export const ErrorText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

export const ErrorSubText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  width: 100%;
  text-align: left;
`;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  margin: 10px 10px 0;
  background: #191919;
  border-radius: 25px;
  opacity: 0.9;
`;

export const Cover = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 19px;
`;

export const Info = styled.View`
  margin-left: 10px;
  width: 180px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Artist = styled.Text`
  color: #555;
  font-size: 16px;
  margin-top: 3px;
`;

export const Count = styled.Text`
  color: #888;
  font-size: 14px;
  margin-top: 3px;
`;

export const DotsIcon = styled(IconDots).attrs({
  color: '#ccc',
  size: 26,
})``;
