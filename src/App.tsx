import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
