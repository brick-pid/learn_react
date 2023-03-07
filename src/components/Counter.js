import { counterStore } from "../store/counter"
import { observer } from "mobx-react-lite"

function Counter () {
  return (
    <div>
      <div>{counterStore.count}</div>
      <button onClick={counterStore.increment}>Increment</button>
    </div>
  )

}

export default observer(Counter)