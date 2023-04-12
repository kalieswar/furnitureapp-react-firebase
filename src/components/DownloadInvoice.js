import React from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";
import InvoicePdf from "./InvoicePdf";


function DownloadInvoice(){
    return(
        <PDFDownloadLink document={<InvoicePdf/>} fileName="invoice.pdf">
            Download Invoice
        </PDFDownloadLink>
    )
}

export default DownloadInvoice
