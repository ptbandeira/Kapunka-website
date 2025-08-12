export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #fffbeb, #fed7aa)',
      padding: '4rem 1rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3.75rem', 
        fontWeight: 'bold', 
        color: '#78350f',
        marginBottom: '1rem'
      }}>
        Kapunka
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        color: '#92400e',
        marginBottom: '4rem'
      }}>
        Luxury Skincare Redefined
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem',
        maxWidth: '1200px',
        margin: '0 auto 4rem auto'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#78350f', marginBottom: '1rem' }}>
            Premium Ingredients
          </h2>
          <p style={{ color: '#92400e' }}>
            Crafted with the finest natural ingredients for exceptional results.
          </p>
        </div>
        
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#78350f', marginBottom: '1rem' }}>
            Scientific Innovation
          </h2>
          <p style={{ color: '#92400e' }}>
            Advanced formulations backed by cutting-edge skincare research.
          </p>
        </div>
        
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#78350f', marginBottom: '1rem' }}>
            Sustainable Luxury
          </h2>
          <p style={{ color: '#92400e' }}>
            Eco-conscious packaging and ethically sourced ingredients.
          </p>
        </div>
      </div>
      
      <a 
        href="/products" 
        style={{ 
          background: '#92400e', 
          color: 'white', 
          padding: '1rem 2rem', 
          borderRadius: '0.5rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Explore Collection
      </a>
    </div>
  );
}
