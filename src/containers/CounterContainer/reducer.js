import { INCREMENT, DECREMENT } from './constant';

export const initialState = {
  counterValue: 0,
};

export default function counterContainerReducer (state = initialState, action ) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counterValue: state.counterValue === 0 ? 0 : state.counterValue - 1
      }
    default:
      return state;
  }
}