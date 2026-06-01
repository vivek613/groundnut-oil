# Deploy to Namecheap (custom domain)

Namecheap does not host React apps directly from GitHub. You upload the **built static files** to your hosting account (Stellar / shared hosting with cPanel).

## What you need

- Namecheap **hosting** (Stellar, Stellar Plus, etc.) — domain-only is not enough; you need a hosting plan, or point DNS to another host.
- cPanel login from Namecheap → **Hosting List** → **Manage** → **cPanel**
- Your domain (e.g. `indicoglobal.com`)

## Step 1 — Build the site (on your Mac)

```bash
cd groundnut-oil-site
npm run package:namecheap
```

This creates **`namecheap-deploy.zip`** in the project folder (all files from `dist/`, including `.htaccess` for page routes).

## Step 2 — Upload to cPanel

1. Log in to **Namecheap** → **Hosting** → **Manage** → open **cPanel**
2. Open **File Manager**
3. Go to **`public_html`** (main domain) or the folder for your addon domain
4. Delete old site files in that folder if you are replacing an existing site (keep `cgi-bin` if present)
5. Click **Upload** → upload **`namecheap-deploy.zip`**
6. Select the zip → **Extract** → move all files to `public_html` root (you should see `index.html`, `assets/`, `images/` at the top level)
7. Delete the zip after extracting

## Step 3 — DNS (if the domain is at Namecheap)

In Namecheap **Domain List** → **Manage** → **Advanced DNS**:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | `@`  | Your hosting server IP   |
| CNAME | `www`| Your domain or `@`       |

Use the IP and nameservers shown in your Namecheap hosting panel. If the domain uses **Namecheap BasicDNS** and hosting is on the same account, DNS is often set automatically.

Propagation can take up to 24–48 hours (often much less).

## Step 4 — SSL (recommended)

In cPanel → **SSL/TLS Status** or **Let’s Encrypt** → issue a free certificate for your domain → force HTTPS in **Domains** if available.

## Updating the site later

After code changes:

```bash
npm run package:namecheap
```

Upload and extract the new zip to `public_html` again (overwrite files).

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page | Ensure `index.html` is in `public_html` root, not inside a subfolder |
| 404 on `/products` etc. | Confirm `.htaccess` was uploaded (show hidden files in File Manager) |
| Domain shows parking page | Point DNS A record to hosting IP; wait for propagation |
| Only domain, no hosting | Purchase Namecheap shared hosting or use GitHub Pages + CNAME |

## Optional: GitHub Pages + Namecheap domain

If you prefer not to use Namecheap hosting, keep GitHub Pages and add a **CNAME** record in Namecheap DNS pointing to `vivek613.github.io`. That requires a different setup; this guide is for **Namecheap cPanel hosting**.
