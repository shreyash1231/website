import { Card, CardContent } from "@/components/ui/card";

export default function Review() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-4">
      {/* Heading */}
      <h2 className="font-abezee text-[28px] md:text-[56px] font-normal leading-[120%] text-center text-[#1E242C]">
        Why Choose <br />
        Masters with <br />
        EnglishReview
      </h2>

      {/* Subtitle */}
      <p className="mt-4 font-manrope text-[14px] md:text-[16px] font-medium leading-[150%] text-center text-[#414D60] max-w-[502px]">
        Unlock your true potential and discover a world of opportunities <br />
        that align with your skills, interests, and aspirations
      </p>

      {/* Layout */}
      <div className="relative flex flex-col items-center justify-center mt-12 w-full max-w-[1200px]">
        {/* Circles Wrapper */}
        <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[636px] aspect-square flex items-center justify-center">
          <img src="/images/Circle.png" alt="Circle" className="absolute w-full h-full" />
          <img src="/images/Circle (1).png" alt="Circle 1" className="absolute w-[80%] h-[80%]" />
          <img src="/images/Circle (2).png" alt="Circle 2" className="absolute w-[64%] h-[64%]" />
          <img
            src="/images/1299253_Person_Woman_1080x1920 1.png"
            alt="Person"
            className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[349px] h-auto rounded-[20px] z-10"
          />
        </div>

        {/* Floating Cards */}
        <div className="absolute flex flex-col md:flex-row md:gap-6 top-[10%] md:top-[15%] w-full justify-between px-4 z-30">
          {/* Left Column: Showcase Work + 100K */}
          <div className="flex flex-col gap-6 md:translate-x-6">
            {/* Showcase Work */}
          <Card className="w-[220px] sm:w-[240px] md:w-[260px] h-[200px] rounded-[20px] border border-[#EDEEF0] shadow-[0px_10px_50px_0px_#002B6B30] bg-white mx-auto z-30">
            <CardContent className="flex flex-col items-center justify-center gap-2 p-3 text-center h-full">
              <img src="/images/Iconly-Pc-1723800402620 1.png" alt="Showcase Icon" className="w-9 h-9" />
              <h3 className="font-manrope text-[16px] md:text-[18px] font-bold text-[#1E242C]">
                Showcase Work
              </h3>
              <p className="text-[12px] text-[#414D60] leading-[140%]">
                Showcase your project <br /> to stand out
              </p>
              <button className="px-4 py-1.5 text-xs rounded-full bg-[#3385FF] text-white border border-[#3385FF] hover:bg-blue-600">
                Add Work
              </button>
            </CardContent>
          </Card>
            {/* Users (100K) */}
            <Card className="w-[220px] sm:w-[240px] md:w-[260px] h-[90px] rounded-[20px] border border-[#EDEEF0] bg-white shadow-[0px_10px_50px_0px_#002B6B30] mx-auto z-30">
              <CardContent className="flex items-center justify-center gap-3 h-full w-full">
                <img
                  src="/images/global-search.png"
                  alt="Users Icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-manrope font-bold text-[18px] md:text-[20px] text-[#1E242C]">
                    100K +
                  </span>
                  <span className="font-manrope text-[12px] text-[#414D60]">
                    Worldwide Active Users
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Networking Opportunities + Resume Builder */}
          <div className="flex flex-col gap-6 md:-translate-x-6">
            {/* Networking Opportunities */}
            <Card className="w-[220px] sm:w-[240px] md:w-[260px] h-[90px] rounded-[20px] border border-[#EDEEF0] bg-white shadow-[0px_10px_50px_0px_#002B6B30] mx-auto z-30">
              <CardContent className="flex items-center justify-center gap-3 h-full w-full">
                <img src="/images/Frame.png" alt="Networking Icon" className="w-10 h-10" />
                <div className="flex flex-col justify-center text-left">
                  <span className="font-manrope font-bold text-[14px] md:text-[16px] text-[#1E242C]">
                    Networking Opportunities
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Resume Builder */}
          <Card className="w-[220px] sm:w-[240px] md:w-[260px] h-[200px] rounded-[20px] border border-[#EDEEF0] shadow-[0px_8px_30px_0px_#002B6B20] bg-white mx-auto z-30">
            <CardContent className="flex flex-col items-center justify-center gap-2 p-3 text-center h-full">
              <img
                src="/images/Add documents 1.png"
                alt="Resume Icon"
                className="w-9 h-9"
              />
              <h3 className="font-manrope text-[16px] md:text-[18px] font-bold text-[#1E242C]">
                Resume Builder
              </h3>
              <p className="text-[11px] md:text-[13px] text-[#414D60] leading-[140%]">
                Create a professional resume <br /> with our builder
              </p>
              <button className="px-4 py-1.5 text-xs rounded-full bg-[#3385FF] text-white border border-[#3385FF] hover:bg-blue-600">
                Build Resume
              </button>
            </CardContent>
          </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
