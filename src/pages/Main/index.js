import React, { Component } from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '../../store/ducks/podcasts';

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
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <PodcastList
          ListHeaderComponent={() => (
            <View>
              <PageBar>
                <PageTitle>Gracefy</PageTitle>
                {podcasts.loading && (
                  <ActivityIndicator size="small" color="#fff" />
                )}
              </PageBar>
              {podcasts.error && this.renderError()}
            </View>
          )}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Artist>{podcast.artist}</Artist>
                <Count>{podcast.tracks.length} episódios</Count>
              </Info>
              <DotsIcon name="angle-right" />
            </Podcast>
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
