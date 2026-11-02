# Jamsie Entertainment — complete static website

Start with **START-HERE.txt**. Extract this ZIP and deploy its contents. `index.html` is already at the root; there is no installation, build process, backend, database, API key or runtime package to configure.

## Files and folders

| Path | Purpose |
| --- | --- |
| `index.html` | Homepage: projects, story, approach, contact details and FAQs |
| `legal.html` | Company identity, registration, capital, sole partner and manager disclosures |
| `privacy.html` | Privacy notice for this company website and company enquiries |
| `cookies.html` | Cookie and browser-storage information |
| `terms.html` | Company website terms |
| `404.html` | Self-contained, branded missing-page response |
| `assets/css/style.css` | Readable responsive styles, logo colours, focus and reduced-motion support |
| `assets/js/main.js` | Mobile navigation, Escape handling and desktop-resize reset |
| `assets/images/` | Four supplied original images and an original SVG favicon |
| `CNAME` | `www.jamsie-entertainment.com` |
| `.nojekyll` | Empty file requesting ordinary static-file publishing |
| `robots.txt`, `sitemap.xml` | Public-page discovery |
| `START-HERE.txt`, `README.md` | Handoff and deployment instructions |
| `QA-REPORT.md`, `FILE-MANIFEST.sha256` | Verification record and file checksums |

All page-rendering assets are bundled. Normal page navigation and asset references are relative and work in a subdirectory as well as at a domain root. The 404 page embeds its CSS, JavaScript and SVG icon so nested missing URLs do not break its presentation; its navigation intentionally points to the production company domain. Search/share metadata and the sitemap also identify the production domain.

Fonts use the visitor's installed Arial/Helvetica/sans-serif stack. No font files or external font downloads are required. `adrenaline-world.jpg` is included as an alternate original asset; it is not displayed because its painted download buttons are artwork rather than working website controls.

## GitHub Pages deployment

1. Extract the ZIP and commit its **contents** to the root of the company website repository. Include `assets/`, every HTML page, `CNAME` and the hidden `.nojekyll` file. Do not commit only the ZIP or place everything inside an extra enclosing folder.
2. In repository **Settings → Pages**, choose **Deploy from a branch**, select the publishing branch and **/ (root)**, and save. GitHub Free requires a public repository. Other plans may support private source repositories; published website visibility is separate.
3. Verify domain ownership using GitHub's current verification instructions. Set the repository's custom domain to **www.jamsie-entertainment.com** before changing the domain's DNS.
4. At the DNS provider, point the **www CNAME** to your actual GitHub account/organisation's **OWNER.github.io** hostname. Replace OWNER with the account that owns the Pages site. Do not use a repository URL, a protocol or a path. Preserve existing mail records.
5. If you also want **jamsie-entertainment.com** without www, follow GitHub's official apex-domain instructions. The supplied canonical domain remains **www.jamsie-entertainment.com**.
6. Wait for DNS/certificate provisioning, then enable **Enforce HTTPS** when available.
7. Test the real domain: homepage, all legal pages, project buttons, mobile menu, FAQs, email/phone links and an arbitrary nested missing path. GitHub should serve `404.html` for missing pages.

Official instructions checked for this handoff:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

The website source is ready; GitHub account configuration, DNS access and live deployment are not included or changed. When testing a temporary `OWNER.github.io/repository/` address before domain setup, temporarily omit `CNAME` and restore it for production. Canonical/share URLs and 404 return links intentionally continue to identify the production domain.

## Behaviour and editing

- Open `index.html` locally to view the normal pages, or serve the extracted folder with a local static server. There is no framework or build tool.
- Email and telephone links open the visitor's chosen email/calling application. They do not silently send messages. No backend contact form is included.
- The mobile menu works with JavaScript; if JavaScript is disabled or unavailable, navigation remains visible. FAQs use native HTML disclosures and also work without JavaScript.
- Update text in the HTML files and colours/layout in `assets/css/style.css`. The shared header/footer is copied into each page, so apply company/contact changes consistently.
- `404.html` contains inline copies of the shared stylesheet, navigation script and SVG icon. Keep those copies in sync if you later change shared styling/navigation. Its absolute return links should be changed if the company domain changes.
- Copyright and policy dates are static; maintain them when appropriate.
- `FILE-MANIFEST.sha256` verifies this delivered version. Recalculate it after modifying the package.
- No analytics, advertising, optional cookies, browser storage, embedded third-party media or third-party font requests are included. Update policies and any necessary consent controls before introducing them.

## Company facts and legal scope

The corporate page uses the owner's confirmed names and details, including G.E.MI. 196205630000, EUID ELGEMI.196205630000, VAT 803403957, Chamber 51630, registration date 21 September 2026, capital €1,000, guarantee contributions €0, sole partner/manager Renaldo David Gilijamse, the confirmed Mavili 11 address, capital and non-capital contribution categories, and operating/non-liquidation status. The owner confirmed that the company website is declared to G.E.MI. This was not independently certified against a registry extract. No unprovided non-capital contribution valuation, share count or purported official Greek company-name translation was invented.

Policies cover this corporate information website and company enquiries. Separate product services, game/player accounts, purchases and audio hosting need their own appropriate notices and terms. Implement the stated enquiry-retention criteria and confirm actual provider/transfer arrangements. The intended host is GitHub Pages and the supplied email provider is Gmail. Have the manager/accountant compare disclosures to the current registry record and obtain legal review where needed; technical verification is not legal certification.

Legal/provider references used for drafting:
- https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng/
- https://www.dpa.gr/en/cookiespolicy/information/whatare_cookies
- https://www.dpa.gr/en/individuals/complaint-to-the-hellenic-dpa
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- https://policies.google.com/privacy
