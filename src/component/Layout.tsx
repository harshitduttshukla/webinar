// import Footer from './Footer';
// import Sidebar from './Sidebar'; // Assuming Sidebar is in the components folder
// import { Outlet } from 'react-router-dom';

// function Layout() {
//   return (
//     <div className="">
//       {/* Header */}
      

//       {/* Main Content with Sidebar */}
//       <div className="flex flex-grow">
//         {/* Sidebar */}
//         <div className="bg-gray-200">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-grow p-4 bg-gray-100">
//           <Outlet />
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default Layout;



import Footer from './Footer';
import Sidebar from './Sidebar'; // Assuming Sidebar is in the components folder
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content with Sidebar */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="bg-gray-200 w-64"> {/* Sidebar with fixed width */}
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4 bg-gray-100"> {/* Fills remaining width */}
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
