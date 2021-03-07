import React, { FC } from 'react';
import { Task } from '@/modules';

interface IMainPageProps {
	prop1: string;
}

export const MainPage: FC<IMainPageProps> = () => {
	return (
		<div>
			<h1>TASK PAGE</h1>

			<div>
				<Task
					id="1"
					title="Task1"
					priority={1}
					description="234567"
					isDone={false}
				/>
			</div>
		</div>
	);
};
