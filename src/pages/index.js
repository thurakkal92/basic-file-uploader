import React from 'react';
import FileUpload from '../components/FileUpload'
import List from '../components/List'

function Home() {
	return (
		<>
			<header className='flex flex-center my-5'>
				<h1><b>Basic file uploader</b></h1>
			</header>
			<main className='flex-1 ta-center'>
				<FileUpload />
				<List />
			</main>
			<footer></footer>
		</>
	);
}

export default Home;
