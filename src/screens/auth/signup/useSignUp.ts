import {useState} from 'react';
import {Keyboard} from 'react-native';
import {AuthStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import randomNumber from 'src/utils/randomNumber';

type Props = {
  navigate: any;
};

const useSignUp = ({navigate}: Props) => {
  const [name, setName] = useState(`Aksh Test ${randomNumber}`);
  const [nameError, setNameError] = useState('');
  const [username, setUserName] = useState(`akshTest00${randomNumber}`);
  const [userNameError, setUserNameError] = useState('');
  const [email, setEmail] = useState(`test${randomNumber}@dct.com`);
  const [emailError, setEmailError] = useState('');
  const [mobile, setMobile] = useState('9999999991');
  const [mobileError, setMobileError] = useState('');
  const [password, setPassword] = useState('12345678');
  const [passwordError, setPasswordError] = useState('');

  const onSignUpPress = () => {
    if (!name) {
      setNameError('Name is required');
    } else if (!username) {
      setUserNameError('User Name is required');
    } else if (!email) {
      setEmailError('Email is required');
    } else if (!mobile) {
      setMobileError('Phone number is required');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
      Keyboard.dismiss();
      const data = {
        name,
        email,
        password,
        mobile,
        username,
      };
      sendRequest(data);
    }
  };

  const onSignUpSuccess = data => {
    const dataToPass: any = {
      mobile,
    };
    navigate(AuthStackName.OTP, dataToPass);
  };

  const onChangeName = txt => {
    setName(txt);
    nameError && setNameError('');
  };

  const onChangeUserName = txt => {
    setUserName(txt);
    userNameError && setUserNameError('');
  };

  const onChangePassword = txt => {
    setPassword(txt);
    passwordError && setPasswordError('');
  };

  const onChangeEmail = txt => {
    setEmail(txt);
    emailError && setEmailError('');
  };

  const onChangeMobile = txt => {
    setMobile(txt);
    mobileError && setMobileError('');
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'auth/register',
    onSuccess: onSignUpSuccess,
    requestType: 'POST',
  });

  const onLoginPress = () => {
    navigate(AuthStackName.LOGIN);
  };

  return {
    onSignUpPress,
    onChangeName,
    onChangeUserName,
    onChangePassword,
    onChangeEmail,
    onChangeMobile,
    onLoginPress,
    isLoading,
    details: {
      name,
      email,
      password,
      mobile,
      username,
    },
    error: {
      nameError,
      emailError,
      passwordError,
      mobileError,
      userNameError,
    },
  };
};

export default useSignUp;
