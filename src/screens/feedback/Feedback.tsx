import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import feedbackStyle from './feedback.style';

type Props = {};

const Feedback = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack heading="Feedback" />
      <Container contentContainerStyle={globalStyles.pd_20}>
        <CustomInput
          multiline
          inputBoxStyle={feedbackStyle.input}
          placeholder="Write your feedback here..."
        />
        <CustomButton title="Submit" style={feedbackStyle.button} />
      </Container>
    </>
  );
};

export default Feedback;
