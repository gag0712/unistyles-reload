import { StyleSheet } from 'react-native-unistyles';
import { Text, TouchableOpacity, View } from 'react-native';
import CodePush, {
  LocalPackage,
  RemotePackage,
} from '@bravemobile/react-native-code-push';
import { useState } from 'react';

export const CodePushButton = () => {
  const [remotePackage, setRemotePackage] = useState<RemotePackage | null>(
    null,
  );
  const [localPackage, setLocalPackage] = useState<LocalPackage | null>(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={async () => {
          const response = await CodePush.checkForUpdate();
          setRemotePackage(response);
        }}
      >
        <Text>check for update</Text>
      </TouchableOpacity>
      {remotePackage && (
        <>
          <View>
            <Text>remotePackage: {remotePackage.appVersion}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={async () => {
              const response = await remotePackage.download();
              setLocalPackage(response);
            }}
          >
            <Text>download remote package</Text>
          </TouchableOpacity>
        </>
      )}
      {localPackage && (
        <>
          <View>
            <Text>localPackage: {localPackage.appVersion}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={async () => {
              await localPackage.install(CodePush.InstallMode.IMMEDIATE);
            }}
          >
            <Text>
              install local package and jsBundle changed and app will restart
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  buttonContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
