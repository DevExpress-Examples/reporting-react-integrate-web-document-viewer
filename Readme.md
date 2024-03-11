<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/229755307/23.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T848272)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Reporting for React -  How to Integrate the Web Document Viewer in React App

This example shows how to incorporate the Web Document Viewer into a client-side app built with React. The example consists of two parts:

- A server (back-end) ASP.NET Core application that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- A React front-end client application.

## Run the Example

Perform the following steps to run this example:

1. Open the back-end project solution (*ServerSideApp/ServerSideApp.sln*) in Visual Studio and run the project.
2. Navigate to the *react-document-viewer* folder that is the client part's root folder.
3. Open the console and run the following command:

    ```npm install```

4. Run the command to compile and start the client part:

    ```npm start```

5. The client application opens the browser at http://localhost:3000/. It displays the **Document Viewer** with the **TestReport** report.

> [!TIP]
> Make sure that the backend application runs on the port specified in the host setting of the Document Viewer component. For more information, refer to the following help topic: [Determine the Host URL](https://docs.devexpress.com/XtraReports/400197/web-reporting/asp-net-core-reporting/server-side-configuration/document-viewer-server-side-configuration-asp-net-core#step-3-determine-the-host-url).

![Document Viewer in JavaScript with React](Images/screenshot.png)

## Files to Review

- [App.js](react-document-viewer/src/App.js)

## Documentation

- [Document Viewer Integration in React Application](https://docs.devexpress.com/XtraReports/119338)

## More Examples
* [Reporting for React - How to Integrate the Report Designer in React App](https://github.com/DevExpress-Examples/reporting-eud-designer-in-javascript-with-react)
