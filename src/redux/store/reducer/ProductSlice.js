import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const ProductSlice = createSlice({

    name: 'products',
    initialState,

    reducers: {

        addProduct: (state, action) => {
            console.log("data from back in rreduxx =====>>", action.payload)
            // state.books.push(action.payload)
            const itemExist = state.products.findIndex((item) => item.title == action.payload.title)
            console.log('index is ====>>>>', itemExist)
            if (itemExist == -1) {
                state.products.push(action.payload)
                console.log("Products List in Redux is =====>>", state.products)
            }
            else {
                state.products[itemExist].quantity += 1;
            }

            console.log("index is", itemExist)

        },

        removeProduct: (state, action) => {

            const itemExist = state.products.findIndex((item) => item.title == action.payload.title)
            console.log('index is ====>>>>', itemExist)
            if (itemExist == -1) {
                state.products.push(action.payload)
                console.log("Products List in Redux is =====>>", state.products)
            }
            else {

                if (state.products[itemExist].quantity == 1) {

                    state.products.splice(itemExist, 1)
                }
                else {
                    state.products[itemExist].quantity -= 1;

                }

            }


        }

    }
})

export const { addProduct, removeProduct } = ProductSlice.actions
export default ProductSlice.reducer