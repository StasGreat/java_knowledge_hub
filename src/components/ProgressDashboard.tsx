import React, { useEffect, useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { QUIZ_PASS_THRESHOLD } from '@site/src/constants/progress';
import { topics } from '@site/src/data/topics';
import { getAllTopicsCompletion, getTopicProgress, getTopicStatus, type TopicStatus } from '@site/src/utils/progress';
import { getTopicStatusLabel } from '@site/src/utils/topicStatus';

type FilterValue = 'all' | TopicStatus;

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
      const title = translate({
        id: `topics.${topic.id}.title`,
        message: topic.title,
      });
      const section = translate({
        id: topic.sectionTranslationId,
        message: topic.section,
      });
      return {
        ...topic,
        title,
        section,
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
          <div className="eyebrow">
            {translate({
              id: 'progressDashboard.eyebrow',
              message: 'Learning progress',
            })}
          </div>
          <h2>
            {translate(
              {
                id: 'progressDashboard.completedSummary',
                message: '{completed} of {total} topics completed',
              },
              { completed: totals.completed, total: totals.total },
            )}
          </h2>
          <p>
            {translate(
              {
                id: 'progressDashboard.rule',
                message: 'Completion rule: manual mark or quiz result of at least {threshold}%.',
              },
              { threshold: QUIZ_PASS_THRESHOLD },
            )}
          </p>
        </div>
        <div className="progressBigValue">{totals.percent}%</div>
      </div>

      <div className="progressFilters">
        {(['all', 'not_started', 'in_progress', 'completed'] as FilterValue[]).map((item) => (
          <button
            key={item}
            type="button"
            className={`button ${filter === item ? 'button--primary' : 'button--outline'} button--sm`}
            onClick={() => setFilter(item)}
          >
            {item === 'all'
              ? translate({
                  id: 'progressDashboard.filter.all',
                  message: 'All',
                })
              : getTopicStatusLabel(item)}
          </button>
        ))}
      </div>

      <div className="progressList">
        {filtered.map((topic) => (
          <div className="progressItemCard" key={topic.id}>
            <div>
              <div className="progressItemMeta">{topic.section}</div>
              <h3>{topic.title}</h3>
              <div className={`topicStatusBadge topicStatusBadge--${topic.status}`}>{getTopicStatusLabel(topic.status)}</div>
            </div>
            <div className="progressItemStats">
              <div>
                {translate(
                  {
                    id: 'progressDashboard.bestQuiz',
                    message: 'Best quiz: {score}%',
                  },
                  { score: topic.state.bestScore },
                )}
              </div>
              <div>
                {translate(
                  {
                    id: 'progressDashboard.manual',
                    message: 'Manual: {value}',
                  },
                  {
                    value: topic.state.manualCompleted
                      ? translate({
                          id: 'common.yes',
                          message: 'Yes',
                        })
                      : translate({
                          id: 'common.no',
                          message: 'No',
                        }),
                  },
                )}
              </div>
              <Link className="button button--outline button--sm" to={topic.path}>
                {translate({
                  id: 'progressDashboard.openTopic',
                  message: 'Open topic',
                })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
