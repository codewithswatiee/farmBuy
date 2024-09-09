import React, { useState, useEffect, useRef } from 'react';  

export default function CropManager() {  
  const [isDropdownOpen, setDropdownOpen] = useState(false);  
  const [activeTab, setActiveTab] = useState('pending');  
  const dropdownRef = useRef(null);  

  const toggleDropdown = () => setDropdownOpen(prev => !prev);  
  const handleOptionClick = () => setDropdownOpen(false);  

  useEffect(() => {  
    const handleClickOutside = (event) => {  
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {  
        setDropdownOpen(false);  
      }  
    };  
    document.addEventListener('mousedown', handleClickOutside);  
    return () => document.removeEventListener('mousedown', handleClickOutside);  
  }, []);  

  const cropRequests = [  
    { name: "John Doe", requestedCrop: "Tomatoes", location: "Acme Farm, California", quantity: 10, tentativeDate: "2023-11-15" },  
    { name: "Jane Smith", requestedCrop: "Lettuce", location: "Green Valley Farm, Oregon", quantity: 20, tentativeDate: "2023-11-20" },  
    { name: "Michael Johnson", requestedCrop: "Carrots", location: "Sunny Acres Farm, Washington", quantity: 15, tentativeDate: "2023-11-25" },  
    { name: "Emily Brown", requestedCrop: "Strawberries", location: "Riverdale Farm, Florida", quantity: 5, tentativeDate: "2023-11-30" },  
  ];  

  return (  
    <div>  
      <header className="bg-background shadow-sm">  
        <div className="container flex items-center justify-between px-4 py-3 md:px-6"> 
          <p href="#" className="flex items-center gap-2">
        <LeafIcon className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold text-primary-foreground">Agro<span className='text-primary'>Bond</span></span>
      </p>
          <nav className="flex space-x-4">  
            <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 ${activeTab === 'pending' ? 'bg-gray-200 rounded-md' : ''}`}>Pending Requests</button>  
            <button onClick={() => setActiveTab('uploaded')} className={`px-4 py-2 ${activeTab === 'uploaded' ? 'bg-gray-200 rounded-md' : ''}`}>Uploaded Crops</button>  
            <button onClick={() => setActiveTab('history')} className={`px-4 py-2 ${activeTab === 'history' ? 'bg-gray-200 rounded-md' : ''}`}>History</button>  
          </nav>  
          <div className="relative" ref={dropdownRef}>  
            <button onClick={toggleDropdown} className="rounded-full border border-primary  active:border-green-800 p-2">  
              <img src="/user.svg" alt="User" className="h-[1.5rem] w-[2rem] object-contain rounded-full" />  
            </button>  
            {isDropdownOpen && (  
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">  
                {['Profile', 'Settings', 'Support', 'Logout'].map(option => (  
                  <a key={option} href="#" className="block px-4 py-2 text-sm hover:bg-primary/40" onClick={handleOptionClick}>{option}</a>  
                ))}  
              </div>  
            )}  
          </div>  
        </div>  
      </header>  
      <div className="grid md:grid-cols-[1fr] gap-6 p-6 md:p-10">  
        <div className="bg-background rounded-lg shadow-md overflow-hidden">  
          <div className="flex items-center justify-between border-b bg-primary px-6 py-4">  
            <h2 className="text-lg text-white font-bold">{activeTab === 'pending' ? 'Pending Crop Requests' : activeTab === 'uploaded' ? 'Uploaded Crops' : 'History'}</h2>  
          </div>  
          <div className="divide-y">  
            {activeTab === 'pending' && cropRequests.map(request => (  
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 px-6 py-4" key={request.name}>  
                <div className="grid gap-1">  
                  <div className="font-medium">{request.name}</div>  
                  <div className="text-sm text-muted-foreground">Requested Crop: {request.requestedCrop}</div>  
                  <div className="text-sm text-muted-foreground">Location: {request.location}</div>  
                  <div className="text-sm text-muted-foreground">Quantity: {request.quantity} quintals</div>  
                  <div className="text-sm text-muted-foreground">Tentative Date: {request.tentativeDate}</div>  
                </div>  
                <div className="flex gap-7">  
                <button
                  className="inline-flex h-10 text-white items-center justify-center rounded-md bg-primary px-8 text-md font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  Accept
                </button>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-md font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Deny
                </button>
                </div>  
              </div>  
            ))}  
            {activeTab === 'uploaded' && <div className="px-6 py-4">No uploaded crops yet.</div>}  
            {activeTab === 'history' && <div className="px-6 py-4">No history available.</div>}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
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