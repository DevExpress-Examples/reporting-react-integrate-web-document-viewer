'use client';
import ReportViewer, { RequestOptions, Callbacks } from 'devexpress-reporting-react/dx-report-viewer';
import { ExportFormatID } from 'devexpress-reporting/viewer/constants'

function App() {
  const onCustomizeExportOptions = ({ args }: { args: any }): void => {
    var model = args.GetExportOptionsModel(ExportFormatID.CSV);
    model.separator = '|';
    args.HideProperties(ExportFormatID.XLS, "ExportMode", "PageRange");
    args.HideProperties(ExportFormatID.XLSX);
  };
  return (
    <ReportViewer reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="DXXRDV" />
      <Callbacks CustomizeExportOptions={onCustomizeExportOptions} />
    </ReportViewer>
  )
}

export default App