import React, { useState, useEffect, useRef } from 'react';

const Buyer = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pending');
  const [farmers, setFarmers] = useState([]);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isRequestModalOpen, setRequestModalOpen] = useState(false);
  const [isAddRequestModalOpen, setAddRequestModalOpen] = useState(false);
  const [requestData, setRequestData] = useState({ quantity: '', date: '', selectedCrops: [] });
  const [addRequestData, setAddRequestData] = useState({ quantity: '', date: '', location: '', selectedCrops: '' });
  const [notification, setNotification] = useState('');
  const [uploadedRequests, setUploadedRequests] = useState([]);
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

  useEffect(() => {
    // Sample data for farmers
    setFarmers([
      { id: 1, name: "Raj Sharma", crops: ["Tomatoes", "Corn"], location: "Acme Farm, Punjab", picture: "/farmer.jpg", description: "Organic farm specializing in vegetables.", age: 45 },
      { id: 2, name: "Rani Devi", crops: ["Lettuce", "Carrots"], location: "Green Valley Farm, Haryana", picture: "/farmer.jpg", description: "Focuses on fresh greens and root vegetables.", age: 38 },
      { id: 3, name: "Mukesh Patel", crops: ["Strawberries"], location: "Sunny Acres Farm, Maharashtra", picture: "/farmer.jpg", description: "Known for premium strawberries and seasonal fruits.", age: 50 },
    ]);
  }, []);

  const handleFarmerClick = (farmer) => {
    setSelectedFarmer(farmer);
    setProfileModalOpen(true);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setNotification(`Request submitted for ${requestData.quantity} quintals on ${requestData.date}.`);
    setRequestData({ quantity: '', date: '', selectedCrops: [] });
    setRequestModalOpen(false);
    setProfileModalOpen(false); // Close the profile modal as well
  };

  const handleAddRequestSubmit = (e) => {
    e.preventDefault();
    setUploadedRequests(prev => [...prev, addRequestData]);
    setAddRequestData({ quantity: '', date: '', location: '', selectedCrops: '' });
    setAddRequestModalOpen(false);
  };

  const handleCropSelection = (e) => {
    const { value, checked } = e.target;
    setRequestData(prev => {
      const selectedCrops = checked
        ? [...prev.selectedCrops, value]
        : prev.selectedCrops.filter(crop => crop !== value);
      return { ...prev, selectedCrops };
    });
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 30000); // Close notification after 30 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      <header className="bg-background shadow-sm">
        <div className="container flex items-center justify-between px-4 py-3 md:px-6">
        <p href="#" className="flex items-center gap-2">
        <LeafIcon className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold text-primary-foreground">Agro<span className='text-primary'>Bond</span></span>
      </p>
          <nav className="flex space-x-4">
            <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 ${activeTab === 'pending' ? 'bg-gray-200 ' : ''}`}>Farmers Listing</button>
            <button onClick={() => setActiveTab('uploaded')} className={`px-4 py-2 ${activeTab === 'uploaded' ? 'bg-gray-200' : ''}`}>Upload Requests</button>
            <button onClick={() => setActiveTab('history')} className={`px-4 py-2 ${activeTab === 'history' ? 'bg-gray-200' : ''}`}>History</button>
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
        <div className="bg-background rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b bg-primary px-6 py-4">
            <h2 className="text-lg  font-semibold">{activeTab === 'pending' ? 'Farmers Listing' : activeTab === 'uploaded' ? 'Upload Requests' : 'History'}</h2>
            {activeTab === 'uploaded' && (
              <button onClick={() => setAddRequestModalOpen(true)} className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
               Add Request</button>
            )}
          </div>
          <div className="divide-y">
            {activeTab === 'pending' && farmers.map(farmer => (
              <div className="grid grid-cols-[1fr-auto] items-center gap-4 px-6 py-4" key={farmer.id}>
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleFarmerClick(farmer)}>
                  <img src="/user.svg" alt="User" className="h-8 w-8" />
                  <div className="grid gap-1">
                    <div className="text-base font-bold">{farmer.name}</div>
                    <div className="text-sm font-semibold text-muted-foreground">Crops: {farmer.crops.join(', ')}</div>
                    <div className="text-sm font-semibold text-muted-foreground">Location: {farmer.location}</div>
                  </div>
                </div>
              </div>
            ))}
                {activeTab === 'uploaded' && (
            <>
                <div className="divide-y">
                {uploadedRequests.length > 0 ? (
                    uploadedRequests.map((request, index) => (
                    <div key={index} className="px-6 py-4 border-b">
                        <div className="text-sm font-medium">Quantity: {request.quantity} quintals</div>
                        <div className="text-sm">Crops: {request.selectedCrops}</div>
                        <div className="text-sm">Date: {request.date}</div>
                        <div className="text-sm">Location: {request.location}</div>
                    </div>
                    ))
                ) : (
                    <div className="px-6 py-4">No upload requests yet.</div>
                )}
                </div>
            </>
    )}

            {activeTab === 'history' && <div className="px-6 py-4">No history available.</div>}
          </div>
        </div>
      </div>

      {/* Farmer Profile Modal */}
      {isProfileModalOpen && selectedFarmer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <h2 className="text-lg font-bold">{selectedFarmer.name}</h2>
            <img src={selectedFarmer.picture} alt={selectedFarmer.name} className="h-24 w-24 rounded-full" />
            <div className="mt-4 font-semibold">
              <div className="text-sm">Crops: {selectedFarmer.crops.join(', ')}</div>
              <div className="text-sm">Location: {selectedFarmer.location}</div>
              <div className="text-sm">Description: {selectedFarmer.description}</div>
              <div className="text-sm">Age: {selectedFarmer.age}</div>
            </div>
            <button onClick={() => setProfileModalOpen(false)} className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full p-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <button onClick={() => setRequestModalOpen(true)} className="mt-4 bg-primary text-white px-4 py-2 rounded font-semibold">
              Request Crops
            </button>
          </div>
        </div>
      )}

      {/* Request Modal */}
      {isRequestModalOpen && selectedFarmer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <h2 className="text-lg font-bold pb-5">Request for {selectedFarmer.name}</h2>
            <form onSubmit={handleRequestSubmit}>
              <div>
                <label className="block text-md font-semibold">Quantity:</label>
                <input
                  type="text"
                  value={requestData.quantity}
                  onChange={(e) => setRequestData({ ...requestData, quantity: e.target.value })}
                  className="border rounded w-full px-2 py-1"
                  required
                />
              </div>
              <div className="mt-4 text-md font-semibold">
                <label className="block text-sm">Date:</label>
                <input
                  type="date"
                  value={requestData.date}
                  onChange={(e) => setRequestData({ ...requestData, date: e.target.value })}
                  className="border rounded w-full px-2 py-1"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-md font-semibold">Select Crops:</label>
                {selectedFarmer.crops.map(crop => (
                  <div key={crop} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={crop}
                      value={crop}
                      checked={requestData.selectedCrops.includes(crop)}
                      onChange={handleCropSelection}
                      className="h-4 w-4 bg-primary text-white border-primary-500 rounded"
                      required
                    />
                    <label htmlFor={crop} className="ml-2 text-gray-700">{crop}</label>
                  </div>
                ))}
              </div>
              <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 rounded font-semibold">Submit</button>
              <button onClick={() => {
                setRequestModalOpen(false);
                setProfileModalOpen(false); // Close the profile modal as well
              }} className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full p-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Request Modal */}
      {isAddRequestModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <h2 className="text-lg font-semibold">Add Request</h2>
            <form onSubmit={handleAddRequestSubmit}>
              <div>
                <label className="block text-sm">Quantity:</label>
                <input
                  type="text"
                  value={addRequestData.quantity}
                  onChange={(e) => setAddRequestData({ ...addRequestData, quantity: e.target.value })}
                  className="border rounded w-full px-2 py-1"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm">Date:</label>
                <input
                  type="date"
                  value={addRequestData.date}
                  onChange={(e) => setAddRequestData({ ...addRequestData, date: e.target.value })}
                  className="border rounded w-full px-2 py-1"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm">Location:</label>
                <input
                  type="text"
                  value={addRequestData.location}
                  onChange={(e) => setAddRequestData({ ...addRequestData, location: e.target.value })}
                  className="border rounded w-full px-2 py-1"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm">Crops Needed:</label>
                <input
                  type="text"
                  value={addRequestData.selectedCrops}
                  onChange={(e) => setAddRequestData({ ...addRequestData, selectedCrops: e.target.value })}
                  className="border rounded w-full px-2 py-1"
                  required
                />
              </div>
              <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 rounded font-semibold">Submit</button>
              <button onClick={() => setAddRequestModalOpen(false)} className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full p-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500/65 text-white p-4 rounded">
          {notification}
          <button onClick={() => setNotification('')} className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full p-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Buyer;

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