const STYLES = {
  width: '100vw',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column' as 'column',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main style={STYLES}>{children}</main>;
}
