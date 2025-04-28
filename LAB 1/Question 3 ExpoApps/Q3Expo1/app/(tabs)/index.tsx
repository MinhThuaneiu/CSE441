import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View style={{ alignItems: "center", marginTop: 20}}>
      <text>You have pressed the button : {pressCount} time</text>
      <Button title="Press me" onPress={()=> setPressCount(pressCount + 1)}></Button>
    </View>
  );
}

