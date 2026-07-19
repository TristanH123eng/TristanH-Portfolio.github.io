# Tristan Hernandez - Aerospace Engineering Portfolio

A responsive, single-page portfolio for Tristan Hernandez, an Aerospace Engineering student at California State University, Long Beach.

## Included content

- CSULB education, 3.74 GPA, U.S. citizenship, and security-clearance eligibility
- Beach Launch Team progression from Propulsion/Fluids/Aerostructures Engineer to Fluids Team Lead
- Correct separation between the completed Supernova test campaign and the future Piston rocket
- Three successful Supernova static fires, console leadership, thermocouple data review, and load-cell calibration
- CSULB ASME IAM3D chassis engineering and UPS Store experience
- Twelve projects from BLT, research, independent rocketry, controls, and coursework
- Three-photo project galleries with a keyboard-accessible lightbox
- Responsive navigation, project filters, and scroll animations

## Add your About photo

Replace this file while keeping the same filename:

`assets/images/about/about-me.jpg`

Recommended: JPG, portrait orientation, at least 1200 x 1500 pixels.

## Add project photos

Each project has its own folder containing three replaceable files:

```text
assets/images/projects/project-folder/cover.jpg
assets/images/projects/project-folder/detail-1.jpg
assets/images/projects/project-folder/detail-2.jpg
```

Replace the placeholders while keeping those filenames. The website and gallery update automatically; no HTML edits are required.

Project folders:

- `fluids-inventory`
- `coaxial-swirl-injector`
- `supernova-static-fire`
- `reloadable-motor-casing`
- `gofar-v3`
- `theseus-rail-guides`
- `methalox-engine`
- `gofar-v2`
- `wireless-launchpad`
- `gofar-v1`
- `tsunami`
- `butterfly-valve`

Recommended: JPG, landscape orientation, at least 1600 x 900 pixels. The images use `object-fit: cover`, so keep the most important subject near the center.

### Add more than three photos to a project

Open `index.html`, find the project's `<div class="project-gallery">`, and duplicate one of the detail-photo links. Change both the `href` and `src` to your new image path.

## Main files

- `index.html` - portfolio content and image paths
- `styles.css` - visual design, responsive layout, galleries, and lightbox
- `script.js` - mobile menu, filters, animation, and gallery controls
- `assets/images/` - replaceable About and project photos

## Run locally

Open `index.html` directly in a browser, or use the VS Code Live Server extension.

## Publish

The site can be deployed as-is with GitHub Pages, Netlify, or Vercel.

For GitHub Pages, upload the contents of this folder to a repository, open **Settings > Pages**, select the branch, and save.
