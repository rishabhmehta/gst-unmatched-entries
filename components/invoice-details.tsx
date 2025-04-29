import { Button } from "@/components/ui/button"
import { AlertCircle, XCircle } from "lucide-react"
import { UnmatchedActions } from "@/components/unmatched-actions"

interface InvoiceDetailsProps {
  invoice: any
}

export function InvoiceDetails({ invoice }: InvoiceDetailsProps) {
  return (
    <div className="p-4 bg-gray-50 border-t">
      {invoice.status === "matched" && (
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="font-medium mb-2">GSTR-2A Record</h3>
            <div className="bg-white rounded border overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      HSC/SAC Code
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Taxable value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoice.items.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Total Taxable Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Tax Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Grand Total
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Internal Purchase Record</h3>
            <div className="bg-white rounded border overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      HSC/SAC Code
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Taxable value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoice.items.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Total Taxable Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Tax Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Grand Total
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}

      {invoice.status === "discrepancy" && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2" />
              <div>
                <h4 className="font-medium text-amber-800">Discrepancies Detected</h4>
                <p className="text-sm text-amber-700">
                  The following discrepancies were found between GSTR-2A and your internal records.
                </p>
              </div>
            </div>

            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full divide-y divide-amber-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider"
                    >
                      Field
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider"
                    >
                      GSTR-2A Value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider"
                    >
                      Internal Value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-left text-xs font-medium text-amber-800 uppercase tracking-wider"
                    >
                      Difference
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-200">
                  {invoice.discrepancies.map((discrepancy: any, index: number) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-amber-800">{discrepancy.field}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-amber-800">{discrepancy.gstr2a}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-amber-800">{discrepancy.internal}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-red-600 font-medium">
                        {discrepancy.difference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">GSTR-2A Record</h3>
            <div className="bg-white rounded border overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      HSC/SAC Code
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Taxable value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoice.items.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Total Taxable Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Tax Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Grand Total
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Internal Purchase Record</h3>
            <div className="bg-white rounded border overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      HSC/SAC Code
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Taxable value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CGST Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST %
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SGST Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoice.items.map((item: any, index: number) => (
                    <tr key={index} className={index === 0 ? "bg-amber-50" : ""}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {index === 0 ? "₹37,500" : item.taxableValue}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {index === 0 ? "₹1,875" : item.cgstAmount}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {index === 0 ? "₹1,875" : item.sgstAmount}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Total Taxable Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">₹37,500</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Tax Amount
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">₹3,750</td>
                    <td colSpan={4}></td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                      Grand Total
                    </td>
                    <td className="px-4 py-3 text-sm font-medium">₹39,250</td>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}

      {invoice.status === "unmatched" && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
              <div>
                <h4 className="font-medium text-red-800">Unmatched Entry</h4>
                {invoice.unmatchedType === "only-internal" && (
                  <p className="text-sm text-red-700">
                    This invoice is present in your internal records but not found in GSTR-2A.
                  </p>
                )}
                {invoice.unmatchedType === "only-gstr2a" && (
                  <p className="text-sm text-red-700">
                    This invoice is present in GSTR-2A but not found in your internal records.
                  </p>
                )}
                {invoice.unmatchedType === "different-invoice-number" && (
                  <p className="text-sm text-red-700">
                    This invoice appears to have different invoice numbers in GSTR-2A ({invoice.gstr2aId}) and your
                    internal records ({invoice.internalId}).
                  </p>
                )}
              </div>
            </div>
          </div>

          {invoice.unmatchedType === "only-internal" && (
            <div>
              <h3 className="font-medium mb-2">Internal Purchase Record</h3>
              <div className="bg-white rounded border overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        HSC/SAC Code
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Taxable value
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CGST %
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CGST Amount
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        SGST %
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        SGST Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoice.items.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                        Total Taxable Amount
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                      <td colSpan={4}></td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                        Tax Amount
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                      <td colSpan={4}></td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                        Grand Total
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                      <td colSpan={4}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {invoice.unmatchedType === "only-gstr2a" && (
            <div>
              <h3 className="font-medium mb-2">GSTR-2A Record</h3>
              <div className="bg-white rounded border overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        HSC/SAC Code
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Taxable value
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CGST %
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CGST Amount
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        SGST %
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        SGST Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoice.items.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                        Total Taxable Amount
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                      <td colSpan={4}></td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                        Tax Amount
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                      <td colSpan={4}></td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                        Grand Total
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                      <td colSpan={4}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {invoice.unmatchedType === "different-invoice-number" && (
            <>
              <div>
                <h3 className="font-medium mb-2">GSTR-2A Record (Invoice: {invoice.gstr2aId})</h3>
                <div className="bg-white rounded border overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          HSC/SAC Code
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Taxable value
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          CGST %
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          CGST Amount
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          SGST %
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          SGST Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {invoice.items.map((item: any, index: number) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                          Total Taxable Amount
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                        <td colSpan={4}></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                          Tax Amount
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                        <td colSpan={4}></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                          Grand Total
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                        <td colSpan={4}></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Internal Purchase Record (Invoice: {invoice.internalId})</h3>
                <div className="bg-white rounded border overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          HSC/SAC Code
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Taxable value
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          CGST %
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          CGST Amount
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          SGST %
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          SGST Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {invoice.items.map((item: any, index: number) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.hscCode}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.description}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.taxableValue}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstPercent}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.cgstAmount}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstPercent}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">{item.sgstAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                          Total Taxable Amount
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{invoice.taxableAmount}</td>
                        <td colSpan={4}></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                          Tax Amount
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{invoice.taxAmount}</td>
                        <td colSpan={4}></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                          Grand Total
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{invoice.totalAmount}</td>
                        <td colSpan={4}></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </>
          )}

          <UnmatchedActions unmatchedType={invoice.unmatchedType} />
        </div>
      )}

      <div className="flex justify-end mt-4">
        <Button variant="outline" size="sm" className="mr-2">
          Flag for Review
        </Button>
        <Button size="sm">Mark as Reviewed</Button>
      </div>
    </div>
  )
}
