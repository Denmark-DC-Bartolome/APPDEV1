import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  const [screen, setScreen] = useState(
    () => window.location.hash
  );

  useEffect(() => {
    function updateScreen() {
      setScreen(window.location.hash);
    }

    window.addEventListener("hashchange", updateScreen);

    return () => {
      window.removeEventListener("hashchange", updateScreen);
    };
  }, []);

  return screen === "#signup" ? <Signup /> : <Login />;
}

export default App;