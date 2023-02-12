import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles, {margin} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import feedbackStyle from './feedback.style';

type Props = {};

const Feedback = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack />
      <Container contentContainerStyle={globalStyles.pd_20}>
        <CustomText size={30}>Feedback</CustomText>
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
