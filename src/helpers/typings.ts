import { Action} from 'redux'

export interface IAction<Type = any, Payload = any> extends  Action {
  type: Type,
  payload: Payload,
}

export function actionCreator<Action extends IAction>(type: Action['type'], defaultPayload?: Action['payload']) {
  return (payload: Action['payload'] = defaultPayload) => ({ type, payload } as Action);
}
