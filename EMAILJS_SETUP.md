# EmailJS Setup Guide

Follow these steps to enable the contact form on your portfolio:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Create an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy your **Service ID**

## 3. Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Portfolio Contact from {{user_name}}

From: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

4. Copy your **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it

## 5. Update Your Code

Open `src/components/Contact.tsx` and replace:

```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
)
```

## Example:

```typescript
await emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  formRef.current!,
  'user_1234567890'
)
```

## 6. Test Your Form

1. Run `npm run dev`
2. Navigate to the Contact section
3. Fill out the form
4. Submit and check your email!

## Free Tier Limits

- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting

- **Form not sending?** Check console for errors
- **Wrong credentials?** Verify IDs match your EmailJS dashboard
- **Still not working?** Make sure your email service is connected in EmailJS

---

That's it! Your contact form is now functional.
