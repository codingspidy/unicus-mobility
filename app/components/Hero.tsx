'use client'
import { NextComponentType } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"
import { PlayIcon, SpeakerWaveIcon as SpeakerIcon, SpeakerXMarkIcon as MuteIcon, XMarkIcon as CloseIcon, ArrowLongRightIcon as ArrowRightIcon } from "@heroicons/react/24/solid"

const Hero: NextComponentType = () => {
  const [isFullScreen, setFullScreen] = useState(false);
  const [isMute, setMute] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMute(false)
  //   }, 2000)
  // }, [])

  return (
    <section id="custom-video" className="relative after:absolute sm:h-auto h-[100vh] after:inset-0 after:bg-[rgba(0,0,0,.8)]">
      <div className="overlay-gradient-t-intro h-[400px] w-full absolute z-50 bottom-0 inset-x-0" />
      <div id="videoCont" className={`video-container sm:h-auto h-[100vh] relative ${isFullScreen ? "full-screen-video" : ""}`}>
        <div id="closeBtn">
          <button
            onClick={() => {
              setFullScreen(!isFullScreen);
              // setMute(!isMute);
            }}
          >
            <CloseIcon className="w-7 mx-auto" />
          </button>
        </div>
        <video id="heroVideo" className="hero-video w-full xl:h-auto lg:h-[800px] md:h-[700px] h-[100vh] object-cover" autoPlay loop muted={isMute ? true : false} controls={isFullScreen ? true : false}>
          <source src="intro.mp4" type="video/mp4" />
        </video>

        <div className={`heroText-container absolute z-[60] inset-0 pt-[200px] sm:pt-[180px] lg:pt-[250px] ${isFullScreen ? "relative" : ""}`}>
          <div className="innerDiv mx-auto">
            <div className="flex justify-start relative z-[9] items-center">
              <div className="w-full">
                <h2 className="text-secondary leading-none font-[700] lg:text-[80px] md:text-[54px] text-[42px] glitch" data-text="DRIVE ELECTRIC,">
                  DRIVE ELECTRIC,
                </h2>
                <h2 className="text-white leading-normal font-[700] lg:text-[80px] md:text-[54px] text-[42px]">
                  DRIVE BETTER
                </h2>
                <p className="font-[700] text-white lg:text-[24px] md:text-[20px] text-[16px] mt-5">#SustainableFutureSimplified</p>
                {/* <p className="text-white font-[700] sm:text-[24px] text-[14px] mb-8"><span className="text-change"></span> </p> */}
                <div className="relative lg:w-[350px] md:w-[300px] w-[250px] mt-7">
                  <input type={"text"} className="font-[300] text-[14px] placeholder:font-[300] py-3 md:py-4 px-5 outline-none bg-primary rounded-[8px] text-white placeholder:text-white w-full" placeholder="Enter your email id" />
                  <ArrowRightIcon className="text-white absolute right-[15px] top-1/2 -translate-y-1/2 w-[30px]" />
                </div>
                <p className="text-[15px] text-white font-[500] mt-4">
                  <span className="text-secondary">10000</span> bikers have already joined!
                </p>
                {/* <div className="pt-12">
                  <button
                    onClick={() => {
                      setFullScreen(!isFullScreen);
                      // setMute(!isMute);
                    }}
                    id="playBtn"
                    className="w-[60px] h-[60px] border-2 border-white rounded-full text-white text-[24px]"
                  >
                    <PlayIcon className="h-8 w-8 mx-auto" />
                  </button>
                </div> */}
                <div onClick={() => setMute(!isMute)} className="mute cursor-pointer absolute -bottom-24 md:bottom-0 sm:right-[5%] right-[5px] z-[202]" id="muteBtn">
                  {isMute ? <MuteIcon className="w-8 md:w-9 text-white" /> : <SpeakerIcon className="w-8 md:w-9 text-white" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero