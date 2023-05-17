export const CircularBar = ({ level }) => {
  const circleWith = 140;

  const radius = 50;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * level * 20) / 100;
  return (
    <div className="w-32 h-32 flex justify-center items-center">
      <svg
        width={circleWith}
        height={circleWith}
        viewBox={`0 0 ${circleWith} ${circleWith}`}
      >
        <circle
          cx={circleWith / 2}
          cy={circleWith / 2}
          strokeWidth="15px"
          r={radius}
          fill="none"
        />

        <circle
          cx={circleWith / 2}
          cy={circleWith / 2}
          strokeWidth="15px"
          r={radius}
          fill="none"
          stroke="#00a8eb"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          className="drop-shadow-icon transition-all duration-200 ease-in-out"
          transform={`rotate(-90 ${circleWith / 2} ${circleWith / 2})`}
        />
        <text x="50%" y="50%" dy="0.3em" textAnchor="middle" fill="white" className="text-3xl drop-shadow-icon">
          {level}
        </text>
      </svg>


    </div>
  )
}