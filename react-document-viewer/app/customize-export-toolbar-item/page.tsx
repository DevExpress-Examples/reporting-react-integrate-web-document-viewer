'use client';
import React from 'react';
import ReportViewer, { RequestOptions, Callbacks } from 'devexpress-reporting-react/dx-report-viewer';
import { ActionId } from "devexpress-reporting/viewer/constants";

const App = () => {
  const onCustomizeMenuActions = (event: any): void => {
    const actionExportTo = event.args.GetById(ActionId.ExportTo);
    const newFormat = { format: 'JPEG', text: 'Image: JPEG' };
    if (actionExportTo) {
      actionExportTo.events.on('propertyChanged', (args: any) => {
        const formats = actionExportTo.items[0].items;
        if (args.propertyName === 'items' && formats.indexOf(newFormat) === -1) {
          formats.push(newFormat);
        }
      });
    }
  };

  return (
    <ReportViewer reportUrl="TestExportReport">
      <RequestOptions host="http://localhost:5000/" invokeAction="DXXRDV" />
      <Callbacks CustomizeMenuActions={onCustomizeMenuActions} />
    </ReportViewer>
  );
};

export default App;