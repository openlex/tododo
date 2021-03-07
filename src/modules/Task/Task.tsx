import React, { FC } from "react";
import * as s from './Task.module.scss';

interface ITaskProps {
	id: string,
	title: string,
	priority: number,
	description: string,
	isDone: boolean,
}

export const Task: FC<ITaskProps> = (props: ITaskProps) => {
	const {
		title,
	} = props;

	return (
		<div className={s.block}>
			<span className={s.drag}> # </span>
			<span>{title}</span>

		</div>
	)
}
