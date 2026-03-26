import React, { useMemo, useState } from 'react';
import { translate } from '@docusaurus/Translate';

type QuizCardProps = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  storageKey?: string;
};

type QuizStats = {
  attempts: number;
  correct: number;
};

const defaultQuizStats: QuizStats = {
  attempts: 0,
  correct: 0,
};

function getQuizStats(storageKey: string): QuizStats {
  if (typeof window === 'undefined') return defaultQuizStats;

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return defaultQuizStats;

    const parsed = JSON.parse(raw) as Partial<QuizStats>;
    return {
      attempts: Number.isFinite(parsed.attempts) ? parsed.attempts : 0,
      correct: Number.isFinite(parsed.correct) ? parsed.correct : 0,
    };
  } catch {
    return defaultQuizStats;
  }
}

export default function QuizCard({
  question,
  options,
  correctIndex,
  explanation,
  storageKey,
}: QuizCardProps) {
  const key = useMemo(() => storageKey ?? `quiz:${question}`, [question, storageKey]);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submit = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (typeof window !== 'undefined') {
      const parsed = getQuizStats(key);
      const next = {
        attempts: parsed.attempts + 1,
        correct: parsed.correct + (selected === correctIndex ? 1 : 0),
      };
      window.localStorage.setItem(key, JSON.stringify(next));
    }
  };

  return (
    <div className="quizCard">
      <p><strong>{question}</strong></p>
      <div className="quizOptions">
        {options.map((option, index) => (
          <label key={option} className="quizOption">
            <input
              type="radio"
              name={key}
              checked={selected === index}
              onChange={() => {
                setSelected(index);
                setSubmitted(false);
              }}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <button className="button button--primary" type="button" onClick={submit}>
        {translate({
          id: 'quizCard.checkAnswer',
          message: 'Check answer',
        })}
      </button>
      {submitted && (
        <div className="quizResult">
          <p>
            {selected === correctIndex
              ? translate({
                  id: 'quizCard.correct',
                  message: 'Correct.',
                })
              : translate({
                  id: 'quizCard.incorrect',
                  message: 'Incorrect.',
                })}
          </p>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
