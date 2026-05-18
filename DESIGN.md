---
name: Lively Faith
colors:
  surface: '#f8faf6'
  surface-dim: '#d8dbd7'
  surface-bright: '#f8faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f0'
  surface-container: '#eceeea'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e1e3df'
  on-surface: '#191c1a'
  on-surface-variant: '#404943'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#eff1ed'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#6b5778'
  on-secondary: '#ffffff'
  secondary-container: '#f0d7fe'
  on-secondary-container: '#6f5b7c'
  tertiary: '#713638'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d4d4e'
  on-tertiary-container: '#ffcfce'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#f3daff'
  secondary-fixed-dim: '#d6bee4'
  on-secondary-fixed: '#251431'
  on-secondary-fixed-variant: '#523f5f'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b3'
  on-tertiary-fixed: '#390b0e'
  on-tertiary-fixed-variant: '#6f3537'
  background: '#f8faf6'
  on-background: '#191c1a'
  surface-variant: '#e1e3df'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is anchored in a philosophy of "Vibrant Serenity." It aims to evoke a sense of spiritual growth, community warmth, and optimistic energy. The target audience seeks a digital environment that feels modern and professional yet deeply personal and inviting.

The visual style blends **Modern Minimalism** with **Tactile Warmth**. It prioritizes high legibility and breathability while using a diverse, organic color palette to distinguish different categories of content. The aesthetic avoids the sterility of pure tech apps by employing soft shapes, gentle transitions, and a focus on human-centric imagery.

## Colors

The palette is built on a foundation of organic, earth-inspired tones. The primary **Forest Green** represents growth and stability, while the secondary **Muted Purple** provides a sense of grace and reflection. 

To support a broader range of content types and emotional states, an expanded accent palette is introduced:
- **Teal:** Used for meditation, peace, and restorative content.
- **Coral:** Used for community events, hospitality, and active engagement.
- **Yellow:** Used for inspiration, joy, and highlighting key milestones.

The background uses a warm neutral (Cream) rather than pure white to reduce eye strain and feel more welcoming.

## Typography

This design system utilizes a combination of **Plus Jakarta Sans** for structural elements and **Be Vietnam Pro** for long-form reading. 

Headlines use a tighter letter-spacing and heavier weights to create a strong visual anchor. Body text is optimized for readability with generous line heights. For mobile devices, large display headings scale down to ensure they remain within the viewport while maintaining their hierarchical dominance.

## Layout & Spacing

The layout follows a **fluid 12-column grid** on desktop, transitioning to a 4-column grid on mobile. The system is built on an 8px base unit to ensure consistent vertical rhythm.

- **Desktop:** 64px side margins with 24px gutters.
- **Tablet:** 40px side margins with 20px gutters.
- **Mobile:** 20px side margins with 16px gutters.

Spacing between sections should be generous (80px–120px) to maintain the "Vibrant Serenity" brand pillar, allowing content to breathe and preventing a cluttered, overwhelming user experience.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and **Motion Tokens**. Surfaces are treated as light, physical layers that respond to user interaction.

### Depth Levels
- **Level 0 (Flat):** Background and foundational containers.
- **Level 1 (Subtle):** Cards and secondary buttons. Uses a soft, 4% opacity shadow with a large blur.
- **Level 2 (Raised):** Hover states and active navigation items.
- **Level 3 (Overlay):** Modals and dropdown menus. Uses a deeper, 12% opacity shadow.

### Motion & Interaction
- **Fade-In Entrance:** All primary content containers should use a 300ms ease-out fade-in with a subtle 10px upward slide on initial load.
- **Hover Lift:** Interactive cards and buttons should lift -4px on hover, accompanied by a slight increase in shadow spread to simulate physical movement toward the user.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners to maintain a friendly and approachable feel. 

- **Base Radius:** 0.5rem (8px) for standard buttons and input fields.
- **Container Radius:** 1rem (16px) for cards and modular sections.
- **Large Radius:** 1.5rem (24px) for featured hero elements or large image containers.

## Components

### Cards
Cards transition away from text overlays to a stacked structure. The **Image-on-top, Text-below** format ensures maximum legibility. 
- **Image Aspect Ratio:** 16:9 or 4:3 with a subtle 0.5rem corner radius.
- **Text Block:** Minimum 24px padding. Titles use `headline-md`, followed by `body-md` for descriptions.
- **Interaction:** The entire card container lifts on hover (see Elevation).

### Buttons
- **Primary:** Solid background (`primary_color_hex`), white text, 0.5rem radius.
- **Secondary:** Outlined with a 1.5px stroke of the secondary color.
- **Ghost:** No border, text-only, used for low-priority actions.

### Chips & Tags
Used for categorization. Chips use the expanded accent palette (Teal, Coral, Yellow) with a 10% opacity background of the color and a 100% opacity text label for high contrast and accessibility.

### Input Fields
Soft-gray borders (1px) that transition to the Primary Green on focus. Labels always remain visible above the field using `label-md`.

### Lists
Lists should be separated by subtle dividers (1px, 5% opacity) and provide generous 16px vertical padding between items to ensure touch targets are accessible and the interface remains "airy."