import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';
import { load } from './podcasts';
import { PlayerTypes } from '../ducks/player';
import { init, setPodcast, play, pause, prev, next, reset } from './player';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.RESET, reset),
  ]);
}
