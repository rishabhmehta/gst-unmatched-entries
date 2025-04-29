import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ReconciliationActions() {
  return (
    <div className="flex justify-end mt-6">
      <Button variant="outline" size="sm" className="mr-2">
        Export Report
      </Button>
      <Button size="sm" className="flex items-center">
        <Check className="h-4 w-4 mr-2" />
        Mark as Reviewed
      </Button>
    </div>
  )
}
