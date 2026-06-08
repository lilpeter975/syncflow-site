interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {tag && (
        <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
