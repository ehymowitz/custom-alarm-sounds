import * as CustomAlarmSounds from "custom-alarm-sounds";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  const setAlarm = () => {
    CustomAlarmSounds.setAlarm(1, 2, "artist-name", "alarm-location");
  };

  return (
    <View style={styles.container}>
      <Button onPress={setAlarm} title="set alarm" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
