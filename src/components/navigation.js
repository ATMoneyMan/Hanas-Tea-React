import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-thq-navigation-container-elm navigation-container">
          <div className="navigation-left">
            <ul className="navigation-links">
              <li className="navigation-item">
                <a href="#">
                  <div className="navigation-link">
                    <span className="navigation-text10">Menu</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#">
                  <div className="navigation-link">
                    <span className="navigation-text11">Why Us</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#">
                  <div className="navigation-link">
                    <span className="navigation-text12">How It Works</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <a href="/">
            <div className="navigation-logo-group">
              <span className="navigation-thq-section-title-elm1 section-title">
                Hana&apos;s Tea
              </span>
            </div>
          </a>
          <div className="navigation-right">
            <ul className="navigation-links">
              <li className="navigation-item">
                <a href="#">
                  <div className="navigation-link">
                    <span className="navigation-text13">Gallery</span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#">
                  <div className="navigation-link">
                    <span className="navigation-text14">FAQ</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-actions">
              <button
                aria-label="Shopping Cart"
                className="navigation-cart-btn"
              >
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
                    <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </g>
                </svg>
              </button>
              <a href="#">
                <div className="btn-sm btn-primary btn navigation-cta">
                  <span>Order Now</span>
                </div>
              </a>
            </div>
          </div>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="navigationOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div className="navigation-logo-group">
              <span className="section-title">Hana&apos;s Tea</span>
            </div>
          </a>
          <button
            id="navigationClose"
            aria-label="Close menu"
            className="navigation-close-btn"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Menu</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Why Us</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>How It Works</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Gallery</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>FAQ</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer">
            <a href="#">
              <div className="navigation-mobile-cta btn-primary btn btn-lg">
                <span>Order Online</span>
              </div>
            </a>
            <div className="navigation-socials">
              <a href="#">
                <div aria-label="Instagram" className="navigation-social-link">
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
              <a href="#">
                <div aria-label="Facebook" className="navigation-social-link">
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
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-link::after {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("navigationToggle")
  const closeBtn = document.getElementById("navigationClose")
  const overlay = document.getElementById("navigationOverlay")
  const body = document.body

  function openMenu() {
    overlay.style.display = "flex"
    // Small timeout to ensure display: flex is applied before transition
    setTimeout(() => {
      overlay.classList.add("is-active")
      toggleBtn.setAttribute("aria-expanded", "true")
      body.style.overflow = "hidden"
    }, 10)
  }

  function closeMenu() {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    body.style.overflow = ""

    // Wait for transition to finish before hiding
    setTimeout(() => {
      if (!overlay.classList.contains("is-active")) {
        overlay.style.display = "none"
      }
    }, 400)
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  // Close menu when clicking a link
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Handle ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
