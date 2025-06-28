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

import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setInitialized(true);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === 'auth';

    if (session && !inAuthGroup) {
      router.replace('/');
    } else if (!session) {
      router.replace('/auth/login');
    }
  }, [initialized, session, segments]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || !initialized) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}