import {useState} from 'react';
import {useRequest} from 'src/constants/useRequest';
import {useAppSelector} from 'src/utils/reducer';

type Props = {};

const useProfileUpdate = ({}: Props = {}) => {
  const user = useAppSelector(state => state.userReducer.user);

  const [name, setName] = useState({value: user?.name, error: ''});
  const [email, setEmail] = useState({value: user?.email, error: ''});
  const [mobile, setMobile] = useState({value: user?.mobile, error: ''});
  const [userName, setUserName] = useState({value: user?.name, error: ''});

  const onNameChange = (txt: string) => {
    setName(prev => ({...prev, value: txt}));
  };

  const onEmailChange = (txt: string) => {
    setEmail(prev => ({...prev, value: txt}));
  };

  const onMobileChange = (txt: string) => {
    setMobile(prev => ({...prev, value: txt}));
  };

  const onUpdate = () => {
    if (!name.value) {
      setName(prev => ({...prev, error: 'Name is required*'}));
    } else if (!email.value) {
      setEmail(prev => ({...prev, error: 'Email is required*'}));
    } else if (!mobile.value) {
      setMobile(prev => ({...prev, error: 'Mobile is required*'}));
    } else if (!userName.value) {
      setUserName(prev => ({...prev, error: 'User name is required*'}));
    } else {
      onSend();
    }
  };

  const onSend = () => {
    const dataToSend = {
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      username: userName.value,
    };

    sendRequest(dataToSend);
  };

  const onSuccess = fData => {
    console.log('fData', JSON.stringify(fData, null, 2));
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'profile/update',
    onSuccess,
    requestType: 'PATCH',
  });

  return {
    name,
    email,
    mobile,
    onNameChange,
    onEmailChange,
    onMobileChange,
    isLoading,
    onUpdate,
    userName,
  };
};

export default useProfileUpdate;
