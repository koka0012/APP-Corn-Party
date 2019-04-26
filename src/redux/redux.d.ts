import { NavigationAction } from 'react-navigation';
import { ActionType, StateType } from 'typesafe-actions';

import * as LoginActions from '../screens/Login/redux/actions';
import * as RegisterActions from '../screens/Registro/redux/actions';

type RootActions =
  | NavigationAction
  | ActionType<typeof RegisterActions>
  | ActionType<typeof LoginActions>;

export type Store = StateType<typeof import("./store").default>;
export type RootAction = RootActions;
export type RootState = StateType<typeof import("./reducers").default>;

declare module "typesafe-actions" {
  export type RootAction = ActionType<RootActions>;
}
