import React, { useState } from "react";

// Label component
function Label({ htmlFor, children, className }) {
  return (
    <label htmlFor={htmlFor} className={`block font-medium ${className}`}>
      {children}
    </label>
  );
}

// Input component
function Input({ id, type = "text", placeholder }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded-md"
    />
  );
}

// Textarea component
function Textarea({ id, rows, placeholder }) {
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded-md"
    />
  );
}

// Button component
function Button({ type, children, className }) {
  return (
    <button
      type={type}
      className={`font-semibold py-2 px-4 bg-primary text-white rounded-md hover:bg-green-800 ${className}`}
    >
      {children}
    </button>
  );
}

// ArrowLeftIcon component
function ArrowLeftIcon() {
  return (
    <svg
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
      <path d="M12 19l-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

// Main component
export default function FarmerLogin() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    crops: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-10 bg-gray-100">
        <div className="container flex items-center justify-between px-4 py-4">
          <a href="#" className="inline-flex items-center gap-2">
            <ArrowLeftIcon className="h-6 w-6" />
            Back
          </a>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full ml-20 md:py-2 lg:py-3 xl:py-4">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl">
                  Join Our Farming Community
                </h1>
                {/* <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Grow your farm with our vibrant community of passionate
                  growers. Sign up today and start connecting with like-minded
                  farmers.
                </p> */}
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-md">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="eg: Rani Devi"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone" className="text-md">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="12345 67890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-md">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rani@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location" className="text-md">
                      Farm Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="123 Main St, Anytown USA"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="crops" className="text-md">
                      Crops Grown
                    </Label>
                    <Textarea
                      id="crops"
                      rows={3}
                      placeholder="Tomatoes, Corn, Lettuce, etc."
                      value={formData.crops}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-[0.85rem] font-semibold">Already have an account? <span className="text-blue-600 hover:text-blue-700">Login</span></p>
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/farmerLogin.jpg"
                width="500"
                height="500"
                alt="Farm"
                className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
