'use client';
import React from 'react';
import ReportViewer, { Callbacks, DxReportViewerRef, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const viewerRef = React.useRef<DxReportViewerRef>(null);
  const onDocumentReady = (event: any): void => {
    event.sender.GoToPage(event.args.PageCount - 1);
  };
  const buildDocument = () => {
    var parameterValue = "2";
    if (viewerRef.current) {
      viewerRef.current.instance().GetParametersModel().parameters[0].value = parameterValue;
      viewerRef.current.instance().previewModel.StartBuild();
    }
  }

  return (
    <>
      <button onClick={buildDocument}>Build Document</button>
      <ReportViewer ref={viewerRef} reportUrl="TestExportReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
        <Callbacks DocumentReady={onDocumentReady} />
      </ReportViewer>
    </>
  )
}

export default App