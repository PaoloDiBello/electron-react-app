const HackerEffectText = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let interval: NodeJS.Timeout | null = null

  const onMouseOver = (event) => {
    let iteration = 0

    interval && clearInterval(interval)

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((_, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index]
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')

      if (iteration >= event.target.dataset.value.length) {
        interval && clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <div>
      <h1 data-value="HOVER ME" className="hacker-effect-text" onMouseOver={onMouseOver}>
        HOVER ME
      </h1>
    </div>
  )
}

export default HackerEffectText
