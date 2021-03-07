import React, { FC } from 'react';
import { TaskList, taskListMock } from '@/modules';

interface IMainPageProps {
	prop1: string;
}

export const MainPage: FC<IMainPageProps> = () => {
	console.log('taskListMock', taskListMock);
	return (
		<div>
			<h1>TASK PAGE</h1>

			<div>
				<TaskList taskList={taskListMock} />
			</div>
		</div>
	);
};
