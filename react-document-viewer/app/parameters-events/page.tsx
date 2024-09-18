'use client';
import React from 'react'
import ReportViewer, { RequestOptions, Callbacks, DxReportViewerRef } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const viewerRef = React.useRef<DxReportViewerRef>(null);
  const onClick = () => viewerRef.current?.instance().ResetParameters();
  const onParametersReset = ({ args }: { args: any }) => {
    console.log("ParametersReset");
    console.log("Parameter " + args.Parameters[0].path + " is reset to " + args.Parameters[0].value);
  };
  const onParametersSubmitted = ({ args }: { args: any }) => {
    console.log("ParametersSubmitted");
    args.Parameters.forEach((parameter: any) => {
      console.log("Parameter " + parameter.Key + " value " + JSON.stringify(parameter.Value));
    });
  };
  const onParametersInitialized = ({ args }: { args: any }) => {
    console.log("ParametersInitialized");
    args.ActualParametersInfo.forEach((parameterModel: any) => {
      console.log("Parameter " + parameterModel.parameterDescriptor.name + " value " + JSON.stringify(parameterModel.parameterDescriptor.value));
    });
    args.ParametersModel['parameter1'] = 10;
    args.ShouldRequestParameters = false;
  };

  return (
    <>
      <button onClick={onClick}>Reset parameters</button>
      <ReportViewer ref={viewerRef} reportUrl="TestExportReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
        <Callbacks ParametersReset={onParametersReset} ParametersSubmitted={onParametersSubmitted} ParametersInitialized={onParametersInitialized} />
      </ReportViewer>
    </>
  )
}

export default App