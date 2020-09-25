import { differenceInDays } from 'date-fns';

export const donutChartData = [
  { group: 'Total Done', measure: 45, percent: 0.3, colour: '#2A6183' },
  { group: 'In Progress', measure: 51, percent: 0.35, colour: '#41A2B0' },
  { group: 'Overdue', measure: 2, percent: 0.1, colour: '#EF7365' },
  { group: 'To Do', measure: 11, percent: 0.25, colour: '#9b9b9b' },
];

export enum TimelineObjectType {
  phase = 'phase',
  milestone = 'milestone',
}
export interface Phase {
  __typename: TimelineObjectType.phase;
  name: string;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  completedDays: number;
  overdueDays: number;
}

export interface Milestone {
  __typename: TimelineObjectType.milestone;
  name: string;
  dueDate: Date;
}

export type TimelineObject = Phase | Milestone;

export const demoData: TimelineObject[] = [
  {
    __typename: TimelineObjectType.phase,
    name: 'Phase 1',
    startDate: new Date(2020, 1, 14),
    endDate: new Date(2020, 5, 15),
    totalDays: differenceInDays(new Date(2020, 5, 15), new Date(2020, 1, 14)),
    completedDays: differenceInDays(new Date(2020, 5, 15), new Date()),
    overdueDays: 0,
  },
  {
    __typename: TimelineObjectType.phase,
    name: 'Phase 2',
    startDate: new Date(2020, 2, 1),
    endDate: new Date(2020, 2, 15),
    totalDays: differenceInDays(new Date(2020, 2, 15), new Date(2020, 2, 1)),
    completedDays: differenceInDays(new Date(2020, 2, 15), new Date()),
    overdueDays: 0,
  },
  {
    __typename: TimelineObjectType.phase,
    name: 'Phase 3',
    startDate: new Date(2020, 4, 20),
    endDate: new Date(2020, 6, 25),
    totalDays: differenceInDays(new Date(2020, 6, 25), new Date(2020, 4, 20)),
    completedDays: differenceInDays(new Date(2020, 6, 25), new Date()),
    overdueDays: 2,
  },
  {
    __typename: TimelineObjectType.milestone,
    name: 'Milestone',
    dueDate: new Date(2020, 6, 25),
  },
  {
    __typename: TimelineObjectType.phase,
    name: 'Phase 4',
    startDate: new Date(2020, 3, 10),
    endDate: new Date(2020, 3, 15),
    totalDays: differenceInDays(new Date(2020, 3, 15), new Date(2020, 3, 10)),
    completedDays: differenceInDays(new Date(2020, 3, 15), new Date()),
    overdueDays: 0,
  },
];
