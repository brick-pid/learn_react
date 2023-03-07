import { makeAutoObservable } from "mobx"

class CounterStore {
  count = 0;
  constructor() {
    makeAutoObservable(this)
  }
  increment = () => {
    this.count++
  }
}

const counterStore = new CounterStore()
export { counterStore }