import { Thankyou } from "./pages/thankyou";
import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Retrait } from "./pages/Retrait";
import { Solde } from "./pages/Solde";
import { Ticket } from "./pages/Ticket";
import { Recharge } from "./pages/Recharge";
import { Facture } from "./pages/Facture";
import { Landing } from "./pages/Landing";
import { Vignette } from "./pages/Vignette";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const App = () => {
  const { pathname } = useLocation();
  const [offline, setOffline] = useState(true);

  const path = pathname.replace("/index", "") || "/";

  const updateOnlineStatus = () => {
    setOffline(navigator.onLine);
    !navigator.onLine
      ? toast((t) => (
          <span>
            <b>YOU ARE OFFLINE</b>
            <button
              className="px-2 ml-10 rounded-lg bg-red-300"
              onClick={() => toast.dismiss(t.id)}
            >
              close
            </button>
          </span>
        ))
      : toast.dismiss();
  };

  
  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    updateOnlineStatus();
  }, []);

  return (
    <div className={!offline ? `grayscale` : ""}>
      <Routes location={path}>
        <Route path="/" element={<Landing />} />
        <Route path="/Retrait" element={<Retrait />} />
        <Route path="/Solde" element={<Solde />} />
        <Route path="/Recharge" element={<Recharge />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/Facture" element={<Facture />} />
        <Route path="/Vignette" element={<Vignette />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      {!offline && (
        <div className="absolute top-0 left-0 w-screen h-screen"></div>
      )}
      <Toaster
        toastOptions={{
          // Define default options
          duration: 30000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
        position="bottom-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default App;
