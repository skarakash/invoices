import { Invoice } from '@prisma/client'
export const formatInvoiceStatus = (invoices: Invoice[]) => {
    if (invoices.length === 0) {
        return 'No invoices'
    } else if (invoices.length === 1) {
        return `There is 1 ${invoices[0].status} invoice`
    } else {
        const allEqual = invoices.every(obj => obj.status === invoices[0].status);
        if (allEqual) {
            return `There are ${invoices.length} ${invoices[0].status} invoices`
        } else {
            return `There are ${invoices.length} total invoices`
        }
    }
};