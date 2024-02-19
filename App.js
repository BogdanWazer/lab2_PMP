import React, { useState } from 'react';
import {
  StatusBar,
  Button,
  TextInput,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState('');
  const [authorInfo, setAuthorInfo] = useState('');
  const [showAuthorPhoto, setShowAuthorPhoto] = useState(false);
  const authorImage = require('./assets/images/f1.png');

  const calculateF = () => {
    const parsedX = parseFloat(x);
    const parsedY = parseFloat(y);

    if (!isNaN(parsedX) && !isNaN(parsedY)) {
      const F =
        Math.sqrt(
          Math.pow(2 + parsedY, 2) + Math.pow(Math.sin(parsedY + 5), 1 / 7)
        ) /
        (Math.log(parsedX + 1) - Math.pow(parsedY, 3));

      if (!isNaN(F)) {
        setResult(`Результат: ${F}`);
      } else {
        setResult('Введіть коректні значення для розрахунку.');
      }
    } else {
      setResult('Невірні значення. Будь ласка, введіть числа.');
    }
  };

  const showAuthorInfo = () => {
    if (authorInfo || showAuthorPhoto) {
      setAuthorInfo('');
      setShowAuthorPhoto(false);
    } else {
      setAuthorInfo(
        'Автор: Кічак Богдан Володимирович, Факультет інформаційних технологій, 4 курс, КН22004бск'
      );
      setShowAuthorPhoto(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Розрахунок прикладу</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setX(text)}
        value={x}
        placeholder="Введіть значення x"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setY(text)}
        value={y}
        placeholder="Введіть значення y"
        keyboardType="numeric"
      />
      <Button onPress={calculateF} title="Розрахувати" />
      <Text style={styles.result}>{result}</Text>
      <Button onPress={showAuthorInfo} title="Показати інформацію про автора" />
      <Text style={styles.authorInfo}>{authorInfo}</Text>
      {showAuthorPhoto && (
        <Image source={authorImage} style={styles.authorImage} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  authorInfo: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  authorImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100, // робить зображення круглим
  },
});
