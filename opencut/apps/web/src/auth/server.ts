import { betterAuth, type RateLimit } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { webEnv } from "@/env/web";

// In-memory storage for rate limiting (Replit local dev — no Redis required).
// In production, replace with a real Redis-backed implementation.
const memoryStore = new Map<string, { value: unknown; expiresAt?: number }>();

function memGet<T>(key: string): T | undefined {
        const entry = memoryStore.get(key);
        if (!entry) return undefined;
        if (entry.expiresAt && entry.expiresAt < Date.now()) {
                memoryStore.delete(key);
                return undefined;
        }
        return entry.value as T;
}

function memSet(key: string, value: unknown, ttlSeconds?: number) {
        memoryStore.set(key, {
                value,
                expiresAt: ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined,
        });
}

export const auth = betterAuth({
        database: drizzleAdapter(db, {
                provider: "pg",
                usePlural: true,
        }),
        secret: webEnv.BETTER_AUTH_SECRET,
        user: {
                deleteUser: {
                        enabled: true,
                },
        },
        emailAndPassword: {
                enabled: true,
        },
        rateLimit: {
                storage: "secondary-storage",
                customStorage: {
                        get: async (key) => {
                                return memGet<RateLimit>(key);
                        },
                        set: async (key, value) => {
                                memSet(key, value);
                        },
                },
        },
        baseURL: webEnv.NEXT_PUBLIC_SITE_URL,
        appName: "OpenCut",
        trustedOrigins: [webEnv.NEXT_PUBLIC_SITE_URL],
});

export type Auth = typeof auth;
