import { BallCanvas } from './canvas'
import { SectionWrapper } from '../HigherOrderComponents'
import { technologies } from '../constants'

export const Tech = SectionWrapper(() => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}, 'tech')
