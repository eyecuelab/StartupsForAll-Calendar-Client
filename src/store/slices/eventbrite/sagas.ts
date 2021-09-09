import { put, call, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setEventbrite, requestEventbriteEvent } from './newEventSlice';
import { makeRequest } from '../../utils/makeRequest';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:1323';

function* fetchEventbriteEvent(action: PayloadAction<{ id: string }>) {
  let endpoint = `events/event-brite/${action.payload.id}`
  const { success, data, error } = yield call(makeRequest, `${BASE_URL}/${endpoint}`, 'GET');

  if (success) {
    console.log('got eventbrite data. formatting... unformatted', data);
    yield put(setEventbrite(data));
  }
  if (error) {
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllEventbrite() {
  yield takeLatest(requestEventbriteEvent, fetchEventbriteEvent);
}
