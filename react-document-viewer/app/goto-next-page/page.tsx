'use client';
import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
  const onDocumentReady = (event: any): void => {
    var goToNextPage = function () {
      var pageIndex = event.sender.GetCurrentPageIndex();
      if (event.args.PageCount <= pageIndex)
          return;
      event.sender.GoToPage(pageIndex + 1);
      setTimeout(function () { goToNextPage(); }, 3000);
  }
  goToNextPage();
  };  
  return (
    <ReportViewer reportUrl="TestExportReport">
        <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
        <Callbacks DocumentReady={onDocumentReady} />
    </ReportViewer>
  )
}

export default App