import {
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL,

   FEATURED_PRODUCT_FAIL,
   FEATURED_PRODUCT_REQUEST,
   FEATURED_PRODUCT_SUCCESS,

   BESTSELLERS_PRODUCTS_LIST_FAIL,
   BESTSELLERS_PRODUCTS_LIST_REQUEST,
   BESTSELLERS_PRODUCTS_LIST_SUCCESS,

   PRODUCT_DETAILS_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const productListCategoryReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case PRODUCT_LIST_REQUEST:
         return { loading: true, products: [] }
         
      case PRODUCT_LIST_SUCCESS:
         return { loading: false, products: action.payload }

      case PRODUCT_LIST_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}

export const featuredProductReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case FEATURED_PRODUCT_REQUEST:
         return { loading: true, ...state }
         
      case FEATURED_PRODUCT_SUCCESS:
         return { loading: false, product: action.payload }

      case FEATURED_PRODUCT_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}


export const productDetailsReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
         return { loading: true, ...state }

      case PRODUCT_DETAILS_SUCCESS:
         return { loading: false, product: action.payload }

      case PRODUCT_DETAILS_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}

export const bestsellersProductsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case BESTSELLERS_PRODUCTS_LIST_REQUEST:
         return { loading: true, products: [] }
         
      case BESTSELLERS_PRODUCTS_LIST_SUCCESS:
         return { loading: false, products: action.payload }

      case BESTSELLERS_PRODUCTS_LIST_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}