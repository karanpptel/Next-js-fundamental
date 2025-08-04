export default function RevenueMetrics() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl font-bold">$24,563</p>
                    <p className="text-xs text-muted-foreground">Total Revenue</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">+8%</p>
                    <p className="text-xs text-muted-foreground">From last month</p>
                </div>
            </div>
            <div className="h-[100px] bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Revenue Chart</p>
            </div>
        </div>
    )
}