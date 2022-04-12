import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home, Projects} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

// function Header() {
//   return (
//     <header>
//       <div className = "navBarDiv">
//         <nav className = "navBarBlock">
//           <ul className = "primaryNavBar">
//             <li><a href = "">Home</a></li>
//             <li><a href = "">Projects</a></li>
//           </ul>
//         </nav>
//         <div class = "mainlogoDiv">
//           <img className = "mainlogo" src = {cslogo} alt= "cslogo" />
//         </div>
//         <nav className = "navBarBlock">
//           <ul className = "secondaryNavBar">
//             <li><a href = "https://github.com/DavenSantana" target = "_blank" rel="noreferrer">Github</a></li>
//             <li><img src = {github} alt= "github" /></li>
//             <li><a href = "https://www.linkedin.com/in/daven-santana-726254206/" target = "_blank" rel="noreferrer">LinkedIn</a></li>
//             <li><img src = {linkedin} alt= "linkedin" /></li>
//             <li><a href = "https://davensantana.github.io/" target = "_blank" rel="noreferrer">Old Website</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// function Footer() {
//   return(
//     <footer>
       
//     </footer>
//   );
// }

// function createHome() {
//   return (
//     <div>
//       <Header />


//       <Footer />
//     </div>
//   );
// }

export default App;