import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FileReadDataContext } from '../../context';

import { ReactComponent as FileUploadIcon } from '../../assets/icons/file-upload.svg';

function FileUpload() {
	const [, setFileReadData] = useContext(FileReadDataContext);
	const [loading, setLoading] = useState(false);

	function onChangeHandler(e) {
		const data = new FormData();
		data.append('file', e.target.files[0]);
		setLoading(true);
		uploadApi(data);
	}

	const uploadApi = async (data) => {
		try {
      const response = await axios.post('https://stormy-sierra-70234.herokuapp.com/upload', data);
      // const response = await axios.post('http://localhost:3000/upload', data);
			const { data: responseData = '' } = response.data || {};
			if (responseData) {
				setFileReadData(responseData);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<>
			<label
				className='px-10 py-10 flex flex-column flex-middle'
				style={{ border: '2px solid #ccc', width: '30%', margin: '0 auto', borderStyle: 'dashed', cursor: 'pointer' }}
			>
				<FileUploadIcon height={40} width={32} className='my-5' color='green' />
				<p>UPLOAD A TEXT FILE</p>
				<input
					style={{ display: 'none' }}
					type='file'
					name='file'
					onChange={(e) => onChangeHandler(e)}
				/>
			</label>
			{loading && <p className='py-5'>Please wait...</p>}
		</>
	);
}

export default FileUpload;
