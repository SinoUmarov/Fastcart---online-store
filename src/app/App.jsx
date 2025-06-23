import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { Provider } from 'react-redux'
import { store } from '../entities/store/store'
import { BrowserRouter, Route, Routes } from 'react-router'
import { About, Account, Cart, Contacts, Error, Home, Info, Layout, Login, Products, SignUp, Wishlist } from '../pages/lazy/lazy'
import Loading from '../shared/components/loading/loading'
import Checkout from '../pages/checkout/checkout'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Suspense fallback={<Loading/>}>
                <Layout/>
            </Suspense>} >
                <Route index element={<Home/>} />
                <Route path='/contact' element={<Contacts/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/signUp' element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/error' element={<Error/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/wishlist' element={<Wishlist/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/info/:id' element={<Info/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </Provider>,
)
