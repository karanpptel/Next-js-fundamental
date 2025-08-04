//import { Card } from "@/components/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Archived Notifications</CardTitle>
                    <CardDescription>View your archived notifications</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/complex-dashboard" className="font-bold border-black">
                        Default
                    </Link>
                </CardContent>

            </Card>
                
            
            
            
        </div>
    )
}