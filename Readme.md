# Reporting for Web (React) - Document Viewer

This example consists of two parts: 

- A server (back-end) ASP.NET Core application that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- A React JavaScript Library front-end client application.

Perform the following steps to run this example:

1. Open the back-end project solution (**CS/ServerSideApp.sln**) in Visual Studio and run the project.
2. Navigate to the **JS/react-document-viewer** folder that is the client part's root folder.
3. Open the console and run the following command:

    ```npm install```

4. Run the command to compile and start the client part:

    ```npm start```

5. The client application opens the browser at http://localhost:3000/. It displays the **Document Viewer** with the **TestReport** report.

    ![Document Viewer in JavaScript with React](Images/screenshot.png)

## Files to Review

- [App.js](JS/react-document-viewer/src/App.js)

## Documentation

- [Document Viewer Integration in React Application](https://docs.devexpress.com/XtraReports/119338)

## More Examples
* [Reporting for Web (React) - Report Designer](https://github.com/DevExpress-Examples/reporting-eud-designer-in-javascript-with-react)
