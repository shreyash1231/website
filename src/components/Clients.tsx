export default function Clients() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-4">
      {/* Heading and Subtitle Container */}
      <div className="text-center">
        <span className="font-abezee text-[32px] md:text-[56px] font-normal leading-[120%] text-[#1E242C]">
          We are happy to work <br />
          with incredible clients
        </span>

        <span className="mt-4 block font-manrope text-[16px] md:text-[16px] leading-[150%] text-[#414D60] max-w-[657px] mx-auto">
          Fortune 500 companies and renowned global brands place their trust in our products, <br />
          solutions, and bespoke software development services.
        </span>

        {/* Image Below Subtitle */}
        <img
          src="/images/Frame 1000004850.png"
          alt="Clients"
          className="mt-10 w-full max-w-[830px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
