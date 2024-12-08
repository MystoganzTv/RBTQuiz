import styles from '../styles/quizStyle';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import questions from '../data/data';

const QuizScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerPress = index => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      alert('Quiz Completed! Congrats!');
    }
  };

  const current = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionCounter}>
          Question {currentQuestion + 1} of {questions.length}
        </Text>
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{current.question}</Text>
      </View>

      <FlatList
        data={current.options}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.option,
              selectedAnswer === index
                ? index === current.correctOption
                  ? styles.correctOption
                  : styles.incorrectOption
                : null,
            ]}
            onPress={() => handleAnswerPress(index)}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextQuestion}
        disabled={selectedAnswer === null}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;
