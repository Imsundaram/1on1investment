# How to Deploy "1 ON 1 INVESTMENT" to 1on1investment.com

Since you have a **GoDaddy** domain and a **Next.js** website, the best and easiest way to host it is using **Vercel**. Vercel is the company that built Next.js, so it works perfectly.

## ⚠️ CRITICAL NOTICE: Data Storage
Currently, your website saves data (Properties, Team, etc.) to a local file (`src/lib/db.json`).
**On a cloud server like Vercel, this file will reset every time you redeploy.**
*   **What this means:** You can edit things in the Admin Panel, but if the site updates, your changes might vanish.
*   **Solution:** For a professional live site, we should eventually move this data to a database (like MongoDB).
*   **For now:** You can deploy as-is to see it live, but be aware of this limitation.

---

## Step 1: Push Your Code to GitHub
Vercel pulls your code from GitHub.

1.  **Create a Repository** on [GitHub.com](https://github.com/new). Name it something like `1on1-investment`.
2.  **Push your code**:
    Open your terminal (VS Code) and run:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/1on1-investment.git
    git branch -M main
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username)*

## Step 2: Deploy on Vercel
1.  Go to [Vercel.com](https://vercel.com/signup) and Create an Account (Login with GitHub).
2.  Click **"Add New..."** -> **"Project"**.
3.  You will see your `1on1-investment` repository. Click **"Import"**.
4.  Keep all settings as default.
5.  Click **"Deploy"**.
    *   Vercel will build your site. Wait about a minute.
    *   Once done, you will get a URL like `1on1-investment.vercel.app`.

## Step 3: Connect Your GoDaddy Domain
Now, let's make it load on `1on1investment.com`.

1.  In your **Vercel Dashboard**, go to your project.
2.  Click **"Settings"** -> **"Domains"**.
3.  Enter `1on1investment.com` and click **"Add"**.
4.  Vercel will show you **DNS Records** (Invalid Configuration). It will give you an **A Record** and a **CNAME Record**.

## Step 4: Update GoDaddy DNS
1.  Log in to your **GoDaddy** account.
2.  Go to **"My Products"** -> Find `1on1investment.com` -> Click **"DNS"**.
3.  **Delete** any existing "A" records with the name `@` (Parked).
4.  **Add the Vercel Records**:
    *   **Type**: `A`
    *   **Name**: `@`
    *   **Value**: `76.76.21.21` (Verify this value in Vercel dashboard!)
    *   **TTL**: `Default` or `1 Hour`
    
    *   **Type**: `CNAME`
    *   **Name**: `www`
    *   **Value**: `cname.vercel-dns.com`
    *   **TTL**: `Default`

5.  Save the records.

## Step 5: Wait
DNS changes can take anywhere from **1 hour to 24 hours** to propagate globally, but usually, it works within minutes.

Once done, visiting `1on1investment.com` will show your Next.js website!
