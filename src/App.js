






import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import {CssBaseline, ThemeProvider} from "@mui/material"
import { theme } from './theme';



const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
     
    </>
  )
}


export default App



























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
