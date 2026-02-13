import { Card, CardContent } from "./ui/card";

export default function Working() {
  return (
    <section
      className="
        w-full max-w-[1440px] 2xl:max-w-[1600px]
        mx-auto
        flex flex-col xl:flex-row
        items-center xl:items-start
        justify-between
        gap-14 sm:gap-16 lg:gap-20
        py-14 sm:py-20 lg:py-24
        px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
      "
    >
      {/* LEFT COLUMN */}
      <div className="w-full xl:w-1/2 flex flex-col gap-10 lg:gap-14">

        {/* Heading */}
        <h2
          className="
            font-abezee
            text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] xl:text-[56px]
            leading-[120%]
            text-[#1E242C]
            text-center xl:text-left
          "
        >
          How It Works
        </h2>

        {/* STEPS */}
        {[
          {
            number: "01",
            title: "Profile Review",
            text: "Get insights about your profile and reviews",
            bg: "bg-[#E1E9FE]",
            img: "/images/solar_login-3-broken (1).png",
          },
          {
            number: "02",
            title: "Test Prep",
            text: "Add your resume, videos, and more",
            bg: "bg-[#FFEED2]",
            img: "/images/solar_login-3-broken (2).png",
            reverse: true,
          },
          {
            number: "03",
            title: "Fly with us",
            text: "Let employers find and contact you",
            bg: "bg-[#F6E2FF]",
          },
        ].map((step, index) => (
          <div
            key={index}
            className={`
              flex flex-col sm:flex-row
              ${step.reverse ? "sm:flex-row-reverse" : ""}
              items-center sm:items-start
              gap-6
            `}
          >
            {/* Big Number */}
            <span
              className="
                font-['ABeeZee']
                text-[55px] sm:text-[75px] md:text-[90px] lg:text-[100px] xl:text-[108px]
                leading-none
                opacity-15
                text-[#002B6B]
              "
            >
              {step.number}
            </span>

            {/* Card */}
            <Card
              className="
                w-full
                max-w-[420px] sm:max-w-[450px]
                rounded-[20px]
                border border-[#EDEEF0]
                shadow-[10px_25px_80px_rgba(0,43,107,0.25)]
              "
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div
                  className={`
                    w-[50px] h-[50px] sm:w-[56px] sm:h-[56px]
                    rounded-full
                    ${step.bg}
                    flex items-center justify-center
                  `}
                >
                  {step.img && (
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-['ABeeZee'] text-[18px] sm:text-[20px] md:text-[22px] text-[#1E242C]">
                    {step.title}
                  </h3>
                  <p className="font-['Manrope'] text-[13px] sm:text-[14px] md:text-[15px] text-[#414D60]">
                    {step.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full xl:w-1/2 flex justify-center relative mt-10 xl:mt-0">

        <div className="relative flex items-end gap-4 lg:gap-6">

          {/* Left Image */}
          <img
            src="/images/Photo (1).png"
            alt="Client 2"
            className="
              w-[120px] sm:w-[170px] md:w-[210px] lg:w-[240px]
              h-auto
              rounded-[25px] lg:rounded-[30px]
              object-cover
            "
          />

          {/* Main Image */}
          <img
            src="/images/Photo.png"
            alt="Client 1"
            className="
              w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[430px]
              h-auto
              rounded-[18px] lg:rounded-[20px]
              object-cover
              shadow-xl
            "
          />

          {/* Floating Image */}
          <img
            src="/images/Frame 1000004804.png"
            alt="Client 3"
            className="
              absolute
              bottom-[-15px] sm:bottom-[-25px] md:bottom-[-30px]
              left-1/2 -translate-x-1/2
              w-[180px] sm:w-[250px] md:w-[300px] lg:w-[340px]
              h-auto
              shadow-lg
            "
          />
        </div>
      </div>
    </section>
  );
}
