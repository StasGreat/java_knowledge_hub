import React, { useEffect, useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import { topics } from '@site/src/data/topics';
import { getAllTopicsCompletion, getTopicProgress, getTopicStatus, type TopicStatus } from '@site/src/utils/progress';

type FilterValue = 'all' | TopicStatus;

const labels: Record<TopicStatus, string> = {
  not_started: 'Not started',
  in_progress: 'In progress',
  completed: 'Completed',
};

export default function ProgressDashboard(): React.JSX.Element {
  const [filter, setFilter] = useState<FilterValue>('all');
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const handle = () => setVersion((value) => value + 1);
    window.addEventListener('storage', handle);
    return () => window.removeEventListener('storage', handle);
  }, []);

  const progressItems = useMemo(() => {
    return topics.map((topic) => {
      const state = getTopicProgress(topic.id);
      const status = getTopicStatus(state);
      return {
        ...topic,
        state,
        status,
      };
    });
  }, [version]);

  const totals = getAllTopicsCompletion(topics.map((topic) => topic.id));
  const filtered = filter === 'all' ? progressItems : progressItems.filter((item) => item.status === filter);

  return (
    <div>
      <div className="progressSummaryCard">
        <div>
          <div className="eyebrow">Learning progress</div>
          <h2>{totals.completed} of {totals.total} topics completed</h2>
          <p>Completion rule: manual mark or quiz result of at least 90%.</p>
        </div>
        <div className="progressBigValue">{totals.percent}%</div>
      </div>

      <div className="progressFilters">
        {(['all', 'not_started', 'in_progress', 'completed'] as FilterValue[]).map((item) => (
          <button
            key={item}
            type="button"
            className={`button ${filter === item ? 'button--primary' : 'button--secondary'} button--sm`}
            onClick={() => setFilter(item)}
          >
            {item === 'all' ? 'All' : labels[item]}
          </button>
        ))}
      </div>

      <div className="progressList">
        {filtered.map((topic) => (
          <div className="progressItemCard" key={topic.id}>
            <div>
              <div className="progressItemMeta">{topic.section}</div>
              <h3>{topic.title}</h3>
              <div className={`topicStatusBadge topicStatusBadge--${topic.status}`}>{labels[topic.status]}</div>
            </div>
            <div className="progressItemStats">
              <div>Best quiz: {topic.state.bestScore}%</div>
              <div>Manual: {topic.state.manualCompleted ? 'Yes' : 'No'}</div>
              <Link className="button button--outline button--sm" to={topic.path}>Open topic</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
