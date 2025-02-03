// import { useEffect, useState } from 'react';
// import Home from './icon/Home';
// import Sidebar from './component/Sidebar';
// import Card from './component/Card';
// import harshit2 from './assets/harshit2.jpg'
// import Schedule from './component/Schedule';

// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     const updateMatch = () => setMatches(media.matches);

//     // Initial check
//     updateMatch();

//     // Event listener for changes
//     media.addEventListener('change', updateMatch);
//     return () => media.removeEventListener('change', updateMatch);
//   }, [query]);

//   return matches;
// };

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const isDesktop = useMediaQuery('(min-width: 768px)');

//   useEffect(() => {
//     setSidebarOpen(isDesktop);
//   }, [isDesktop]);

//   return (
//     <div className="flex">
//       <CustomSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <MainContent />
//     </div>
//   );
// }

// function CustomSidebar({ sidebarOpen, setSidebarOpen }) {
//   if (!sidebarOpen) {
//     return (
//       <div className="fixed top-0 left-0">
//         <div
//           className="cursor-pointer hover:bg-slate-200 bg-white p-2"
//           onClick={() => setSidebarOpen(true)}
//         >
//           <Home />
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="w-72 h-screen  fixed top-0 left-0 md:relative">
//       <div className="p-2">
//         <div
//           className="cursor-pointer hover:bg-slate-200"
//           onClick={() => setSidebarOpen(false)}
//         >
//           <Home />
//         </div>
//         <Sidebar />
//       </div>
//     </div>
//   );
// }

// function MainContent() {
//   return (
//     <div className="w-full">
//       <div className="h-72 bg-black hidden md:block"></div>
//       <div className="grid grid-cols-11 gap-8 p-8">
//         <div className="h-96 rounded-2xl shadow  md:col-span-2 -translate-y-32 col-span-11 hidden md:block">
//           <Card img={harshit2 } name = "harshit shukla" number={123456789} email="hatshitshukla6388@gmail.com" address="Basti, Uttar Pradesh"></Card>
//         </div>
//         <div className="h-96 rounded-2xl shadow bg-green-200 md:col-span-6 col-span-11"></div>
//         <div className=" shadow md:col-span-3 col-span-11">
//           <Schedule></Schedule>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import UserManagement from './component/UserManagement'

function App() {
  return (
    <div>
      <UserManagement/>
    </div>
  )
}

export default App


