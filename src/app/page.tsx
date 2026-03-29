"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Experience",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reservations",
          id: "contact",
        },
      ]}
      brandName="VIBE SEAFOOD"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="DALLAS' MOST VIBRANT SEAFOOD EXPERIENCE"
      description="Where coastal flavors meet electric nightlife energy. Elevate your evening with curated cocktails, premium patio culture, and the freshest catch in the city."
      buttons={[
        {
          text: "Reserve Now",
          href: "#contact",
        },
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-adults-having-party-home_23-2149215843.jpg"
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="A New Standard of Nightlife Dining"
      description="We are breaking the mold of stiff seafood houses. Our patio is the heartbeat of Dallas, offering an immersive social experience that turns dinner into the main event."
      bulletPoints={[
        {
          title: "Patio Culture",
          description: "Lively open-air dining with Dallas' best crowd.",
        },
        {
          title: "Social First",
          description: "Curated for groups, parties, and celebratory nights.",
        },
        {
          title: "Electric Energy",
          description: "Atmosphere-driven service that never feels quiet.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/drink-glass-with-rose-petals-tray_140725-1046.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "m1",
          name: "Royal Seafood Tower",
          price: "$125",
          imageSrc: "http://img.b2bpic.net/free-photo/various-sea-products-bowls-marble-background_114579-91240.jpg",
        },
        {
          id: "m2",
          name: "Citrus Grilled Branzino",
          price: "$42",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-food-plate_23-2149152886.jpg",
        },
        {
          id: "m3",
          name: "Signature Lobster Roll",
          price: "$38",
          imageSrc: "http://img.b2bpic.net/free-photo/white-fish-fillet-lemon-slices-chips-salad_114579-3300.jpg",
        },
      ]}
      title="Signature Selections"
      description="Our chef's curated favorites, designed to be shared and enjoyed with our signature cocktails."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Dallas Dining Guide",
        "Texas Food Monthly",
        "City Eater",
        "Gulf Coast Times",
        "Nightlife Weekly",
        "Modern Chef",
        "Regional Seafood Daily",
      ]}
      logos={[
        "http://img.b2bpic.net/free-vector/retro-restaurant-logo_23-2148460714.jpg",
        "http://img.b2bpic.net/free-vector/vintage-thanksgiving-day-label-collection_23-2147942820.jpg",
        "http://img.b2bpic.net/free-vector/flat-travel-stickers-collection_23-2148051458.jpg",
        "http://img.b2bpic.net/free-vector/elegant-hotel-logos-pack_23-2147534192.jpg",
        "http://img.b2bpic.net/free-vector/american-badge-shield_24877-49525.jpg",
        "http://img.b2bpic.net/free-vector/premium-quality_23-2147502658.jpg",
        "http://img.b2bpic.net/free-vector/golden-new-year-2021_23-2148720579.jpg",
      ]}
      title="As Featured In"
      description="Recognized by top dining guides for our atmosphere and culinary craft."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Socialite",
          company: "Dallas Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-luxury-restaurant_23-2150598353.jpg",
        },
        {
          id: "2",
          name: "Marcus T.",
          role: "Foodie",
          company: "Tech Pro",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-holding-hands-wooden-table_23-2148014446.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Regular",
          company: "Marketing",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-friends-chatting-table_23-2149213369.jpg",
        },
        {
          id: "4",
          name: "David L.",
          role: "Guest",
          company: "Creative",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-woman-holds-martini-glass_197531-26639.jpg",
        },
        {
          id: "5",
          name: "James W.",
          role: "Connoisseur",
          company: "Lifestyle Magazine",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-luxury-restaurant_23-2150598353.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "1.8K+",
          label: "Happy Guests",
        },
        {
          value: "4.9/5",
          label: "Average Rating",
        },
        {
          value: "24/7",
          label: "Vibe Energy",
        },
      ]}
      title="Loved By Our Guests"
      description="Don't just take our word for it—join the 1,800+ guests who have made us their destination for the perfect night out."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Reservations"
      title="Book Your Experience"
      description="Secure your table for the most vibrant seafood experience in Dallas. We're filling up fast."
      buttonText="Reserve Table"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Reservations",
              href: "#contact",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
        {
          title: "Visit",
          items: [
            {
              label: "123 Seafood Blvd, Dallas",
              href: "#",
            },
            {
              label: "Open daily: 4PM - 1AM",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Vibe Seafood Dallas"
      bottomRightText="Privacy Policy | Terms of Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
