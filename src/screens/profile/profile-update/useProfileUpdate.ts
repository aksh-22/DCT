import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRequest} from 'src/constants/useRequest';
import {updateUser} from 'src/store/reducer/userReducer';
import {useAppSelector} from 'src/utils/reducer';

type Props = {};

const useProfileUpdate = ({}: Props = {}) => {
  const user = useAppSelector(state => state.userReducer.user);

  const dispatch = useDispatch();

  const [name, setName] = useState({value: user?.name ?? '', error: ''});
  const [email, setEmail] = useState({value: user?.email ?? '', error: ''});
  const [mobile, setMobile] = useState({value: user?.mobile ?? '', error: ''});
  const [userName, setUserName] = useState({
    value: user?.username ?? '',
    error: '',
  });

  const onNameChange = (txt: string) => {
    setName({error: '', value: txt});
  };

  const onEmailChange = (txt: string) => {
    setEmail({error: '', value: txt});
  };

  const onMobileChange = (txt: string) => {
    setMobile({error: '', value: txt});
  };

  const onUserNameChange = (txt: string) => {
    setUserName({error: '', value: txt});
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
    dispatch(updateUser(fData.data.profile));
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
    onUserNameChange,
    isLoading,
    onUpdate,
    userName,
  };
};

export default useProfileUpdate;
