import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function handleSpecialRoutes(request: NextRequest) {
    // Add any custom logic for special routes here
    return NextResponse.next();
}
