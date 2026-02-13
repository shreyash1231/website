import { Card } from "./ui/card";
import Image from "next/image";

interface ProfileCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  skills: string[];
}

export default function CardsBlock({
  image,
  name,
  role,
  rating,
  reviews,
  skills,
}: ProfileCardProps) {
  return (
    <Card
      className="
        w-full 
        max-w-xs 
        sm:max-w-sm 
        md:max-w-md 
        lg:max-w-sm 
        xl:max-w-md
        p-4 sm:p-5 md:p-6
        flex flex-col items-center gap-3
        rounded-2xl border shadow-sm
        transition-all duration-300
        hover:bg-[#8AB9FF]
      "
    >
      {/* Profile Image */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover
                     w-16 h-16
                     sm:w-18 sm:h-18
                     md:w-20 md:h-20"
        />
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm sm:text-base">
        <span className="text-yellow-500">★</span>
        <span className="font-medium">{rating}</span>
        <span className="text-gray-500">({reviews})</span>
      </div>

      {/* Name + Role */}
      <div className="text-center">
        <h3 className="font-semibold text-base sm:text-lg md:text-xl">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {role}
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              px-3 py-1 
              text-[10px] sm:text-xs
              bg-gray-100 
              rounded-full
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}
