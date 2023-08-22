import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "react-pdf/dist/esm/Page/TextLayer.css";


const Work = () => {
	const PDF_NAME = 'Kwartaalrapport_aah.pdf'
	// const [file, setFile] = useState(PDF_NAME);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	const goToPrevPage = () =>
		setPageNumber(
			pageNumber - 1 <= 1 ? 1 : pageNumber - 1
		);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div name='work' className='w-full text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
						My Codingame resume
					</p>
					<p className='py-6 text-2xl'>
						Since 2016 I've been working at Amsterdam at Home makelaars, a small family-owned real-estate agency
						in Amsterdam. In the beginning, mostly working the phone, scheduling appointments for our clients,
						but now in charge of the reports on the Amsterdam housing market that we produce in-house.

						The reports the NVM was making were too bland, too boring and so we figured we could do better.
						Our reports allow you to segment the market by neighbourhood, size of the appartment and whether
						it was built before World War II.

						These reports were and still are our proof that we know the market inside and out,
						and that we are continuously doing our homework on the latest trends.

					</p>
					<p className='className="bg-gray-300 hover:bg-gray-400 text-gray-100 font-bold py-2 px-4 rounded-l'>
						<a href={'https://www.makelaaramsterdam.nl/woningmarkt-amsterdam/'}>
							Click for more up to date reports
						</a>
					</p>
					<div>
						<div className="inline-flex">
							<button
								className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
								onClick={goToPrevPage}
							>
								Prev
							</button>
							<button
								className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
								onClick={goToNextPage}
							>
								Next
							</button>
						</div>
						{/*<p>*/}
						{/*	Page {pageNumber} of {numPages}*/}
						{/*</p>*/}

						<Document
							file={PDF_NAME}
							onLoadSuccess={onDocumentLoadSuccess}
							onItemClick={'https://www.makelaaramsterdam.nl/woningmarkt-amsterdam/'}
						>
							<Page pageNumber={pageNumber} />
						</Document>
					</div>
				</div>

			</div>
		</div>
	);
};
export default Work;
