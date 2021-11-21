import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const MyCheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color="#4DC6FD"
    />
  );
};

export default MyCheckBox;