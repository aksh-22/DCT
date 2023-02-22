import React, {useState} from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {showMessage} from 'src/components/MessageModal';
import {margin, padding} from 'src/constants/globalStyles';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import feedbackStyle from './feedback.style';

type Props = {};

const Feedback = ({navigation}: BottomStackProps) => {
  const [feedback, setFeedback] = useState('');
  const [feedbackError, setFeedbackError] = useState('');

  const onSuccess = data => {
    console.log('data', JSON.stringify(data, null, 2));
    showMessage({
      message: data.message,
      modalType: 'Success',
      onPress: () => navigation.goBack(),
    });
  };

  const onChange = (txt: string) => {
    setFeedback(txt);
    feedbackError && setFeedbackError('');
  };

  const onSubmit = () => {
    if (!feedback) {
      setFeedbackError('Required*');
    } else if (feedback.trim().length < 10) {
      setFeedbackError('Feedback should be 10 character long.');
    } else {
      sendRequest({comment: feedback});
    }
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'feedback/add',
    onSuccess,
    requestType: 'POST',
  });

  return (
    <>
      <CustomHeader isBack heading="Feedback" />
      <Container contentContainerStyle={padding('0', '20')}>
        <CustomInput
          mainContainerStyle={margin(20)}
          multiline
          inputBoxStyle={feedbackStyle.input}
          placeholder="Write your feedback here..."
          customIconName="edit"
          mainIconStyle={feedbackStyle.mainIconStyle}
          value={feedback}
          onChangeText={onChange}
          errorMessage={feedbackError}
        />
        <CustomButton
          title="Submit"
          style={margin(30)}
          onPress={onSubmit}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
};

export default Feedback;
