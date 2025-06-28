import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      router.replace('/');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/auth/signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gold',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'serif',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gold',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkText: {
    color: 'gold',
    textAlign: 'center',
  },
});

export default LoginScreen;