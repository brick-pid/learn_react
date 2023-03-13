import { makeAutoObservable } from 'mobx'


class loginStore {
  username = ''
  password = ''
  constructor() {
    makeAutoObservable(this)
  }
  setLoginInfo = (user) => {
    this.username = user.username
    this.password = user.password
    console.log(this.username, this.password)
  }
}

export default loginStore