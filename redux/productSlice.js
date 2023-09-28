import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    productName: "Chicken Breast Fillets",
    brand: "Hormel Black",
    price: "$60",
    quantity: "0",
    total: "0",
    status: "",
  },
  {
    id: 2,
    productName: "Chicken Breast Fillets",
    brand: "Hormel Black",
    price: "$60",
    quantity: "2",
    total: "0",
    status: "",
  },
  {
    id: 3,
    productName: "Chicken Breast Fillets",
    brand: "Hormel Black",
    price: "$60",
    quantity: "5",
    total: "0",
    status: "",
  },
  {
    id: 4,
    productName: "Chicken Breast Fillets",
    brand: "Hormel Black",
    price: "$60",
    quantity: "10",
    total: "0",
    status: "",
  },
  {
    id: 5,
    productName: "Chicken Breast Fillets",
    brand: "Hormel Black",
    price: "$60",
    quantity: "2",
    total: "0",
    status: "",
  },
  {
    id: 6,
    productName: "Chicken Breast Fillets",
    brand: "Hormel Black",
    price: "$60",
    quantity: "12",
    total: "0",
    status: "",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // reducer to update the sataus of the product whether approve or reject
    approveProduct(state, action) {
      const { id } = action.payload;
      state.find((product) => product.id === id).status = 'Approved';
    },
    rejectProduct(state, action) {
      const { id, status } = action.payload;
      // we will get two status from the action payload either 'rejected' or 'rejected-urgent'
      state.find(product => product.id === id).status = status;
    },
  },
});

export const { approveProduct, rejectProduct } = productSlice.actions;
export default productSlice.reducer;
