// import React, { useState } from 'react';
// // import {useNavigate} from "react-router-dom";

// import Home from "./pages/Home";
// import Leaderboard from "./pages/Leaderboard";
// import Navbar from "./Navbar";
// import Profile from "./pages/Profile";
// import Puzzle from "./pages/Puzzle";



// TODO: redundant code!?

// function PageRouter() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     const renderPage = () => {
//       if (currentPage === 'Home') {
//         return <Home />;
//       }
//       if (currentPage === 'Profile') {
//         return <Profile />;
//       }
//       if (currentPage === 'Puzzle') {
//         return <Puzzle />;
//       }
//       return <Leaderboard />;
//     };
  
//     const handlePageChange = (page) => setCurrentPage(page);
  
//     return (
//       <div>
//         <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//         {renderPage()}
//       </div>
//     );
//   }
  
//   export default PageRouter