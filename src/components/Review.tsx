import { Card, CardContent } from "@/components/ui/card";

export default function Review() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <h2 className="font-abezee text-[26px] sm:text-[32px] md:text-[44px] lg:text-[56px] 
                     leading-[120%] text-center text-[#1E242C]">
        Why Choose <br className="hidden sm:block" />
        Masters with <br className="hidden sm:block" />
        EnglishReview
      </h2>

      {/* Subtitle */}
      <p className="mt-4 font-manrope text-[14px] sm:text-[15px] md:text-[16px] 
                    text-center text-[#414D60] max-w-[520px] leading-[150%]">
        Unlock your true potential and discover a world of opportunities
        that align with your skills, interests, and aspirations
      </p>

      {/* Layout Wrapper */}
      <div className="relative flex flex-col items-center justify-center 
                      mt-16 w-full max-w-[1400px]">

        {/* Circles Wrapper */}
        <div className="relative 
                        w-[260px] sm:w-[340px] md:w-[460px] 
                        lg:w-[580px] xl:w-[636px] 
                        aspect-square flex items-center justify-center">

          <img src="/images/Circle.png" alt="Circle"
               className="absolute w-full h-full object-contain" />

          <img src="/images/Circle (1).png" alt="Circle 1"
               className="absolute w-[80%] h-[80%] object-contain" />

          <img src="/images/Circle (2).png" alt="Circle 2"
               className="absolute w-[64%] h-[64%] object-contain" />

          <img
            src="/images/1299253_Person_Woman_1080x1920 1.png"
            alt="Person"
            className="relative 
                       w-[150px] sm:w-[200px] md:w-[260px] 
                       lg:w-[320px] xl:w-[349px] 
                       rounded-[20px] z-10"
          />
        </div>

        {/* Floating Cards */}
        <div
          className="
          relative lg:absolute 
          flex flex-col lg:flex-row 
          gap-8 lg:gap-6 
          mt-12 lg:mt-0
          lg:top-[15%] 
          w-full 
          justify-between 
          items-center
          z-30"
        >
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 items-center lg:items-end 
                          lg:translate-x-6">

            {/* Showcase Work */}
            <Card className="w-full max-w-[260px] h-auto min-h-[190px] 
                             rounded-[20px] border border-[#EDEEF0] 
                             shadow-[0px_10px_40px_0px_#002B6B30] bg-white">
              <CardContent className="flex flex-col items-center justify-center 
                                       gap-3 p-5 text-center">
                <img src="/images/Iconly-Pc-1723800402620 1.png"
                     alt="Showcase Icon"
                     className="w-9 h-9" />
                <h3 className="font-manrope text-[16px] md:text-[18px] 
                               font-bold text-[#1E242C]">
                  Showcase Work
                </h3>
                <p className="text-[13px] text-[#414D60] leading-[140%]">
                  Showcase your project to stand out
                </p>
                <button className="px-4 py-1.5 text-xs rounded-full 
                                   bg-[#3385FF] text-white 
                                   hover:bg-blue-600 transition">
                  Add Work
                </button>
              </CardContent>
            </Card>

            {/* Users */}
            <Card className="w-full max-w-[260px] h-auto min-h-[90px] 
                             rounded-[20px] border border-[#EDEEF0] 
                             bg-white shadow-[0px_10px_40px_0px_#002B6B30]">
              <CardContent className="flex items-center justify-center 
                                       gap-3 p-4">
                <img src="/images/global-search.png"
                     alt="Users Icon"
                     className="w-10 h-10" />
                <div>
                  <span className="font-manrope font-bold 
                                   text-[18px] md:text-[20px] text-[#1E242C]">
                    100K+
                  </span>
                  <p className="font-manrope text-[12px] text-[#414D60]">
                    Worldwide Active Users
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 items-center lg:items-start 
                          lg:-translate-x-6">

            {/* Networking */}
            <Card className="w-full max-w-[260px] min-h-[90px] 
                             rounded-[20px] border border-[#EDEEF0] 
                             bg-white shadow-[0px_10px_40px_0px_#002B6B30]">
              <CardContent className="flex items-center justify-center 
                                       gap-3 p-4 text-center lg:text-left">
                <img src="/images/Frame.png"
                     alt="Networking Icon"
                     className="w-10 h-10" />
                <span className="font-manrope font-bold 
                                 text-[14px] md:text-[16px] text-[#1E242C]">
                  Networking Opportunities
                </span>
              </CardContent>
            </Card>

            {/* Resume Builder */}
            <Card className="w-full max-w-[260px] min-h-[190px] 
                             rounded-[20px] border border-[#EDEEF0] 
                             shadow-[0px_8px_30px_0px_#002B6B20] bg-white">
              <CardContent className="flex flex-col items-center 
                                       justify-center gap-3 p-5 text-center">
                <img src="/images/Add documents 1.png"
                     alt="Resume Icon"
                     className="w-9 h-9" />
                <h3 className="font-manrope text-[16px] md:text-[18px] 
                               font-bold text-[#1E242C]">
                  Resume Builder
                </h3>
                <p className="text-[13px] text-[#414D60] leading-[140%]">
                  Create a professional resume with our builder
                </p>
                <button className="px-4 py-1.5 text-xs rounded-full 
                                   bg-[#3385FF] text-white 
                                   hover:bg-blue-600 transition">
                  Build Resume
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
