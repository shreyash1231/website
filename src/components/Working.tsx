import { Card, CardContent } from "./ui/card"

export default function Working() {
  return (
    <div className="w-full max-w-[1440px] h-auto flex flex-col lg:flex-row justify-between py-12 px-6 md:px-12 lg:py-[88px] lg:px-[100px] mx-auto gap-12">
      {/* Column 1: Text + Steps */}
      <div className="flex flex-col justify-center items-start gap-8 w-full lg:w-1/2">
        {/* Heading */}
        <span className="font-abezee text-[28px] md:text-[40px] lg:text-[56px] font-normal leading-[120%] text-[#1E242C]">
          How It Works
        </span>

        {/* Step 01 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <span className="font-['ABeeZee'] text-[72px] md:text-[90px] lg:text-[108px] leading-[120%] opacity-15 text-[#002B6B] flex items-center justify-center">
            01
          </span>

        <Card className="w-full sm:w-[427px] rounded-[20px] border border-[#EDEEF0] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] bg-white">
          <CardContent className="flex items-center gap-4 p-4">
            {/* Circle with Image */}
            <div className="w-[56px] h-[56px] rounded-full bg-[#E1E9FE] flex items-center justify-center p-4">
              <img
                src="/images/solar_login-3-broken (1).png"
                alt="Profile Icon"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col">
              <span className="font-['ABeeZee'] text-[20px] md:text-[24px] leading-[120%] text-[#1E242C]">
                Profile Review
              </span>
              <span className="font-['Manrope'] text-[14px] md:text-[16px] leading-[150%] text-[#414D60]">
                Get insights about your profile and reviews
              </span>
            </div>
          </CardContent>
        </Card>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-4 sm:gap-6">
          <span className="font-['ABeeZee'] text-[72px] md:text-[90px] lg:text-[108px] leading-[120%] opacity-15 text-[#002B6B] flex items-center justify-center">
            02
          </span>

          <Card className="w-full sm:w-[427px] rounded-[20px] border border-[#EDEEF0] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] bg-white">
            <CardContent className="flex items-center gap-4 p-4">
              {/* Circle with Icon */}
              <div className="w-[56px] h-[56px] rounded-full bg-[#FFEED2] flex items-center justify-center p-4">
                <img
                  src="/images/solar_login-3-broken (2).png"
                  alt="Test Prep Icon"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <span className="font-['ABeeZee'] text-[20px] md:text-[24px] leading-[120%] text-[#1E242C]">
                  Test Prep
                </span>
                <span className="font-['Manrope'] text-[14px] md:text-[16px] leading-[150%] text-[#414D60]">
                  Add your resume, videos, and more
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <span className="font-['ABeeZee'] text-[72px] md:text-[90px] lg:text-[108px] leading-[120%] opacity-15 text-[#002B6B] flex items-center justify-center">
            03
          </span>

          <Card className="w-full sm:w-[427px] rounded-[20px] border border-[#EDEEF0] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] bg-white">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="w-[56px] h-[56px] rounded-full bg-[#F6E2FF] flex items-center justify-center"></div>
              <div className="flex flex-col">
                <span className="font-['ABeeZee'] text-[20px] md:text-[24px] leading-[120%] text-[#1E242C]">
                  Fly with us
                </span>
                <span className="font-['Manrope'] text-[14px] md:text-[16px] leading-[150%] text-[#414D60]">
                  Let employers find and contact you
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Column 2: Images */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2 relative">
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center sm:items-start">
          <img
            src="/images/Photo (1).png"
            alt="Client 2"
            className="w-[180px] md:w-[250px] h-[280px] md:h-[395px] rounded-[30px] object-cover p-2 md:p-4"
          />
          <img
            src="/images/Photo.png"
            alt="Client 1"
            className="w-[250px] md:w-[400px] h-[360px] md:h-[560px] rounded-[20px] object-cover"
          />
        </div>

        <div className="flex justify-center relative">
          <img
            src="/images/Frame 1000004804.png"
            alt="Client 3"
            className="w-[220px] md:w-[487px] h-[70px] md:h-[160px] p-2 md:p-4 object-cover relative z-10 -mt-[180px] sm:-mt-[180px] sm:-ml-[230px] lg:-ml-[230px]"
          />
        </div>
      </div>
    </div>
  )
}
