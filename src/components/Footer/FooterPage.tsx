export default function FooterPage() {
  return (
    <footer 
      style={{
        backgroundColor: 'ghostwhite',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        bottom: 0,
      }}>
      <p>Footer</p>
    </footer>
  );
}