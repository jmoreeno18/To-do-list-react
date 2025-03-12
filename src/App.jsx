import { ToDo } from "./ToDo"

export const App = () => {
  return(
    <div className="h-full min-h-screen bg-linear-65 from-gray-800 to-black py-8">
      <h1 className="text-3xl sm:text-5xl text-center text-white">Lista de tareas: </h1>
      <ToDo />
    </div>
  )
}
