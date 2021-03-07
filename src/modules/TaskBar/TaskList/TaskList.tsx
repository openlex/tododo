import React, { FC } from 'react';
import { ITask } from '@/modules/TaskBar/types';
import { Task } from '@/modules/TaskBar';
import * as s from './TaskList.module.scss';

interface ITaskBar {
	taskList: ITask[];
}

export const TaskList: FC<ITaskBar> = ({ taskList }: ITaskBar) => {
	const changePriority = (id: string) => {
		console.log('id', id);
	};
	return (
		<div className={s.block}>
			{taskList.map((task: ITask) => {
				return (
					<Task
						key={task.id}
						{...task}
						onChangeStatus={changePriority}
					/>
				);
			})}
		</div>
	);
};
