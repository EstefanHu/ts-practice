const STYLES = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  width: '100vw',
  maxWidth: '700px',
  margin: '0 auto',
  padding: '10px 15px 100px',
};

export default function Story({ children }: { children: React.ReactNode }) {
  return <div style={STYLES}>{children}</div>;
}
