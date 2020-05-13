import React, { useState } from 'react';
import Home from './pages';
import { FileReadDataContext } from './context';

function App() {
	const fileReadDataHook = useState([]);
	return (
		<FileReadDataContext.Provider value={fileReadDataHook}>
			<Home />
		</FileReadDataContext.Provider>
	);
}

export default App;
