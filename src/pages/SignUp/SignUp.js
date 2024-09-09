import React, { useState } from "react";

// Label component
function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}

// Input component
function Input({ id, type = "text", placeholder, value, onChange }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
    />
  );
}

// Button component
function Button({ type, children, className }) {
  return (
    <button
      type={type}
      className={`py-2 px-4 font-semibold bg-primary text-white rounded-md hover:bg-green-800 ${className}`}
    >
      {children}
    </button>
  );
}

// Eye icon component for password visibility toggle
function EyeIcon({ isVisible, onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer absolute right-3 top-3"
    >
      {isVisible ? (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M22 12c-1.5 5-6 8-10 8s-8.5-3-10-8 6-8 10-8 8.5 3 10 8z" />
        </>
      ) : (
        <>
          <path d="M13.875 18.825c-4.742.943-9.15-1.568-11-7 1.322-3.657 4.014-6.12 7.125-6.833" />
          <path d="m21 21-4-4" />
          <circle cx="12" cy="12" r="3" />
          <path d="M9.878 9.878 4 4m8 8 5.878 5.878M15 15l2.829 2.829" />
        </>
      )}
    </svg>
  );
}

// Main component
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    pincode: "",
    city: "",
    state: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    // Add form submission logic here
  };

  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-sm font-medium"><ArrowLeftIcon /></span>
        </a>
      </header>
      <main className="flex-1 bg-gray-100 px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="mt-2 text-gray-600">Create your account to start buying.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 555-5555"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="street">Street</Label>
              <Input
                id="street"
                placeholder="123 Main St"
                value={formData.street}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="San Francisco"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input
                  id="pincode"
                  placeholder="12345"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  placeholder="CA"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
  <Label htmlFor="password">Password</Label>
  <Input
    id="password"
    type={passwordVisible ? "text" : "password"}
    placeholder="••••••••"
    value={formData.password}
    onChange={handleChange}
  />
  <EyeIcon
    isVisible={passwordVisible}
    onClick={() => setPasswordVisible(!passwordVisible)}
    className="absolute right-3 top-11 cursor-pointer" // Position the eye icon
  />
</div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
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