import './App.css';
import { useEffect } from "react";

import Index from './components/Index';
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <Index/>
      <Footer/>
    </div>
  );
}

export default App;
