import {combineReducers} from 'redux';
import {categoria} from './categories';
import {project} from './project';
import {root} from './root';
import signin from './signin';

export default combineReducers({
    categoria,project,root,signin
});
