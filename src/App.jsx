import './App.css'
import { SerchableList } from './SearchableList'
import { Counter } from './Counter'
import { FocusableInput } from "./focusableInput";
import { Stopwatch } from './Stopwatch';


const list = [
  {
    id: '1',
    title: 'Арбуз'
  },
  {
    id: '2',
    title: 'Киви'
  },
  {
    id: '3',
    title: 'Дыня'
  }
]

function App() {
  return (
    <>
      <SerchableList list={list} />
      <Counter />
      <FocusableInput />
      <Stopwatch />
    </>

  )
}

export default App
