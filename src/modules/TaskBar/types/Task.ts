export interface ITask {
	id: string;
	title: string;
	priority?: number;
	description?: string;
	isDone?: boolean;
}
