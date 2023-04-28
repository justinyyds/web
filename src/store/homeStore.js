import { observable } from "mobx";

const store = observable({
    data:{
        count:1
    }
})

export default store