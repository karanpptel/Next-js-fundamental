import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function UserAnalyticsDefaultPage() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>User Analytics Default</CardTitle>
                    <CardDescription>View your user statistics</CardDescription>
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