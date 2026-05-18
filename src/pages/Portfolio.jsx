import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import FlipButton from '../components/FlipButton'

import PortfolioStats from '../components/PortfolioStats'
import laptopMockup from '../assets/logos/header-logo/portfolio-main-image.png?url'

const MAIN_CATEGORIES = [
  {
    id: 'website',
    label: 'Website Design',
    subs: ['All', 'Business', 'Ecommerce', 'Landingpage', 'Customize', 'Others']
  },
  {
    id: 'logo',
    label: 'Logo Design',
    subs: ['All', 'Manufacturing', 'Education', 'Production', 'Healthcare', 'Finance', 'Entrepreneurship']
  },
  {
    id: 'corporate',
    label: 'Corporate Business',
    subs: ['All', 'Business Cards', 'Letterhead', 'Flyers', 'Brochures']
  },
  {
    id: 'video',
    label: 'Video Animation',
    subs: ['All']
  },
  {
    id: '3d',
    label: '3D Logo Animation',
    subs: ['All']
  }
]

const PROJECTS = [
  // Initial 9 Images (assigned to AllView to appear only in 'All')
  {
    id: 101,
    title: 'Modern Ecommerce',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/1.png',
    tags: ['UI/UX', 'Shopify']
  },
  {
    id: 102,
    title: 'Premium Store',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/2.png',
    tags: ['Identity', 'Design']
  },
  {
    id: 103,
    title: 'Digital Shop',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/3.png',
    tags: ['React', 'Ecommerce']
  },
  {
    id: 104,
    title: 'Creative Landing',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/7.png',
    tags: ['Motion', 'UX']
  },
  {
    id: 105,
    title: 'Brand Portal',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/8.png',
    tags: ['Corporate', 'Web']
  },
  {
    id: 106,
    title: 'Design Studio',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/9.png',
    tags: ['Studio', 'Creative']
  },
  {
    id: 107,
    title: 'Advanced Store',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/8.png',
    tags: ['Checkout', 'Payments']
  },
  {
    id: 108,
    title: 'Market Hub',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/9.png',
    tags: ['Global', 'Scalability']
  },
  {
    id: 109,
    title: 'Pro Business',
    mainCat: 'website',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/1.png',
    tags: ['Services', 'UI']
  },

  // New 9 Business Images
  {
    id: 1,
    title: 'Business Strategy',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/1.png',
    tags: ['Consulting', 'Growth']
  },
  {
    id: 2,
    title: 'Corporate Identity',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/2.png',
    tags: ['Branding', 'Corporate']
  },
  {
    id: 3,
    title: 'Financial Services',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/3.png',
    tags: ['Finance', 'Investment']
  },
  {
    id: 4,
    title: 'Enterprise Solutions',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/4.png',
    tags: ['ERP', 'Scalability']
  },
  {
    id: 5,
    title: 'Marketing Agency',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/5.png',
    tags: ['Ads', 'Digital']
  },
  {
    id: 6,
    title: 'Tech Consulting',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/6.png',
    tags: ['AI', 'Cloud']
  },
  {
    id: 7,
    title: 'Business Analytics',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/7.png',
    tags: ['Data', 'Dashboard']
  },
  {
    id: 8,
    title: 'Executive Portal',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/8.png',
    tags: ['Portal', 'Management']
  },
  {
    id: 9,
    title: 'Global Operations',
    mainCat: 'website',
    subCat: 'Business',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/9.png',
    tags: ['Logistics', 'Operations']
  },
  // New 9 Ecommerce Images
  {
    id: 11,
    title: 'Minimalist Store',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/1.png',
    tags: ['Store', 'Minimal']
  },
  {
    id: 12,
    title: 'Fashion Boutique',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/2.png',
    tags: ['Fashion', 'Shopify']
  },
  {
    id: 13,
    title: 'Tech Gadgets',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/3.png',
    tags: ['Tech', 'Gadgets']
  },
  {
    id: 14,
    title: 'Furniture Outlet',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/4.png',
    tags: ['Furniture', 'Interior']
  },
  {
    id: 15,
    title: 'Luxury Watches',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/5.png',
    tags: ['Luxury', 'Watches']
  },
  {
    id: 16,
    title: 'Organic Skincare',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/6.png',
    tags: ['Organic', 'Beauty']
  },
  {
    id: 17,
    title: 'Sports Gear',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/7.png',
    tags: ['Sports', 'Fitness']
  },
  {
    id: 18,
    title: 'Home Decor',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/8.png',
    tags: ['Home', 'Decor']
  },
  {
    id: 19,
    title: 'Digital Marketplace',
    mainCat: 'website',
    subCat: 'Ecommerce',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/9.png',
    tags: ['Marketplace', 'Digital']
  },
  // New 9 LandingPage Images
  {
    id: 21,
    title: 'SaaS Landing',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/1.png',
    tags: ['SaaS', 'Modern']
  },
  {
    id: 22,
    title: 'Product Launch',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/2.png',
    tags: ['Launch', 'Product']
  },
  {
    id: 23,
    title: 'Agency Template',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/3.png',
    tags: ['Agency', 'Creative']
  },
  {
    id: 24,
    title: 'App Showcase',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/4.png',
    tags: ['Mobile', 'App']
  },
  {
    id: 25,
    title: 'Marketing Page',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/5.png',
    tags: ['Marketing', 'Ads']
  },
  {
    id: 26,
    title: 'Event Promo',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/6.png',
    tags: ['Event', 'Promo']
  },
  {
    id: 27,
    title: 'Service Promo',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/7.png',
    tags: ['Service', 'Business']
  },
  {
    id: 28,
    title: 'Startup Landing',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/8.png',
    tags: ['Startup', 'Tech']
  },
  {
    id: 29,
    title: 'Web Solution',
    mainCat: 'website',
    subCat: 'Landingpage',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/9.png',
    tags: ['Solution', 'Web']
  },
  // New 9 Customize Images
  {
    id: 31,
    title: 'Custom Dashboard',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/1.png',
    tags: ['Dashboard', 'Custom']
  },
  {
    id: 32,
    title: 'Tailored Solution',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/2.png',
    tags: ['Tailored', 'Web']
  },
  {
    id: 33,
    title: 'Personalized UI',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/3.png',
    tags: ['UI', 'Personalized']
  },
  {
    id: 34,
    title: 'Unique Platform',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/4.png',
    tags: ['Platform', 'Unique']
  },
  {
    id: 35,
    title: 'Bespoke Experience',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/5.png',
    tags: ['Bespoke', 'UX']
  },
  {
    id: 36,
    title: 'Flexible Design',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/6.png',
    tags: ['Flexible', 'Design']
  },
  {
    id: 37,
    title: 'Specialized Web',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/7.png',
    tags: ['Specialized', 'Dev']
  },
  {
    id: 38,
    title: 'Adaptive System',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/8.png',
    tags: ['Adaptive', 'System']
  },
  {
    id: 39,
    title: 'Premium Custom',
    mainCat: 'website',
    subCat: 'Customize',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/9.png',
    tags: ['Premium', 'Custom']
  },
  // New 9 Others (Mixed) Images
  {
    id: 41,
    title: 'Creative Layout',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/1.png',
    tags: ['Landing', 'Creative']
  },
  {
    id: 42,
    title: 'Brand Showcase',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/landing/2.png',
    tags: ['Showcase', 'Brand']
  },
  {
    id: 43,
    title: 'Digital Shop Pro',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/3.png',
    tags: ['Ecommerce', 'Pro']
  },
  {
    id: 44,
    title: 'Corporate Web',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/7.png',
    tags: ['Business', 'Corporate']
  },
  {
    id: 45,
    title: 'Business Portal',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/8.png',
    tags: ['Portal', 'Business']
  },
  {
    id: 46,
    title: 'Modern Enterprise',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/9.png',
    tags: ['Enterprise', 'Modern']
  },
  {
    id: 47,
    title: 'Global Store',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/8.png',
    tags: ['Global', 'Store']
  },
  {
    id: 48,
    title: 'Advanced System',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/8.png',
    tags: ['System', 'Adaptive']
  },
  {
    id: 49,
    title: 'Premium Solution',
    mainCat: 'website',
    subCat: 'Others',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/customize/9.png',
    tags: ['Premium', 'Solution']
  },
  // Logo Design - All (Category 1)
  {
    id: 51,
    title: 'Modern Startup',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/7.png',
    tags: ['Logo', 'Branding']
  },
  {
    id: 52,
    title: 'Global Ventures',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/8.png',
    tags: ['Corporate', 'Identity']
  },
  {
    id: 53,
    title: 'Innovation Hub',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/9.png',
    tags: ['Creative', 'Startup']
  },
  {
    id: 54,
    title: 'Wellness Clinic',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/1.png',
    tags: ['Health', 'Logo']
  },
  {
    id: 55,
    title: 'Pure Care',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/2.png',
    tags: ['Medical', 'Care']
  },
  {
    id: 56,
    title: 'Vitality Med',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/3.png',
    tags: ['Vitality', 'Med']
  },
  {
    id: 57,
    title: 'Health Core',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/4.png',
    tags: ['Wellness', 'Identity']
  },
  {
    id: 58,
    title: 'Edu Learning',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/1.png',
    tags: ['Education', 'Learning']
  },
  {
    id: 59,
    title: 'Smart Academy',
    mainCat: 'logo',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/2.png',
    tags: ['Academy', 'Smart']
  },
  // Logo Design - Manufacturing (Category 2)
  {
    id: 61,
    title: 'Industrial Core',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/1.png',
    tags: ['Manufacturing', 'Industry']
  },
  {
    id: 62,
    title: 'Factory Flow',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/2.png',
    tags: ['Factory', 'Logo']
  },
  {
    id: 63,
    title: 'Steel Works',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/3.png',
    tags: ['Steel', 'Construction']
  },
  {
    id: 64,
    title: 'Build Master',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/4.png',
    tags: ['Build', 'Tools']
  },
  {
    id: 65,
    title: 'Precision Tech',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/5.png',
    tags: ['Precision', 'Engineering']
  },
  {
    id: 66,
    title: 'Heavy Mach',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/6.png',
    tags: ['Heavy', 'Machines']
  },
  {
    id: 67,
    title: 'Craft Build',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/8.png',
    tags: ['Craft', 'Build']
  },
  {
    id: 68,
    title: 'Industry Pro',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/7.png',
    tags: ['Industry', 'Pro']
  },
  {
    id: 69,
    title: 'Tech Gear',
    mainCat: 'logo',
    subCat: 'Manufacturing',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/manufacturing/9.png',
    tags: ['Gear', 'Tech']
  },
  // Logo Design - Education
  {
    id: 71,
    title: 'Learning Path',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/1.png',
    tags: ['Education', 'Identity']
  },
  {
    id: 72,
    title: 'Knowledge Base',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/2.png',
    tags: ['Academy', 'Logo']
  },
  {
    id: 73,
    title: 'Smart School',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/3.png',
    tags: ['School', 'Creative']
  },
  {
    id: 74,
    title: 'Edu Bright',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/4.png',
    tags: ['Bright', 'Learning']
  },
  {
    id: 75,
    title: 'Future Scholars',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/5.png',
    tags: ['Future', 'Edu']
  },
  {
    id: 76,
    title: 'Skill Up',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/6.png',
    tags: ['Skills', 'Training']
  },
  {
    id: 77,
    title: 'Mind Bloom',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/7.png',
    tags: ['Growth', 'Knowledge']
  },
  {
    id: 78,
    title: 'Study Hub',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/8.png',
    tags: ['Study', 'Social']
  },
  {
    id: 79,
    title: 'Expert Academy',
    mainCat: 'logo',
    subCat: 'Education',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/9.png',
    tags: ['Expert', 'Identity']
  },
  // Logo Design - Production
  {
    id: 81,
    title: 'Direct Pro',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/1.png',
    tags: ['Production', 'Logo']
  },
  {
    id: 82,
    title: 'Studio Flow',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/2.png',
    tags: ['Studio', 'Media']
  },
  {
    id: 83,
    title: 'Cinema Craft',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/3.png',
    tags: ['Film', 'Identity']
  },
  {
    id: 84,
    title: 'Edit Master',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/4.png',
    tags: ['Editing', 'Tech']
  },
  {
    id: 85,
    title: 'Visual Arts',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/5.png',
    tags: ['Visual', 'Creative']
  },
  {
    id: 86,
    title: 'Action Media',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/6.png',
    tags: ['Media', 'Action']
  },
  {
    id: 87,
    title: 'Sound Studio',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/7.png',
    tags: ['Audio', 'Identity']
  },
  {
    id: 88,
    title: 'Stream Pro',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/8.png',
    tags: ['Streaming', 'Logo']
  },
  {
    id: 89,
    title: 'Final Cut',
    mainCat: 'logo',
    subCat: 'Production',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/production/9.png',
    tags: ['Film', 'Cut']
  },
  // Logo Design - Healthcare
  {
    id: 91,
    title: 'Care Point',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/1.png',
    tags: ['Health', 'Care']
  },
  {
    id: 92,
    title: 'Pulse Clinic',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/2.png',
    tags: ['Medical', 'Identity']
  },
  {
    id: 93,
    title: 'Wellness Way',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/3.png',
    tags: ['Wellness', 'Logo']
  },
  {
    id: 94,
    title: 'Health First',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/4.png',
    tags: ['Primary', 'Care']
  },
  {
    id: 95,
    title: 'Life Sync',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/5.png',
    tags: ['Sync', 'Life']
  },
  {
    id: 96,
    title: 'Medi Center',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/6.png',
    tags: ['Clinic', 'Med']
  },
  {
    id: 97,
    title: 'Pure Health',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/7.png',
    tags: ['Pure', 'Health']
  },
  {
    id: 98,
    title: 'Global Med',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/8.png',
    tags: ['Global', 'Care']
  },
  {
    id: 99,
    title: 'Vital Sign',
    mainCat: 'logo',
    subCat: 'Healthcare',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/9.png',
    tags: ['Vital', 'Logo']
  },
  // Logo Design - Finance
  {
    id: 111,
    title: 'Wealth Guard',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/1.png',
    tags: ['Finance', 'Security']
  },
  {
    id: 112,
    title: 'Investment Hub',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/2.png',
    tags: ['Investment', 'Growth']
  },
  {
    id: 113,
    title: 'Secure Bank',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/3.png',
    tags: ['Banking', 'Logo']
  },
  {
    id: 114,
    title: 'Capital Trust',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/4.png',
    tags: ['Capital', 'Trust']
  },
  {
    id: 115,
    title: 'Asset Manage',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/5.png',
    tags: ['Assets', 'Finance']
  },
  {
    id: 116,
    title: 'Smart Trade',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/6.png',
    tags: ['Trading', 'Fintech']
  },
  {
    id: 117,
    title: 'Global Finance',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/7.png',
    tags: ['Global', 'Banking']
  },
  {
    id: 118,
    title: 'Future Fund',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/8.png',
    tags: ['Fund', 'Future']
  },
  {
    id: 119,
    title: 'Secure Pay',
    mainCat: 'logo',
    subCat: 'Finance',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/finance/9.png',
    tags: ['Payment', 'Identity']
  },
  // Logo Design - Entrepreneurship
  {
    id: 121,
    title: 'Startup Flow',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/1.png',
    tags: ['Startup', 'Identity']
  },
  {
    id: 122,
    title: 'Venture Core',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/2.png',
    tags: ['Venture', 'Logo']
  },
  {
    id: 123,
    title: 'Founder Hub',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/3.png',
    tags: ['Founder', 'Network']
  },
  {
    id: 124,
    title: 'Innovation Lab',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/4.png',
    tags: ['Innovation', 'Startup']
  },
  {
    id: 125,
    title: 'Business Pulse',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/5.png',
    tags: ['Business', 'Growth']
  },
  {
    id: 126,
    title: 'Launch Pad',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/6.png',
    tags: ['Launch', 'Success']
  },
  {
    id: 127,
    title: 'Modern Entity',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/7.png',
    tags: ['Modern', 'Branding']
  },
  {
    id: 128,
    title: 'Creative Spark',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/8.png',
    tags: ['Creative', 'Spark']
  },
  {
    id: 129,
    title: 'Global Reach',
    mainCat: 'logo',
    subCat: 'Entrepreneurship',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/9.png',
    tags: ['Global', 'Scale']
  },
  // Corporate Business - All (Curated Preview)
  {
    id: 201,
    title: 'Premium Card',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/7.png',
    tags: ['Design', 'Card']
  },
  {
    id: 202,
    title: 'Business Identity',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/8.png',
    tags: ['Branding', 'Card']
  },
  {
    id: 203,
    title: 'Corporate Network',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/9.png',
    tags: ['Network', 'Identity']
  },
  {
    id: 204,
    title: 'Modern Brochure',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/1.png',
    tags: ['Print', 'Brochure']
  },
  {
    id: 205,
    title: 'Creative Layout',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/2.png',
    tags: ['Layout', 'Design']
  },
  {
    id: 206,
    title: 'Service Guide',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/3.png',
    tags: ['Guide', 'Marketing']
  },
  {
    id: 207,
    title: 'Brand Portfolio',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/4.png',
    tags: ['Portfolio', 'Brand']
  },
  {
    id: 208,
    title: 'Official Letter',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/1.png',
    tags: ['Official', 'Paper']
  },
  {
    id: 209,
    title: 'Business Stationery',
    mainCat: 'corporate',
    subCat: 'AllView',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/2.png',
    tags: ['Stationery', 'Identity']
  },
  // Corporate Business - Business Cards
  {
    id: 211,
    title: 'Sleek Design',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/1.png',
    tags: ['Sleek', 'Card']
  },
  {
    id: 212,
    title: 'Minimalist Card',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/2.png',
    tags: ['Minimal', 'Design']
  },
  {
    id: 213,
    title: 'Classic Business',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/3.png',
    tags: ['Classic', 'Business']
  },
  {
    id: 214,
    title: 'Modern Entity',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/4.png',
    tags: ['Entity', 'Identity']
  },
  {
    id: 215,
    title: 'Tech Card',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/5.png',
    tags: ['Tech', 'Innovation']
  },
  {
    id: 216,
    title: 'Creative Edge',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/6.png',
    tags: ['Creative', 'Edge']
  },
  {
    id: 217,
    title: 'Luxury Finish',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/7.png',
    tags: ['Luxury', 'Finish']
  },
  {
    id: 218,
    title: 'Executive Style',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/8.png',
    tags: ['Executive', 'Style']
  },
  {
    id: 219,
    title: 'Professional Look',
    mainCat: 'corporate',
    subCat: 'Business Cards',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/cards/9.png',
    tags: ['Professional', 'Card']
  },
  // Corporate Business - Letterhead
  {
    id: 221,
    title: 'Executive Letterhead',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/1.png',
    tags: ['Official', 'Branding']
  },
  {
    id: 222,
    title: 'Corporate Stationery',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/2.png',
    tags: ['Stationery', 'Paper']
  },
  {
    id: 223,
    title: 'Modern Letterhead',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/3.png',
    tags: ['Modern', 'Business']
  },
  {
    id: 224,
    title: 'Minimalist Layout',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/4.png',
    tags: ['Minimal', 'Design']
  },
  {
    id: 225,
    title: 'Professional Paper',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/5.png',
    tags: ['Professional', 'Print']
  },
  {
    id: 226,
    title: 'Official Branding',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/6.png',
    tags: ['Branding', 'Official']
  },
  {
    id: 227,
    title: 'Clean Stationery',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/7.png',
    tags: ['Clean', 'Identity']
  },
  {
    id: 228,
    title: 'Business Letter',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/8.png',
    tags: ['Business', 'Corporate']
  },
  {
    id: 229,
    title: 'Premium Stationery',
    mainCat: 'corporate',
    subCat: 'Letterhead',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/letterhead/9.png',
    tags: ['Premium', 'Design']
  },
  // Corporate Business - Flyers
  {
    id: 231,
    title: 'Marketing Flyer',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/1.png',
    tags: ['Marketing', 'Promo']
  },
  {
    id: 232,
    title: 'Event Promo',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/2.png',
    tags: ['Event', 'Flyer']
  },
  {
    id: 233,
    title: 'Business Promo',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/3.png',
    tags: ['Business', 'Promo']
  },
  {
    id: 234,
    title: 'Creative Flyer',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/4.png',
    tags: ['Creative', 'Design']
  },
  {
    id: 235,
    title: 'Product Showcase',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/5.png',
    tags: ['Product', 'Marketing']
  },
  {
    id: 236,
    title: 'Sales Flyer',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/6.png',
    tags: ['Sales', 'Promo']
  },
  {
    id: 237,
    title: 'Corporate Promo',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/7.png',
    tags: ['Corporate', 'Design']
  },
  {
    id: 238,
    title: 'Digital Flyer',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/8.png',
    tags: ['Digital', 'Branding']
  },
  {
    id: 239,
    title: 'Modern Promo',
    mainCat: 'corporate',
    subCat: 'Flyers',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/flyers/9.png',
    tags: ['Modern', 'Promo']
  },
  // Corporate Business - Brochures
  {
    id: 241,
    title: 'Corporate Brochure',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/1.png',
    tags: ['Corporate', 'Print']
  },
  {
    id: 242,
    title: 'Business Profile',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/2.png',
    tags: ['Business', 'Profile']
  },
  {
    id: 243,
    title: 'Product Catalog',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/3.png',
    tags: ['Catalog', 'Marketing']
  },
  {
    id: 244,
    title: 'Service Guide',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/4.png',
    tags: ['Service', 'Guide']
  },
  {
    id: 245,
    title: 'Creative Booklet',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/5.png',
    tags: ['Creative', 'Design']
  },
  {
    id: 246,
    title: 'Modern Brochure',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/6.png',
    tags: ['Modern', 'Branding']
  },
  {
    id: 247,
    title: 'Clean Layout',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/7.png',
    tags: ['Layout', 'Print']
  },
  {
    id: 248,
    title: 'Official Profile',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/8.png',
    tags: ['Official', 'Business']
  },
  {
    id: 249,
    title: 'Premium Catalog',
    mainCat: 'corporate',
    subCat: 'Brochures',
    image: 'https://webratek.com/portfolio/assets/images/website%20category/portfolio/brochure/9.png',
    tags: ['Premium', 'Marketing']
  },
  // Video Animation - All (Curated Preview)
  {
    id: 301,
    title: 'Explainer Video',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/1.gif',
    tags: ['Explainer', 'Animation']
  },
  {
    id: 302,
    title: '2D Animation Pro',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/2.gif',
    tags: ['2D', 'Creative']
  },
  {
    id: 303,
    title: 'Motion Graphics',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/3.gif',
    tags: ['Motion', 'Design']
  },
  {
    id: 304,
    title: 'Brand Story',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/4.gif',
    tags: ['Story', 'Branding']
  },
  {
    id: 305,
    title: 'Product Demo',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/5.gif',
    tags: ['Product', 'Demo']
  },
  {
    id: 306,
    title: 'Social Media Ad',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/6.gif',
    tags: ['Social', 'Ads']
  },
  {
    id: 307,
    title: 'Corporate Intro',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/7.gif',
    tags: ['Corporate', 'Intro']
  },
  {
    id: 308,
    title: 'Character Animation',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/8.gif',
    tags: ['Character', '2D']
  },
  {
    id: 309,
    title: 'Visual Effects',
    mainCat: 'video',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/video-animation/9.gif',
    tags: ['VFX', 'Animation']
  },
  // 3D Logo Animation - All (Curated Preview)
  {
    id: 401,
    title: '3D Logo Reveal',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/1.gif',
    tags: ['3D', 'Reveal']
  },
  {
    id: 402,
    title: 'Premium Intro',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/2.gif',
    tags: ['Intro', 'Luxury']
  },
  {
    id: 403,
    title: 'Dynamic Outro',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/3.gif',
    tags: ['Outro', 'Dynamic']
  },
  {
    id: 404,
    title: 'Glitch Reveal',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/4.gif',
    tags: ['Glitch', 'Modern']
  },
  {
    id: 405,
    title: 'Cinematic Logo',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/5.gif',
    tags: ['Cinematic', '3D']
  },
  {
    id: 406,
    title: 'Tech Animation',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/6.gif',
    tags: ['Tech', 'Logo']
  },
  {
    id: 407,
    title: 'Abstract Reveal',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/7.gif',
    tags: ['Abstract', 'Reveal']
  },
  {
    id: 408,
    title: 'Neon Logo',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/8.gif',
    tags: ['Neon', 'Cyber']
  },
  {
    id: 409,
    title: 'Clean 3D Logo',
    mainCat: '3d',
    subCat: 'AllView',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/logo-animation/9.gif',
    tags: ['Clean', 'Professional']
  }
]

export default function Portfolio() {
  const navigate = useNavigate()
  const [activeMain, setActiveMain] = useState('website')
  const [activeSub, setActiveSub] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [zoomScale, setZoomScale] = useState(1)

  const handleShare = async (project) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: `Check out this project: ${project.title}`,
          url: project.image,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(project.image)
      alert('Image link copied to clipboard!')
    }
  }

  let filteredProjects = PROJECTS.filter(p => p.mainCat === activeMain)
  if (activeSub === 'All') {
    // Curated preview: Show only 9 images in the 'All' category
    filteredProjects = filteredProjects.slice(0, 9)
  } else {
    // Show only the specific category images
    filteredProjects = filteredProjects.filter(p => p.subCat === activeSub)
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen text-gray-900 relative overflow-hidden">
      {/* Hero Section with Dark Background */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#2D6A4F] bg-gradient-to-b from-[#2D6A4F] via-[#1B4332] to-[#081C15]">
        {/* Bottom Blackish Gradient Overlay for Depth */}
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0" />

        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1FC7A6]/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0F766E]/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-white text-sm tracking-widest mb-4 font-inter uppercase">Portfolio</p>
                <h1 className="text-[48px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-tighter mb-8">
                  Showcasing Excellence In Every Project
                </h1>
                <p className="text-white/60 text-[17px] max-w-2xl leading-relaxed mb-10">
                  Explore our portfolio to see how we turn visionary ideas into impactful designs.
                  Each project reflects our commitment to creativity, quality, and delivering
                  results that elevate our clients' brands.
                </p>
                <div className="flex justify-start mb-0">
                  <FlipButton
                    frontText="Get Started"
                    backText="Let's Work"
                    className="w-[180px] h-[52px]"
                    onClick={() => navigate('/contact-us')}
                  />
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-end">
              <div className="relative w-full max-w-[1100px]">
                <div className="absolute inset-0 bg-[#1FC7A6]/20 blur-[120px] rounded-full" />
                <img
                  src={laptopMockup}
                  alt="Premium Work Showcase"
                  className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] transform -rotate-[10deg] -translate-y-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioStats />

      <div className="bg-[#F5F5F5] py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 px-2">
            {/* Left Column: Label */}
            <div className="lg:col-span-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#006a63] to-[#004d48] flex items-center justify-center text-white">
                  <span className="text-[14px] font-bold leading-none">+</span>
                </div>
                <span className="text-[14px] font-bold tracking-tight font-inter uppercase bg-gradient-to-br from-[#006a63] to-[#004d48] bg-clip-text text-transparent">
                  Goal and Client-Oriented Designs
                </span>
              </div>
            </div>

            {/* Right Column: Massive Heading & Description */}
            <div className="lg:col-span-9">
              <h2 className="text-[48px] lg:text-[65px] font-bold text-[#030303] leading-[0.9] tracking-tighter mb-10 max-w-5xl">
                Together With <span className="text-transparent [-webkit-text-stroke:1.5px_#030303] italic font-serif">Focused</span> Marketing Methods
              </h2>
              <p className="text-[#030303]/60 text-[17px] max-w-3xl leading-relaxed">
                We create brands with impeccable and design knowledge incorporated with terms that
                attract your target audience.
              </p>
            </div>
          </div>

          {/* Level 1 Filters: Main Categories */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-20 mb-8 border-b border-gray-300 pb-8">
            {MAIN_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveMain(cat.id)
                  setActiveSub('All')
                }}
                className={`relative pb-2 transition-all duration-300
                  ${activeMain === cat.id
                    ? 'text-black font-bold'
                    : 'text-black/60 hover:text-black font-medium'
                  }`}
              >
                <span className="text-[14px] lg:text-[15px] tracking-tight">{cat.label}</span>
                {activeMain === cat.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Level 2 Filters: Sub Categories */}
          {MAIN_CATEGORIES.find(m => m.id === activeMain)?.subs.length > 1 && (
            <div className="flex flex-nowrap justify-start lg:justify-center gap-4 lg:gap-5 mb-0 overflow-x-auto no-scrollbar pb-4 -mb-4">
              {MAIN_CATEGORIES.find(m => m.id === activeMain)?.subs.map(sub => {
                const isActive = activeSub === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setActiveSub(sub)}
                    className={`group relative h-[50px] px-7 rounded-full transition-all duration-500 overflow-hidden shrink-0
                      ${isActive
                        ? 'bg-[#006a63] border-none text-white shadow-[0_10px_25px_-5px_rgba(31,199,166,0.3),inset_0_-4px_8px_rgba(0,0,0,0.2)]'
                        : 'bg-white border border-gray-200 text-gray-500 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:border-[#006a63]/30 hover:shadow-md'
                      }`}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center font-inter">
                      <span className={`transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] font-bold text-[12px] lg:text-[13px] tracking-[0.08em] uppercase select-none
                        ${isActive ? '' : 'group-hover:translate-y-[150%] group-hover:opacity-0'}
                      `}>
                        {sub}
                      </span>
                      {!isActive && (
                        <span className="absolute transform -translate-y-[150%] opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.4,1.16,0.24,1)] group-hover:translate-y-0 group-hover:opacity-100 text-black font-bold text-[12px] lg:text-[13px] tracking-[0.08em] uppercase select-none">
                          {sub}
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className="section-container pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={`${activeSub}-${project.id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0,
                  delay: idx * 0.04,
                }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                data-cursor-text="Enter"
                onClick={() => setSelectedIndex(idx)}
                className="group relative h-[400px] max-w-[395px] mx-auto overflow-hidden rounded-[5px] bg-white border border-black/[0.05] shadow-[0_10px_25px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.33, 1, 0.68, 1) group-hover:scale-105"
                />
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  {/* The 'Enter' text is handled by the data-cursor-text attribute */}
                </div>
              </motion.div>
            )
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={() => {
            setSelectedIndex(null)
            setZoomScale(1)
          }}
        >
          {/* Top Toolbar */}
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20" onClick={e => e.stopPropagation()}>
            <div className="text-white/70 text-[13px] font-medium tracking-widest font-mono">
              {selectedIndex + 1} / {filteredProjects.length}
            </div>

            <div className="flex items-center gap-6">
              {/* Functional Icons */}
              <button 
                className="text-white/60 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setZoomScale(prev => prev > 1 ? 1 : 2)
                }}
              >
                {zoomScale > 1 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM7.5 10.5h6" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                )}
              </button>
              <button 
                className="text-white/60 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handleShare(filteredProjects[selectedIndex])
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </button>
              <div className="w-[1px] h-4 bg-white/20 mx-2" />
              <button
                className="text-white/60 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex(null)
                  setZoomScale(1)
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-20"
            onClick={(e) => {
              e.stopPropagation();
              setZoomScale(1);
              setSelectedIndex(prev => prev > 0 ? prev - 1 : filteredProjects.length - 1);
            }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-20"
            onClick={(e) => {
              e.stopPropagation();
              setZoomScale(1);
              setSelectedIndex(prev => prev < filteredProjects.length - 1 ? prev + 1 : 0);
            }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center p-4 overflow-hidden" onClick={e => e.stopPropagation()}>
            <motion.img
              src={filteredProjects[selectedIndex].image}
              alt="Project View"
              className="max-w-full max-h-full object-contain shadow-2xl cursor-grab active:cursor-grabbing"
              animate={{ scale: zoomScale }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={zoomScale > 1}
              dragConstraints={{ top: -500, bottom: 500, left: -500, right: 500 }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
