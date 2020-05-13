import React, { useContext, useState, useEffect } from 'react';
import { FileReadDataContext } from '../../context';

function List() {
	const [data] = useContext(FileReadDataContext);
	let [tableData, setTableData] = useState([]);
	let [delimiter, setDelimiter] = useState('|');
	let [rowLimit, setRowLimit] = useState(2);

	useEffect(() => {
		let tempArr = [];
		if (data.toString()) {
			tempArr = data.toString();
			if (delimiter) {
				tempArr = tempArr.split(delimiter);
				// tempArr = tempArr ? tempArr.map((item) => {
				//   item.split(delimiter)
				// }) : [];
			}
		}
		// if (rowLimit) {
		// 	let arrayLen = tempArr.length;
		// 	// tempArr = tempArr
		// 	// 	? tempArr.filter((item, index) => {
		// 	// 			return index <= rowLimit - 1;
		// 	// 	  })
		// 	//   : [];
		// }
		setTableData(tempArr);
	}, [delimiter, rowLimit, data]);

	function renderTable() {
		let tableItems = [];
		if (tableData.length) {
			for (let i = 0; i < rowLimit * 4; i++) {
				tableItems.push(
					<div
						key={i}
						className='py-2 flex flex-middle flex-center'
						style={{ width: '25%', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}
					>
            <p className="flex-truncate mx-2"> 
            {tableData[i]}
            </p>
						
					</div>
				);
			}
		}

		return (
			<>
				{tableItems.length ? (
					<div className='my-10' style={{ borderTop: '1px solid #ccc', borderLeft: '1px solid #ccc', width: '100%' }}>
						<div className='flex flex-wrap'>{tableItems}</div>
					</div>
				) : <p className="my-3">No results found !</p>}
			</>
		);
	}

	return (
		<>
			{tableData.length ? (
				<div className='py-10' style={{ width: '50%', margin: '0 auto' }}>
					<div className='flex flex-between'>
						<div className="flex flex-middle">
							<p className="mr-2">Delimiter:</p>
							<input
								className='b-1 px-3 py-2 br-4'
								value={delimiter}
								placeholder='Delimiter'
								onChange={(e) => setDelimiter(e.target.value)}
							/>
						</div>
						<div className="flex flex-middle ">
							<p className="mr-2">Lines:</p>
							<input
								placeholder='No of lines'
								value={rowLimit}
								className='b-1 br-4 px-3 py-2'
								onChange={(e) => setRowLimit(e.target.value)}
							/>
						</div>
					</div>
					{renderTable()}
				</div>
			) : null}
		</>
	);
}

export default List;
