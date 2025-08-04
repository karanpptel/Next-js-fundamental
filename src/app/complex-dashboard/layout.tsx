import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

export default function ComplexDashboardLayout({ 
    children,
    notifications,
    revenuemetrics,
    useranalytics,
    login,
}: {
    children: React.ReactNode;
    useranalytics: React.ReactNode;
    revenuemetrics: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {

    const isLoggedIn = true;
    return isLoggedIn ? (
       
        <div className="space-y-4">
            <div>{children}</div>
            <div className="flex gap-4">

                <div className="flex flex-col gap-4">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>User Analytics</CardTitle>
                            <CardDescription>View your user statistics</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {useranalytics}
                        </CardContent>
                    </Card>
                    
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Revenue Metrics</CardTitle>
                            <CardDescription>Monitor your revenue performance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {revenuemetrics}
                        </CardContent>
                    </Card>
                </div>

                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Your latest updates and alerts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {notifications}
                    </CardContent>
                </Card>

            </div>
        </div>
    ) : (
        login
    );
}