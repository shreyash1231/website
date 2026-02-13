import Image from "next/image";

export default function Clients() {
  return (
    <section className="w-full flex flex-col items-center justify-center 
                        py-12 sm:py-16 md:py-20 
                        px-4 sm:px-6 lg:px-8">

      {/* Content Wrapper */}
      <div className="text-center max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="
          font-abezee 
          text-2xl 
          sm:text-3xl 
          md:text-5xl 
          lg:text-6xl 
          leading-tight 
          text-[#1E242C]
        ">
          We are happy to work{" "}
          <span className="block">with incredible clients</span>
        </h2>

        {/* Subtitle */}
        <p className="
          mt-4 
          sm:mt-6
          font-manrope 
          text-sm 
          sm:text-base 
          md:text-lg 
          leading-relaxed 
          text-[#414D60] 
          max-w-2xl 
          md:max-w-3xl 
          mx-auto
        ">
          Fortune 500 companies and renowned global brands place their trust 
          in our products, solutions, and bespoke software development services.
        </p>

        {/* Image */}
        <div className="mt-8 sm:mt-10 md:mt-14">
          <Image
            src="/images/Frame 1000004850.png"
            alt="Clients"
            className="
              w-full 
              max-w-md 
              sm:max-w-xl 
              md:max-w-4xl 
              mx-auto 
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
}
