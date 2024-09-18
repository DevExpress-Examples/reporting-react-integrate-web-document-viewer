'use client';
import ReportViewer, { RequestOptions, Callbacks } from 'devexpress-reporting-react/dx-report-viewer';
import { ExportFormatID } from 'devexpress-reporting/viewer/constants';

function App() {
  const onCustomizeExportOptions = ({ args }: { args: any }): void => {
    args.HideFormat(ExportFormatID.XLS);
  };
  return (
    <ReportViewer reportUrl="TestExportReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="DXXRDV" />
      <Callbacks CustomizeExportOptions={onCustomizeExportOptions} />
    </ReportViewer>
  )
}

export default App