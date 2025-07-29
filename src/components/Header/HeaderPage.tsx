export default function HeaderPage() {
  return (
    <header 
      style={{
        backgroundColor: 'lightblue',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
      }}>
      <p>Header</p>
    </header>
  );
}