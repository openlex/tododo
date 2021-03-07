import React, { FC } from 'react';
import { ITask } from './types';
import { Task } from '@/modules/TaskBar';
import * as s from './Taskbar.module.scss';

interface ITaskBar {
	taskList: ITask[];
}

export const TaskBar: FC<ITaskBar> = ({ taskList }: ITaskBar) => (
	<div className={s.block}>
		{taskList.map((task: ITask) => (
			<Task key={task.id} {...task} />
		))}
	</div>
);
