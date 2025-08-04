import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



 export default function RevenueMetricsDefaultPage() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Revenue Metrics Default</CardTitle>
                    <CardDescription>View your revenue statistics</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        This dashboard is default page
                    </p>
                </CardContent>
            </Card>
            
        </div>
    )
}