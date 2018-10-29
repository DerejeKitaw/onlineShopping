const categoryReducerDefaultState = [];
export default (state = categoryReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.category
      ];
    case 'REMOVE_CATEGORY':
      return state.filter(({ id }) => id !== action.id);
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    // case 'EDIT_CATEGORY':
    //   return state.map((category) => {
    //     if (category.id === action.id) {
    //       return {
    //         ...category,
    //         ...action.updates
    //       };
    //     } else {
    //       return category;
    //     };
    //   });
    default:
      return state;
  }
};