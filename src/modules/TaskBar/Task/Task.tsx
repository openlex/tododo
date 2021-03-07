import React, { FC } from 'react';
import * as s from './Task.module.scss';
import { ITask } from '@/modules/TaskBar/types';
import classNames from 'classnames';
import { ETaskPriority } from '@/modules';

interface ITaskProps extends ITask {
	onChangeStatus(id: string): void;
}

export const Task: FC<ITaskProps> = (props: ITaskProps) => {
	const { title, priority, isDone, id, onChangeStatus } = props;
	const classList = classNames(s.block, { [s.done]: isDone });
	const markClassList = classNames(
		s.mark,
		{ [s.low]: priority === ETaskPriority.LOW },
		{ [s.high]: priority === ETaskPriority.HIGH },
		{ [s.extreme]: priority === ETaskPriority.EXTREME }
	);
	const onClickStatus = () => {
		onChangeStatus(id);
	};

	return (
		<div className={classList}>
			<label htmlFor={id} onClick={onClickStatus}>
				<input
					className={s.checkBox}
					id={id}
					type="checkbox"
					checked={isDone}
				/>
				<span className={markClassList} />
			</label>
			<span className={s.title}>{title}</span>
			<span className={s.drag} />
		</div>
	);
};
