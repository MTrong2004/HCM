---
name: editorial-content-arch
description: "Guidelines for academic content fidelity, data separation in presentation-content.ts, asset manifest management, and digital magazine typography standards."
---

# Editorial Content Architecture Skill

This skill ensures 100% preservation of academic rigor and clean separation of concerns for the Ho Chi Minh Thought website presentation.

## Core Directives

1. **Absolute Text Fidelity**:
   - Every single thesis, argument, citation, and sub-point from `TTHCM_Web_Presentation_Full_Content_Spec_3D_Complete.md` must be preserved word-for-word.
   - Do not summarize, shorten, or replace academic arguments with generic phrases or lorem ipsum.
   - Separate content into `content/presentation-content.ts` (TypeScript interfaces and objects) rather than hardcoding long text blocks inside UI components.

2. **Asset Manifest System**:
   - Track every visual asset in `content/asset-manifest.ts` with:
     - `id`: unique asset identifier.
     - `section`: corresponding section.
     - `type`: 'historical-image' | '3d-model' | 'infographic-svg' | 'icon-svg'.
     - `aspectRatio`: e.g., '16:9', '3:2'.
     - `minResolution`: e.g., '1920x1080'.
     - `caption`: Vietnamese caption with historical citations.
     - `status`: 'available' | 'placeholder'.
   - When real assets are pending, use `AssetPlaceholder` with clear dimensional frames and metadata rather than random unsourced images.

3. **Typography & Readability Standards**:
   - Editorial headings: `Playfair Display` or `Cormorant Garamond` with refined letter-spacing and hierarchy.
   - Body typography: `Inter` with line-height 1.65–1.85 and paragraph max-width 65–75 characters per line (`max-w-prose` / `max-w-3xl`).
   - Color palette strictly adhered: Antique paper background (`#F5EFE3`), Deep red (`#8B1E1E`), Classic gold (`#C6A15B`), Carbon text (`#171717`).
   - WCAG AA contrast compliance at all times.
