import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Hana's Tea</title>
        <meta property="og:title" content="Hana's Tea" />
        <link
          rel="canonical"
          href="https://grizzled-hollow-gerbil-7vkqes.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-order-online">
        <div className="hero-background">
          <img
            alt="Signature Hana's Tea Bubble Tea"
            src="https://images.pexels.com/photos/29839946/pexels-photo-29839946.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-image"
          />
          <div className="hero-scrim"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-text-block">
            <h1 className="hero-title home-hero-title">
              Sip the Freshness at Hana&apos;s Tea
            </h1>
            <p className="hero-subtitle home-hero-subtitle">
              Experience the trendiest boba in Richmond Hill. Freshly brewed,
              perfectly customizable, and served in a cozy atmosphere designed
              for your best moments.
            </p>
            <div className="hero-cta-group">
              <a href="#order">
                <div className="btn-primary btn btn-lg">
                  <span>Order Online</span>
                </div>
              </a>
              <a href="#menu">
                <div className="btn btn-outline btn-lg">
                  <span>View Menu</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="quick-menu-highlights">
        <div className="section-header">
          <h2 className="section-title">Popular Sips</h2>
          <p className="section-content">
            Our community&apos;s favorite picks, crafted with love and fresh
            ingredients.
          </p>
        </div>
        <div className="menu-carousel-container">
          <div className="menu-carousel-rail">
            <div className="menu-card">
              <img
                alt="Signature Milk Tea"
                src="https://images.pexels.com/photos/6412830/pexels-photo-6412830.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3 className="section-subtitle">Signature Milk Tea</h3>
                <p className="section-content">
                  Classic black tea with creamy milk and chewy brown sugar boba.
                </p>
                <span className="menu-price">$6.50</span>
                <a href="#order-1">
                  <div className="btn-sm btn btn-secondary">
                    <span>Order Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="menu-card">
              <img
                alt="Matcha Latte"
                src="https://images.pexels.com/photos/34656437/pexels-photo-34656437.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3 className="section-subtitle">Matcha Cloud Latte</h3>
                <p className="section-content">
                  Premium Uji matcha topped with our signature salty cheese
                  foam.
                </p>
                <span className="menu-price">$7.25</span>
                <a href="#order-2">
                  <div className="btn-sm btn btn-secondary">
                    <span>Order Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="menu-card">
              <img
                alt="Strawberry Fruit Tea"
                src="https://images.pexels.com/photos/6413693/pexels-photo-6413693.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3 className="section-subtitle">Strawberry Bliss</h3>
                <p className="section-content">
                  Real crushed strawberries blended with jasmine green tea and
                  jelly.
                </p>
                <span className="menu-price">$6.95</span>
                <a href="#order-3">
                  <div className="btn-sm btn btn-secondary">
                    <span>Order Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="menu-card">
              <img
                alt="Thai Milk Tea"
                src="https://images.pexels.com/photos/33241823/pexels-photo-33241823.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3 className="section-subtitle">Royal Thai Tea</h3>
                <p className="section-content">
                  Authentic Thai spices and condensed milk for a rich, bold
                  flavor.
                </p>
                <span className="menu-price">$6.75</span>
                <a href="#order-4">
                  <div className="btn-sm btn btn-secondary">
                    <span>Order Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="menu-card">
              <img
                alt="Brown Sugar Boba"
                src="https://images.pexels.com/photos/14267671/pexels-photo-14267671.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3 className="section-subtitle">Tiger Brown Sugar</h3>
                <p className="section-content">
                  Fresh milk drizzled with house-made brown sugar syrup and warm
                  boba.
                </p>
                <span className="menu-price">$7.50</span>
                <a href="#order-5">
                  <div className="btn-sm btn btn-secondary">
                    <span>Order Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="menu-card">
              <img
                alt="Mango Pomelo Sago"
                src="https://images.pexels.com/photos/6413393/pexels-photo-6413393.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3 className="section-subtitle">Mango Sago Slush</h3>
                <p className="section-content">
                  Refreshing mango slush with creamy coconut milk and sago
                  pearls.
                </p>
                <span className="menu-price">$7.95</span>
                <a href="#order-6">
                  <div className="btn-sm btn btn-secondary">
                    <span>Order Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-footer-cta">
          <a href="#full-menu">
            <div className="btn-link btn">
              <span>View Full Menu</span>
            </div>
          </a>
        </div>
      </section>
      <section className="why-choose-us">
        <div className="why-choose-container">
          <div className="why-choose-visual">
            <img
              alt="Cozy Hana's Tea Interior"
              src="https://images.pexels.com/photos/6413728/pexels-photo-6413728.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="why-choose-img"
            />
            <div className="why-choose-accent-blob"></div>
          </div>
          <div className="why-choose-content">
            <h2 className="section-title">The Hana&apos;s Tea Difference</h2>
            <p className="section-content">
              We believe every cup of tea should be a small celebration of
              flavor and quality.
            </p>
            <div className="benefit-grid">
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="section-subtitle">Fresh Ingredients</h3>
                  <p className="section-content">
                    We use premium loose-leaf teas and fresh seasonal fruits in
                    every brew.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="section-subtitle">Full Customization</h3>
                  <p className="section-content">
                    From sugar levels to ice amount, your drink is made exactly
                    how you like it.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="section-subtitle">Fast Pickup</h3>
                  <p className="section-content">
                    Order ahead online and skip the line. Your tea will be ready
                    when you arrive.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="section-subtitle">Friendly Staff</h3>
                  <p className="section-content">
                    Our team is dedicated to making your day brighter with a
                    smile and a great cup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="how-it-works-container">
          <div className="section-header">
            <h2 className="section-title">Your Boba, Your Way</h2>
            <p className="section-content">
              Four simple steps to tea perfection.
            </p>
          </div>
          <div className="steps-horizontal">
            <div className="step-card">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="1" cx="8" cy="21"></circle>
                  <circle r="1" cx="19" cy="21"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Choose Drink</h3>
              <p className="section-content">
                Browse our extensive menu of milk teas and fruit teas.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 17H5M19 7h-9"></path>
                  <circle r="3" cx="17" cy="17"></circle>
                  <circle r="3" cx="7" cy="7"></circle>
                </svg>
              </div>
              <h3 className="section-subtitle">Customize</h3>
              <p className="section-content">
                Pick your toppings, sugar level, and ice preference.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                  <path d="M2 10h20"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Pay Online</h3>
              <h3 className="section-content">
                Secure checkout using your favorite payment method.
              </h3>
            </div>
            <div className="step-card">
              <div className="step-number">
                <span>04</span>
              </div>
              <div className="step-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 16l2 2l4-4"></path>
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path>
                  <path d="M3.29 7L12 12l8.71-5M12 22V12"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Pick Up</h3>
              <p className="section-content">
                Head to our shop and grab your fresh tea from the counter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-testimonials">
        <div className="section-header">
          <h2 className="section-title">What Our Sippers Say</h2>
          <p className="section-content">
            Real stories from our Hana&apos;s Tea community.
          </p>
        </div>
        <div className="testimonials-rail">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;Best boba in town! The brown sugar pearls are always warm
              and soft. My go-to spot every weekend.&quot;
            </p>
            <div className="testimonial-author">
              <span className="section-subtitle">Sarah L.</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;Love how I can customize exactly how much sugar I want. The
              fruit teas actually taste like real fruit!&quot;
            </p>
            <div className="testimonial-author">
              <span className="section-subtitle">Jason M.</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <svg
                fill="currentColor"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="star-icon"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;Super fast pickup! I order on my way from work and it&apos;s
              always ready. The staff is incredibly friendly too.&quot;
            </p>
            <div className="testimonial-author">
              <span className="section-subtitle">Emily R.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="aesthetic-gallery">
        <div className="section-header">
          <h2 className="section-title">Cozy Moments</h2>
          <p className="section-content">
            A glimpse into the aesthetic world of Hana&apos;s Tea.
          </p>
        </div>
        <div className="gallery-masonry">
          <div className="gallery-item">
            <img
              alt="Enjoying Boba Outdoors"
              src="https://images.pexels.com/photos/6413660/pexels-photo-6413660.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-img"
            />
          </div>
          <div className="gallery-item item-tall">
            <img
              alt="Modern Shop Front"
              src="https://images.pexels.com/photos/6413702/pexels-photo-6413702.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-img"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Colorful Bubble Tea"
              src="https://images.pexels.com/photos/6413645/pexels-photo-6413645.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-img"
            />
          </div>
          <div className="gallery-item item-tall">
            <img
              alt="Boba Joy"
              src="https://images.pexels.com/photos/6413646/pexels-photo-6413646.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-img"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Tea Preparation"
              src="https://images.pexels.com/photos/31578569/pexels-photo-31578569.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-img"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Cozy Tea Glass"
              src="https://images.pexels.com/photos/17536089/pexels-photo-17536089.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-img"
            />
          </div>
        </div>
        <div className="gallery-footer">
          <a href="#full-gallery">
            <div className="btn btn-outline">
              <span>View Full Gallery</span>
            </div>
          </a>
        </div>
      </section>
      <section className="contact-catering">
        <div className="contact-container">
          <div className="contact-info-panel">
            <h2 className="section-title">Visit Us</h2>
            <p className="section-content">
              Located in the heart of Richmond Hill. Stop by for your daily boba
              fix.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
                <span className="section-content">
                  10096 Yonge St, Richmond Hill, ON L4C 1T7
                </span>
              </div>
              <div className="contact-detail-item">
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" rx="2" width="20" height="14"></rect>
                  <path d="M2 10h20"></path>
                </svg>
                <span className="section-content">(905) 883-0666</span>
              </div>
              <div className="contact-detail-item">
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="section-content">
                  Open Daily: 11:00 AM - 9:00 PM
                </span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://instagram.com">
                <div aria-label="Instagram" className="social-link">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="catering-form-panel">
            <h3 className="section-subtitle">Catering &amp; Bulk Orders</h3>
            <p className="section-content">
              Planning an event? Let us bring the boba to you.
            </p>
            <form
              action="/catering-inquiry"
              method="POST"
              data-form-id="457ae7f1-93e6-4c03-9cb1-d90f86a7ed89"
              className="catering-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="thq_true_ymkx"
                  name="true"
                  required="true"
                  placeholder="Your Name"
                  data-form-field-id="thq_true_ymkx"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="thq_email_F-gk"
                  name="email"
                  required="true"
                  placeholder="Email Address"
                  data-form-field-id="thq_email_F-gk"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="thq_message_v60a"
                  name="message"
                  required="true"
                  placeholder="Tell us about your event (Date, Number of people...)"
                  data-form-field-id="thq_message_v60a"
                  className="form-textarea"
                ></textarea>
              </div>
              <button
                id="thq_button_sYh1"
                name="button"
                type="submit"
                data-form-field-id="thq_button_sYh1"
                className="btn-primary btn btn-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="final-cta-modal-trigger">
        <div className="trigger-container">
          <button id="openCtaModal" className="btn-xl btn-accent btn">
            Ready to Order?
          </button>
        </div>
      </section>
      <dialog id="finalCtaModal" className="cta-modal">
        <div className="modal-content">
          <button
            id="closeCtaModal"
            aria-label="Close modal"
            className="modal-close"
          >
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>
          <div className="modal-body">
            <h2 className="hero-title home-hero-title">
              Your Fresh Boba Awaits
            </h2>
            <p className="section-content">
              Freshly brewed tea, high-quality ingredients, and lightning-fast
              pickup. Don&apos;t keep your cravings waiting!
            </p>
            <div className="modal-cta-group">
              <a href="#order-now">
                <div className="btn-primary btn btn-lg">
                  <span>Order Now</span>
                </div>
              </a>
              <a href="#view-menu">
                <div className="btn btn-outline btn-lg">
                  <span>View Menu</span>
                </div>
              </a>
            </div>
            <p className="modal-note">
              Fast pickup available in Richmond Hill.
            </p>
          </div>
        </div>
      </dialog>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<style>
        @keyframes slowZoom {from {transform: scale(1);}
to {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container8">
        <div className="home-container9">
          <Script
            html={`<script defer data-name="hanas-tea-interactions">
(function(){
  const openModalBtn = document.getElementById("openCtaModal")
  const closeModalBtn = document.getElementById("closeCtaModal")
  const ctaModal = document.getElementById("finalCtaModal")

  if (openModalBtn && ctaModal) {
    openModalBtn.addEventListener("click", () => {
      ctaModal.showModal()
    })
  }

  if (closeModalBtn && ctaModal) {
    closeModalBtn.addEventListener("click", () => {
      ctaModal.close()
    })
  }

  // Close on backdrop click
  if (ctaModal) {
    ctaModal.addEventListener("click", (e) => {
      const dialogDimensions = ctaModal.getBoundingClientRect()
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        ctaModal.close()
      }
    })
  }

  // Simple horizontal scroll behavior enhancement for carousels
  const carousels = document.querySelectorAll(".menu-carousel-container, .testimonials-rail")
  carousels.forEach((carousel) => {
    carousel.addEventListener(
      "wheel",
      (evt) => {
        if (evt.deltaY !== 0) {
          evt.preventDefault()
          carousel.scrollLeft += evt.deltaY
        }
      },
      { passive: false }
    )
  })

  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".menu-card, .step-card, .benefit-item, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
    revealObserver.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
