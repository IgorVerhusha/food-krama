import * as axios from "axios";

const initialState = {
  items: [],
  isLoaded: false,
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export const setItems = (items) => ({
  type: "SET_ITEMS",
  payload: items,
});

export const setLoading = (status) => ({
  type: "SET_LOADING",
  payload: status,
});

export const fetchItems = (activeCategory, activeSort) => (dispatch) => {

  dispatch(setLoading(false));
  if (activeCategory === null) {
    axios
      .get(`/items?&_sort=${activeSort.type}&_order=${activeSort.order}`)
      .then((resp) => dispatch(setItems(resp.data)));
  } else {
    axios
      .get(
        `/items?category=${activeCategory}&_sort=${activeSort.type}&_order=${activeSort.order}`
      )
      .then((resp) => dispatch(setItems(resp.data)));
  }
};
