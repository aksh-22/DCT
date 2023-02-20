import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import {setToken} from 'src/store/reducer/userReducer';

type Props = {
  navigate: (path: any) => void;
};

const useLogin = ({navigate}: Props) => {
  const [name, setName] = useState('test2@dct.com');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('12345678');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const loginPress = () => {
    if (!name) {
      setNameError('User name is required');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
      Keyboard.dismiss();
      const data = {
        email: name,
        password,
      };
      sendRequest(data);
    }
  };

  const onLoginSuccess = data => {
    const dataToSet = {
      token: data.auth_token,
      user: data.data.user,
    };
    dispatch(setToken(dataToSet));
  };

  const onChangeName = txt => {
    setName(txt);
    nameError && setNameError('');
  };

  const onChangePassword = txt => {
    setPassword(txt);
    passwordError && setPasswordError('');
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'auth/login',
    onSuccess: onLoginSuccess,
    requestType: 'POST',
  });

  const onSignUpPress = () => {
    navigate(AuthStackName.SIGN_UP);
  };

  const onForgotPasswordPress = () => {
    navigate(AuthStackName.FORGOT_PASSWORD);
  };

  return {
    name,
    nameError,
    password,
    passwordError,
    isLoading,
    loginPress,
    onSignUpPress,
    onForgotPasswordPress,
    onChangeName,
    onChangePassword,
  };
};

export default useLogin;
