import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostReducer from './post_reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer  //wiring up reducer from redux-form into our application state
});

export default rootReducer;
