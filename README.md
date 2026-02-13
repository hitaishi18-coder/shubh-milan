# 🌸 Shubh Milan – Matrimonial Website

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)

**Shubh Milan** is a modern, family-run matrimonial service platform designed to bridge tradition with technology. Built with the **Next.js App Router** and **Tailwind CSS**, it offers a seamless, professional, and responsive user experience for matrimonial registration, family consultations, and success story showcases.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contact](#-contact)

---

## 📖 Overview

Shubh Milan simplifies the search for a life partner by providing a digital interface for a traditionally offline process. The platform integrates **Google Forms** for efficient lead collection and **Google Sheets** for automated data management, ensuring a low-maintenance yet highly effective backend workflow.

---

## ✨ Key Features

### 🖥️ User Interface
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.
- **Service Highlights:** Dedicated sections for Love & Arrange marriage consultations.
- **Success Stories:** A gallery to showcase successful matches.
- **Interactive Elements:** Floating WhatsApp button for instant communication.

### ⚙️ Functionality
- **Lead Generation:** Embedded Google Forms for seamless user registration.
- **Automated Data Entry:** Real-time synchronization with Google Sheets.
- **Smart Assistance:** Predefined FAQ ChatBot to answer common queries instantly.
- **User Flow:** Custom "Thank You" page redirection for a polished user experience.

---

## 🚀 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Data Collection** | Google Forms (Iframe Integration) |
| **Database/Storage** | Google Sheets (Auto-Response Storage) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

A brief overview of the directory layout:

```bash
shubh-milan/
├── app/                      # Next.js App Router directories
│   ├── about/                # About Us page
│   ├── contact/              # Contact information
│   ├── register/             # Registration landing
│   ├── registration-form/    # Embedded Google Form
│   ├── love-arrange/         # Consultation services
│   ├── success-stories/      # Testimonials
│   ├── thank-you/            # Post-submission page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
│
├── components/               # Reusable UI components
│   ├── Navbar.tsx            # Responsive navigation
│   ├── Footer.tsx            # Site footer
│   ├── WhatsAppButton.tsx    # Floating contact widget
│   └── ChatBot.tsx           # FAQ Bot logic
│
├── data/                     # Static data files
│   └── botData.ts            # Chatbot conversation logic
│
└── public/                   # Static assets (images, icons)

```

---

## 🛠 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd shubh-milan

```


2. **Install dependencies**
```bash
npm install

```


3. **Run the development server**
```bash
npm run dev

```


4. **Access the application**
Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

---

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Log in to Vercel and "Add New Project".
3. Import your repository.
4. Click **Deploy**. Vercel will automatically detect the Next.js configuration.

---

## 🎯 Roadmap

We are constantly improving Shubh Milan. Here is what's coming next:

* [ ] **Custom Backend:** Migrate from Google Forms to a custom Node.js/PostgreSQL backend.
* [ ] **Admin Dashboard:** A secured panel for managing leads and profiles.
* [ ] **WhatsApp Automation:** Automated updates and notifications via WhatsApp API.
* [ ] **Payment Gateway:** Integration for premium membership plans.
* [ ] **SEO Optimization:** Enhanced meta tags and structured data for better visibility.

---

## 👨‍💻 Team

**Developed by the Shubh Milan Team** *A trusted matrimonial service built with tradition and technology.*

© 2026 Shubh Milan. All rights reserved.

