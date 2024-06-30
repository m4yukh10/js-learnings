import './App.css'
import Card from './Card'

function App() {
  const cards = [
    {id:1, title: "Card 1", content: "Content 1"},
    {id:2, title: "Card 2", content: "Content 2"},
    {id:3, title: "Card 3", content: "Content 3"},
    {id:4, title: "Card 4", content: "Content 4"},
    {id:5, title: "Card 5", content: "Content 5"}
  ]

  return (
    <>
      <div className = 'card-container'>
        {cards.map((cards) => {
          return (
            <Card key = {cards.key} title = {cards.title} content={cards.content}/>
          )
        } )}
      </div>
    </>
  )
}

export default App
