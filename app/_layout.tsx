
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'serif': require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately!
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack onLayout={onLayoutRootView}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
