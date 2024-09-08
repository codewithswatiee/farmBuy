import React from 'react'
import MainNav from '../MainNav'


export default function Roles() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#FBFCFF]">
      <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <a href="#" className="flex items-center gap-2">
        <LeafIcon className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold text-primary-foreground">Agro<span className='text-primary'>Bond</span></span>
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        <a href="#" className="text-md font-medium text-foreground hover:underline underline-offset-4">
          About Us
        </a>
        <a href="#" className="text-md font-medium text-foreground hover:underline underline-offset-4">
          Contact
        </a>
        <button
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-md font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
        Back
        </button>
      </nav>
      <div className="md:hidden">
        <button className="text-primary border border-primary p-2 rounded-sm">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
        <div className="fixed right-0 top-0 w-full max-w-xs bg-background p-4">
          <div className="grid gap-4">
            <a href="#" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
              About Us
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:underline underline-offset-4">
              Contact
            </a>
            <button className="bg-primaryForeground text-black hover:bg-primary/90 px-4 py-2 rounded-sm text-sm font-medium">
              Back
            </button>
          </div>
        </div>
      </div>
    </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4 md:px-6 py-12 md:py-24">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Your Produce, Your Way: Request and Grow</h1>
          <p className="text-center">
            Choose your role and explore the benefits of our vibrant agricultural marketplace.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-8 gap-4 hover:scale-105 transition-transform">
            <TractorIcon className="h-30 w-30" />
            <h3 className="text-2xl font-bold">Farmer</h3>
            <p className="text-muted-foreground text-center">
            Grow requested products based on buyers’ advance orders to meet their specific needs.</p>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-md font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Join as a Farmer
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-8 gap-4 hover:scale-105 transition-transform">
            <ShoppingBasketIcon className="h-30 w-30" />
            <h3 className="text-2xl font-bold">Buyer</h3>
            <p className="text-muted-foreground text-center">
            Request products in advance and specify your needs to ensure they’re grown just for you.</p>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-md font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Join as a Buyer
            </a>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-sm text-muted-foreground">&copy; 2024 <span className='text-primary font-semibold'>AgroBond</span>. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function ShoppingBasketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </svg>
  )
}

function TractorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <path d="M16 18h-5" />
      <path d="M18 5a1 1 0 0 0-1 1v5.573" />
      <path d="M3 4h9l1 7.246" />
      <path d="M4 11V4" />
      <path d="M7 15h.01" />
      <path d="M8 10.1V4" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="7" cy="15" r="5" />
    </svg>
  )
}
function LeafIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  }
  
  function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
