'use client';
import React from 'react';
import ReportViewer, { DxReportViewerRef, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';


function App() {
    const viewerRef = React.useRef<DxReportViewerRef>();
    const onClick = () => viewerRef.current?.instance().Print();
    return (
        <>
            <button onClick={onClick}>Print Document</button>
            <ReportViewer ref={viewerRef} reportUrl="TestReport">
                <RequestOptions host="http://localhost:5000/" invokeAction="/DXXRDV" />
            </ReportViewer>
        </>
    )
}

export default App