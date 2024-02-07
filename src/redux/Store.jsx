import {createStore} from 'redux';
import { reducerFunction } from './Reducer';

export const Store=createStore(reducerFunction)