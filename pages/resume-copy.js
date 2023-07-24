import React, {useState} from 'react'
import { Document,Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function resumecopy() {
    return (
      <div className="bg-[#D4FF3F] h-full p-0 m-0">
        <center>
        <Document 
          file="../Glenn-Paul-Mabao-2023-Resume.pdf"
        >
          <Page pageNumber={1} height="1920" />
        </Document>
        </center>
      </div>
    );
  }

export default resumecopy;