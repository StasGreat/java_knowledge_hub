import React, { useMemo, useState } from 'react';

type QuizCardProps = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  storageKey?: string;
};

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
      const existing = window.localStorage.getItem(key);
      const parsed = existing ? JSON.parse(existing) : { attempts: 0, correct: 0 };
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
        Check answer
      </button>
      {submitted && (
        <div className="quizResult">
          <p>{selected === correctIndex ? 'Correct.' : 'Incorrect.'}</p>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
