import PRODUCTS from "../data/products";

const initialState ={
    products: PRODUCTS,//Quản lý tất cả các sản phẩm
    favProduc :[],//Quản lý các sản phẩm yêu thích
    filterProducts: PRODUCTS, //Quản lý tất cả các sản phẩm được lọc
    cartProducts: [], //Quản lý sản phẩm trong giỏ hàng
}
const reducer =(state= initialState,action) =>{
    if(action.type === 'Them_Vao_yeu_thich'){
        const index = state.favProduc.findIndex(product => product.id ===action.productId)
        console.log(index)
        if(index >= 0){
            let copy =[...state.favProduc]
            copy=copy.splice(index,1)
            return{ ...state,favProduc: copy}
        }
        else{
            let copy =[...state.favProduc]
            const product =state.products.find(product => product.id === action.productId)
            copy = copy.concat(product)
            return{ ...state,favProduc: copy}
        }
    }
    if(action.type==='Chua_them_vao_yeu_thich'){
        const index = state.favProduc.findIndex(product => product.id ===action.productId)
        console.log(index)
        if(index >= 0){
            let copy =[...state.favProduc]
            copy=copy.splice(index,1)
            return{ ...state,favProduc: copy}
        }
        else{
            let copy =[...state.favProduc]
            const product =state.products.find(product => product.id === action.productId)
            copy = copy.concat(product)
            return{ ...state,favProduc: copy}
        }
    }
    if(action.type === 'Them_vao_gio_hang'){
        const index = state.cartProducts.findIndex(product => product.id ===action.productId)
        console.log(index)
        if(index >= 0){
            let copy =[...state.cartProducts]
            copy=copy.splice(index,1)
            return{ ...state,cartProducts: copy}
        }
        else{
            let copy =[...state.cartProducts]
            const product =state.products.find(product => product.id === action.productId)
            copy = copy.concat(product)
            return{ ...state,cartProducts: copy}
        }
    }
    if(action.type === 'LOC_SAN_PHAM' ){
        const filters = action.filters
        console.log(filters)
        const filterProducts = state.products.filter(product =>{
            if(filters.isBrandOn != product.isBrand){
                return false
            }
            if(filters.isSaleOn != product.isSale){
                return false 
            }
            return true
        })
        return {...state,filterProducts}
    }
    return state
}
export default reducer;