import React, { useState } from "react";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: "whiteCar", // Placeholder, replace with actual image import
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: "car2", // Placeholder, replace with actual image import
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: "car3", // Placeholder, replace with actual image import
    aosDelay: "1000",
  },
];

const CarList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
            width: "100%",
            boxSizing: "border-box",
            fontSize: "16px",
          }}
        />
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList
              .filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((data) => (
                <div
                  key={data.name}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    {/* Replace 'data.image' with actual image import */}
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{data.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      {/* Display only price */}
                      <p>${data.price}</p>
                      <a href="#">Details</a>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    12Km
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
