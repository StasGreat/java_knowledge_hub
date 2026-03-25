import React, { useMemo, useState } from 'react';
import { saveQuizResult } from '@site/src/utils/progress';

type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

type TopicQuizProps = {
  topicId: string;
  questions: QuizQuestion[];
  threshold?: number;
  title?: string;
};

export default function TopicQuiz({
  topicId,
  questions,
  threshold = 90,
  title = 'Topic quiz',
}: TopicQuizProps): React.JSX.Element {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = questions.length;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  const submitQuiz = () => {
    const correctAnswers = questions.reduce((count, question, index) => {
      return count + (answers[index] === question.correctIndex ? 1 : 0);
    }, 0);

    const nextScore = Math.round((correctAnswers / totalQuestions) * 100);
    setScore(nextScore);
    setSubmitted(true);
    saveQuizResult(topicId, nextScore, threshold);
  };

  return (
    <div className="quizPanel">
      <div className="quizPanelHeader">
        <div>
          <h2>{title}</h2>
          <p>Pass rule: {threshold}% or more. Your best result will be saved in the browser.</p>
        </div>
        <div className="quizMeta">Answered: {answeredCount}/{totalQuestions}</div>
      </div>

      {questions.map((question, index) => (
        <div className="quizQuestionCard" key={`${topicId}-${index}`}>
          <p><strong>{index + 1}. {question.question}</strong></p>
          <div className="quizOptions">
            {question.options.map((option, optionIndex) => {
              const isSelected = answers[index] === optionIndex;
              const isCorrect = question.correctIndex === optionIndex;
              const showFeedback = submitted;

              return (
                <label
                  key={`${topicId}-${index}-${optionIndex}`}
                  className={[
                    'quizOption',
                    isSelected ? 'quizOption--selected' : '',
                    showFeedback && isCorrect ? 'quizOption--correct' : '',
                    showFeedback && isSelected && !isCorrect ? 'quizOption--wrong' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <input
                    type="radio"
                    name={`${topicId}-${index}`}
                    checked={isSelected}
                    onChange={() => {
                      setAnswers((current) => ({ ...current, [index]: optionIndex }));
                      setSubmitted(false);
                    }}
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
          {submitted && (
            <div className="quizExplanation">
              <strong>Explanation:</strong> {question.explanation}
            </div>
          )}
        </div>
      ))}

      <div className="quizFooterActions">
        <button
          type="button"
          className="button button--primary button--lg"
          onClick={submitQuiz}
          disabled={answeredCount !== totalQuestions}
        >
          Submit quiz
        </button>
        <button
          type="button"
          className="button button--secondary button--lg"
          onClick={() => {
            setAnswers({});
            setSubmitted(false);
            setScore(0);
          }}
        >
          Clear answers
        </button>
      </div>

      {submitted && (
        <div className={`quizSummary ${score >= threshold ? 'quizSummary--pass' : 'quizSummary--retry'}`}>
          <h3>Result: {score}%</h3>
          <p>
            {score >= threshold
              ? `Topic completed automatically because the quiz result is at least ${threshold}%.`
              : 'Topic stays in progress. You can retake the quiz or mark the topic manually.'}
          </p>
        </div>
      )}
    </div>
  );
}
