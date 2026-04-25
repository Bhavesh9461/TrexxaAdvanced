import { dark } from "@clerk/themes";

/**
 * Dark theme for Clerk modals (sign-in, sign-up) that matches the app's color palette.
 * Uses Clerk's prebuilt `dark` theme as a base, then overrides variables to match
 * this app's `.dark` palette from `app/globals.css` with the same orange primary color.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */

export const clerkModalAppearance = {
  theme: dark,
  variables: {
    // 🌟 Primary (Purple)
    colorPrimary: "oklch(0.68 0.18 295)",
    colorPrimaryForeground: "oklch(0.98 0.01 295)",

    // 🌑 Background
    colorBackground: "oklch(0.16 0.02 295)",
    colorForeground: "oklch(0.95 0.01 295)",

    // 🪟 Card
    colorCard: "oklch(0.18 0.02 295)",
    colorCardForeground: "oklch(0.95 0.01 295)",

    // ⌨️ Input
    colorInput: "oklch(0.24 0.02 295)",
    colorInputForeground: "oklch(0.95 0.01 295)",

    // 🧩 Secondary
    colorSecondary: "oklch(0.24 0.02 295)",
    colorSecondaryForeground: "oklch(0.95 0.01 295)",

    // 🌫️ Muted
    colorMuted: "oklch(0.20 0.02 295)",
    colorMutedForeground: "oklch(0.75 0.02 295)",

    // ✨ Accent (slightly brighter purple)
    colorAccent: "oklch(0.75 0.18 300)",
    colorAccentForeground: "oklch(0.18 0.02 295)",

    // 🧱 Borders
    colorBorder: "oklch(0.26 0.02 295)",

    // 🔵 Focus ring
    colorRing: "oklch(0.68 0.18 295)",

    // 🔤 Typography
    fontFamily:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

    // 🔲 Radius
    borderRadius: "0.625rem",
    borderRadiusSmall: "0.375rem",
    borderRadiusLarge: "0.875rem",
  },

  elements: {
    // 🔘 Primary Button
    formButtonPrimary: {
      backgroundColor: "oklch(0.68 0.18 295)",
      color: "oklch(0.98 0.01 295)",
      "&:hover": {
        backgroundColor: "oklch(0.62 0.18 295)",
      },
      "&:active": {
        backgroundColor: "oklch(0.58 0.18 295)",
      },
    },

    // ⚪ Secondary Button
    formButtonReset: {
      backgroundColor: "oklch(0.24 0.02 295)",
      color: "oklch(0.95 0.01 295)",
      borderColor: "oklch(0.26 0.02 295)",
      "&:hover": {
        backgroundColor: "oklch(0.30 0.02 295)",
      },
    },

    // 🪟 Card
    card: {
      backgroundColor: "oklch(0.18 0.02 295)",
      borderColor: "oklch(0.26 0.02 295)",
    },

    // 🧠 Header
    headerTitle: {
      color: "oklch(0.95 0.01 295)",
      fontFamily:
        "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    headerSubtitle: {
      color: "oklch(0.75 0.02 295)",
    },

    // 🔐 Social buttons
    socialButtonsBlockButton: {
      backgroundColor: "oklch(0.24 0.02 295)",
      color: "oklch(0.95 0.01 295)",
      borderColor: "oklch(0.26 0.02 295)",
      "&:hover": {
        backgroundColor: "oklch(0.30 0.02 295)",
      },
    },

    // ⌨️ Input field
    formFieldInput: {
      backgroundColor: "oklch(0.24 0.02 295)",
      color: "oklch(0.95 0.01 295)",
      borderColor: "oklch(0.26 0.02 295)",
      "&:focus": {
        borderColor: "oklch(0.68 0.18 295)",
        boxShadow: "0 0 0 1px oklch(0.68 0.18 295)",
      },
    },

    // 🔗 Footer link
    footerActionLink: {
      color: "oklch(0.68 0.18 295)",
      "&:hover": {
        color: "oklch(0.75 0.18 300)",
      },
    },
  },
} as const;