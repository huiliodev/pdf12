// src/components/InvoicePDF.js

import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 10 },
    // Define styles for your PDF content here
});

function InvoicePDF({ data }) {
    return (
        <PDFViewer width="1000" height="600">
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <Text>Details Facture test:</Text>
                        {/* Render invoice details from data */}
                    </View>
                    {/* Render other invoice content */}
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default InvoicePDF;