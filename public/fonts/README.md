# Brand fonts

The Signage Screen uses two proprietary Awardco fonts referenced in the Figma
"RCGNZ Assets" design (via the "Awardco Marketing Design System" library):

| Token           | Font     | Used for                                        | Expected file            |
| --------------- | -------- | ----------------------------------------------- | ------------------------ |
| `--font-heading`| Crystal  | Session titles, times, tags, room labels        | `Crystal.woff2`          |
| `--font-display`| Emilio   | Italic labels ("Coming next in", "In other …")  | `Emilio-Italic.woff2`    |

Drop the `.woff2` files into **this folder** (`public/fonts/`) using exactly the
filenames above. They are wired up in `src/index.css` via `@font-face` and will
load automatically — no code changes needed.

Until the files are present, the component falls back gracefully to a system
sans-serif (for Crystal) and a serif italic (for Emilio), so everything still
renders and lays out correctly.
