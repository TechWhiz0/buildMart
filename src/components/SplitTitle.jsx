/** Editorial split-line heading used across sections (BuildPro-style). */
export default function SplitTitle({ lines, className = '', as: Tag = 'h2' }) {
  return (
    <Tag className={`split-title ${className}`.trim()}>
      {lines.map((line, i) => (
        <span key={i} className="split-title__line">
          {line}
        </span>
      ))}
    </Tag>
  )
}
