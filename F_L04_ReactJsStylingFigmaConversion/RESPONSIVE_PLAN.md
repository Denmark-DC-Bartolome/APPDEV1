# Laboratory 4: Responsive layout plan

Based on the existing components, CSS, and supplied Figma screenshots.

## Existing constraints

- Both screens use the panel clsasses in `Login.module.css`. Sign Up has its own form styles.
- The container uses `86vw`, `82vh`, and a `600px` minimum height. Short windows can clip content inside its hidden overflow.
- The left panel takes 34% of the container but has 120px of horizontal padding. Its tagline and logo stop fitting as the window narrows.
- The Login heading has a 110px bottom margin. The two Sign Up social buttons also compete for horizontal space.

## Proposed changes

1. Keep the desktop layout, colors, Poppins font, and existing design tokens.
2. At widths up to 1200px, reduce panel padding, tagline size, logo size, and Login heading spacing. Keep both panels beside each other.
3. Below 768px, stack the branding above the form. Replace viewport-based container height with content height so the document can scroll. Keep the tagline, smaller logo, and credit visible; use rounded top corners on the white panel.
4. At widths up to 480px, reduce outer gutters and panel padding and stack the social buttons. Keep inputs at 16px and buttons at least 44px tall.
5. On short desktop windows, allow the shared container to grow with content instead of clipping the forms. Keep the document's top reachable when it is taller than the viewport.
6. Reuse existing tokens in both CSS Modules. Add only shared tablet/mobile sizes and spacing to `root.css`.

## Affected files

- `src/root.css`: shared responsive spacing, font sizes, and panel radius.
- `src/index.css`: safe document alignment and mobile page gutters.
- `src/components/login/Login.module.css`: shared responsive panels and Login form adjustments.
- `src/components/signup/Signup.module.css`: Sign Up form sizing and social-button stacking.

## Verification

- Run the production build and existing lint checks.
- Check Login and Sign Up at widths of 320, 375, 480, 768, 1024, and 1440px, including short windows.
- Check document and element overflow, visible branding and form controls, keyboard focus, and vertical scrolling.
- Check navigation in both directions, browser Back, and refreshing each hash route.
- Compare desktop rendering with the existing two-panel design and inspect mobile screenshots.

## Verification results

- Chromium checks passed for both screens at 12 viewport sizes (24 cases): 320x800, 375x812, 480x800, 767x900, 768x1024, 1024x768, 1200x900, 1440x1000, 1440x700, 1440x400, 375x400, and 768x400.
- No horizontal overflow, clipped form controls, negative container tops, or runtime exceptions were detected. The bottom navigation link remained reachable by scrolling in every case.
- Poppins loaded in all cases; inputs remained 16px and buttons were at least 44px tall.
- Both navigation links, browser Back, and refreshing each hash route passed. Keyboard Tab reached the first Sign Up button with a visible outline.
- Mobile, tablet, and desktop screenshots were inspected. The tablet branding width and typography were refined to avoid excessive wrapping.
- Production build and existing ESLint checks passed.
- Verification used headless desktop Chromium with resized viewports; physical-device testing was not performed.
