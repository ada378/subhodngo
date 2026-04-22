function SectionTitle({ subTitle, title, description, center = false, className = '' }) {
  return (
    <div className={`section-title ${center ? 'section-title-center' : ''} ${className}`}>
      {subTitle && <span className="section-sub-title wow fadeInUp">{subTitle}</span>}
      {title && (
        <h2 className="text-anime-style-3" data-cursor="-opaque">
          {title}
        </h2>
      )}
      {description && (
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;