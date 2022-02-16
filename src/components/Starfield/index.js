import React, { useEffect, useRef, useState } from 'react'
import { StarfieldCanvas } from './StarfieldElements'
import sp1 from '../../assests/images/sp1.png'
import sp2 from '../../assests/images/sp2.png'

const colors = ['#18A2D9', '#FFF']
const textures = [sp1, sp2]
const numStars = 200

const randomNumber = (min, max) => Math.random() * (max - min) + min

const Starfield = () => {
  const ref = useRef(null)
  const [fieldWidth, setWidth] = useState(0)
  const [fieldHeight, setHeight] = useState(0)

  useEffect(() => {
    const winWidth = ref.current.clientWidth
    const winHeight = ref.current.clientHeight
    setHeight(winHeight)
    setWidth(winWidth)
  }, [ref])

  let stars = []
  for (let index = 0; index < numStars; index++) {
    const size = Math.floor(Math.random() * 30)
    const color = colors[Math.floor(Math.random() * colors.length)]
    const texture = textures[Math.floor(Math.random() * textures.length)]
    const star = {
      color,
      src: texture,
      height: size,
      width: size,
      top: randomNumber(0, fieldHeight),
      left: randomNumber(0, fieldWidth),
    }
    stars.push(star)
  }

  return (
    <StarfieldCanvas ref={ref}>
      {stars.map((star, i) => (
        <img
          key={i}
          style={{ position: 'absolute', left: star.left, top: star.top }}
          src={star.src}
          color={star.color}
          height={star.height}
          width={star.width}
        />
      ))}
    </StarfieldCanvas>
  )
}

export default Starfield
