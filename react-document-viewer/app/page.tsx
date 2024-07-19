'use client';
import ReportViewer, { RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';


function App() {
  return (
    <ReportViewer reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="DXXRDV" />
    </ReportViewer>        
  )
}

export default App