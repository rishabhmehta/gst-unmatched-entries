import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, FileSearch, LinkIcon } from "lucide-react"

interface UnmatchedActionsProps {
  unmatchedType: "only-internal" | "only-gstr2a" | "different-invoice-number"
}

export function UnmatchedActions({ unmatchedType }: UnmatchedActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {unmatchedType === "only-internal" && (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center">
                <FileSearch className="h-4 w-4 mr-2" />
                Search GSTR-2A
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search GSTR-2A Records</DialogTitle>
                <DialogDescription>
                  Search for a matching invoice in GSTR-2A using different criteria.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="search-by" className="text-right">
                    Search by
                  </Label>
                  <Select defaultValue="invoice-date">
                    <SelectTrigger id="search-by" className="col-span-3">
                      <SelectValue placeholder="Select criteria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invoice-date">Invoice Date</SelectItem>
                      <SelectItem value="amount">Amount</SelectItem>
                      <SelectItem value="vendor">Vendor</SelectItem>
                      <SelectItem value="description">Description</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="search-value" className="text-right">
                    Value
                  </Label>
                  <Input id="search-value" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" className="flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create GSTR-2A Entry
          </Button>
        </>
      )}

      {unmatchedType === "only-gstr2a" && (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center">
                <FileSearch className="h-4 w-4 mr-2" />
                Search Internal Records
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search Internal Records</DialogTitle>
                <DialogDescription>
                  Search for a matching invoice in your internal records using different criteria.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="search-by" className="text-right">
                    Search by
                  </Label>
                  <Select defaultValue="invoice-date">
                    <SelectTrigger id="search-by" className="col-span-3">
                      <SelectValue placeholder="Select criteria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invoice-date">Invoice Date</SelectItem>
                      <SelectItem value="amount">Amount</SelectItem>
                      <SelectItem value="vendor">Vendor</SelectItem>
                      <SelectItem value="description">Description</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="search-value" className="text-right">
                    Value
                  </Label>
                  <Input id="search-value" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" className="flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create Internal Record
          </Button>
        </>
      )}

      {unmatchedType === "different-invoice-number" && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center">
              <LinkIcon className="h-4 w-4 mr-2" />
              Link Invoices
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Link Invoices</DialogTitle>
              <DialogDescription>
                Link these invoices to mark them as the same transaction with different invoice numbers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reason" className="text-right">
                  Reason
                </Label>
                <Select defaultValue="typo">
                  <SelectTrigger id="reason" className="col-span-3">
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="typo">Typo in Invoice Number</SelectItem>
                    <SelectItem value="prefix">Different Prefix/Suffix</SelectItem>
                    <SelectItem value="format">Different Format</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right">
                  Notes
                </Label>
                <Textarea id="notes" className="col-span-3" placeholder="Add any additional notes here..." />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Link Invoices</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Button variant="outline" size="sm">
        Flag for Review
      </Button>
      <Button size="sm">Mark as Reviewed</Button>
    </div>
  )
}
