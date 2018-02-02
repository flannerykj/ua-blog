import {combineReducers} from 'redux';
import initialStore from "../initialStore";
import { routerReducer} from 'react-router-redux';

const labelsReducer = (currentState, action) => {
  switch(action.type){
    case 'REQUEST_LABELS':
      return Object.assign({}, currentState, {
        items: [],
        dataReceived: false
      });
    case 'RECEIVE_LABELS':
      return Object.assign({}, currentState, {
        items: action.data,
        dataReceived: true
      });
     default:
      return currentState || initialStore.issues;
	}
};


const issuesReducer = (currentState, action) => {
  switch(action.type){

    case 'REQUEST_ISSUES':
      return Object.assign({}, currentState, {
        items: [],
        dataReceived: false
      });
    case 'RECEIVE_ISSUES':
      return Object.assign({}, currentState, {
        items: action.data,
        dataReceived: true
      });
    case 'ADD_ISSUE':
      return Object.assign({}, currentState, {
        items: ["new post added"]
      });
    case 'CLEAR_ISSUES':
      return Object.assign({},currentState,{
        items: []
      });
    default:
      return currentState || initialStore.issues;
	}
};


const rootReducer = combineReducers({
  issues: issuesReducer,
  labels: labelsReducer,
  router: routerReducer
});

export default rootReducer;

