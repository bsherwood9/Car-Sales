export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";
export const ADD_MONEY = "ADD_MONEY";

export const removeFeature = item => {
  return {
    type: REMOVE_FEATURE,
    payload: item
  };
};

export const addFeature = item => {
  return {
    type: ADD_FEATURE,
    payload: item
  };
};

export const addMoney = item => {
  return {
    type: ADD_MONEY,
    payload: item.price
  };
};
