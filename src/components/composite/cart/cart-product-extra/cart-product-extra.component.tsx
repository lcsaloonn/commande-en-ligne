import { useReducer } from "react";
import "./cart-product-extra.scss";

enum ACTIONS {
  OPEN = "open",
  CLOSE = "close",
}

interface IState {
  numberExtrasVisible: number;
  isOpenExtras: boolean;
}

interface Action {
  type: ACTIONS;
  payload?: number;
}

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case ACTIONS.OPEN: {
      return {
        isOpenExtras: (state.isOpenExtras = true),

        numberExtrasVisible: action.payload
          ? (state.numberExtrasVisible = action.payload)
          : state.numberExtrasVisible,
      };
    }
    case ACTIONS.CLOSE: {
      return {
        isOpenExtras: (state.isOpenExtras = false),
        numberExtrasVisible: 2,
      };
    }
    default:
      return state;
  }
}

export default function CartProductExtraComponent({
  extrasList,
}: {
  extrasList: string[];
}) {
  const [state, dispatch] = useReducer(reducer, {
    numberExtrasVisible: 2,
    isOpenExtras: false,
  });

  if (extrasList.length)
    return (
      <div className="cart-product-extras">
        {extrasList.map((element: string, count: number) => (
          <i
            className={count > state.numberExtrasVisible - 1 ? "hidden" : ""}
            key={count}
          >
            {element}
          </i>
        ))}
        <div className="cart-product-extras-actions">
          <div
            className={state.isOpenExtras ? "hidden" : ""}
            onClick={() =>
              dispatch({ type: ACTIONS.OPEN, payload: extrasList.length })
            }
          >
            +
          </div>
          <div
            className={!state.isOpenExtras ? "hidden" : ""}
            onClick={() => dispatch({ type: ACTIONS.CLOSE })}
          >
            -
          </div>
        </div>
      </div>
    );
  else return null;
}
