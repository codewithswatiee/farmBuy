import React from 'react'

export default function MainNav() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <a href="#" className="flex items-center gap-2">
        <LeafIcon className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold text-primary-foreground">Agro<span className='text-primary'>Bond</span></span>
      </a>
      <nav className="hidden items-center gap-4 md:flex">
        <a href="#" className="text-md font-medium text-foreground hover:underline underline-offset-4">
          About Us
        </a>
        <a href="#" className="text-md font-medium text-foreground hover:underline underline-offset-4">
          Contact
        </a>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-md font-medium">
          Login/Signup
        </button>
        <button
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-md font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
        >
        Language
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
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-sm text-sm font-medium">
              Login/Signup
            </button>
            <button className="bg-primaryForeground text-black hover:bg-primary/90 px-4 py-2 rounded-sm text-sm font-medium">
              Language
            </button>
          </div>
        </div>
      </div>
    </header>
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
