import {
  LOG_IN,
  LOG_OUT
} from './action-types';



/** Here you can create your reducer using combineReducer 
  or using your own approach for splitting reducers **/
export default function rootReducer(state, action){
  switch (action.type){


    case LOG_IN : {
      return {
        ...state,

        user : action.user
      }
    };

    case LOG_OUT : {
      return {
        ...state,

        user : false
      }
    };


    default: return state;
  }
}