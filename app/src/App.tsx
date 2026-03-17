import { LandingPage } from "./components/LandingPage";

function App() {
  const handleNavigate = () => {
    // Aquí podrías poner el enlace a tu app real
    window.location.href = "https://foresight-ten.vercel.app/";
  };

  return <LandingPage onNavigateToAuth={handleNavigate} />;
}

export default App;
