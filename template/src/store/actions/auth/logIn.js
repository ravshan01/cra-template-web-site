import {LOG_IN} from '../../action-types';


export default function logInAction(user){
  return {

    type : LOG_IN,
    user : user

  }
}