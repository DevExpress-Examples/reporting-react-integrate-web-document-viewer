'use client';
import React from 'react';
import ReportViewer, { RequestOptions, Callbacks } from 'devexpress-reporting-react/dx-report-viewer';
import { predefinedDateRanges } from 'devexpress-reporting/dx-webdocumentviewer'


function App() {
    const onBeforeRender = ({ args }: { args: any }) => {
        console.log("onBeforeRender");
        predefinedDateRanges.splice(0,
            predefinedDateRanges.length);

        predefinedDateRanges.push({
            displayName: 'September',
            range: () => [
                new Date(2024, 8, 1),
                new Date(2024, 8, 30)
            ]
        })
        predefinedDateRanges.push({
            displayName: 'October',
            range: () => [
                new Date(2024, 9, 1),
                new Date(2024, 9, 31)
            ]
        })
    };

    return (
        <ReportViewer reportUrl="TestExportReport">
            <RequestOptions host="http://localhost:5000/" invokeAction="DXXRDV" />
            <Callbacks BeforeRender={onBeforeRender} />
        </ReportViewer>
    )
}

export default App;