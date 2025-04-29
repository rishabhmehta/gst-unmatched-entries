"use client"

import { useState } from "react"
import { InvoiceReconciliation } from "@/components/invoice-reconciliation"
import { ReconciliationSummary } from "@/components/reconciliation-summary"
import { InvoiceFilter } from "@/components/invoice-filter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Filter } from "lucide-react"
import Link from "next/link"

export function TaxReconciliationDashboard() {
  const [activeFilter, setActiveFilter] = useState<"all" | "matched" | "discrepancy" | "unmatched">("all")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard" className="flex items-center text-gray-500 hover:text-gray-700 mr-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>GSTR-2A Reconciliation</span>
        </Link>
        <h1 className="text-xl font-medium">/ Invoice Reconciliation Overview</h1>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <ReconciliationSummary />

      <div className="bg-white rounded-lg shadow-sm border mt-6">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-medium">Invoice Reconciliation</h2>
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {showFilters && <InvoiceFilter setActiveFilter={setActiveFilter} />}

        <Tabs defaultValue="all" className="w-full">
          <div className="px-4 border-b">
            <TabsList className="h-10">
              <TabsTrigger
                value="all"
                onClick={() => setActiveFilter("all")}
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 rounded-none"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="matched"
                onClick={() => setActiveFilter("matched")}
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 rounded-none"
              >
                Matched
              </TabsTrigger>
              <TabsTrigger
                value="discrepancy"
                onClick={() => setActiveFilter("discrepancy")}
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 rounded-none"
              >
                Discrepancy
              </TabsTrigger>
              <TabsTrigger
                value="unmatched"
                onClick={() => setActiveFilter("unmatched")}
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-500 rounded-none"
              >
                Unmatched Entries
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <InvoiceReconciliation filter="all" />
          </TabsContent>
          <TabsContent value="matched" className="mt-0">
            <InvoiceReconciliation filter="matched" />
          </TabsContent>
          <TabsContent value="discrepancy" className="mt-0">
            <InvoiceReconciliation filter="discrepancy" />
          </TabsContent>
          <TabsContent value="unmatched" className="mt-0">
            <InvoiceReconciliation filter="unmatched" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
