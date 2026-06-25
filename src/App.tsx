import { useEffect } from "react";
import Home from "@/pages/home";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <Home />;
}

export default App;
