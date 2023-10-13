import React from 'react'

const ResumeButton = () => {
  return (
    <a href="/resume/naren.pdf" target="_blank">
      <button className="text-white font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110 duration-300">
        <span className="h-[24px] w-[24px] animate-bounce">{'\u21E9'}</span>
        <span className="lg:block hidden">My Resume</span> 
      </button>
    </a>
  )
}

export default ResumeButton;