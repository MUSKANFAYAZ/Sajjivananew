import React from 'react';
import { Users, Heart, Award, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Artisans Supported' },
    { icon: Heart, number: '10,000+', label: 'Happy Customers' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Globe, number: '25+', label: 'States Covered' }
  ];

  const values = [
    {
      title: 'Cultural Preservation',
      description: 'We are committed to preserving traditional art forms and cultural heritage for future generations.',
      icon: '🏺'
    },
    {
      title: 'Sustainable Livelihoods',
      description: 'Supporting artisans with fair wages and sustainable business opportunities.',
      icon: '🤝'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every product is handcrafted with attention to detail and traditional techniques.',
      icon: '✨'
    },
    {
      title: 'Community Impact',
      description: 'Creating positive social impact by empowering local communities.',
      icon: '🌱'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Passionate about preserving traditional crafts and supporting artisans.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Expert in supply chain management and artisan partnerships.'
    },
    {
      name: 'Anita Patel',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Curating the finest collection of handcrafted products.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Saajivana</h1>
            <p>Connecting traditional artisans with modern consumers, one handcrafted piece at a time.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Saajivana was born from a deep appreciation for traditional craftsmanship and a desire to 
                create sustainable livelihoods for artisans across India. We believe that every handcrafted 
                piece tells a story of culture, tradition, and the skilled hands that created it.
              </p>
              <p>
                Our mission is to bridge the gap between traditional artisans and modern consumers, 
                preserving cultural heritage while supporting sustainable livelihoods. We work directly 
                with artisans, ensuring fair wages and preserving traditional techniques.
              </p>
            </div>
            <div className="mission-image">
              <img 
                alt="Artisan at work" 
                src="/src/assets/logo.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={40} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Traditional crafts" 
              />
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, Saajivana began as a small initiative to support local artisans 
                in rural India. What started as a passion project has grown into a platform that 
                connects thousands of artisans with customers worldwide.
              </p>
              <p>
                We travel across India, meeting artisans, understanding their craft, and building 
                lasting partnerships. Each product in our collection is carefully curated to ensure 
                it meets our high standards of quality and authenticity.
              </p>
              <p>
                Today, we're proud to support over 500 artisans across 25+ states, helping preserve 
                traditional art forms while creating sustainable livelihoods for their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Preserving Tradition</h2>
            <p>Every purchase supports an artisan and helps preserve traditional crafts for future generations.</p>
            <div className="cta-buttons">
              <a href="/products" className="btn btn-primary">Shop Now</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 