const STYLES = {
  fontSize: '2rem',
  fontWeight: '600',
  textTransform: 'capitalize' as 'capitalize',
  width: '100%',
  textAlign: 'center' as 'center',
  marginBottom: '30px',
};

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 style={STYLES}>{children}</h1>;
}
