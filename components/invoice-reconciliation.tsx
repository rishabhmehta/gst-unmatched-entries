"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp } from "lucide-react"
import { InvoiceDetails } from "@/components/invoice-details"

interface InvoiceReconciliationProps {
  filter: "all" | "matched" | "discrepancy" | "unmatched"
}

export function InvoiceReconciliation({ filter }: InvoiceReconciliationProps) {
  const [expandedInvoices, setExpandedInvoices] = useState<string[]>([])

  const toggleInvoice = (invoiceId: string) => {
    if (expandedInvoices.includes(invoiceId)) {
      setExpandedInvoices(expandedInvoices.filter((id) => id !== invoiceId))
    } else {
      setExpandedInvoices([...expandedInvoices, invoiceId])
    }
  }

  // Mock data for demonstration
  const invoices = [
    {
      id: "INV/123/WER/223444",
      date: "10 Mar 2025",
      status: "matched",
      taxableAmount: "₹43,900",
      taxAmount: "₹2,390",
      totalAmount: "₹45,390",
      difference: "₹0",
      items: [
        {
          hscCode: "1244",
          description: "Refrigerator",
          taxableValue: "₹43,900",
          cgstPercent: "6%",
          cgstAmount: "₹2,634",
          sgstPercent: "6%",
          sgstAmount: "₹2,634",
        },
      ],
    },
    {
      id: "INV/123/WER/223445",
      date: "12 Mar 2025",
      status: "discrepancy",
      taxableAmount: "₹35,000",
      taxAmount: "₹1,750",
      totalAmount: "₹36,750",
      difference: "₹2,500",
      items: [
        {
          hscCode: "1245",
          description: "Washing Machine",
          taxableValue: "₹35,000",
          cgstPercent: "5%",
          cgstAmount: "₹1,750",
          sgstPercent: "5%",
          sgstAmount: "₹1,750",
        },
      ],
      discrepancies: [
        { field: "Taxable Value", gstr2a: "₹35,000", internal: "₹37,500", difference: "₹2,500" },
        { field: "CGST Amount", gstr2a: "₹1,750", internal: "₹1,875", difference: "₹125" },
        { field: "SGST Amount", gstr2a: "₹1,750", internal: "₹1,875", difference: "₹125" },
      ],
    },
    {
      id: "INV/123/WER/223446",
      date: "15 Mar 2025",
      status: "unmatched",
      unmatchedType: "only-internal",
      taxableAmount: "₹7,000",
      taxAmount: "₹390",
      totalAmount: "₹7,390",
      difference: "₹7,390",
      items: [
        {
          hscCode: "1246",
          description: "Microwave Oven",
          taxableValue: "₹7,000",
          cgstPercent: "2.5%",
          cgstAmount: "₹175",
          sgstPercent: "2.5%",
          sgstAmount: "₹175",
        },
      ],
    },
    {
      id: "INV/123/WER/223447",
      date: "18 Mar 2025",
      status: "unmatched",
      unmatchedType: "only-gstr2a",
      taxableAmount: "₹12,500",
      taxAmount: "₹625",
      totalAmount: "₹13,125",
      difference: "₹13,125",
      items: [
        {
          hscCode: "1247",
          description: "Air Conditioner",
          taxableValue: "₹12,500",
          cgstPercent: "2.5%",
          cgstAmount: "₹312.5",
          sgstPercent: "2.5%",
          sgstAmount: "₹312.5",
        },
      ],
    },
    {
      id: "INV/123/WER/223448",
      date: "20 Mar 2025",
      status: "unmatched",
      unmatchedType: "different-invoice-number",
      taxableAmount: "₹22,000",
      taxAmount: "₹1,100",
      totalAmount: "₹23,100",
      difference: "₹0",
      gstr2aId: "INV/123/WER/223448",
      internalId: "INV/123/WER/223448A",
      items: [
        {
          hscCode: "1248",
          description: "Television",
          taxableValue: "₹22,000",
          cgstPercent: "2.5%",
          cgstAmount: "₹550",
          sgstPercent: "2.5%",
          sgstAmount: "₹550",
        },
      ],
    },
  ]

  // Filter invoices based on the selected filter
  const filteredInvoices = invoices.filter((invoice) => {
    if (filter === "all") return true
    return invoice.status === filter
  })

  return (
    <div>
      {filteredInvoices.map((invoice) => (
        <div key={invoice.id} className="border-b last:border-b-0">
          <div
            className="p-4 flex items-center cursor-pointer hover:bg-gray-50"
            onClick={() => toggleInvoice(invoice.id)}
          >
            <div className="w-10">
              {invoice.status === "matched" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {invoice.status === "discrepancy" && <AlertTriangle className="h-5 w-5 text-amber-500" />}
              {invoice.status === "unmatched" && <XCircle className="h-5 w-5 text-red-500" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-medium">{invoice.id}</h3>
                {invoice.status === "matched" && (
                  <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 border-green-200">
                    Matched
                  </Badge>
                )}
                {invoice.status === "discrepancy" && (
                  <Badge variant="outline" className="ml-2 bg-amber-50 text-amber-600 border-amber-200">
                    Discrepancy
                  </Badge>
                )}
                {invoice.status === "unmatched" && (
                  <Badge variant="outline" className="ml-2 bg-red-50 text-red-600 border-red-200">
                    {invoice.unmatchedType === "only-internal" && "Only in Internal Records"}
                    {invoice.unmatchedType === "only-gstr2a" && "Only in GSTR-2A"}
                    {invoice.unmatchedType === "different-invoice-number" && "Invoice Number Mismatch"}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">Date: {invoice.date}</p>
            </div>
            <div className="text-right mr-4">
              <p className="font-medium">{invoice.totalAmount}</p>
              {invoice.difference !== "₹0" && <p className="text-sm text-red-600">Diff: {invoice.difference}</p>}
            </div>
            <div className="w-6">
              {expandedInvoices.includes(invoice.id) ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>

          {expandedInvoices.includes(invoice.id) && <InvoiceDetails invoice={invoice} />}
        </div>
      ))}

      {filteredInvoices.length === 0 && (
        <div className="p-8 text-center text-gray-500">No invoices found matching the selected filter.</div>
      )}
    </div>
  )
}
