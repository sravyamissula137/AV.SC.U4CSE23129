import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('page') || 1;
        const limit = searchParams.get('limit') || 10;
        const notification_type = searchParams.get('notification_type');

        // Build URL parameters
        const urlParams = new URLSearchParams({ page, limit });
        if (notification_type) {
            urlParams.append('notification_type', notification_type);
        }

        const externalApiUrl = `http://20.207.122.201/evaluation-service/notifications?${urlParams.toString()}`;
        const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

        const response = await fetch(externalApiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            // Prevent caching to always get fresh data
            cache: 'no-store'
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message || 'Failed to fetch notifications from external API' },
                { status: response.status }
            );
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error('API Route Error /api/notifications:', error.message);
        return NextResponse.json(
            { error: 'Internal Server Error', message: error.message },
            { status: 500 }
        );
    }
}
