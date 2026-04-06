# MaxOut Technology - Professional Website Deployment Guide

## Current Status ✅
Your website is now optimized for search engines and ready for professional deployment to maxouttech.com!

### SEO Optimizations Completed

#### 1. **Meta Tags & Social Media**
- ✅ Open Graph tags for Facebook/LinkedIn sharing
- ✅ Twitter Card tags for Twitter sharing
- ✅ Dynamic meta tags on all pages via MetaTags component
- ✅ Canonical URLs to prevent duplicate content
- ✅ Proper title and description tags

#### 2. **Search Engine Configuration**
- ✅ `robots.txt` - Instructs search engines how to crawl the site
- ✅ `sitemap.xml` - Updated with all pages and configured for maxouttech.com
- ✅ Structured data (Schema.org JSON-LD) for Organization and WebSite
- ✅ Keywords and meta descriptions on all pages

#### 3. **Performance & Technical**
- ✅ Favicon and app icons (192x192, 512x512)
- ✅ Web app manifest for mobile "Add to Home Screen"
- ✅ All images have descriptive alt text for accessibility and SEO
- ✅ Preconnect hints for faster loading
- ✅ Responsive design for all devices
- ✅ Optimized for root domain deployment

#### 4. **URLs Configured**
- ✅ All URLs updated to **https://maxouttech.com/**
- ✅ Sitemap configured for production domain
- ✅ Vite config set to root path deployment

---

## 🚀 Deploying to maxouttech.com

### Building for Production

Run the build command to generate optimized production files:

```bash
npm run build
```

This creates a `dist/` folder with all your optimized website files.

---

### Upload Options

#### Option 1: FTP/SFTP Upload
1. Connect to your web hosting via FTP client (FileZilla, Cyberduck, etc.)
2. Upload all contents of the `dist/` folder to your website root directory (usually `public_html/` or `www/`)
3. Ensure all files maintain their structure:
   - index.html (root)
   - assets/ folder
   - All PDF files
   - favicon and icon files
   - robots.txt
   - sitemap.xml

#### Option 2: cPanel File Manager
1. Log into your hosting cPanel
2. Navigate to File Manager
3. Go to public_html (or your domain root)
4. Upload all files from `dist/` folder
5. Extract if uploaded as ZIP

#### Option 3: SSH/Command Line
```bash
# Build the site
npm run build

# Upload via SCP (replace with your credentials)
scp -r dist/* user@maxouttech.com:/path/to/public_html/
```

---

### Important Deployment Checklist

Before uploading:
- [x] ✅ Run `npm run build` to create production files
- [ ] ⬜ Test the build locally: `npm run preview`
- [ ] ⬜ Verify all PDFs and images are included in dist/
- [ ] ⬜ Check that robots.txt and sitemap.xml are present
- [ ] ⬜ Ensure .htaccess is configured (see below)

After uploading:
- [ ] ⬜ Test homepage loads: https://maxouttech.com
- [ ] ⬜ Test navigation between pages
- [ ] ⬜ Verify PDFs download correctly
- [ ] ⬜ Check mobile responsiveness
- [ ] ⬜ Test social media sharing (Open Graph tags)
- [ ] ⬜ Submit sitemap to Google Search Console
- [ ] ⬜ Submit sitemap to Bing Webmaster Tools

---

### Required: .htaccess Configuration

Since this is a Single Page Application (SPA) using React Router with hash routing, create a `.htaccess` file in your root directory:

```apache
# Enable rewrite engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect HTTP to HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Serve existing files/directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Route all other requests to index.html
  RewriteRule . / [L]
</IfModule>

# Compression for faster loading
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 📊 SEO Best Practices Implemented

### On-Page SEO
- ✅ Unique title tags for each page
- ✅ Compelling meta descriptions (under 160 characters)
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Keyword-rich content
- ✅ Internal linking between pages
- ✅ Fast loading times (Vite optimization)

### Technical SEO
- ✅ Mobile-responsive design
- ✅ Clean URL structure (hash routing)
- ✅ Image optimization (WebP, AVIF formats)
- ✅ Semantic HTML structure
- ✅ Accessibility features (alt text, ARIA labels)

---

## 🔍 Submit to Search Engines

### Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property: `maxouttech.com`
3. Verify ownership (upload HTML file or use DNS method)
4. Submit sitemap: `https://maxouttech.com/sitemap.xml`

### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add site: `maxouttech.com`
3. Verify ownership
4. Submit sitemap: `https://maxouttech.com/sitemap.xml`

---

## 📈 Optional: Analytics Setup

### Google Analytics 4
Add to `index.html` before `</head>` (before deployment):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics Measurement ID.

---

## 🎯 SEO Keywords Targeted

- Wireless security sensors
- Door/window sensors  
- Motion detectors (PIR)
- Glass break detectors
- Life safety devices
- Fire/smoke/CO detectors
- Water detectors
- Panic buttons
- Commercial security
- Residential security
- MaxOut Technology
- Professional security sensors

---

## 🔄 Site Updates Workflow

When you make changes to the site:

1. Make your edits to source files
2. Test locally: `npm run dev`
3. Build for production: `npm run build`
4. Upload new `dist/` folder contents via FTP/cPanel
5. Clear browser cache and test live site

---

## 📞 Support

For questions about deployment:
- Web Hosting Support: Contact your hosting provider
- Search Console Help: https://support.google.com/webmasters
- Bing Webmaster Help: https://www.bing.com/webmasters/help

---

**Last Updated:** April 6, 2026
