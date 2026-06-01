# Deploy on Netlify or Vercel + Namecheap domain

Use **Netlify** or **Vercel** for free hosting + CI/CD (auto deploy on every Git push).  
Use **Namecheap** only for your domain DNS — no hosting plan required.

Repo: **https://github.com/vivek613/groundnut-oil**

---

## Option A — Netlify (recommended, simple)

### 1. Connect GitHub

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up / log in (GitHub login is fine).
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Choose **`vivek613/groundnut-oil`** (authorize GitHub if asked).
4. Build settings (auto-filled from `netlify.toml`):

   | Setting | Value |
   |---------|--------|
   | Branch | `main` |
   | Build command | `npm run build` |
   | Publish directory | `dist` |

5. Click **Deploy site**.

Your site is live at something like: `https://random-name-123.netlify.app`

### 2. Add custom domain (Namecheap)

1. Netlify → **Site configuration** → **Domain management** → **Add a domain**.
2. Enter your domain, e.g. `indicoglobal.com` and `www.indicoglobal.com`.
3. Netlify shows the DNS records you need.

### 3. Namecheap DNS

1. [Namecheap](https://www.namecheap.com) → **Domain List** → **Manage** → **Advanced DNS**.
2. Remove old A/CNAME records that point to parking or old hosting (if any).
3. Add records Netlify shows you. Typical setup:

   | Type | Host | Value |
   |------|------|--------|
   | **A** | `@` | `75.2.60.5` |
   | **CNAME** | `www` | `your-site-name.netlify.app` |

   (Use the exact values Netlify displays for your site.)

4. Wait 5 minutes–48 hours for DNS. Netlify will issue **free HTTPS** automatically.

**Live URL:** `https://yourdomain.com`

---

## Option B — Vercel

### 1. Connect GitHub

1. Go to [https://vercel.com](https://vercel.com) → sign in with GitHub.
2. **Add New** → **Project** → import **`vivek613/groundnut-oil`**.
3. Framework: **Vite** (auto-detected). Root: `.` → **Deploy**.

Live preview: `https://groundnut-oil-xxx.vercel.app`

### 2. Custom domain

1. Project → **Settings** → **Domains** → add `yourdomain.com` and `www.yourdomain.com`.
2. Vercel shows DNS records.

### 3. Namecheap DNS

| Type | Host | Value |
|------|------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

(Use exact values from the Vercel dashboard if they differ.)

---

## CI/CD (automatic deploys)

Both platforms deploy **automatically** when you push to `main`:

```bash
git add .
git commit -m "Update site"
git push origin main
```

No zip upload, no FTP. Build runs in the cloud (~1–2 min).

---

## Netlify vs Vercel

| | Netlify | Vercel |
|---|---------|--------|
| Free tier | Yes | Yes |
| React / Vite | Yes | Yes |
| Custom domain + SSL | Yes | Yes |
| Config in repo | `netlify.toml` | `vercel.json` |

Either works well for this project. Pick one.

---

## Namecheap: domain only

- You do **not** need Namecheap **hosting** (Stellar/cPanel) if you use Netlify/Vercel.
- Keep the domain at Namecheap; only change **Advanced DNS** records.
- If the domain uses Namecheap **nameservers** (default), edit DNS in Namecheap.
- If you use **Cloudflare** or other DNS, add records there instead.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Repo not listed on Netlify/Vercel | Log in as GitHub user with access to `vivek613/groundnut-oil` |
| 404 on `/products` | Redeploy; `netlify.toml` / `vercel.json` handle SPA routes |
| Domain not working | Confirm A + CNAME match dashboard; wait for DNS propagation |
| `www` works but apex doesn’t | Add A record for `@` as shown by host |

---

## After setup

Share your domain name and which platform you chose if you want DNS records checked line-by-line.
