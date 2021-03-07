import { ITask } from '@/modules';

export const taskListMock: ITask[] = [
	{
		id: '1',
		title: 'Задача 1',
		description: 'Описание задачи',
		priority: 1,
		isDone: false,
	},
	{
		id: '2',
		title: 'Задача 2',
		priority: 2,
		isDone: true,
	},
];
