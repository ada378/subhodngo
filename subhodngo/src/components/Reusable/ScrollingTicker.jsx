function ScrollingTicker({ items = [] }) {
  const defaultItems = [
    'Sehat Card',
    'Free Health Camp',
    'Free Education',
    'Women Empowerment',
    'Blood Donation',
    'Rural Development',
    'Clean India',
    'Food for All',
  ];

  const tickerItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {tickerItems.map((item, index) => (
            <span key={`first-${index}`}>
              <img src="/images/icon-asterisk.svg" alt="" />
              {item}
            </span>
          ))}
        </div>
        <div className="scrolling-content">
          {tickerItems.map((item, index) => (
            <span key={`second-${index}`}>
              <img src="/images/icon-asterisk.svg" alt="" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollingTicker;