import Paragraph from './Paragraph';

const STYLES = {
  margin: '50px 0',
};

export default function BibleVerse({ entry, verse }: { entry: string; verse: string }) {
  return (
    <div style={STYLES}>
      <Paragraph>&quot;{entry}&quot;</Paragraph>
      <Paragraph>
        <i>- {verse}</i>
      </Paragraph>
    </div>
  );
}
