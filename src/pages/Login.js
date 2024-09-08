import React from 'react'

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
      <div className="w-full max-w-md ">
      <button
          type="button"
          className="rounded-full mb-4 p-2 hover:bg-gray-200 transition"
          aria-label="Back"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <div className='bg-white shadow-md rounded-lg p-6'>
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-gray-500 mt-1">Enter your email and password to access your account.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-green-800"
          >
            Sign In
          </button>
        </div>
        <div className="p-6 text-center text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-primary font-medium underline hover:text-green-800">
            Sign up
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    )
  }
