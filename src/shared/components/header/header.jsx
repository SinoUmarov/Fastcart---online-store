import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  logOut,
  getAddproduct,
  openModal,
} from '../../../entities/reducerc/Products'
import logo from "../../imgs/Group 1116606595.png"
const API = import.meta.env.VITE_API_URL

const Header = () => {
  const [modal, setModal] = useState(false)
  const [accModal, setAccModal] = useState(false)
  const totalProducts = useSelector(store => store.products.totalProducts)
  const wishlist = useSelector(store => store.products.wishlist)
  const Modal = useSelector(store => store.products.modal)
  const userInfo = useSelector(store => store.products.infoUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function check(path) {
    const token = localStorage.getItem('Token')
    if (token) {
      navigate(path)
    } else {
      dispatch(openModal())
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('Token')
      if (token) {
        localStorage.removeItem('Token')
      } else {
        clearInterval(interval)
      }
    }, 3600000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    dispatch(getAddproduct())
  }, [dispatch])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and mobile menu button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setModal(!modal)}
              className="md:hidden text-gray-700 hover:text-gray-900"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/" className="flex items-center">
              <img 
                className="hidden md:block h-8 w-auto" 
                src={logo} 
                alt="Exclusive" 
              />
              <span className="md:hidden text-xl font-bold text-gray-900">Exclusive</span>
            </Link>
          </div>

          {/* Navigation links - desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              activeClassName="text-red-500"
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              activeClassName="text-red-500"
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              activeClassName="text-red-500"
            >
              About
            </Link>
            <Link 
              to="/signUp" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              activeClassName="text-red-500"
            >
              Sign Up
            </Link>
          </nav>

         
          <div className="flex items-center gap-4 md:gap-6">
            
            <div className="hidden md:flex relative w-64">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

          
            <Link 
              to="/wishlist" 
              className="relative hidden md:block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlist.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>

           
            <button
              onClick={() => check('/cart')}
              className="relative text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalProducts}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

           
            <div className="relative">
              <button
                onClick={() => setAccModal(!accModal)}
                className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-200 ${
                  accModal ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Account"
              >
               <img 
                          src={`${API}/images/${userInfo?.image}`} 
                          alt="Profile" 
                          className="h-10 w-10 rounded-full object-cover"
                        />
              </button>

              {accModal && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200">
                  {userInfo && (
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={`${API}/images/${userInfo.image}`} 
                          alt="Profile" 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{userInfo.userName}</p>
                          <p className="text-sm text-gray-500">{userInfo.email}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setAccModal(false)
                        check('/account')
                      }}
                      className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Account Settings
                    </button>
                    
                    <button
                      onClick={() => {
                        setAccModal(false)
                        check('/checkout')
                      }}
                      className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      My Orders
                    </button>
                    
                    <Link
                      to="/wishlist"
                      onClick={() => setAccModal(false)}
                      className="md:hidden flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      Wishlist
                    </Link>
                    
                    <button
                      onClick={() => {
                        setAccModal(false)
                        dispatch(logOut())
                        navigate('/')
                      }}
                      className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      
      {modal && (
        <div className="md:hidden fixed inset-0 z-40">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setModal(false)}
          ></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-4">
              <div className="flex items-center justify-between mb-8">
                <img className="h-8" src={logo} alt="Exclusive" />
                <button 
                  onClick={() => setModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 space-y-2">
                <Link
                  to="/"
                  onClick={() => setModal(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setModal(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  onClick={() => setModal(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                >
                  About
                </Link>
                <Link
                  to="/signUp"
                  onClick={() => setModal(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Sign Up
                </Link>
              </nav>
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between px-4">
                  <div className="flex space-x-4">
                    <Link 
                      to="/wishlist" 
                      onClick={() => setModal(false)}
                      className="text-gray-700 hover:text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </Link>
                    <button
                      onClick={() => {
                        setModal(false)
                        check('/cart')
                      }}
                      className="text-gray-700 hover:text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => setAccModal(!accModal)}
                    className={`p-2 rounded-full ${
                      accModal ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth modal */}
      {Modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-xl transform transition-all">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              You don't have an account
            </h2>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  dispatch(openModal())
                  navigate('/login')
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Go To Login</span>
              </button>
              
              <button
                onClick={() => dispatch(openModal())}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header