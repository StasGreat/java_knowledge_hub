export type TopicStatus = 'not_started' | 'in_progress' | 'completed';

export type TopicProgressState = {
  manualCompleted: boolean;
  bestScore: number;
  quizPassed: boolean;
  opened: boolean;
};

const defaultState: TopicProgressState = {
  manualCompleted: false,
  bestScore: 0,
  quizPassed: false,
  opened: false,
};

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function key(topicId: string): string {
  return `jkh:topic:${topicId}`;
}

export function getTopicProgress(topicId: string): TopicProgressState {
  if (!isBrowser()) return defaultState;
  const raw = window.localStorage.getItem(key(topicId));
  if (!raw) return defaultState;

  try {
    return { ...defaultState, ...JSON.parse(raw) } as TopicProgressState;
  } catch {
    return defaultState;
  }
}

export function saveTopicProgress(topicId: string, state: TopicProgressState): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(key(topicId), JSON.stringify(state));
}

export function markTopicOpened(topicId: string): TopicProgressState {
  const current = getTopicProgress(topicId);
  const next = { ...current, opened: true };
  saveTopicProgress(topicId, next);
  return next;
}

export function setManualCompleted(topicId: string, manualCompleted: boolean): TopicProgressState {
  const current = getTopicProgress(topicId);
  const next = { ...current, manualCompleted, opened: true };
  saveTopicProgress(topicId, next);
  return next;
}

export function saveQuizResult(topicId: string, score: number, threshold: number): TopicProgressState {
  const current = getTopicProgress(topicId);
  const bestScore = Math.max(current.bestScore, score);
  const quizPassed = current.quizPassed || bestScore >= threshold;
  const next = { ...current, opened: true, bestScore, quizPassed };
  saveTopicProgress(topicId, next);
  return next;
}

export function resetTopicProgress(topicId: string): TopicProgressState {
  saveTopicProgress(topicId, defaultState);
  return defaultState;
}

export function getTopicStatus(state: TopicProgressState): TopicStatus {
  if (state.manualCompleted || state.quizPassed) return 'completed';
  if (state.opened || state.bestScore > 0) return 'in_progress';
  return 'not_started';
}

export function getAllTopicsCompletion(topicIds: string[]): { completed: number; total: number; percent: number } {
  const total = topicIds.length;
  const completed = topicIds.filter((topicId) => getTopicStatus(getTopicProgress(topicId)) === 'completed').length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
