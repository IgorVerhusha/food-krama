const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const createArrFromObj = (obj) => {
  return [].concat.apply([], Object.values(obj));
};

const getSum = (arr) => {
  return arr.reduce((sum, obj) => sum + obj.price, 0);
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "PUT_ITEM":
      let id = action.payload.id + "_" + action.payload.size;
      const newItems = {
        ...state.items,
        [id]: !state.items[id]
          ? [action.payload]
          : [...state.items[id], action.payload],
      };

      const arr = createArrFromObj(newItems);

      return {
        ...state,
        items: {
          ...state.items,

          [id]: !state.items[id]
            ? [action.payload]
            : [...state.items[id], action.payload],
        },
        totalCount: arr.length,
        totalPrice: getSum(arr),
      };
    case "DELETE_ITEMS_GROUP":
      const newItemsForDel = {
        ...state.items,
      };

      delete newItemsForDel[action.payload];
      const arrAfterDel = createArrFromObj(newItemsForDel);
      return {
        ...state,
        items: newItemsForDel,
        totalCount: arrAfterDel.length,
        totalPrice: getSum(arrAfterDel),
      };
    case "INC_ITEM":
      const newItemsAftInc = {
        ...state.items,
      };
      newItemsAftInc[action.payload].push(newItemsAftInc[action.payload][0]);
      const arrAfterInc = createArrFromObj(newItemsAftInc);
      return {
        ...state,
        items: newItemsAftInc,
        totalCount: arrAfterInc.length,
        totalPrice: getSum(arrAfterInc),
      };
    case "DEC_ITEM":
      const oldItems = state.items[action.payload];
      const newObjItems =
        oldItems.length > 1 ? oldItems.slice(0, oldItems.length - 1) : oldItems;

      const newPizzaAftDec = {
        ...state.items,
        [action.payload]: newObjItems,
      };

      const arrAfterDec = createArrFromObj(newPizzaAftDec);
      return {
        ...state,
        items: newPizzaAftDec,
        totalCount: arrAfterDec.length,
        totalPrice: getSum(arrAfterDec),
      };
    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    default:
      return state;
  }
};

export const putItem = (obj) => ({
  type: "PUT_ITEM",
  payload: obj,
});

export const deleteItemsGroup = (id) => ({
  type: "DELETE_ITEMS_GROUP",
  payload: id,
});

export const incrementItemAC = (id) => ({
  type: "INC_ITEM",
  payload: id,
});

export const decrementItemAC = (id) => ({
  type: "DEC_ITEM",
  payload: id,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});
