import { ETaskPriority, ITask } from '@/modules/TaskBar';

export const taskListMock: ITask[] = [
	{
		id: '1',
		title: 'Задача 1',
		description: 'Описание задачи',
		priority: ETaskPriority.HIGH,
		isDone: false,
	},
	{
		id: '2',
		title: 'Задача 2',
		priority: ETaskPriority.NORMAL,
		isDone: true,
	},
];
