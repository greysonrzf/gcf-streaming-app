import React, { Component } from 'react';
import { StatusBar, View, ActivityIndicator, Platform } from 'react-native';
import firebase from 'react-native-firebase';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '../../store/ducks/podcasts';

import Header from '../../components/Header';

import {
  Container,
  Error,
  ErrorText,
  ErrorSubText,
  PodcastList,
  PageBar,
  PageTitle,
  PageSubtitle,
  Podcast,
  Cover,
  Info,
  Title,
  Artist,
  Count,
  DotsIcon,
  List,
} from './styles';

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  handlePodcastPress = podcast => {
    const { navigation } = this.props;
    navigation.navigate('Podcasts', { podcast });
  };

  renderError = () => {
    return (
      <Error>
        <ErrorText>Erro de conexão.</ErrorText>
        <ErrorSubText>
          Verifique se você está conectado à internet.
        </ErrorSubText>
        <ErrorSubText>
          Feche o app, limpe a memória e abra-o novamente.
        </ErrorSubText>
      </Error>
    );
  };

  render() {
    const { podcasts } = this.props;
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();

    const unitId = 'ca-app-pub-2136115240763177/5533303564';
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Header />

        <PodcastList
          ListHeaderComponent={() => (
            <>
              <View>{podcasts.error && this.renderError()}</View>
            </>
          )}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <>
              <Podcast
                color={podcast.color}
                onPress={() => this.handlePodcastPress(podcast)}
              >
                <Cover source={{ uri: podcast.cover }} />
                <Info>
                  <Title>{podcast.title}</Title>
                  <Artist type={podcast.artist}>{podcast.artist}</Artist>
                  <Count>{podcast.tracks.length} episódios</Count>
                </Info>
                <DotsIcon name="angle-right" />
              </Podcast>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                  borderRadius: 40,
                }}
              >
                <Banner
                  unitId={unitId}
                  size={'SMART_BANNER'}
                  request={request.build()}
                  onAdLoaded={() => {
                    console.log('Advert loaded');
                  }}
                />
              </View>
            </>
          )}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
