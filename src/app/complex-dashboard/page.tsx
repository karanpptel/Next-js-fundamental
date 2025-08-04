import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ComplexDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
        <CardDescription>Welcome to your complex dashboard with parallel routes</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This dashboard demonstrates the use of shadcn/ui Card components with Next.js parallel routes.
          The metrics and notifications are displayed in separate cards below.
        </p>
      </CardContent>
    </Card>
  );
}