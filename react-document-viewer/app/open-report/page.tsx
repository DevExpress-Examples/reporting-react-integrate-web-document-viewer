'use client';
import React from 'react'
import ReportViewer, { RequestOptions, DxReportViewerRef } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const viewerRef = React.useRef<DxReportViewerRef>();
  const onClick = () => viewerRef.current?.instance().OpenReport("TestExportReport");

  return (
    <>
      <button onClick={onClick}> Open Report </button>
      <ReportViewer ref={viewerRef} reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
      </ReportViewer>
    </>
  )
}

export default App