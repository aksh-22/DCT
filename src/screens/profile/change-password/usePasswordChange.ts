import {useState} from 'react';
import {showMessage} from 'src/components/MessageModal';
import {useRequest} from 'src/constants/useRequest';

type Props = {
  goBack?: () => void;
};

const usePasswordChange = ({goBack}: Props = {}) => {
  const [oldPassword, setOldPassword] = useState({
    value: '12345678',
    error: '',
  });
  const [newPassword, setNewPassword] = useState({
    value: '12345678',
    error: '',
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: '12345678',
    error: '',
  });

  const onOldPasswordChange = txt => {
    setOldPassword({error: '', value: txt});
  };
  const onNewPasswordChange = txt => {
    setNewPassword({error: '', value: txt});
  };
  const onConfirmPasswordChange = txt => {
    setConfirmPassword({error: '', value: txt});
  };

  const onUpdate = () => {
    if (!oldPassword.value) {
      setOldPassword(prev => ({...prev, error: 'Old password is required*'}));
    } else if (!newPassword.value) {
      setNewPassword(prev => ({...prev, error: 'New password is required*'}));
    } else if (confirmPassword.value !== newPassword.value) {
      setConfirmPassword(prev => ({
        ...prev,
        error: 'New password and confirm password should match',
      }));
    } else {
      onSend();
    }
  };

  const onSend = () => {
    const dataToSend = {
      old_password: oldPassword.value,
      new_password: newPassword.value,
      confirm_password: confirmPassword.value,
    };
    sendRequest(dataToSend);
  };

  const onSuccess = () => {
    showMessage({
      message: 'Password successfully changes',
      modalType: 'Success',
    });
    goBack();
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'profile/change-password',
    requestType: 'POST',
    onSuccess,
  });

  return {
    oldPassword,
    newPassword,
    confirmPassword,
    onOldPasswordChange,
    onNewPasswordChange,
    onConfirmPasswordChange,
    isLoading,
    onUpdate,
  };
};

export default usePasswordChange;
