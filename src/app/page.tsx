import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-amber-900 mb-4">Kapunka</h1>
          <p className="text-xl text-amber-700">Luxury Skincare Redefined</p>
        </header>
        
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-amber-900 mb-4">Premium Ingredients</h2>
            <p className="text-amber-700">Crafted with the finest natural ingredients for exceptional results.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-amber-900 mb-4">Scientific Innovation</h2>
            <p className="text-amber-700">Advanced formulations backed by cutting-edge skincare research.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-amber-900 mb-4">Sustainable Luxury</h2>
            <p className="text-amber-700">Eco-conscious packaging and ethically sourced ingredients.</p>
          </div>
        </section>
        
        <section className="text-center">
          <Link href="/products" className="bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 transition-colors">
            Explore Collection
          </Link>
        </section>
      </div>
    </main>
  );
}
