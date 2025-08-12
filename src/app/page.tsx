import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import BrandEssence from '@/components/BrandEssence';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-pattern-subtle">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <BrandEssence />
      </main>
      <Footer />
    </div>
  );
}