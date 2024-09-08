import MainNav from "./MainNav"

export default function LandinPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <section className="ml-3">
        <MainNav />
    </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-9 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 ml-3">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-primary">Agrobond</span>: Trust to Thrive, Contracts that Drive.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                AgroBond revolutionizes contract-based farming by linking farmers with dependable buyers, ensuring stable market access and secure transactions, and delivering unmatched commitment and transparency through our platform.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </button>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </button>
              </div>
            </div>
            <img
              src="/landingPage.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Stable Markets, Secure Futures
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AgroBond’s Assured Contract Farming System is designed to address the common challenges faced by farmers, offering a reliable and sustainable solution that guarantees market access and stable incomes. By seamlessly connecting you with trusted buyers, we eliminate the uncertainties and risks traditionally associated with farming. Our platform ensures secure transactions and transparent contracts, allowing you to concentrate on what you do best—growing high-quality produce. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our Assured Contract Farming System offers a comprehensive suite of features to streamline your farming
                operations and ensure your success.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <HandshakeIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Price Negotiation</h3>
                <p className="text-muted-foreground">
                Tools for transparent price discussions and access to market analytics for informed decisions.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <WalletIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Token Payment</h3>
                <p className="text-muted-foreground">
                A secure system for buyers to pay a token amount at the time of contract, ensuring commitment and reliability.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <ClipboardIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Contract-Based Farming</h3>
                <p className="text-muted-foreground">
                Streamlined management of contract-based farming with reliable buyer connections and stable market access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or ready to join our Assured Contract Farming System? Fill out the form below, and one of
                our representatives will be in touch.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border">
        <p className="text-sm font-semibold text-muted-foreground">&copy; 2024 <span className="text-primary">AgroBond</span>. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function HandshakeIcon(props) {
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
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    )
  }
  

function WalletIcon(props) {
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
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    )
  }

function Input(props) {
  return <input {...props} className="border rounded-md p-2" />
}

function Textarea(props) {
  return <textarea {...props} className="border rounded-md p-2" />
}

function Button(props) {
  return (
    <button
      {...props}
      className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
    />
  )
}
