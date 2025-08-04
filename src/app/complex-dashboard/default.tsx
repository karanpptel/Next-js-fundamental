import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComplexDashboardDefaultPage() {
    return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Overview Default</CardTitle>
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