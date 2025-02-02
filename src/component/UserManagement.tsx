function UserManagement() {
    return (
      <div className="bg-slate-700 h-screen ml-80">
        <div className="flex justify-center">
          {/* Second div with specific styling */}
          <div className="mt-10 bg-white h-[600px] mb-96 shadow-lg rounded-lg overflow-hidden w-[68%]">
            <div className="bg-gray-100 p-12 flex flex-col md:flex-row items-center justify-between">
                <div  className="flex items-center space-x-4 mb-4 md:mb-0">
                    <span className="relative flex shrink-0 overflow-hidden rounded-lg w-20 h-20">
                        <span className="flex h-full w-full items-center justify-center rounded-lg bg-muted text-2xl font-bold">
                            h
                        </span>
                    </span>
                    <div>
                        <h2 className="text-xl font-semibold">Harshit shukla</h2>
                        <p className="text-gray-600"> harshitshukla6388@gmail.com</p>
                    </div>
                    </div>
            <button>Edit Profile</button>
            </div>
            <div className="p-6">
                <h3 text-lg font-semibold mb-4>My Account</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg "></div>
                    <div className="bg-gray-50 p-4 rounded-lg "></div>
                    <div className="bg-gray-50 p-4 rounded-lg "></div>

                </div>

            </div>
            <div>
                
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default UserManagement;
  