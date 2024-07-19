'use client';
import React from 'react';
import ReportViewer, { Callbacks, DxReportViewerRef, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';
import { ExportFormatID, AsyncExportApproach } from 'devexpress-reporting/dx-webdocumentviewer'

function App() {
  const viewerRef = React.useRef<DxReportViewerRef>();
  const onCustomizeExportOptions = (event: any): void => {
    event.args.HideExportOptionsPanel();
    var model = event.args.GetExportOptionsModel(ExportFormatID.XLSX);
    // Encrypt the file. Encryption is performed in asynchronous mode.
    //model.encryptionOptions.password = "1234";
    model.documentOptions.author = "Me";
  };
  const onBeforeRender = (event: any): void => {
    AsyncExportApproach(true);
  };
  const exportDocument = () => viewerRef.current?.instance().ExportTo('xlsx');
  return (
    <>
      <button onClick={exportDocument}>Export to XLSX</button>
      <ReportViewer ref={viewerRef} reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
        <Callbacks CustomizeExportOptions={onCustomizeExportOptions} BeforeRender={onBeforeRender} />
      </ReportViewer>
    </>
  )
}

export default App