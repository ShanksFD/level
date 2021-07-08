import {
   PRODUCT_LIST_FAIL,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,

   FEATURED_PRODUCT_LIST_FAIL,
   FEATURED_PRODUCT_LIST_REQUEST,
   FEATURED_PRODUCT_LIST_SUCCESS,

   PRODUCT_DETAILS_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
   try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await axios.get("/api/products/");

      dispatch({
         type: PRODUCT_LIST_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: PRODUCT_LIST_FAIL,
         payload:
            error.response && error.response.data.detail
               ? error.response.data.detail
               : error.message,
      });
   }
};

export const listProductDetails = (id) => async function (dispatch) {
      try {
         dispatch({ type: PRODUCT_DETAILS_REQUEST });

         const { data } = await axios.get(`/api/products/id/${id}`);

         dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
         });
      }
   };

   export const listFeaturedProduct = (category) => async (dispatch) => {
      try {
         dispatch({ type: FEATURED_PRODUCT_LIST_REQUEST });
   
         const { data } = await axios.get(`/api/products/featuredProduct/${category}`);
            dispatch({
            type: FEATURED_PRODUCT_LIST_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: FEATURED_PRODUCT_LIST_FAIL,
            payload:
               error.response && error.response.data.detail
                  ? error.response.data.detail
                  : error.message,
         });
      }
   };