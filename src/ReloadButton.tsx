import { StyleSheet } from 'react-native-unistyles';
import { Text, TouchableOpacity } from 'react-native';
import CodePush from '@bravemobile/react-native-code-push';

export const CodePushButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => CodePush.restartApp()}
    >
      <Text>code push</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
});
