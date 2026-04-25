// In-memory sliding-window rate limiter for Replit local dev (no Redis).
// In production, replace with @upstash/ratelimit + a real Redis backend.

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100;

const buckets = new Map<string, number[]>();

function allow(ip: string): boolean {
        const now = Date.now();
        const bucket = (buckets.get(ip) ?? []).filter((ts) => now - ts < WINDOW_MS);
        if (bucket.length >= MAX_REQUESTS) {
                buckets.set(ip, bucket);
                return false;
        }
        bucket.push(now);
        buckets.set(ip, bucket);
        return true;
}

export const baseRateLimit = {
        async limit(ip: string) {
                return { success: allow(ip) };
        },
};

export async function checkRateLimit({ request }: { request: Request }) {
        const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
        const { success } = await baseRateLimit.limit(ip);
        return { success, limited: !success };
}
