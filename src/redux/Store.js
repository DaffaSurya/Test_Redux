import { createStore } from "redux";

const counterstate = {
    total: 20,
}

const counterreducer = (state = counterstate) => {
    return(state)
}



const Store = createStore(counterreducer) 

export default Store;