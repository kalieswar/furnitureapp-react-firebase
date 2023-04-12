import { loginRequest, loginSuccess, loginFail } from "../slices/loginSlice";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from 'firebase/firestore';

export const login = ({ email, password }) => async (dispatch) => {
  dispatch(loginRequest())

  const q = query(collection(db, "users"),where("email", "==", email));
  const querySnapshot = await getDocs(q);

  console.log('test',querySnapshot.docs[0].data());

  if (querySnapshot.empty) {
    dispatch(loginFail('Invalid Login Credentials'))
  } else {
    const user = querySnapshot.docs[0].data();

    if (user.password === password) {
      dispatch(loginSuccess(user))
    } else {
      dispatch(loginFail('Invalid Login Credentials'))
    }
  }
}


    