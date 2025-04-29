import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"

interface InvoiceFilterProps {
  setActiveFilter: (filter: "all" | "matched" | "discrepancy" | "missing") => void
}

export function InvoiceFilter({ setActiveFilter }: InvoiceFilterProps) {
  return (
    <div className="p-4 border-b bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="invoice-number">Invoice Number</Label>
          <Input id="invoice-number" placeholder="Search invoice number" />
        </div>

        <div className="space-y-2">
          <Label>Date Range</Label>
          <DatePickerWithRange />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount-difference">Amount Difference</Label>
          <Select>
            <SelectTrigger id="amount-difference">
              <SelectValue placeholder="Any difference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any difference</SelectItem>
              <SelectItem value="greater-than-1000">Greater than ₹1,000</SelectItem>
              <SelectItem value="less-than-1000">Less than ₹1,000</SelectItem>
              <SelectItem value="no-difference">No difference</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="matched">Matched</SelectItem>
              <SelectItem value="discrepancy">Discrepancy</SelectItem>
              <SelectItem value="missing">Missing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <Button variant="outline" size="sm">
          Reset
        </Button>
        <Button size="sm">Apply Filters</Button>
      </div>
    </div>
  )
}
