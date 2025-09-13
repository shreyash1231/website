export default function ClientsHeading() {
  return (
    <div className="w-full flex justify-center mt-8 bg-[#FAFAFA] py-12">
      <div className="flex flex-col gap-8">
        {/* Heading above left image */}
        <span className="font-['ABeeZee'] text-[56px] leading-[120%] text-[#1E242C] text-left">
          What our clients say
        </span>

        {/* Images */}
        <div className="flex flex-wrap gap-8">
          <img
            src="/images/Testimonial Text.png"
            alt="Testimonial Text"
            className="rounded-[20px] object-cover"
          />
          <img
            src="/images/Video.png"
            alt="Video"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
