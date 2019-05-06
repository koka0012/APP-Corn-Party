import { NavigationAction } from 'react-navigation';
import { ActionType, StateType } from 'typesafe-actions';

import * as BarracaInfoActions from '../screens/BarracaInfo/redux/actions';
import * as BarracaActions from '../screens/Barracas/redux/actions';
import * as LoginActions from '../screens/Login/redux/actions';
import * as PratosActions from '../screens/Pratos/redux/actions';
import * as RegisterActions from '../screens/Registro/redux/actions';
import * as UserActions from '../screens/Usuario/redux/actions';

type RootActions =
  | NavigationAction
  | ActionType<typeof RegisterActions>
  | ActionType<typeof LoginActions>
  | ActionType<typeof BarracaActions>
  | ActionType<typeof PratosActions>
  | ActionType<typeof BarracaInfoActions>
  | ActionType<typeof UserActions>;

export type Store = StateType<typeof import("./store").default>;
export type RootAction = RootActions;
export type RootState = StateType<typeof import("./reducers").default>;

declare module "typesafe-actions" {
  export type RootAction = ActionType<RootActions>;
}
