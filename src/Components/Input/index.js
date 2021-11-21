import * as React from 'react';
import { TextInput } from 'react-native-paper';

const MyInput = ({mode,label,style,multiline}) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={text => setText(text)}
      mode={mode}
      activeOutlineColor="#4DC6FD"
      style={style}
      multiline={multiline}
    />
  );
};

export default MyInput;