import { AxiosResponse } from "axios";
import {ThunkDispatch } from "redux-thunk";
import { Action, ReducerState} from '../../src/components/glavnaya/interfaces'
import instance  from ".././/axios";
// import { validatePaymentDetails } from "../utils/helpers";

// export const setMainState = (payload: any): Action => ({
//   type: 'SET_MAIN_STATE',
// })

export const fetchProductList = () => async (dispatch: ThunkDispatch<ReducerState, any, Action>, getState: () => ReducerState): Promise<void> => {
  try {

    const { searchString } = getState()
    const result: AxiosResponse = await instance.get(`/ArendaCard`)

  } catch (e) {
    console.error(e)
  } finally {

  }
}


