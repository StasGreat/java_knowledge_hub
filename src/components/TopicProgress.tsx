import React, { useEffect, useState } from 'react';
import {
  getTopicProgress,
  getTopicStatus,
  markTopicOpened,
  resetTopicProgress,
  setManualCompleted,
  type TopicProgressState,
  type TopicStatus,
} from '@site/src/utils/progress';

type TopicProgressProps = {
  topicId: string;
  title?: string;
};

const statusLabels: Record<TopicStatus, string> = {
  not_started: 'Not started',
  in_progress: 'In progress',
  completed: 'Completed',
};

export default function TopicProgress({ topicId, title }: TopicProgressProps): React.JSX.Element {
  const [state, setState] = useState<TopicProgressState>({
    manualCompleted: false,
    bestScore: 0,
    quizPassed: false,
    opened: false,
  });

  useEffect(() => {
    const openedState = markTopicOpened(topicId);
    setState(openedState);
  }, [topicId]);

  const status = getTopicStatus(state);

  return (
    <div className="topicProgressCard">
      <div className="topicProgressHeader">
        <div>
          <div className={`topicStatusBadge topicStatusBadge--${status}`}>
            {statusLabels[status]}
          </div>
          <h3>{title ?? 'Topic progress'}</h3>
        </div>
        <div className="topicProgressActions">
          <button
            type="button"
            className="button button--primary button--sm"
            onClick={() => setState(setManualCompleted(topicId, true))}
          >
            Mark completed
          </button>
          <button
            type="button"
            className="button button--secondary button--sm"
            onClick={() => setState(setManualCompleted(topicId, false))}
          >
            Remove manual mark
          </button>
          <button
            type="button"
            className="button button--outline button--sm"
            onClick={() => setState(resetTopicProgress(topicId))}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="topicProgressGrid">
        <div>
          <strong>Best quiz score</strong>
          <div>{state.bestScore}%</div>
        </div>
        <div>
          <strong>Quiz pass rule</strong>
          <div>90% or more</div>
        </div>
        <div>
          <strong>Automatic completion</strong>
          <div>{state.quizPassed ? 'Yes' : 'No'}</div>
        </div>
        <div>
          <strong>Manual completion</strong>
          <div>{state.manualCompleted ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  );
}
