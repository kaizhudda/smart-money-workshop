# Smart Money Workshop — website

The sales site for the Smart Money Workshop. Static, free to host, no database
and nothing to maintain.

- **Home** (`/`) — the whole sales pitch, top to bottom
- **Register** (`/register`) — the embedded Google Form
- **Families** (`/families`) — unlisted resource hub for enrolled parents. Not
  linked from anywhere and hidden from Google. Share the URL directly.

---

## Before this goes public

Everything below lives in **`src/data/program.ts`**. That one file drives the
whole site — you never need to touch the page markup.

Anything still missing shows up on the page as a bright orange dashed
**"NEEDS REAL CONTENT"** box, so nothing can be published half-finished by
accident.

### 1. The numbers

| Field | What it is |
| --- | --- |
| `offer.price` | Price for the next cohort, e.g. `'$149'` |
| `offer.startDate` | e.g. `'Tuesday 2 September'` |
| `offer.sessionTime` | e.g. `'5:00pm AEST, every Tuesday'` |
| `offer.spotsTotal` | How many places you're actually opening |

### 2. Review the value stack

`valueStack` in the same file. These are **perceived-value** figures used to
anchor against your price — some carried over from your existing marketing copy.
Read them once and make sure you're comfortable standing behind each number.
Currently they total **$531**.

### 3. The Google Form

The form in the file right now (`forms.gle/mD9zH4gD3sf2EV4YA`) is the one from
the **free pilot**. If the paid cohort uses a different form, replace it.

To get the embed URL:

1. Open your form → **Send** → the `< >` (embed) tab
2. Copy the `src="..."` value out of the HTML it shows you — it ends in
   `/viewform?embedded=true`
3. Paste it into `offer.formEmbedUrl`

Also paste the plain shareable link into `offer.formUrl` — that's the
"open in a new tab" fallback under the form.

> **Worth adding to the form:** parent name, parent email, parent phone, child's
> first name, child's age. Turn on **Settings → Responses → Collect email
> addresses** so you can always reach people back.

### 4. Testimonials

`testimonials` — three placeholders. Replace the text with real quotes from your
five pilot families and set `isPlaceholder: false` on each one you fill in. Any
left as `true` keep showing the orange warning box.

### 5. A photo of you

Drop a photo at `public/kaiz.jpg`, then in `src/pages/index.astro` find the
comment `{/* TODO: replace with a real photo of Kaiz */}` and swap the dashed
placeholder box for:

```astro
<img
  src={url('/kaiz.jpg')}
  alt="Kaiz Hudda"
  class="h-28 w-28 rounded-3xl object-cover shadow-md"
/>
```

A real face in the founder section measurably outperforms not having one.

### 6. Materials for the families page

Put the PDFs in `public/materials/` and link them from
`src/pages/families.astro` where the placeholders are.

---

## Running it locally

This project needs **Node 22+** (the version is pinned in `.nvmrc`).

```bash
nvm use && npm install && npm run dev
```

Then open http://localhost:4321/smart-money-workshop

Other commands:

```bash
npm run build
```

```bash
npm run preview
```

---

## Publishing

Pushing to `main` publishes the site automatically — GitHub Actions builds it
and deploys to GitHub Pages. Takes about a minute.

```bash
git add -A && git commit -m "Update cohort details" && git push
```

**One-time setup:** in the repo on GitHub → **Settings → Pages → Build and
deployment → Source**, choose **GitHub Actions**.

### Connecting a custom domain later

1. Buy the domain
2. In `astro.config.mjs`: set `site` to your domain and **delete the `base`
   line**
3. Add a file `public/CNAME` containing just your domain
4. Point the domain's DNS at GitHub Pages, and set it under Settings → Pages

Every internal link goes through `src/lib/url.ts`, so nothing else needs
changing.

---

## Adding a second program later

The site is built so a new offering doesn't need a redesign. `src/data/program.ts`
already separates the offer from the layout — a second module means adding
another exported offer object and a page that renders it with the same
components (`Cta`, the value-stack list, the week cards).

---

## Notes on the copy

- Every factual claim on the site is real: 4 sessions, 60 minutes, Zoom,
  recordings, 5 pilot students, 7 in the first paid cohort, 52 podcast episodes.
- The site has exactly **one** call to action — *Register your child* — on
  purpose. No competing links, no second offer, no newsletter box.
- Registration is framed as free and **not** a guaranteed spot, which is both
  true and what makes the scarcity honest.
- Your email appears once, in the footer, assembled by JavaScript so scrapers
  don't pick it up. Your phone number is not on the site.
