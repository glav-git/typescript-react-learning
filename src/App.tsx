import Card, { CardVariant } from "./components/Card"

const App = () => {
  return (
    <div>
      <Card variant={CardVariant.primary} width="200px" height="200px">
        <button>button</button>
      </Card>
    </div>
  )
}

export default App;