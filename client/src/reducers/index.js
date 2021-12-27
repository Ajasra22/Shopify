import { combineReducers } from 'redux';
const loginReducer =(state={
    isAuth: false,
    userName: ''},{type,payload})=>{
        switch (type) {
            case 'AUTH':
                return payload;
            default:
                return state;
        }
    }
const postProduct= (state={creator: "", title: "",category: "",price: "",selectedFile: ""},{type,payload})=>{
    switch (type) {
        case 'ADD_PRODUCT':
            return payload;
    
        default:
            return state;
    }
}
const fetchposts =(state=[{_id: "",creator: "", title: "",category: "",price: "",selectedFile: ""}],{type,payload})=>{
    switch (type) {
        case "FETCH_POST":
            return payload;
        default:
            return state;
    }
}
const fetchCartPosts =(state=[{_id: "",creator: "", title: "",category: "",price: "",selectedFile: ""}],{type,payload})=>{
    switch (type) {
        case "FETCH_CART":
            return payload;
        default:
            return state;
    }
}
export default combineReducers({
    Authenticated: loginReducer,
    sellProduct: postProduct,
    fetch: fetchposts,
    fetchcart: fetchCartPosts
});