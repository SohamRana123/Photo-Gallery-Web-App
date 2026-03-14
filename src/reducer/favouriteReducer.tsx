interface State {
  favourites: string[];
}
type Action = {
  type: "Toggle_favourite";
  payload: string;
};

export const initialState: State = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

export function favouriteReducer(state: State, action: Action): State {
  switch (action.type) {
    case "Toggle_favourite": {
      const exists = state.favourites.includes(action.payload);

      const updated = exists
        ? state.favourites.filter((id) => id !== action.payload)
        : [...state.favourites, action.payload];

      localStorage.setItem("favourites", JSON.stringify(updated));
      return { favourites: updated };
    }
    default:
      return state;
  }
}
