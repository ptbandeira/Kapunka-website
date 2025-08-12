import Link from "next/link";

export default function ProductsPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #fffbeb, #fed7aa)',
      padding: '4rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link 
          href="/" 
          style={{ 
            color: '#92400e', 
            textDecoration: 'none',
            marginBottom: '2rem',
            display: 'inline-block'
          }}
        >
          ← Back to Home
        </Link>
        
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: '#78350f',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Our Collection
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#92400e',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Discover our premium luxury skincare products
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              background: '#f3f4f6', 
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280'
            }}>
              Product Image
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#78350f', marginBottom: '0.5rem' }}>
              Luxury Face Serum
            </h3>
            <p style={{ color: '#92400e', marginBottom: '1rem' }}>
              Premium anti-aging serum with natural ingredients
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#78350f' }}>
              $89
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              background: '#f3f4f6', 
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280'
            }}>
              Product Image
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#78350f', marginBottom: '0.5rem' }}>
              Hydrating Night Cream
            </h3>
            <p style={{ color: '#92400e', marginBottom: '1rem' }}>
              Deep moisturizer for overnight skin repair
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#78350f' }}>
              $76
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ 
              height: '200px', 
              background: '#f3f4f6', 
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280'
            }}>
              Product Image
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#78350f', marginBottom: '0.5rem' }}>
              Gentle Cleanser
            </h3>
            <p style={{ color: '#92400e', marginBottom: '1rem' }}>
              Sulfate-free daily facial cleanser
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#78350f' }}>
              $54
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
