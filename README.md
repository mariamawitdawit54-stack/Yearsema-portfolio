# Yearsema — Portfolio Website

Static site: HTML5 + CSS3 + vanilla JS. No build step, no frameworks — works directly on GitHub Pages.

## Structure

```
index.html        Home
about.html         About
work.html          Work (centerpiece)
services.html      Services
experience.html    Experience
contact.html       Contact
css/style.css      All styling
js/main.js         Nav toggle, work filters, video handling
assets/images/     Photos (currently placeholders — see below)
assets/videos/     TikTok-style video clips (not yet added)
```

## Replacing placeholder images

Every placeholder was generated at the **exact final file path, dimensions and aspect ratio** the real photo needs. To swap one in, replace the file in place — same filename, same folder. No HTML or CSS changes required, as long as the new image roughly matches the aspect ratio noted below (cropping to fit is fine; `object-fit: cover` handles minor differences).

| File | Used on | Aspect ratio | Notes |
|---|---|---|---|
| `assets/images/yearsema-profile.jpg` | Home, About | 4:5 portrait | Main profile photo |
| `assets/images/work/haymani-main.jpg` | Work | 8:5 landscape | Haymani lead image |
| `assets/images/work/haymani-01.jpg` | Work | 1:1 square | |
| `assets/images/work/haymani-02.jpg` | Work | 1:1 square | |
| `assets/images/work/wiz-01.jpg` … `wiz-04.jpg` | Work | 4:5 portrait | Wiz Beauty Salon gallery (4 images) |
| `assets/images/work/okan-main.jpg` | Work | 8:5 landscape | Okan Image lead image |
| `assets/images/work/okan-01.jpg` | Work | 1:1 square | |
| `assets/images/work/okan-02.jpg` | Work | 1:1 square | |
| `assets/images/work/behind-01.jpg` … `behind-04.jpg` | Work | 1:1 square | Behind the Work grid |
| `assets/images/videos/video-01.jpg` … `video-04.jpg` | Work | 9:16 vertical | Video poster frames |

Regenerate placeholders any time with `python3 gen_placeholders.py` (requires Pillow) — useful if you want to swap in some real photos and re-placeholder the rest.

## Adding real videos

Drop finished MP4s straight into:

```
assets/videos/video-01.mp4
assets/videos/video-02.mp4
assets/videos/video-03.mp4
assets/videos/video-04.mp4
```

Each `<video>` on the Work page already points at these paths with a matching poster image. Right now the files don't exist, so each card shows its poster with a "video coming soon" badge — once a file is added at the matching path, it plays automatically on click, no code changes needed.

## Contact details

Email and phone/WhatsApp are live (`mailto:` / `tel:`) on the Contact page. The phone link assumes Ethiopia's country code (+251) based on the number given (0966356088) — double-check that `tel:` link and update it in `contact.html` if that's not correct.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo (root, or a `/docs` folder).
2. In the repo settings → Pages, point it at that branch/folder.
3. All paths are relative, so it works whether the site is served from a root domain or a `username.github.io/repo-name/` subpath.
