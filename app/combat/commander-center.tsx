import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CommanderCenterScreen = () => {
  const handleIssueOrder = (order: string) => {
    alert(`Order issued: ${order}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Commander Center</Text>
      <View style={styles.ordersContainer}>
        <TouchableOpacity style={styles.orderButton} onPress={() => handleIssueOrder('Attack')}> 
          <Text style={styles.orderButtonText}>Attack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderButton} onPress={() => handleIssueOrder('Defend')}> 
          <Text style={styles.orderButtonText}>Defend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderButton} onPress={() => handleIssueOrder('Retreat')}> 
          <Text style={styles.orderButtonText}>Retreat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gold',
    marginVertical: 20,
    fontFamily: 'serif',
  },
  ordersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 40,
  },
  orderButton: {
    backgroundColor: 'gold',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  orderButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CommanderCenterScreen;
