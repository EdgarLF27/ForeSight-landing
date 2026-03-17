import { LandingPage } from './components/LandingPage'

function App() {
  const handleNavigate = () => {
    // Aquí podrías poner el enlace a tu app real
    window.location.href = "https://tu-app-principal.vercel.app";
  }

  return (
    <LandingPage onNavigateToAuth={handleNavigate} />
  )
}

export default App
