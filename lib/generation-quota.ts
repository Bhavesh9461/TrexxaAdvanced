import { countGenerationsSince, utcMonthStart } from "@/db/generations";
import type { SessionAuthObject } from "@clerk/backend";

export type GenerationQuotaSnapshot = {
  limit: number;
  used: number;
  remaining: number;
};

export const BILLING_PLAN_KEYS = {
  free: "free",
  pro: "pro",
  ultra: "ultra",
} as const;

export const MONTHLY_GENERATION_LIMITS = {
  free: 3,
  pro: 75,
  ultra: 175,
} as const;

export function getMonthlyGenerationLimit(has: SessionAuthObject["has"]): number {
  if (has({ plan: BILLING_PLAN_KEYS.ultra })) {
    return MONTHLY_GENERATION_LIMITS.ultra;
  }
  if (has({ plan: BILLING_PLAN_KEYS.pro })) {
    return MONTHLY_GENERATION_LIMITS.pro;
  }

  return MONTHLY_GENERATION_LIMITS.free;
}

export async function getGenerationQuotaSnapshot(
  has: SessionAuthObject["has"],
  clerkUserId: string,
) {
  const limit = getMonthlyGenerationLimit(has);
  const used = await countGenerationsSince(clerkUserId, utcMonthStart());
  return {
    limit,
    used,
    remaining: Math.max(0, limit - used),
  };
}