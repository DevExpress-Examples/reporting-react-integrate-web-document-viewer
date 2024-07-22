'use client';
import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';

function App() {
    const onServerError = (event: any): void => {
        console.log(event.args.Error.errorThrown);
        let error = event.args.Error.errorThrown;
        alert("Server error\r\n" + "Message: " + error);
    };

    return (
        <ReportViewer reportUrl="NoReport">
            <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
            <Callbacks OnServerError={onServerError} />
        </ReportViewer>
    )
}

export default App