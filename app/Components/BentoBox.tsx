import React from 'react'
import TextCarousel from './TextCarousel'
interface Props{
    gridPosCol : string,
    gridPosRow: string,
    height: string,
    width: string
}
const BentoBox = ({gridPosCol , gridPosRow, height, width} : Props) => {
  return (
    <div style={{gridColumn : gridPosCol, gridRow: gridPosRow, height , width}} className='w-full bg-slate-500'>BentoBox</div>
  )
}

export default BentoBox