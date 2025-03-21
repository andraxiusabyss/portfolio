import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex-rowitems-center relative flex w-full flex-col items-center justify-center bg-background-1 md:text-left"
    >
      <div className="relative flex w-full max-w-center flex-col items-center justify-center gap-12 px-2 py-12 md:flex-row md:gap-20 md:px-40 md:pb-24 md:pt-48">
        <div className="flex w-full max-w-[450px] items-center justify-center overflow-hidden rounded-xl bg-secondary-red">
          <Image
            src="/1styear.jpg"
            width={800}
            height={800}
            alt="My 1st year in college"
            className="w-full max-w-[450px]"
          />
        </div>

        <div className="flex w-full max-w-[700px] flex-col gap-8">
          <h1 className="text-text z-20 w-full text-left">Who Am I?</h1>

          <div className="font-regular flex flex-col gap-4 text-left text-base normal-case text-content">
            <p className="">
              Hey there! I'm <span className="text-primary">Andrei Sager</span>
              , a software developer residing in the Philippines. I am a student
              of STI College Sta. Mesa who is currently finishing his Bachelors
              of Science in Computer Science (BSCS) Degree.
              <br />
              <br />
              During my free time I am a self-taught learner exploring deeper
              into topics outside the scope of the college curriculum diving
              into practice and creating my personal projects. I'm big on
              keeping my code clean with methodologies like BEM and am always up
              for learning something new.
              <br />
              <br />
              People often describe me as a motivated and organized person. I
              like setting goals for projects and making sure I hit them. I
              believe in bringing out the best results for the companies I work
              with, all while keeping things dynamic and enjoyable.
              <br />
              <br />
              If you ever want to chat about coding, challenges, or just share
              some cool ideas, I'm all ears! Let's keep making things better
              together.
            </p>
            {/*
        TODO: Add achievements in the future
        <div className="flex flex-row">
            <h1>Over Projects Completed</h1>
            <h1>Freelance Commissions</h1>
            <h1>Years of Experience</h1>
          </div> */}
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
