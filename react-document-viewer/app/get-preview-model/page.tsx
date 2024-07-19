'use client';
import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const onParametersReset = ({ sender }: { sender: any }) => {
    var preview = sender.GetPreviewModel();
    if (preview) {
      preview.tabPanel.collapsed = true;
    }
  };
  return (
    <ReportViewer reportUrl="TestExportReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
      <Callbacks ParametersReset={onParametersReset} />
    </ReportViewer>
  )
}

export default App