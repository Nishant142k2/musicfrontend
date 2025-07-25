import Link from "next/link"
import {Spotlight} from "@/app/components/ui/Spotlight";
import {Button} from "@/app/components/ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-3 relative z-10 w-fll text-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        > Master the art of music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your 
            musical journey today! Whether you are a beginner or an advanced musician,
             we have something for everyone.</p>
            <div className="mt-4">
            <Button
        borderRadius="1.75rem"
        className="bg-transparent dark text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <Link href={"/courses"}>
                    Explore Our courses
                </Link>
      </Button>
                
            </div>
      </div>
    </div>
  )
}

export default HeroSection
