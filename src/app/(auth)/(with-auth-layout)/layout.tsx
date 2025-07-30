export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>Auth Inner Layout</h2>
            {children}
        </>
    )
}

// After testing the route group layout, update the (auth) group layout by adding the login and register routes back to the (auth) group.
// To test this route group named (with-auth-layout), add the login and register routes back to this route group.