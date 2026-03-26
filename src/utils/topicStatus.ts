import { translate } from '@docusaurus/Translate';
import type { TopicStatus } from '@site/src/utils/progress';

export function getTopicStatusLabel(status: TopicStatus): string {
  const labels: Record<TopicStatus, string> = {
    not_started: translate({
      id: 'topicProgress.status.notStarted',
      message: 'Not started',
    }),
    in_progress: translate({
      id: 'topicProgress.status.inProgress',
      message: 'In progress',
    }),
    completed: translate({
      id: 'topicProgress.status.completed',
      message: 'Completed',
    }),
  };

  return labels[status];
}
