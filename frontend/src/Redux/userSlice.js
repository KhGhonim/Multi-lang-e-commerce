import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: null,
  error: null,
  FavoirteProducts: [],
  cartItems: [],
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
      state.FavoirteProducts = [];
      state.cartItems = [];
    },

    addToMyFavorites: (state, action) => {
      const ProductWithQuantity = { ...action.payload };
      const IstheProductInFav = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (IstheProductInFav === -1) {
        state.FavoirteProducts.push(ProductWithQuantity);
      }
    },
    addToBasket: (state, action) => {
      const ProductWithQuantity = { ...action.payload, quantity: 1 };
      const IstheProductInCart = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (IstheProductInCart !== -1) {
        state.cartItems[IstheProductInCart].quantity += 1;
      } else {
        state.cartItems.push(ProductWithQuantity);
      }
    },
    RemoveItem: (state, action) => {
      const decreasedProduct = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      decreasedProduct.quantity -= 1;

      if (decreasedProduct.quantity === 0) {
        const NewArray = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = NewArray;
      }
    },
  },
});

export const {
  signInStart,
  signInFailed,
  signInSuccess,
  signOut,
  addToMyFavorites,
  addToBasket,
  RemoveItem,
} = userSlice.actions;

export default userSlice.reducer;
