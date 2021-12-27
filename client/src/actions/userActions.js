import axios from "axios";
const url="http://localhost:5000"
export const setAuthTrue =(user,istrue)=> async (dispatch) =>{
    
        dispatch({type: 'AUTH',payload: {
        userName: user,
        isAuth: istrue,
    }});
    localStorage.setItem('userinfo',user);
    localStorage.setItem('isAuth',istrue);

}
export const addProduct= (product)=> async (dispatch)=>{
    try {
        const {data}=await axios.post(`${url}/addProduct`,product);
        console.log("Posting a product for a user")
        dispatch({type: 'ADD_PRODUCT',payload: data});
        console.log(data);    
    } catch (error) {
        console.log(error)
    }

}
export const fetchPosts =(userName)=> async (dispatch)=>{
    try {
        const {data} =await axios.get(`${url}/fetchposts`);
        console.log("Fetching Posts");
        dispatch({type: "FETCH_POST",payload: data});
    } catch (error) {
        console.log(error)
    }
}
export const deletePost =(id)=> async (dispatch)=>{
    try {
        const {data} = await axios.delete(`${url}/deleteproduct/${id}`);
        console.log("Deleting posts message from api",data);
    } catch (error) {
        console.log(error)
    }
}
export const addtoCart=(post,userName)=> async (dispatch)=>{
    try {
        post= {...post,creator: userName}
        const {data} = await axios.post(`${url}/addtocart`,post)
        console.log("Adding product to the Cart",data)
    } catch (error) {
        console.log(error)
    }
}
export const fetchCartPosts =(user)=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`${url}/fetchcart`);
        dispatch({type: 'FETCH_CART',payload: data});
        console.log("Fetching cart",data);
    } catch (error) {
        console.log(error);
    }
}