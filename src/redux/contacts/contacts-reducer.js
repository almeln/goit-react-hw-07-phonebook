import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contacts-actions';

const itemsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = createReducer(itemsInitialState, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// Без использования React Toolkit

// import { combineReducers } from 'redux';
// import { ADD_CONTACT, DELETE_CONTACT, FILTER } from './contacts-types';
// // import {actions} from './contacts-actions';

// const itemsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const itemsReducer = (state = itemsInitialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [payload, ...state];

//     case DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
