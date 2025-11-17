'use client'
import React from 'react'

function AuthorUserPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="cs-hero pt-[100px] max-sm:pt-[80px]">
        <div className="cs-container">
          <div className="cs-hero-content">
            <h1 className="cs-hero-title">Author Profile</h1>
            <p className="cs-hero-text">
              Information about the author
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-content">
            <p className="cs-text">
              This page is under construction. Please check back later.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cs-section {
          --primary: #0070c0;
          --secondary: #005a9e;
          --headerColor: #1a1a1a;
          --bodyTextColor: #4e4b66;
          --headerFontSize: clamp(1.75rem, 3vw, 2.5rem);
          --bodyFontSize: 1.05rem;
          --sectionPadding: clamp(3.5rem, 6vw, 7rem) 1rem;
        }

        .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .cs-hero {
          background: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.6)),
                      url('/f1.jpg') center/cover no-repeat;
          position: relative;
          overflow: hidden;
        }

        .cs-hero-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .cs-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 1rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
        }

        .cs-hero-text {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          line-height: 1.75;
          margin: 0 0 1.5rem 0;
          color: var(--headerColor);
          opacity: 0.9;
        }

        .cs-section {
          padding: var(--sectionPadding);
          background: #ffffff;
        }

        .cs-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto;
        }

        .cs-text {
          font-size: var(--bodyFontSize);
          line-height: 1.75;
          margin: 0;
          color: var(--bodyTextColor);
          opacity: 0.9;
        }
      `}</style>
    </>
  )
}

export default AuthorUserPage

