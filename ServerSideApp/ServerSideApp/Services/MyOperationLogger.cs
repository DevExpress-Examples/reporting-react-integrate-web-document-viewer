using DevExpress.XtraPrinting;
using DevExpress.XtraReports.UI;
using DevExpress.XtraReports.Web.ClientControls;
using DevExpress.XtraReports.Web.WebDocumentViewer;
using ServerSideApp.PredefinedReports;
using System;
using System.Drawing.Imaging;
using System.IO;

public class MyOperationLogger : WebDocumentViewerOperationLogger {
    public override ExportedDocument ExportDocumentStarting(string documentId,
    string asyncExportOperationId, string format, ExportOptions options,
    PrintingSystemBase printingSystem, Func<ExportedDocument> doExportSynchronously) {
        switch (format) {
            case "JPEG": {
                    var report = new ServerSideApp.PredefinedReports.TestReport();
                    byte[] bytes;
                    using (MemoryStream ms = new MemoryStream()) {
                        report.ExportToImage(ms,
                            new ImageExportOptions()
                            {
                                Format = ImageFormat.Jpeg,
                                ExportMode = ImageExportMode.SingleFilePageByPage,
                                PageRange = "1"
                            });
                        bytes = ms.ToArray();
                    }
                    return new ExportedDocument(bytes, @"image/jpeg", "inline", "SampleImage.jpeg");
                }
            case "pdf": {
                    // Creates a one-page NEW report.
                    var report = new XtraReport();
                    var detail = new DetailBand();
                    detail.Controls.Add(new XRLabel() { Text = "Hello World!" });
                    report.Bands.Add(detail);
                    byte[] bytes;
                    using (MemoryStream ms = new MemoryStream()) {
                        report.ExportToPdf(ms, options.Pdf);
                        bytes = ms.ToArray();
                    }
                    return new ExportedDocument(bytes, @"application/pdf", "inline", "SampleOnePageReport.pdf");
                }
            case "xls":
            case "xlsx": {
                    // Modifies an existing report.
                    var report = new TestReport();
                    XRTable table = report.FindControl("table3", true) as XRTable;
                    table.BackColor = System.Drawing.Color.LightGreen;
                    byte[] bytes;
                    using (MemoryStream ms = new MemoryStream()) {
                        report.ExportToXlsx(ms, options.Xlsx);
                        bytes = ms.ToArray();
                    }
                    return new ExportedDocument(bytes, @"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "inline", "SampleGreenCells.xlsx");
                }
            default:
                return base.ExportDocumentStarting(documentId,
            asyncExportOperationId, format, options, printingSystem, doExportSynchronously);
        }
    }
}