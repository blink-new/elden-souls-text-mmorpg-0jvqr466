import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { CharacterProvider } from '../contexts/CharacterContext';

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
    <CharacterProvider>
      <Stack onLayout={onLayoutRootView}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </CharacterProvider>
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
  const [hasCharacter, setHasCharacter] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      if (session) {
        const { data } = await supabase.from('characters').select().eq('user_id', session.user.id).single();
        setHasCharacter(!!data);
      }
      setInitialized(true);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session) {
        const { data } = await supabase.from('characters').select().eq('user_id', session.user.id).single();
        setHasCharacter(!!data);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === 'auth';

    if (session && !inAuthGroup) {
      if (hasCharacter) {
        router.replace('/');
      } else {
        router.replace('/character/create');
      }
    } else if (!session) {
      router.replace('/auth/login');
    }
  }, [initialized, session, segments, hasCharacter]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || !initialized) {
    return null;
  }

  return (
    <CharacterProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="character/create" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </CharacterProvider>
  );
}