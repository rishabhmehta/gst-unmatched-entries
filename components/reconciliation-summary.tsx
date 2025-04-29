import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ReconciliationSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-500">Vendor Name</h3>
            <h3 className="text-sm font-medium text-gray-500">GST IN</h3>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">ABC Enterprise</p>
              <p className="text-sm text-gray-500">(B2B)</p>
            </div>
            <p className="font-medium">24KLMNO9O12P3Z8</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-500">Reconciliation Status</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm">Matched</p>
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                10 Invoices
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">Discrepancy</p>
              <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
                2 Invoices
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">Unmatched</p>
              <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
                3 Invoices
              </Badge>
            </div>
            <Progress value={77} className="h-2 mt-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-500">Amount Summary</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm">GSTR-2A Total</p>
              <p className="font-medium">₹1,45,390</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">Internal Records Total</p>
              <p className="font-medium">₹1,52,780</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">Difference</p>
              <p className="font-medium text-red-600">₹7,390</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
