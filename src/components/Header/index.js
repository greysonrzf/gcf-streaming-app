import React, { Component } from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PageBar, PageTitle } from './styles';

class Header extends Component {
  render() {
    const { podcasts } = this.props;
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
        <PageBar>
          <PageTitle>Gracefy</PageTitle>
          {podcasts.loading && <ActivityIndicator size="small" color="#fff" />}
        </PageBar>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

export default connect(mapStateToProps)(Header);
