import CardsBlock from "./CardsBlock";
import { Button } from "./ui/button";

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
    <div className="w-full bg-[#FAFAFA] flex flex-col justify-center items-center py-12 px-4">
      {/* Heading */}
      <span className="font-abezee text-[32px] md:text-[56px] font-normal leading-[120%] text-[#1E242C] text-center">
        Discover the <br />
        Emerging Masters
      </span>

      {/* Subtitle */}
      <div className="mt-4 px-4 py-2 rounded text-center max-w-[399px]">
        <span className="font-manrope text-[16px] leading-[150%] text-[#414D60]">
          Find the best master for your company and boosts <br />
          your business 10x!
        </span>
      </div>
{/* Roles Row with Icons */}
<div className="w-full max-w-[1300px] border-b border-gray-300 my-4 mx-auto">
  <div className="flex flex-wrap justify-center gap-8 py-4">
    {roles.map((role, index) => (
      <div
        key={index}
        className="flex items-center gap-2 font-manrope text-[16px] font-normal leading-[150%] text-[#6C7787]"
      >
        <img
          src={role.icon}
          alt={role.label}
          className="w-6 h-6 opacity-100 rotate-0" // 24x24px, no rotation, full opacity
        />
        <span>{role.label}</span>
      </div>
    ))}
  </div>
</div>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1300px] mt-8">
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
        className="mt-8 w-[144px] h-[48px] flex items-center justify-center
                   gap-4 rounded-full border border-[#8AB9FF]
                   bg-white text-[#1D4ED8] text-[16px] font-medium"
      >
        View All
      </Button>
    </div>
  );
}
