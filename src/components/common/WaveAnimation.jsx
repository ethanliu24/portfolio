function WaveAnimation({ text }) {
  return (
    <div className="text-bounce">
      {text.split("").map((char, i) => (
        <span key={i} style={{ "--i": i }}>
          {char}
        </span>
      ))}
    </div>
  )
}

export default WaveAnimation