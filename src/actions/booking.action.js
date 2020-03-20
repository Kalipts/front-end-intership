import axios from 'axios';
import { ADD_BOOKING, DELETE_BOOKING, FETCH_BOOKING } from './types';

const apiUrl = 'http://localhost:5000/api/booking   ';

export const createBooking = ({ id, name, start, end }) => dispatch =>
  axios
    .post(`${apiUrl}`, { id, name, start, end })
    .then(response => {
      dispatch(createBookingSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });

export const createBookingSuccess = data => ({
  type: ADD_BOOKING,
  payload: {
    startDay: data.startDay,
    endDay: data.endDay,
    isDuration: false,
    details: data,
  },
});

export const deleteBookingSuccess = id => ({
  type: DELETE_BOOKING,
  payload: {
    id,
  },
});

export const deleteBooking = id => dispatch =>
  axios
    .delete(`${apiUrl}/${id}`)
    .then(response => {
      dispatch(deleteBookingSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });

export const fetchBookingsSuccess = bookings => ({
  type: FETCH_BOOKING,
  bookings,
});

export const fetchBookings = () => dispatch =>
  axios
    .get(`${apiUrl}`)
    .then(response => {
      dispatch(fetchBookingsSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
