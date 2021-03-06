import {
   SAVED_ADD_ITEM,
   SAVED_REMOVE_ITEM,
   SAVED_CLEAR_ITEMS,
   SAVED_UPDATE_ITEMS
} from "../constants/savedConstants";

export const savedReducer = (state = { savedItems: [] }, action) => {
   switch (action.type) {
      case SAVED_ADD_ITEM:
         const item = action.payload;
         const existItem = state.savedItems.find(
            (x) => x.product === item.product
         );

         if (existItem) {
            return {
               ...state,
               savedItems: state.savedItems.map((x) =>
                  x.product === existItem.product ? item : x
               ),
            };
         } else {
            return {
               ...state,
               savedItems: [...state.savedItems, item],
            };
         }
      case SAVED_REMOVE_ITEM:
         return {
            ...state,
            savedItems: state.savedItems.filter(
               (x) => x.product !== action.payload
            ),
         };
      case SAVED_UPDATE_ITEMS:
         return { ...state, savedItems: state.savedItems}
      case SAVED_CLEAR_ITEMS:
         return { ...state, savedItems: []}
      default:
         return state;
   }
};
