import { loginRequest, loginSuccess, loginFail, signupReq, signupSuccess, signupFail } from "../slices/loginSlice";
import { db } from "../firebase/config";
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';


export const login = ({ email, password }) => async (dispatch) => {
  dispatch(loginRequest())

  const q = query(collection(db, "users"),where("email", "==", email));
  const querySnapshot = await getDocs(q);
const user = querySnapshot.docs[0]?.data();

try{
  if (user === undefined && email) {
    dispatch(loginFail('Invalid Login Credentials'))
  } else {
    if (user.password === password) {
      localStorage.setItem('authToken', JSON.stringify({email,password}));
      dispatch(loginSuccess(user))
    } else if (user.password === undefined){
      dispatch(loginFail('Invalid Password'))
    } else if (password !== user.password) {
      dispatch(loginFail('incorrect Password!'))
    }
  }
}catch(error){
  console.log(error.message);
  dispatch(loginFail(error.message))
}
}

export const signUp = ({name ,email, password,CreatedAt})=> async (dispatch)=>{
  let getDate = new Date();
  let getMonth = getDate.getMonth() + 1;
  let CreatedAt = getDate.getDate() + '/' + getMonth + '/' + getDate.getFullYear()
  try{
  dispatch(signupReq())
  if(!name || !email || !password){
    dispatch(signupFail("Pls enter all details"))
  }
  else if (name && email && password) {
   await addDoc(collection(db, "users"), {
      name,
      email,
      password,
      CreatedAt
  });
  localStorage.setItem("authToken",JSON.stringify({email,password}))
  dispatch(signupSuccess({name,email,password,CreatedAt}))
}

}catch(error){
dispatch(signupFail(error.message))
}
}


    