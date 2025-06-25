import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode"

let token = localStorage.getItem("Token")


const API = import.meta.env.VITE_API_URL

export const getProducts = createAsyncThunk(
  "products/get",
  async (queryString, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/Product/get-products?${queryString}`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const addToCart = createAsyncThunk("cart/addToCart", async (id, { dispatch }) => {
    try {
        await axios.post(`${API}/Cart/add-product-to-cart?id=${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        dispatch(getAddproduct())
    } catch (error) {
        console.error(error);
    }
})

export const getAddproduct = createAsyncThunk('counter/getAddproduct', async () => {
    try {
        let { data } = await axios.get(`${API}/Cart/get-products-from-cart`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            }
        )
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const delProductCart = createAsyncThunk('cart/delProduct', async (id, { dispatch }) => {
    try {
        await axios.delete(`${API}/Cart/delete-product-from-cart?id=${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        dispatch(getAddproduct())
    } catch (error) {
        console.error(error);
    }
})

export const clearProductCart = createAsyncThunk('cart/clearProduct', async (__DO_NOT_USE__ActionTypes, { dispatch }) => {
    try {
        let { data } = await axios.delete(`${API}/Cart/clear-cart`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        dispatch(getAddproduct())
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const increaseProductCart = createAsyncThunk('cart/increaseProduct', async (id, { dispatch }) => {
    try {
        await axios.put(`${API}/Cart/increase-product-in-cart?id=${id}`, {}, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        dispatch(getAddproduct())
    } catch (error) {
        console.error(error);
    }
})

export const reduceProductCart = createAsyncThunk('cart/reduceProduct', async (id, { dispatch }) => {
    try {
        await axios.put(`${API}/Cart/reduce-product-in-cart?id=${id}`, {}, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        dispatch(getAddproduct())
    } catch (error) {
        console.error(error);
    }
})

export const cretaeAccount = createAsyncThunk('cretaeAccount/signUp', async (user) => {
    try {
        await axios.post(`${API}/Account/register`, user)
    } catch (error) {
        console.error(error)
    }
})

export const loginToAccount = createAsyncThunk("cretaeAccount/login", async (user) => {
    try {
        let { data } = await axios.post(`${API}/Account/login`, user)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const userInfo = createAsyncThunk("user/getUserInfo", async () => {
    let decode = jwtDecode(token)
    try {
        let { data } = await axios.get(`${API}/UserProfile/get-user-profile-by-id?id=${decode.sid}`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const getById = createAsyncThunk("products/getById", async (id) => {
    try {
        let { data } = await axios.get(`${API}/Product/get-product-by-id?id=${id}`)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const getCategories = createAsyncThunk("products/getCategories", async () => {
    try {
        let { data } = await axios.get(`${API}/Category/get-categories`)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const getBrand = createAsyncThunk("products/getBrands", async () => {
    try {
        let { data } = await axios.get(`${API}/Brand/get-brands`)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const editUserProfile = createAsyncThunk("products/editUserProfile", async (formData, { dispatch }) => {
    try {
        await axios.put(`${API}/UserProfile/update-user-profile`, formData , {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        dispatch(userInfo())
    } catch (error) {
        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Headers:", error.response.headers);
            console.log("Body:", error.response.data);
        } else {
            console.error(error);
        }
    }
})


export const productsData = createSlice({
    name: 'products',
    initialState: {
        products: [],
        modal: false,
        infoUser: null,
        infoById: {},
        productsCart: [],
        totalPrice: "",
        totalProducts: "",
        checkout: "",
        wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
        categories: [],
        brands: [],
        min: "",
        max: "",
        selectedBrand: "",
        selectedCategory: ""
    },
    reducers: {
        openModal: (state) => {
            state.modal = !state.modal
        },
        closeModal: (state) => {
            state.checkout = ""
        },
        addToWishlist: (state, action) => {
            let isExist = state.wishlist.find((el) => el.id === action.payload.id)
            if (isExist) {
                state.wishlist = state.wishlist.filter((el) => el.id !== action.payload.id)
            } else {
                state.wishlist.push(action.payload)
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
        },
        changePrice: (state, actions) => {
            state.min = actions.payload.min
            state.max = actions.payload.max
        },
        changeBrandId: (state, actions) => {
            state.selectedBrand = actions.payload
        },
        changeCategory: (state, actions) => {
            state.selectedCategory = actions.payload
        },
        changeSearch: (state, actions) => {
            state.searchName = actions.payload
        },
        logOut: (state) => {
            localStorage.removeItem("Token")
            state.infoUser = null
            state.productsCart = []
            state.totalPrice = 0
            state.totalProducts = 0
            state.checkout = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.products = action.payload;
        } else if (Array.isArray(action.payload.products)) {
          state.products = action.payload.products;
        } else {
          state.products = [];
        }
      })
        builder.addCase(loginToAccount.fulfilled, (state, actions) => {
            localStorage.setItem("Token", actions.payload)
        })
        builder.addCase(userInfo.fulfilled, (state, actions) => {
            state.infoUser = actions.payload
        })
        builder.addCase(getById.fulfilled, (state, actions) => {
            state.infoById = actions.payload
        })
        builder.addCase(getAddproduct.fulfilled, (state, actions) => {
            state.productsCart = actions.payload[0].productsInCart,
                state.totalPrice = actions.payload[0].totalPrice,
                state.totalProducts = actions.payload[0].totalProducts
        })
        builder.addCase(clearProductCart.fulfilled, (state, action) => {
            state.checkout = action.payload;
        });

        builder.addCase(clearProductCart.rejected, (state) => {
            state.checkout = "Failed";
        });
        builder.addCase(getCategories.fulfilled, (state, actions) => {
            state.categories = actions.payload
        })
        builder.addCase(getBrand.fulfilled, (state, actions) => {
            state.brands = actions.payload
        })
       
    }
})

export const { logOut, openModal, closeModal, addToWishlist, changePrice, filterFunc, changeBrandId, changeCategory, changeSearch } = productsData.actions
export default productsData.reducer