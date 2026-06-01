# Deploy redesign branch → `test.indicoglobal.com`

**Branch:** `redesign/agro-export-hub-style`  
**Subdomain:** `test.indicoglobal.com`  
**Production (later):** `main` → `www.indicoglobal.com` or `indicoglobal.com`

Use a **separate** Netlify (or Vercel) site for the test subdomain so `main` and the redesign do not overwrite each other.

---

## Option A — Netlify (recommended)

### Step 1 — Second Netlify site (test only)

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. GitHub → **`vivek613/groundnut-oil`**
3. **Site settings** → **Build & deploy** → **Continuous deployment** → **Branch**
4. Set **Production branch** to:  
   `redesign/agro-export-hub-style`
5. Build settings (from `netlify.toml`):

   | Setting | Value |
   |---------|--------|
   | Build command | `npm run build` |
   | Publish directory | `dist` |

6. **Deploy site** — note the URL, e.g. `https://indico-test.netlify.app`

### Step 2 — Custom domain on Netlify

1. **Domain management** → **Add a domain** → `test.indicoglobal.com`
2. Netlify shows DNS instructions (usually a **CNAME**)

### Step 3 — Namecheap DNS (fix “DNS verification failed”)

**Domain List** → **Manage** → **Advanced DNS**

Add **one** record (copy **Value** from Netlify → Domain management → `test.indicoglobal.com` → DNS configuration):

| Type | Host | Value | TTL |
|------|------|--------|-----|
| **CNAME Record** | `test` | `your-site-name.netlify.app` | Automatic |

**Namecheap rules (important):**

| Do | Don’t |
|----|--------|
| Host = `test` | Host = `test.indicoglobal.com` |
| Value = `something.netlify.app` (no `https://`) | Value = your deploy preview URL with path |
| Only **one** CNAME for `test` | A record + CNAME on `test` at the same time |
| Remove old `test` A, URL Redirect, or CNAME rows | Leave parking / redirect records for `test` |

**Check propagation** (after 5–30 min, up to 48h):

```bash
dig test.indicoglobal.com CNAME +short
```

Should return something like `your-site-name.netlify.app.`

Then in Netlify → **Verify DNS** or wait — SSL provisions when DNS is correct globally.

**If apex uses Netlify but subdomain doesn’t:** `indicoglobal.com` can point to Netlify (A `75.2.60.5`) while `test` still needs its **own** CNAME to your **test** Netlify site URL.

**Live:** `https://test.indicoglobal.com`

### Step 4 — Auto deploy on push

Every push to `redesign/agro-export-hub-style` rebuilds the test site:

```bash
git push origin redesign/agro-export-hub-style
```

`main` is unchanged on your production site (separate Netlify project).

---

## Option B — Vercel

### Step 1 — Same repo, branch domain

1. [vercel.com](https://vercel.com) → **Add Project** → `vivek613/groundnut-oil`
2. **Settings** → **Git** → enable **Preview** deployments for all branches
3. Push `redesign/agro-export-hub-style` (already on GitHub)
4. **Deployments** → open latest deploy for branch `redesign/agro-export-hub-style`
5. **Settings** → **Domains** → add `test.indicoglobal.com`
6. Assign domain to this **branch** (Vercel UI: link domain to preview/branch when prompted)

### Step 2 — Namecheap DNS

Use records from Vercel dashboard. Typical:

| Type | Host | Value |
|------|------|--------|
| **CNAME** | `test` | `cname.vercel-dns.com` |

---

## Two environments summary

| Environment | Branch | Domain | Netlify |
|-------------|--------|--------|---------|
| **Test** | `redesign/agro-export-hub-style` | `test.indicoglobal.com` | Site #2, production branch = redesign |
| **Live** | `main` | `indicoglobal.com` / `www` | Site #1, production branch = main |

---

## Merge redesign → production later

When approved:

```bash
git checkout main
git merge redesign/agro-export-hub-style
git push origin main
```

Production Netlify (Site #1) redeploys. You can remove or keep the test site.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Wrong design shown | Confirm Netlify **production branch** is `redesign/agro-export-hub-style` on the **test** site only |
| `test` does not resolve | CNAME host is `test`, not `@`; wait for DNS |
| 404 on `/products` | `netlify.toml` redirects are in repo; trigger **Clear cache and deploy** |
| Repo not visible | Log into Netlify with GitHub user that has access to `vivek613/groundnut-oil` |

---

## Quick checklist

- [ ] Create **second** Netlify site from `vivek613/groundnut-oil`
- [ ] Production branch = `redesign/agro-export-hub-style`
- [ ] Add domain `test.indicoglobal.com` in Netlify
- [ ] CNAME `test` → Netlify hostname in Namecheap
- [ ] Open `https://test.indicoglobal.com` after SSL is ready
