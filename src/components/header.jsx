import logo from '../assets/logo-vexa.png';

function Menu() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: '10px 20px',
      boxShadow: '0px 4px 4px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Logo centrado (usamos un div con flex-grow para centrar) */}
      <div>
        <img src={logo} alt="Logo" style={{ height: 70 }} />
      </div>

      {/* Opciones a la derecha */}
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#58DF30'
      }}>
        <li style={{ cursor: 'pointer' }}>Dashboard</li>
        <li style={{ cursor: 'pointer' }}>Coins</li>
        <li style={{ cursor: 'pointer' }}>Author</li>
      </ul>
    </nav>
  );
}

export default Menu;
