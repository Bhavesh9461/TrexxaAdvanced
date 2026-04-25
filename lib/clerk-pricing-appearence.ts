import { dark } from "@clerk/themes";

/**
 * Dark + brand colors for `<PricingTable />` and billing checkout.
 * Uses Clerk’s prebuilt `dark` theme, then overrides variables to match
 * this app’s `.dark` palette (see `app/globals.css`) and orange primary.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkPricingAppearance = {
  theme: dark,
  variables: {
    colorPrimary: "oklch(0.68 0.18 295)", // vibrant purple
    colorPrimaryForeground: "oklch(0.98 0.01 295)",

    colorBackground: "oklch(0.16 0.02 295)", // deep dark purple bg
    colorForeground: "oklch(0.95 0.01 295)",

    colorInput: "oklch(0.24 0.02 295)",
    colorInputForeground: "oklch(0.95 0.01 295)",

    colorNeutral: "oklch(0.75 0.02 295)", // soft purple-gray
  },
} as const;
