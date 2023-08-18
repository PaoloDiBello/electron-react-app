const ExplosiveEffectText = () => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const enhanceText = (text) => {
    const enhancedText = text
      .split('')
      .filter(Boolean)
      .map((value, index) => (
        <span className="outer" key={index}>
          <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
            <span className="letter" style={{ animationDelay: `${index * 1000}ms` }}>
              {value}
            </span>
          </span>
        </span>
      ))

    return enhancedText
  }

  return (
    <div>
      <a className="word fancy">{enhanceText('Explosive')}</a>
    </div>
  )
}

export default ExplosiveEffectText
