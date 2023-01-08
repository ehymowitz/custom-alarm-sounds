import { StyleSheet, Text, View } from 'react-native';

import * as CustomAlarmSounds from 'custom-alarm-sounds';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{CustomAlarmSounds.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
