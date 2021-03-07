import React, { FC } from 'react';
import * as s from './Task.module.scss';
import { ITask } from '@/modules/TaskBar/types';

interface ITaskProps extends ITask {}

export const Task: FC<ITaskProps> = (props: ITaskProps) => {
	const { title } = props;

	return (
		<div className={s.block}>
			<span className={s.drag}> # </span>
			<span>{title}</span>
		</div>
	);
};
