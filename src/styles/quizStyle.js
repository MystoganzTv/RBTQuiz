import { StyleSheet } from 'react-native';

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  questionCounter: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  questionBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
  },
  option: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  disabledOption: {
    opacity: 0.5,
  },
  correctOption: {
    backgroundColor: '#A8D5BA',
  },
  incorrectOption: {
    backgroundColor: '#F4C6D6',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  explanationBox: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  explanationHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    marginBottom: 4,
  },
  correctExplanation: {
    color: '#2E7D32',
  },
  incorrectExplanation: {
    color: '#C62828',
  },
  nextButton: {
    backgroundColor: '#6cd7da',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
