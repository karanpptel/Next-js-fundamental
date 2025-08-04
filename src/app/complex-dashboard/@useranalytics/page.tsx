export default function UserAnalytics() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl font-bold">1,234</p>
                    <p className="text-xs text-muted-foreground">Total Users</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">+12%</p>
                    <p className="text-xs text-muted-foreground">From last month</p>
                </div>
            </div>
            <div className="h-[100px] bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">User Growth Chart</p>
            </div>
        </div>
    )
}