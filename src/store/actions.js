import {ADD_COUNTER, ADD_ITEM} from "./mutations-type";

export default {
  addToCart(context, product) {
    let pitem = this.state.cartList.find(item => item.iid === product.iid)
    console.log(pitem)
    if(pitem)
    {
      context.commit(ADD_COUNTER,pitem)
    }
    else {
      context.commit(ADD_ITEM,product)
    }
  }
}
