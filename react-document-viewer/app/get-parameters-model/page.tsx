'use client';
import React from 'react';
import ReportViewer, { Callbacks, DxReportViewerRef, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const viewerRef = React.useRef<DxReportViewerRef>();
  const getClientParameter = () => {
    var parametersModel = viewerRef.current?.instance().GetParametersModel();
    var parameter5 = parametersModel?.parameters.filter(x => x.path == 'parameter5')[0];
    var multivalueParameter = parameter5?.value;
    var firstItem = multivalueParameter.items[0];
    console.log('Parameter1 first item: ', firstItem);
  }

  return (
    <>
      <button onClick={getClientParameter}>Show First Parameter5 Value in Console</button>
      <ReportViewer ref={viewerRef} reportUrl="TestExportReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
      </ReportViewer>
    </>
  )
}

export default App