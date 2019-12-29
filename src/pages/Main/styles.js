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
  width: 85%;
  padding: 13px 20px 12px 25px;
  margin: 10px 10px 0 10%;
  background: #191919;
  border-radius: 10px;
  opacity: 1;
  /* border-style: solid;
  border-left-color: #00ff99;
  border-left-width: 8px; */
`;

export const Cover = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  margin-left: -18%;
  /* border-top-left-radius: 25px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 10px; */
`;

export const Info = styled.View`
  margin-left: 10px;
  width: 80%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const Artist = styled.Text`
  color: #555;
  font-size: 15px;
  margin-top: 3px;
`;

export const Count = styled.Text`
  color: #888;
  font-size: 13px;
  margin-top: 3px;
`;

export const DotsIcon = styled(IconDots).attrs({
  color: '#333',
  size: 26,
})``;
