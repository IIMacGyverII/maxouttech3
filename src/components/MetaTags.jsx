import { useEffect } from 'react'

/**
 * MetaTags Component
 * Dynamically updates document head meta tags for SEO and social sharing
 * 
 * Usage:
 * <MetaTags 
 *   title="Page Title | Maxout Technology"
 *   description="Page description here"
 *   image="https://example.com/image.png"
 * />
 */
export function MetaTags({ 
  title = 'Maxout Technology | Wireless Security Sensors & Life Safety Devices',
  description = 'High-performance wireless security sensors, life safety detectors, and control solutions for residential and commercial properties.',
  image = 'https://IIMacGyverII.github.io/maxouttech3/favicon-32x32.png',
  url = 'https://IIMacGyverII.github.io/maxouttech3/',
  type = 'website'
}) {
  useEffect(() => {
    // Update title
    document.title = title
    
    // Update meta tags
    updateMetaTag('name', 'description', description)
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'og:type', type)
    updateMetaTag('property', 'twitter:title', title)
    updateMetaTag('property', 'twitter:description', description)
    updateMetaTag('property', 'twitter:image', image)
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    
    // Update canonical URL
    updateCanonicalUrl(url)
  }, [title, description, image, url, type])

  return null
}

function updateMetaTag(attribute, name, content) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

function updateCanonicalUrl(url) {
  let link = document.querySelector("link[rel='canonical']")
  
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  
  link.href = url
}
