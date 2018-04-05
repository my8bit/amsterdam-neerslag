import {colors} from 'config';
import {getRainingTicks} from '../libs/tick.js';

const savedColor = colors[1];

const getColor = color => {
  window.localStorage.setItem('color', color);
  return {color};
};

export const representationReducer = (state = {color: savedColor}, action) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return getColor(action.color);
    default:
      return state;
  }
};

export const userReducer = (state = {name: '', photo: ''}, action) => {
  switch (action.type) {
    case 'AUTHORIZED':
      return Object.assign({}, state, {
        name: action.name,
        photo: action.photo
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        name: ''
      });
    case 'LOGIN':
      return Object.assign({}, state, {
        name: action.name,
        photo: action.photo
      });
    case 'UNAUTHORIZED':
      return state;
    default:
      return state;
  }
};

export const loadReducer = (state = {time1: [], preceptoin1: [], data: []}, action) => {
  switch (action.type) {
    case 'LOAD':
      return Object.assign({}, state, {
        data: action.data,
        time1: ['x'].concat(getRainingTicks(action.data)),
        preceptoin1: ['time'].concat(action.data.map(item => item.precipitation))
      });
    default:
      return state;
  }
};

export const tooltipReducer = (state = {value: 0, time: ''}, action) => {
  switch (action.type) {
    case 'CHANGE_TIP':
      return Object.assign({}, state, {
        value: action.value,
        time: action.time // `${action.time}:${action.time}`
      });
    default:
      return state;
  }
};

