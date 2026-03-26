import React, { useEffect, useMemo, useRef, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import { QUIZ_PASS_THRESHOLD } from '@site/src/constants/progress';
import { getTopicProgress, getTopicStatus, markTopicOpened, saveQuizResult } from '@site/src/utils/progress';
import { getTopicStatusLabel } from '@site/src/utils/topicStatus';

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
  threshold = QUIZ_PASS_THRESHOLD,
  title,
}: TopicQuizProps): React.JSX.Element {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [progressState, setProgressState] = useState(() => getTopicProgress(topicId));

  const totalQuestions = questions.length;
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const status = getTopicStatus(progressState);

  useEffect(() => {
    setProgressState(markTopicOpened(topicId));
  }, [topicId]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const markdown = panel.closest('.theme-doc-markdown');
    const heading = markdown?.querySelector<HTMLHeadingElement>('h1');
    if (!heading) return;

    heading.classList.toggle('topicTitle--completed', progressState.quizPassed);
    return () => heading.classList.remove('topicTitle--completed');
  }, [progressState.quizPassed, topicId]);

  const submitQuiz = () => {
    const correctAnswers = questions.reduce((count, question, index) => {
      return count + (answers[index] === question.correctIndex ? 1 : 0);
    }, 0);

    const nextScore = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);
    setScore(nextScore);
    setSubmitted(true);
    setProgressState(saveQuizResult(topicId, nextScore, threshold));
  };

  return (
    <div className="quizPanel" ref={panelRef}>
      <div className="quizPanelHeader">
        <div>
          <div className="quizPanelTitleRow">
            <h2>
              {title ??
                translate({
                  id: 'topicQuiz.defaultTitle',
                  message: 'Topic quiz',
                })}
            </h2>
            <div className="quizTopicProgress">
              <div className={`topicStatusBadge topicStatusBadge--${status}`}>{getTopicStatusLabel(status)}</div>
              <div className="quizTopicBestScore">
                <span>
                  {translate({
                    id: 'topicProgress.bestQuizScore',
                    message: 'Best quiz score',
                  })}
                </span>
                <strong>{progressState.bestScore}%</strong>
              </div>
            </div>
          </div>
          <p>
            {translate(
              {
                id: 'topicQuiz.passRule',
                message: 'Pass rule: {threshold}% or more. Your best result will be saved in the browser.',
              },
              { threshold },
            )}
          </p>
        </div>
        <button type="button" className="button button--outline button--sm" onClick={() => setIsOpen((value) => !value)}>
          {isOpen
            ? translate({
                id: 'topicQuiz.hide',
                message: 'Hide quiz',
              })
            : translate({
                id: 'topicQuiz.open',
                message: 'Open quiz',
              })}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="quizMeta">
            {translate(
              {
                id: 'topicQuiz.answered',
                message: 'Answered: {answeredCount}/{totalQuestions}',
              },
              { answeredCount, totalQuestions },
            )}
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
                  <strong>
                    {translate({
                      id: 'topicQuiz.explanation',
                      message: 'Explanation:',
                    })}
                  </strong>{' '}
                  {question.explanation}
                </div>
              )}
            </div>
          ))}

          <div className="quizFooterActions">
            <button
              type="button"
              className="button button--primary button--lg"
              onClick={submitQuiz}
              disabled={totalQuestions === 0 || answeredCount !== totalQuestions}
            >
              {translate({
                id: 'topicQuiz.submit',
                message: 'Submit quiz',
              })}
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
              {translate({
                id: 'topicQuiz.clearAnswers',
                message: 'Clear answers',
              })}
            </button>
          </div>

          {submitted && (
            <div className={`quizSummary ${score >= threshold ? 'quizSummary--pass' : 'quizSummary--retry'}`}>
              <h3>
                {translate(
                  {
                    id: 'topicQuiz.result',
                    message: 'Result: {score}%',
                  },
                  { score },
                )}
              </h3>
              {score < threshold && (
                <div className="quizSummaryMeta">
                  <span>
                    {translate({
                      id: 'topicProgress.bestQuizScore',
                      message: 'Best quiz score',
                    })}
                  </span>
                  <strong>{progressState.bestScore}%</strong>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
