import React, {useState} from 'react'
import { Document,Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function resume() {
    return (
      <div className='h-[100vh]'>
        <center>
        <Document className="justify-center mx-auto my-0 justify-items-center"
          file="/Glenn-Paul-Mabao-2023-Resume.pdf"
        >
          <Page pageNumber={1} height="1920" />
        </Document>
        </center>
      </div>
    );
  }

export default resume;