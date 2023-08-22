import React, { useState } from "react";
// import { Document, Page } from 'react-pdf';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdf_file from "./Kwartaalrapport_aah.pdf";

const Work = () => {
  const PDF_NAME = pdf_file;
  // const [file, setFile] = useState(PDF_NAME);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="flex w-full flex-col items-center justify-center pb-8">
          <p className="inline border-b-4 border-cyan-500 text-4xl font-bold text-gray-300">
            My Codingame resume
          </p>
          <p className="py-6 text-2xl">
            Since 2016 I've been working at Amsterdam at Home makelaars, a small
            family-owned real-estate agency in Amsterdam. In the beginning,
            mostly working the phone, scheduling appointments for our clients,
            but now in charge of the reports on the Amsterdam housing market
            that we produce in-house. The reports the NVM was making were too
            bland, too boring and so we figured we could do better. Our reports
            allow you to segment the market by neighbourhood, size of the
            appartment and whether it was built before World War II. These
            reports were and still are our proof that we know the market inside
            and out, and that we are continuously doing our homework on the
            latest trends.
          </p>
          <p className='className="bg-gray-300 rounded-l py-2 px-4 font-bold text-gray-100 hover:bg-gray-400'>
            <a href={"https://www.makelaaramsterdam.nl/woningmarkt-amsterdam/"}>
              Click for more up to date reports
            </a>
          </p>
          <div>
            <div className="inline-flex">
              <button
                className="rounded-l bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400"
                onClick={goToPrevPage}
              >
                Prev
              </button>
              <button
                className="rounded-r bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400"
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
              onItemClick={
                "https://www.makelaaramsterdam.nl/woningmarkt-amsterdam/"
              }
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
