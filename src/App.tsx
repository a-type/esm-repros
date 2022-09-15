import { useDrag } from "@use-gesture/react"

function App() {
  const bind = useDrag(state => {
    console.log(state)
  })

  return (
    <div className="App">
    </div>
  )
}

export default App
