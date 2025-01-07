import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: null,
  error: null,
  direction: "ltr",
  cartItems: [],
  FavoirteProducts: [],
  CompareProducts: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },

    SetDirection: (state, action) => {
      state.direction = action.payload;
    },

    addToMyFavorites: (state, action) => {
      const IstheProductInFav = state.FavoirteProducts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (IstheProductInFav !== -1) {
        state.FavoirteProducts[IstheProductInFav].quantity += 1;
      } else {
        state.FavoirteProducts.push(action.payload);
      }


    },

    RemoveItemFromFav: (state, action) => {
      const NewArray = state.FavoirteProducts.filter(
        (item) => item._id !== action.payload._id
      );
      state.FavoirteProducts = NewArray;
    },

    addToBasket: (state, action) => {
      const ProductWithQuantity = { ...action.payload, quantity: 1 };
      const IstheProductInCart = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (IstheProductInCart !== -1) {
        state.cartItems[IstheProductInCart].quantity += 1;
      } else {
        state.cartItems.push(ProductWithQuantity);
      }
    },

    AddToCompare: (state, action) => {

      const IstheProductInCompare = state.CompareProducts.findIndex(p => p._id === action.payload._id)
      if (IstheProductInCompare !== -1) {
        state.CompareProducts[IstheProductInCompare].quantity += 1
      } else {
        const ProductWithQuantity = { ...action.payload, quantity: 1 };
        state.CompareProducts.push(ProductWithQuantity)
        if (state.CompareProducts.length > 3) {
          state.CompareProducts.shift()
        }
      }
    },

    RemoveFromCompare: (state, action) => {
      console.log(action.payload)
      const NewArray = state.CompareProducts.filter((item) => item._id !== action.payload.id);
      state.CompareProducts = NewArray;
    },
    DecrementItemsToRemoval: (state, action) => {
      const decreasedProduct = state.cartItems.find((item) => {
        return item._id === action.payload._id;
      });
      decreasedProduct.quantity -= 1;

      if (decreasedProduct.quantity === 0) {
        const NewArray = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = NewArray;
      }
    },

    RemoveItemFromCart: (state, action) => {
      const NewArray = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = NewArray;
    },
  },
});

export const {
  signInStart,
  signInFailed,
  signInSuccess,
  signOut,
  addToMyFavorites,
  RemoveItemFromFav,
  addToBasket,
  DecrementItemsToRemoval,
  SetDirection,
  AddToCompare,
  RemoveFromCompare,
  RemoveItemFromCart,
} = userSlice.actions;

export default userSlice.reducer;
