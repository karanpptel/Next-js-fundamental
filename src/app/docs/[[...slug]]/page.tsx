'use client';

import { use } from 'react';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}
export default function Docs({ params }: PageProps) {
    const { slug } = use(params);
    if (slug?.length === 2) {
        return (
            <h1>viewing docs for the feature {slug[0]} and concept {slug[1]}</h1>
        );
    } else if (slug?.length === 1) {
        return (
            <h1>viewing docs for the feature {slug[0]}</h1>
        );
    } 
    return <h1>viewing docs Home page</h1>;
    
}

// # catch all sengments
// how to create a dynamic route with multiple segments in Next.js
// This file handles the dynamic routing for documentation pages based on the URL segments.