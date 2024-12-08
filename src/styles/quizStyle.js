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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  correctOption: {
    backgroundColor: '#A8D5BA', // Green pastel
    fontWeight: 'bold',
  },
  incorrectOption: {
    backgroundColor: '#F4C6D6', // Pink pastel
  },
  optionText: {
    fontSize: 14,
    color: '#333', // Default text color
  },
  selectedOptionText: {
    color: '#F4F1F1', // White text for selected option
  },
  nextButton: {
    backgroundColor: '#A8D0E6', // Blue pastel
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
