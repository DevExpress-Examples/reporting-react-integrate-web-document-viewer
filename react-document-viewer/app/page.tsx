'use client';
import ReportViewer, { RequestSettings } from 'devexpress-reporting-react/dx-report-viewer';
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import 'devexpress-reporting/dist/css/dx-webdocumentviewer.css';

function App() {

return (
  <ReportViewer reportUrl="TestReport">
    <RequestSettings host="https://localhost:61766/" invokeAction="DXXRDV" />
  </ReportViewer>        
)
}

export default App