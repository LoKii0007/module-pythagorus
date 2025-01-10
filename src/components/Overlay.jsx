import React, { act, useEffect, useState } from "react";
import { activeContentTypes, useGlobal } from "./hooks";
import toast from "react-hot-toast";
import AudioPlayer from "./AudioPlayer";

const Overlay = () => {
  const {
    sideA,
    setSideA,
    sideB,
    setSideB,
    activeQuestion,
    setActiveQuestion,
    activeContent,
    setActiveContent,
    activeAudio, setActiveAudio,playAudio, setPlayAudio, 
  } = useGlobal();
  const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);

  const [ans, setAns] = useState(0);
  const [ans2, setAns2] = useState(4);

  const answers = {
    a: 5,
    b: 8,
    c: 12,
  };

  const handleQuestion = (question) => {
    setActiveContent(activeContentTypes.question);
    setActiveQuestion(question);
  };

  useEffect(() => {
    setAns(0);
  }, [activeContent, activeQuestion]);

  const CheckAns = () => {
    if (answers[activeQuestion] === Number(ans)) {
      setActiveAudio('/correct.mp3')
      setPlayAudio(true)
      toast.success("Well done! You’ve got it right.");
    } else {
        setActiveAudio('/incorrect.mp3')
        setPlayAudio(true)
      toast.error("Incorrect answer try again");
    }
  };

  const checkAns2 = () => {
    if (sideB === 3) {
      setActiveAudio('/example-correct.mp3')
      setPlayAudio(true)
      toast.success("Well done! You’ve got it right.");
    } else {
      setActiveAudio('/example-incorrect.mp3')
      setPlayAudio(true)
      toast.error("Incorrect answer try again");
    }
  };

  const handleIntro = () => {
    setActiveContent(activeContentTypes.introduction)
    setActiveAudio('/definition.mp3')
    setPlayAudio(true)
  }

  const handleExample = () => {
    setActiveContent(activeContentTypes.example)
    setActiveAudio('/example-question.mp3')
    setPlayAudio(true)
  }

  const handleActivity = () => {
    setActiveContent(activeContentTypes.activity)
    setActiveAudio('/activity.mp3')
    setPlayAudio(true)
  }

  return (
    <>
      <div className="overlay h-screen w-screen pointer-events-none fixed left-0 top-0 z-10 justify-center items-center flex">

       <div className="audio px-5 py-3 top-7 right-7 pointer-events-auto bg-slate-300 rounded-[20px] absolute "  >
            <AudioPlayer activeAudio={activeAudio} playAudio={playAudio} />
       </div>

        {activeContent === activeContentTypes.question && (
          <div className="bg-slate-300 flex flex-col gap-4 absolute top-7 p-5 rounded-[20px] pointer-events-auto ">
            <label className="text-center" htmlFor="">
              Enter your answer
            </label>
            <input
              onChange={(e) => setAns(e.target.value)}
              value={ans}
              className="p-1 focus:outline-none border-b border-black bg-slate-300 "
              type="number"
            />
            <button
              onClick={() => CheckAns()}
              className="bg-green-600 py-2 rounded-xl mt-4 hover:bg-green-500 "
            >
              Check answer
            </button>
          </div>
        )}

        <div className="left-steps left-7 absolute flex gap-4 flex-col p-10 bg-slate-300 border-white border-2 rounded-[20px] pointer-events-auto min-w-fit w-[17vw] ">
          <button
            onClick={() => handleIntro()}
            className={`rounded-lg ${
              activeContent === activeContentTypes.introduction && "bg-blue-500"
            } hover:bg-blue-400 px-5 py-2 text-left`}
          >
            Introduction
          </button>
          <button
            onClick={() => handleActivity()}
            className={`rounded-lg ${
              activeContent === activeContentTypes.activity && "bg-blue-500"
            } hover:bg-blue-400 px-5 py-2 text-left`}
          >
            Activity
          </button>
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() => handleQuestion("a")}
              className={`px-5 ${
                activeQuestion === "a" &&
                activeContent === activeContentTypes.question &&
                "bg-blue-500 "
              } py-2 hover:bg-blue-400 rounded-lg text-left`}
            >
              Question 1
            </button>
            <button
              onClick={() => handleQuestion("b")}
              className={`px-5 ${
                activeQuestion === "b" &&
                activeContent === activeContentTypes.question &&
                "bg-blue-500"
              } py-2 hover:bg-blue-400 rounded-lg text-left`}
            >
              Question 2
            </button>
            <button
              onClick={() => handleQuestion("c")}
              className={`px-5 ${
                activeQuestion === "c" &&
                activeContent === activeContentTypes.question &&
                "bg-blue-500"
              } py-2 hover:bg-blue-400 rounded-lg text-left`}
            >
              Question 3
            </button>
          </div>

          <button
            onClick={() => handleExample()}
            className={`rounded-lg text-left ${
              activeContent === activeContentTypes.example && "bg-blue-500"
            } hover:bg-blue-400 px-5 py-2`}
          >
            Example
          </button>
        </div>

        {
            activeContent === activeContentTypes.activity &&
        <div className="right-steps h-[60vh] right-7 absolute flex flex-col p-10 bg-slate-300 border-white border-2 rounded-[20px] pointer-events-auto min-w-[350px] w-[20vw] ">
          <div className="grid grid-cols-1 text-black gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Side A: {sideA} units
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={sideA}
                onChange={(e) => setSideA(Number(e.target.value))}
                className="w-full h-2 blue-slider bg-blue-500/30 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Side B: {sideB} units
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={sideB}
                onChange={(e) => setSideB(Number(e.target.value))}
                className="w-full h-2 bg-green-500/30 rounded-lg green-slider appearance-none cursor-pointer"
              />
            </div>

            <div className="mt-4 text-sm font-semibold md:text-base">
              Hypotenuse (c) = {hypotenuse.toFixed(2)} units
            </div>

            <div className="mt-4 font-mono text-xs md:text-base">
              a² + b² = c²
              <br />
              {sideA}² + {sideB}² = {hypotenuse.toFixed(2)}²
              <br />
              {(sideA * sideA).toFixed(2)} + {(sideB * sideB).toFixed(2)} ={" "}
              {(hypotenuse * hypotenuse).toFixed(2)}
            </div>
          </div>
        </div>
       }

        {activeContent === activeContentTypes.example && (
          <div className="pointer-events-auto bg-slate-300 p-5 rounded-[20px] absolute bottom-7 w-[280px] ">
            <label className="block text-sm md:text-base mb-2 text-center">
              Select answer
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={sideB}
              onChange={(e) => setSideB(Number(e.target.value))}
              className="w-full h-2 bg-green-500/30 rounded-lg appearance-none cursor-pointer"
            />

            <div className="w-full flex justify-between text-base items-center text-center mt-4 " >
                <div className="font-semibold text-xl px-5 ">{sideB}</div>
                <button onClick={()=> checkAns2()} className="px-5 py-1 rounded-lg bg-green-600 " >Check answer</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Overlay;
