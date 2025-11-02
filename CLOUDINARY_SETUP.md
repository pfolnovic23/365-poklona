# Cloudinary Setup Guide

## Where to Paste Your Credentials

Open `.env.local` file and fill in these values:

```
VITE_CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME_HERE
VITE_CLOUDINARY_API_KEY=YOUR_NEW_API_KEY_HERE
VITE_CLOUDINARY_UPLOAD_PRESET=365_poklona
```

### How to Find Your Credentials:

1. **Cloud Name:**
   - Go to https://cloudinary.com/console
   - Look at the top of the page - it shows your **Cloud Name** (usually like `dxxxxxx`)
   - Copy it and paste as `VITE_CLOUDINARY_CLOUD_NAME`

2. **API Key:**
   - In Cloudinary Console → Settings → API Keys
   - Copy the **API Key** (the new one)
   - Paste as `VITE_CLOUDINARY_API_KEY`

3. **Upload Preset:**
   - In Cloudinary Console → Settings → Upload
   - Create an **Unsigned Upload Preset** named `365_poklona`
   - This name stays the same: `VITE_CLOUDINARY_UPLOAD_PRESET=365_poklona`

## IMPORTANT SECURITY NOTES:

⚠️ **Never commit `.env.local`** - it's in `.gitignore` and will be ignored
⚠️ **API Secret** is NOT needed - never put it in `.env`
⚠️ **Only use the API Key** (not the secret)
⚠️ The **Upload Preset must be UNSIGNED** (allows uploads from frontend)

## How It Works Now:

1. Go to Admin Dashboard
2. Click "Dodaj Poklon" (Add Present)
3. Select "Slika" (Image) as type
4. Click the file upload button
5. Select an image from your computer
6. The image uploads to Cloudinary automatically
7. The image URL is stored in Firebase
8. Users see the image when they open the present

## Troubleshooting:

- If upload fails: Check `.env.local` values are correct
- If "Nevažeći URL": Make sure Upload Preset is **Unsigned**
- If it says "Učitavanje slike...": Wait - upload is in progress
