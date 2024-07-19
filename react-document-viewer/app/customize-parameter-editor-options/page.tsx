'use client';
import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const onCustomizeParameterEditors = (event: any): void => {
    if (event.args.parameter.type === 'System.DateTime') {
      event.args.info.editor = event.args.info.editor;
      event.args.info.editor.extendedOptions = (event.args.info.editor.extendedOptions || {}, { type: 'date' });
    }
  };

  return (
    <ReportViewer reportUrl="TestExportReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
      <Callbacks CustomizeParameterEditors={onCustomizeParameterEditors} />
    </ReportViewer>
  )
}

export default App