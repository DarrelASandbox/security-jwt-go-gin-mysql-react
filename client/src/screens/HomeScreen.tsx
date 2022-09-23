import { useSelector } from 'react-redux';
import { UserState } from '../reducers/userReducer';
import { RootState } from '../store';

const HomeScreen = () => {
  // state.userLogin refers to reducers in store.tsx
  const userLogin = useSelector<RootState, UserState>((state) => state.userLogin);

  const { userInfo } = userLogin;
  const firstName = userInfo ? userInfo.firstName : null;

  return firstName ? <h1>Welcome {firstName}!</h1> : <h1>Welcome to the Home Page!</h1>;
};

export default HomeScreen;
