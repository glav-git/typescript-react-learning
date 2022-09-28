import Card, { CardVariant } from "./components/Card"

const App = () => {
  return (
    <div>
      <Card onClick={(num) => console.log('Andrey, andrushka, pososi moyu pisushku', num)} variant={CardVariant.primary} width="200px" height="200px">
        <button>button</button>
      </Card>
    </div>
  )
}

export default App;