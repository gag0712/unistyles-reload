import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import './unistyles';
import { CodePushButton } from './src/ReloadButton';
import { codePushOptions } from './src/codePushOptions';
import CodePush from '@bravemobile/react-native-code-push';

function App() {
  return (
    <SafeAreaProvider>
      <AppScreen />
    </SafeAreaProvider>
  );
}

const AppScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const [error, setError] = useState<Error | null>(null);
  return (
    <ErrorBoundary
      onError={e => setError(e)}
      fallback={<ErrorScreen error={error} />}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
        ]}
      >
        <CodePushButton />
      </View>
    </ErrorBoundary>
  );
};

const ErrorScreen = ({ error }: { error: Error | null }) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}
    >
      <Text>{error?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CodePush(codePushOptions)(App);
