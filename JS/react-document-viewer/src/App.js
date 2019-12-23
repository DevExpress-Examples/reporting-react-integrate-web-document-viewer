import React from 'react';
import ko from 'knockout';
import 'devexpress-reporting/dx-webdocumentviewer';
import './App.css';

class ReportViewer extends React.Component {
  constructor(props) {
    super(props);
    this.reportUrl = ko.observable("Products");
    this.requestOptions = {
      host: "http://localhost:54114/",
      invokeAction: "/WebDocumentViewer/Invoke"
    };
  }
  render() {
    return (<div ref="viewer" data-bind="dxReportViewer: $data"></div>);
  }
  componentDidMount() {
    ko.applyBindings({
      reportUrl: this.reportUrl,
      requestOptions: this.requestOptions
    }, this.refs.viewer);
  }
  componentWillUnmount() {
    ko.cleanNode(this.refs.viewer);
  }
};

function App() {
  return (<div style={{ width: "100%", height: "1000px" }}>
    <ReportViewer />
  </div>);
}

export default App;
