'use client';
import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';



function App() {
  const onDocumentReady = (event: any): void => {
    event.sender.GetReportPreview().zoom = 0.25;
  };
  return (
    <>
      <ReportViewer reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
        <Callbacks DocumentReady={onDocumentReady} />
      </ReportViewer>
    </>
  )
}

export default App