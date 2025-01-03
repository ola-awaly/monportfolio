import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Education } from './pages/Education/Education';
import { Experience } from './pages/Experience/Experience';
import { Project } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,

		errorElement: 'error element',
		children: [
			{
				index: true,
				element: <AboutMe />,
			},
			{
				path: 'about-me',
				errorElement: 'error element',
				element: <AboutMe />,
			},
			{
				path: 'my-education',
				errorElement: 'error element',
				element: <Education />,
			},
			{
				path: 'my-experience',

				errorElement: 'error element',
				element: <Experience />,
			},
			{
				path: 'my-projects',

				errorElement: 'error element',
				element: <Project />,
			},
		],
	},
]);
