import { Score, Summary } from "./components/index"

function App() {

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-plae-blue">
      <section className="flex md:flex-row flex-col bg-white rounded-3xl md:w-min md:h-min w-full h-full">
        <Score/>
        <Summary/>
      </section>
    </main>
  )
}

export default App
