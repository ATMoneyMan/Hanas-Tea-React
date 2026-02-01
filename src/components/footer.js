import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <a href="Homepage">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 8l1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"></path>
                        <path d="M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0m-5-7l1-6h2"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-brand-name">Hana&apos;s Tea</span>
                </div>
              </a>
              <p className="footer-description">
                Fresh, trendy, and customizable boba tea crafted with love in
                Richmond Hill. Your daily dose of happiness in a cup.
              </p>
              <div className="footer-social">
                <a href="https://instagram.com">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="https://facebook.com">
                  <div aria-label="Facebook" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com">
                  <div aria-label="Twitter" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Menu &amp; Order</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Milk Teas</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Fruit Teas</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Specialty Drinks</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Order Online</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Customization Guide</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li>
                  <a href="Homepage">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Catering</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>FAQs</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="footer-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Visit Us</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <address className="footer-contact-text">
                    <span>10096 Yonge St, Richmond Hill, ON L4C 1T7</span>
                  </address>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <a href="tel:9058830666">
                    <div className="footer-contact-text">
                      <span>(905) 883-0666</span>
                    </div>
                  </a>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span>Mon - Sun: 11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &amp;copy; 2024 Hana&apos;s Tea. All rights reserved. Stay Fresh.
            </p>
            <div className="footer-payment-badges">
              <div className="footer-badge">
                <span>Premium Quality</span>
              </div>
              <div className="footer-badge">
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
a.footer-contact-text:hover {
  color: var(--color-primary);
}
@media (prefers-reduced-motion: reduce) {
.footer-logo, .footer-social-link, .footer-link {
  transition: none;
}
.footer-social-link:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  // Simple intersection observer to add a subtle reveal effect when the footer comes into view
  const footerSection = document.querySelector(".footer-section")

  if (footerSection && window.IntersectionObserver) {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "opacity 1s ease, transform 1s ease"
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Set initial state for reveal
    footerSection.style.opacity = "0"
    footerSection.style.transform = "translateY(20px)"

    observer.observe(footerSection)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
