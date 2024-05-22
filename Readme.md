<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/229755307/23.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T848272)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Reporting for React -  Add a Web Document Viewer to a React App

This example incorporates the Web Document Viewer into a client-side app built with React. The example consists of two parts:

- The [ServerSideApp](ServerSideApp) folder contains the backend project. The project is an ASP.NET Core application that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- The [react-document-viewer](react-document-viewer) folder contains the client application built with React.

## Quick Start

### Server

In the *ServerSideApp* folder run the following command:

```
dotnet run
```

The server starts at https://localhost:5001. To debug the server, run the application in Visual Studio.

### Client

In the *react-document-viewer* folder, run the following commands:

```
npm install
npm run dev
```

Open `http://localhost:3000/` in your browser to see the result. The application displays the Web Document Viewer with the *TestReport* report.

![Document Viewer in JavaScript with React](Images/screenshot.png)

## Files to Review

- [page.tsx](react-document-viewer/app/page.tsx)
- [Program.cs](ServerSideApp/ServerSideApp/Program.cs)
- [ReportingControllers.cs](ServerSideApp/ServerSideApp/Controllers/ReportingControllers.cs)

## Documentation

- [Create a React Application with Web Document Viewer](https://docs.devexpress.com/XtraReports/119338)
- [Document Viewer Server-Side Configuration (ASP.NET Core)](https://docs.devexpress.com/XtraReports/400197)

## More Examples
* [Reporting for React - Integrate Report Designer in React App](https://github.com/DevExpress-Examples/reporting-eud-designer-in-javascript-with-react)
