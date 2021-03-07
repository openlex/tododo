import { ETaskPriority } from '@/modules';

export interface ITask {
	id: string;
	title: string;
	priority?: ETaskPriority;
	description?: string;
	isDone?: boolean;
	weight?: number;
}
