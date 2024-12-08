import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import questions from '../data/data';
import styles from '../styles/quizStyle';

const QuizScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerPress = index => {
    if (!isAnswered) {
      setSelectedAnswer(index);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      alert('Quiz Completed!');
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
              isAnswered ? styles.disabledOption : null,
            ]}
            onPress={() => handleAnswerPress(index)}
            disabled={isAnswered} // Disable options after selection
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {isAnswered &&
        current.explanations &&
        Array.isArray(current.explanations) && (
          <View style={styles.explanationBox}>
            <Text style={styles.explanationHeader}>Explanation:</Text>
            {current.explanations.map((explanation, index) => (
              <Text
                key={index}
                style={[
                  styles.explanationText,
                  index === current.correctOption
                    ? styles.correctExplanation
                    : styles.incorrectExplanation,
                ]}>
                {current.options[index]}: {explanation}
              </Text>
            ))}
          </View>
        )}

      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedAnswer === null ? styles.disabledButton : null,
        ]}
        onPress={handleNextQuestion}
        disabled={selectedAnswer === null}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;
