import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { ETaskPriority, Task } from '@/modules';
import { taskListMock } from '@/modules/TaskBar';

export default {
	title: 'TaskBar/Task',
	components: Task,
	decorators: [withKnobs],
};

const task = taskListMock[0];
const { id, description, isDone, priority, title } = task;

export const defaultTask = () => {
	const priorityOptions = {
		LOW: ETaskPriority.LOW,
		NORMAL: ETaskPriority.NORMAL,
		HIGH: ETaskPriority.HIGH,
		EXTREME: ETaskPriority.EXTREME,
	};

	return (
		<Task
			id={id}
			title={text('title', title)}
			isDone={boolean('isDone', isDone || false)}
			description={text('description', description || '')}
			priority={select('priority', priorityOptions, ETaskPriority.NORMAL)}
		/>
	);
};

defaultTask.story = {
	name: 'default',
};

export const doneTask = () => <Task {...task} isDone={true} />;

doneTask.story = {
	name: 'done',
};

export const lowTask = () => <Task {...task} priority={ETaskPriority.LOW} />;

lowTask.story = {
	name: 'priority/low',
};

export const highTask = () => <Task {...task} priority={ETaskPriority.HIGH} />;

highTask.story = {
	name: 'priority/high',
};

export const extremeTask = () => (
	<Task {...task} priority={ETaskPriority.EXTREME} />
);

extremeTask.story = {
	name: 'priority/exreme',
};
