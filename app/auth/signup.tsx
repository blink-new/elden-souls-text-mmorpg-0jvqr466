import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Check your email for the confirmation link!');
      router.replace('/auth/login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/auth/login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
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

export default SignupScreen;