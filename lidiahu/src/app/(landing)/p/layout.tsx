const STYLES = {
  width: '100vw',
  maxWidth: '700px',
  margin: '0 auto',
  padding: '20px 0 80px',
};

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <main style={STYLES}>{children}</main>;
}
