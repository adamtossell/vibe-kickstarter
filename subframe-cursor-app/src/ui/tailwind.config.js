module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(239, 246, 255)",
          100: "rgb(219, 234, 254)",
          200: "rgb(191, 219, 254)",
          300: "rgb(147, 197, 253)",
          400: "rgb(96, 165, 250)",
          500: "rgb(59, 130, 246)",
          600: "rgb(37, 99, 235)",
          700: "rgb(29, 78, 216)",
          800: "rgb(30, 64, 175)",
          900: "rgb(30, 58, 138)",
        },
        neutral: {
          0: "rgb(255, 255, 255)",
          50: "rgb(249, 250, 251)",
          100: "rgb(243, 244, 246)",
          200: "rgb(229, 231, 235)",
          300: "rgb(209, 213, 219)",
          400: "rgb(156, 163, 175)",
          500: "rgb(107, 114, 128)",
          600: "rgb(75, 85, 99)",
          700: "rgb(55, 65, 81)",
          800: "rgb(31, 41, 55)",
          900: "rgb(17, 24, 39)",
          950: "rgb(3, 7, 18)",
        },
        error: {
          50: "rgb(255, 241, 242)",
          100: "rgb(255, 228, 230)",
          200: "rgb(254, 205, 211)",
          300: "rgb(253, 164, 175)",
          400: "rgb(251, 113, 133)",
          500: "rgb(244, 63, 94)",
          600: "rgb(225, 29, 72)",
          700: "rgb(190, 18, 60)",
          800: "rgb(159, 18, 57)",
          900: "rgb(136, 19, 55)",
        },
        warning: {
          50: "rgb(255, 251, 235)",
          100: "rgb(254, 243, 199)",
          200: "rgb(253, 230, 138)",
          300: "rgb(252, 211, 77)",
          400: "rgb(251, 191, 36)",
          500: "rgb(245, 158, 11)",
          600: "rgb(217, 119, 6)",
          700: "rgb(180, 83, 9)",
          800: "rgb(146, 64, 14)",
          900: "rgb(120, 53, 15)",
        },
        success: {
          50: "rgb(240, 253, 250)",
          100: "rgb(204, 251, 241)",
          200: "rgb(153, 246, 228)",
          300: "rgb(94, 234, 212)",
          400: "rgb(45, 212, 191)",
          500: "rgb(20, 184, 166)",
          600: "rgb(13, 148, 136)",
          700: "rgb(15, 118, 110)",
          800: "rgb(17, 94, 89)",
          900: "rgb(19, 78, 74)",
        },
        "brand-primary": "rgb(59, 130, 246)",
        "default-font": "rgb(17, 24, 39)",
        "subtext-color": "rgb(107, 114, 128)",
        "neutral-border": "rgb(243, 244, 246)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(255, 255, 255)",
        "light-background": "rgb(249, 250, 251)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "36px",
          {
            lineHeight: "40px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        display: [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Inter",
        "caption-bold": "Inter",
        body: "Inter",
        "body-bold": "Inter",
        "heading-3": "Inter",
        "heading-2": "Inter",
        "heading-1": "Inter",
        "monospace-body": "monospace",
        display: '"Playfair Display"',
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        DEFAULT: "8px",
        lg: "12px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
