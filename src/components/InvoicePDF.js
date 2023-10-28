// src/components/InvoicePDF.js

import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 10 },
    // Define styles for your PDF content here
});


const stylesPdf = StyleSheet.create({
    page: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10
    },
    leftColumn: {
        marginLeft:10,
        marginTop:10,
        flex: 2,
    },
    rightColumn: {
        flex: 3,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    contact: {
        fontSize: 12,
        marginBottom: 5,
    },
    detailsTable: {
        marginTop: 20,
    },
    detailsRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    detailsLabel: {
        width: '35%',
    },
    detailsValue: {
        width: '65%',
    },
    invoiceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderCollapse: 'collapse',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
    },
    tableCell: {
        fontSize:10,
        fontWeight: "bold",
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: '#000',
        padding: 8,
    },
    tableCellRow: {
        fontSize:10,
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: '#000',
        padding: 8,
    },


});

function InvoicePDF({ data }) {
    return (
        <PDFViewer width="1000" height="600">
            <Document>
                <Page size="A4" stylesPdf={stylesPdf.page}>
                    <View style={stylesPdf.leftColumn}>
                        {/* Company logo (replace with an image) */}
                        {/*<Image src="path_to_your_logo.png" style={styles.logo} />*/}
                        <Text style={stylesPdf.title}>Your Company Name</Text>
                        <Text style={stylesPdf.contact}>Contact Tel: +123456789</Text>
                        <Text style={stylesPdf.contact}>Fax: +987654321</Text>
                        <Text style={stylesPdf.contact}>CCB: 12345 BNA: 67890</Text>
                    </View>
                    <View style={stylesPdf.rightColumn}>
                        <Text style={stylesPdf.invoiceTitle}>Facture</Text>
                        <View style={stylesPdf.detailsTable}>
                            <View style={stylesPdf.detailsRow}>
                                <Text style={stylesPdf.detailsLabel}>Num:</Text>
                                <Text style={stylesPdf.detailsValue}>{data.invoiceNum}</Text>
                            </View>
                            <View style={stylesPdf.detailsRow}>
                                <Text style={stylesPdf.detailsLabel}>Date:</Text>
                                <Text style={stylesPdf.detailsValue}>{data.invoiceDate}</Text>
                            </View>
                            <View style={stylesPdf.detailsRow}>
                                <Text style={stylesPdf.detailsLabel}>Magasin:</Text>
                                <Text style={stylesPdf.detailsValue}>{data.magasin}</Text>
                            </View>
                        </View>
                        <Text style={stylesPdf.invoiceTitle}>Client Details</Text>
                        <View style={stylesPdf.detailsTable}>
                            <View style={stylesPdf.detailsRow}>
                                <Text style={stylesPdf.detailsLabel}>Client Number:</Text>
                                <Text style={stylesPdf.detailsValue}>{data.clientNumber}</Text>
                            </View>
                            <View style={stylesPdf.detailsRow}>
                                <Text style={stylesPdf.detailsLabel}>Place Code:</Text>
                                <Text style={stylesPdf.detailsValue}>{data.placeCode}</Text>
                            </View>
                            {/* Add more client details as needed */}
                        </View>
                        <Text style={stylesPdf.invoiceTitle}>Invoice Items</Text>
                        <View style={stylesPdf.table}>
                            <View style={stylesPdf.tableRow}>
                                <View style={stylesPdf.tableCell}>
                                    <Text style={styles.tableHeaderCell}>Reference</Text>
                                </View>
                                <View style={stylesPdf.tableCell}>
                                    <Text style={styles.tableHeaderCell}>Designation</Text>
                                </View>
                                <View style={stylesPdf.tableCell}>
                                    <Text style={styles.tableHeaderCell}>Serial Num</Text>
                                </View>
                                <View style={stylesPdf.tableCell}>
                                    <Text style={styles.tableHeaderCell}>Quantity</Text>
                                </View>
                            </View>
                            <View style={stylesPdf.tableRow}>
                                <View style={stylesPdf.tableCellRow}>
                                    <Text style={styles.tableHeaderCell}>15125645XG748751REF</Text>
                                </View>
                                <View style={stylesPdf.tableCellRow}>
                                    <Text style={styles.tableHeaderCell}>DES X12</Text>
                                </View>
                                <View style={stylesPdf.tableCellRow}>
                                    <Text style={styles.tableHeaderCell}>2189489261159493</Text>
                                </View>
                                <View style={stylesPdf.tableCellRow}>
                                    <Text style={styles.tableHeaderCell}>10</Text>
                                </View>
                            </View>

                            {/* Map over data.invoiceItems to render the items in the table */}
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );


}

export default InvoicePDF;