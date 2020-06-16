import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {Chime, Clap} from './chime';
import Tts from './tts';

import KeepAwake from 'react-native-keep-awake';

const Input = ({}) => {
  const [value, setValue] = useState(15);
  const [showInput, setShowInput] = useState(true);
  let time = 0;

  const handlePress = () => {
    let input = showInput ? false : true;
    setShowInput(input);
    KeepAwake.activate();
    setInterval(playSound, 60000);
  };

  const playSound = () => {
    time += 1;
    if (time < value) {
      Chime.play();
    } else if (time === value) {
      Clap.play();
    } else {
      KeepAwake.deactivate();
      Chime.stop();
    }
    return;
  };

  return (
    <View style={styles.container}>
      {showInput ? (
        [
          <TextInput
            style={styles.input}
            placeholder="input minutes"
            onChangeText={(text) => setValue(text)}
            value={value}
            defaultValue={value}
            keyboardType="numeric"
          />,
          <Button
            style={styles.button}
            title="Start"
            color="black"
            disabled={!showInput ? true : false}
            onPress={handlePress}
          />,
        ]
      ) : (
        <View>
          <Text style={styles.text}>{`${value} mins meditation started.`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    fontSize: 20,
    padding: 3,
    borderWidth: 1,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    marginVertical: 20,
    minWidth: 150,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Input;
