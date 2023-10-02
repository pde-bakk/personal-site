// @ts-ignore
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import ReactGA from "react-ga4";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactGA.send({
  hitType: "pageview",
  page: "/work",
  title: "Work",
});

const Work: React.FC /*<WorkProps>*/ = () => {
  // const [file, setFile] = useState(PDF_NAME);
  const [numPages, setNumPages]: [null, ((value: (((prevState: null) => null) | null)) => void)] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: {numPages: number}): void {
    // @ts-ignore
    setNumPages(numPages);
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  function goToNextPage(): void {
    // @ts-ignore
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)
  }

  // @ts-ignore
  return (
    <div className="w-full bg-background_colour text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="flex w-full flex-col items-center justify-center pb-8">
          <p className="inline border-b-4 border-cyan-500 text-4xl font-bold text-gray-300">
            Amsterdam at Home
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
              file="/Kwartaalrapport_aah.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              // onItemClick={
              //   "https://www.makelaaramsterdam.nl/woningmarkt-amsterdam/"
              // }
            >
              <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
            </Document>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center pb-8">
          <p className="inline border-b-4 border-cyan-500 text-4xl font-bold text-gray-300">
            Panartis
          </p>
          <p className="py-6 text-2xl">
            In 2021 I finished the Codam core curriculum and it was time for my
            first internship. I started working at Panartis, a The Hague based
            art company whose goal it was to unify art collections and databases
            to make it easier and more efficient for scientists to do their
            research. I was one of the back-end developers there, although I
            also maintained the DevOps side until we started working with third
            party contractors and switched to Azure. When my 6 month internship
            finished, I signed on to continue 3 days per week and spend the rest
            of my time and energy on my education. I've learnt a ton here, both
            in my profession and in the workings of startups/scale-ups. I loved
            working here, but I noticed that working 3 days, and going to school
            3 days was catching up to me. Therefore I decided to quit my job and
            fully focus on Codam.
          </p>
          <p className='className="bg-gray-300 rounded-l py-2 px-4 font-bold text-gray-100 hover:bg-gray-400'>
            <Video
              autoPlay
              loop
              muted
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              onCanPlayThrough={() => {
                // Do stuff
              }}
            >
              <source
                src="https://cdn.panartis.world/public/panartis_cloud_h264.mp4"
                type="video/mp4"
              />
            </Video>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Work;
