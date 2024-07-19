'use client';
import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {

  var products = [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50"
  ].map(function (val) { return { value: val, displayValue: val }; });

  const onCustomizeParameterEditors = (event: any): void => {
    if (event.args.parameter.name == 'parameter3') {
      event.args.info.editor = event.args.info.editor;
      event.args.info.editor.extendedOptions = (event.args.info.editor.extendedOptions || {}, {
        valueExpr: 'username',
        displayExpr: 'name'
      });
    }
  };

  const onCustomizeParameterLookUpSource = (event: any): void => {
    if (event.args.parameter.name == "parameter3") {
      event.args.dataSource = "https://jsonplaceholder.typicode.com/users";
    };
    if (event.args.parameter.name == "parameter4") {
      event.args.dataSource = products;
    }
  };

  return (
    <ReportViewer reportUrl="TestExportReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
      <Callbacks CustomizeParameterEditors={onCustomizeParameterEditors}
        CustomizeParameterLookUpSource={onCustomizeParameterLookUpSource} />
    </ReportViewer>
  )
}

export default App