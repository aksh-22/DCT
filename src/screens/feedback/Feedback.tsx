import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import feedbackStyle from './feedback.style';

type Props = {};

const Feedback = ({}: Props) => {
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
        />
        <CustomButton title="Submit" style={margin(30)} />
      </Container>
    </>
  );
};

export default Feedback;
