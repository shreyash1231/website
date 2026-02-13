import CardsBlock from "./CardsBlock";
import { Button } from "./ui/button";
import Image from "next/image";
export default function Discover() {
  const cardsData = [
    {
      image: "/images/Photo Frame.png",
      name: "Timothy Baker",
      role: "Teacher",
      rating: 4.8,
      reviews: 6,
      skills: ["Figma", "Elementor", "Wordpress"],
    },
    {
      image: "/images/Photo Frame (1).png",
      name: "Sarah Johnson",
      role: "Designer",
      rating: 4.5,
      reviews: 10,
      skills: ["UI/UX", "Photoshop", "Illustrator"],
    },
    {
      image: "/images/Photo Frame (2).png",
      name: "Michael Smith",
      role: "Developer",
      rating: 4.7,
      reviews: 8,
      skills: ["React", "NodeJS", "Tailwind"],
    },
    {
      image: "/images/Photo Frame (3).png",
      name: "Emily Davis",
      role: "Project Manager",
      rating: 4.9,
      reviews: 12,
      skills: ["Agile", "Scrum", "Jira"],
    },
    {
      image: "/images/Photo Frame.png",
      name: "John Doe",
      role: "Marketing",
      rating: 4.6,
      reviews: 7,
      skills: ["SEO", "Ads", "Content"],
    },
    {
      image: "/images/Photo Frame (1).png",
      name: "Anna Lee",
      role: "Accountant",
      rating: 4.4,
      reviews: 5,
      skills: ["Excel", "QuickBooks", "Analytics"],
    },
    {
      image: "/images/Photo Frame (2).png",
      name: "David Brown",
      role: "UI Designer",
      rating: 4.7,
      reviews: 9,
      skills: ["Figma", "Sketch", "Prototyping"],
    },
    {
      image: "/images/Photo Frame (3).png",
      name: "Laura Wilson",
      role: "Human Resource",
      rating: 4.8,
      reviews: 6,
      skills: ["Recruitment", "Payroll", "Training"],
    },
  ];

  // Roles with icons
  const roles = [
    { icon: "/images/Icon.png", label: "Developer" },
    { icon: "/images/Icon (1).png", label: "UI Designer" },
    { icon: "/images/Icon (2).png", label: "Project Manager" },
    { icon: "/images/Icon (3).png", label: "Designer" },
    { icon: "/images/Icon (4).png", label: "Accountant" },
    { icon: "/images/Icon (5).png", label: "Human Resource" },
    { icon: "/images/Icon (6).png", label: "Marketing" },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] 
                        flex flex-col items-center 
                        py-12 sm:py-16 md:py-20 
                        px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <h2 className="
        font-abezee
        text-2xl
        sm:text-3xl
        md:text-5xl
        lg:text-6xl
        leading-tight
        text-[#1E242C]
        text-center
      ">
        Discover the
        <span className="block">Emerging Masters</span>
      </h2>

      {/* Subtitle */}
      <p className="
        mt-4
        text-sm
        sm:text-base
        md:text-lg
        text-center
        text-[#414D60]
        max-w-md
        sm:max-w-xl
        md:max-w-2xl
      ">
        Find the best master for your company and boost
        your business 10x!
      </p>

      {/* Roles Row */}
      <div className="w-full max-w-7xl border-b border-gray-300 mt-8">
        <div className="
          flex 
          flex-wrap 
          justify-center 
          gap-6 
          sm:gap-8 
          py-4
        ">
          {roles.map((role, index) => (
            <div
              key={index}
              className="
                flex items-center gap-2
                text-sm sm:text-base
                text-[#6C7787]
                hover:text-[#1D4ED8]
                transition-colors
              "
            >
              <Image
                src={role.icon}
                alt={role.label}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span>{role.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
 <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-6
    w-full
    max-w-7xl
    mt-10
    mx-auto
    justify-items-center
  "
>

        {cardsData.map((card, index) => (
          <CardsBlock
            key={index}
            image={card.image}
            name={card.name}
            role={card.role}
            rating={card.rating}
            reviews={card.reviews}
            skills={card.skills}
          />
        ))}
      </div>

      {/* View All Button */}
      <Button
        className="
          mt-10
          px-6 py-3
          rounded-full
          border border-[#8AB9FF]
          bg-white
          text-[#1D4ED8]
          text-sm sm:text-base
          font-medium
          hover:bg-[#8AB9FF]
          hover:text-white
          transition-all
        "
      >
        View All
      </Button>

    </section>
  );
}