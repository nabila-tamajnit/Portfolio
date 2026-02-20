import { Navbar } from "./components/layout/Navbar"

function App() {

  return (
    <>
    <Navbar/>

      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-poppins font-bold text-white mb-4">
          Nabila Tamajnit
        </h1>
        <p className="text-xl text-sage-green font-inter">
          Portfolio avec React et Tailwind
        </p>
        <p className="text-sm text-gray-400 mt-4">
          (Une première pour moi !)
        </p>
      </div>
    </div>
    </>
  )
}

export default App
