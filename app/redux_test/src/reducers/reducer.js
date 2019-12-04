// 初期State
const initState = {
  tasks: [],
  moji: ''
}

// Reducer処理
const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'add_task': {
      return console.log(action.value)
    }
    case 'end_task': {
      return console.log(action.value)
    }
    case 'update_task': {
      return console.log(action.value)
    }
    case 'del_task': {
      return console.log(action.value)
    }
    default: {
      return state
    }
  }
}

export default reducer