export default function ClientsHeading() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* Heading */}
        <h2 className="
          font-['ABeeZee']
          text-2xl
          sm:text-3xl
          md:text-5xl
          lg:text-6xl
          leading-tight
          text-[#1E242C]
          text-center
          md:text-left
        ">
          What our clients say
        </h2>

        {/* Images Container */}
        <div className="
          flex 
          flex-col 
          md:flex-row 
          gap-6 
          md:gap-8
        ">
          <img
            src="/images/Testimonial Text.png"
            alt="Testimonial Text"
            className="
              w-full 
              md:w-1/2
              rounded-2xl 
              object-cover
            "
          />

          <img
            src="/images/Video.png"
            alt="Video"
            className="
              w-full 
              md:w-1/2
              rounded-2xl 
              object-cover
            "
          />
        </div>

      </div>
    </section>
  );
}
