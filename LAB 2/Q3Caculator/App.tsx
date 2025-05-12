import React from "react";
import {Text,SafeAreaView, View, TouchableOpacity} from 'react-native'
import styles from "./style";
import { useState } from "react";

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num) => {
     if(displayValue ===  '0'){
        setDisplayValue(num.toString());
     } else {
        setDisplayValue(displayValue + num);
     }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if(operator ===  '+'){
      setDisplayValue((num1 + num2).toString());
    } else if(operator ===  '-'){
      setDisplayValue((num1 - num2).toString());
    }
    else if(operator ===  '*'){
      setDisplayValue((num1 * num2).toString());
    }
    else if(operator ===  '/'){
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return(
    <SafeAreaView style={styles.container_defalut}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.display}>{displayValue}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('7')}>
             <Text style={styles.num}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('8')}>
            <Text style={styles.num}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('9')}>
            <Text style={styles.num}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.calculus}
          onPress={() => handleOperatorInput('/')}>
            <Text style={styles.texCal}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('4')}>
             <Text style={styles.num}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('5')}>
            <Text style={styles.num}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('6')}>
            <Text style={styles.num}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.calculus}
          onPress={() => handleOperatorInput('*')}>
            <Text style={styles.texCal}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('1')}>
             <Text style={styles.num}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('2')}>
            <Text style={styles.num}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.number}
          onPress={() => handleNumberInput('3')}>
            <Text style={styles.num}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.calculus}
          onPress={() => handleOperatorInput('-')}>
            <Text style={styles.texCal}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.number_0}
          onPress={() => handleNumberInput('0')}>
             <Text style={styles.num}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.calculus}
          onPress={() => handleOperatorInput('+')}>
            <Text style={styles.texCal}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.result}
          onPress={() => handleEqual()}>
            <Text style={styles.texCal}>=</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
          style={styles.clear} 
          onPress={() => handleClear()}>
            <Text style={styles.num}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

}