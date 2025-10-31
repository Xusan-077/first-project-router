import CareerCard from "../CareerCard/CareerCard";

export default function CareerCards() {
  const cords = [
    {
      id: 1,
      position: "Full Stack Developer",
      location: "Bengaluru",
      type: "Full Time",
      salary: "$10K – $18K",
      equity: "No equity",
    },
    {
      id: 2,
      position: "Testing Engineer",
      location: "Remote",
      type: "Full Time",
      salary: "$08K – $10K",
      equity: "No equity",
    },
    {
      id: 3,
      position: "HR Manager",
      location: "Mumbai",
      type: "Full Time",
      salary: "$08K – $10K",
      experience: "4 to 5 Yrs Exp",
    },
    {
      id: 4,
      position: "Product Designer",
      location: "Mumbai",
      type: "Full Time",
      salary: "$08K – $10K",
      experience: "4 to 5 Yrs Exp",
    },
    {
      id: 5,
      position: "Wordpress Developer",
      location: "Mumbai",
      type: "Full Time",
      salary: "$08K – $10K",
      experience: "4 to 5 Yrs Exp",
    },
    {
      id: 6,
      position: "Jr. QA Tester",
      location: "California, USA",
      type: "Full Time",
      salary: "$14K – $23K",
      equity: "No equity",
    },
    {
      id: 7,
      position: "Sr. UX Designer",
      location: "California, USA",
      type: "Full Time",
      salary: "$14K – $23K",
      equity: "No equity",
    },
    {
      id: 8,
      position: "Social Media Manager",
      location: "Kolkata, India",
      type: "Full Time",
      salary: "$5K – $6K",
      experience: "Fresher",
    },
    {
      id: 9,
      position: "Golang Developer",
      location: "Mumbai",
      type: "Full Time",
      salary: "$08K – $10K",
      experience: "4 to 5 Yrs Exp",
    },
  ];

  return (
    <div className="">
      <div className="container">
        <div className="mb-[100px]">
          <div className="bg-[#ECF8F9]">
            <ul className="grid grid-cols-3 gap-8 p-20">
              {cords.map((el) => (
                <CareerCard key={el.id} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
