# Image replacement guide

All image paths are referenced from `src/data/images.ts`. To replace an image,
either overwrite the existing file at the same path, or update the path in that
one file.

## Current demo assets

| Purpose | File | Recommended replacement |
| --- | --- | --- |
| Hero handshake | `images/hero/human-robot-partnership.jpg` | A human + robot handshake render or brand photograph, landscape, at least 1600 × 1200 |
| Founder | `images/founder/ramkrushna-gaikwad-portrait.jpg` | Founder photograph, portrait 4:5, at least 1000 × 1250 |
| Team | `images/team/[name].jpg` | Individual portraits, 4:5, at least 900 × 1125 |

Every current photograph is a temporary demo asset. None of the portraits depict
the named team members. Team cards are also labelled "Demo portrait" in the UI.

The founder section includes a small replacement note in the page itself. Remove
that note once the real photograph is in place.

## Placeholder folders

The following folders are reserved for future real assets and are intentionally
empty for now:

- `images/portfolio/` — optional project screenshots. Add a screenshot to a
  project key in `src/data/images.ts` and the designed preview will be replaced
  automatically.
- `images/services/` — optional service imagery.
- `images/about/` — optional studio or team-at-work imagery.
- `images/brand/` — additional brand assets. The primary logo is `public/logo.svg`.

## Asset treatment

- Portraits use a consistent 4:5 crop and `object-top`.
- Team portraits are shown with a light grayscale treatment in the UI and return
  to full colour on hover.
- The hero image is eagerly loaded with a blur placeholder; all other images are
  lazy-loaded by `next/image`.
- Provide meaningful alt text in `src/data/images.ts`, not in the components.

## Licences

- Team and founder demo portraits: Unsplash, free to use under the Unsplash
  License.
- Hero handshake demo: StockCake, free for commercial and personal use.
