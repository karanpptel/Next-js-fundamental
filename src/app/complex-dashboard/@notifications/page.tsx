import Link from "next/link";

export default function Notifications() {
    return (
        <div className="space-y-4">
            <div className="p-2 bg-muted/50 rounded-lg">
                <p className="text-sm">New message from John Doe</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
            <div className="p-2 bg-muted/50 rounded-lg">
                <p className="text-sm">Your report is ready to download</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
            <div className="p-2 bg-muted/50 rounded-lg">
                <p className="text-sm">Meeting scheduled for tomorrow</p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
            </div>
            <div className="p-4 bg-accent rounded-lg ">
                <Link href="/complex-dashboard/archived" className="font-bold ">Archived</Link>
            </div>
        </div>
    )
}