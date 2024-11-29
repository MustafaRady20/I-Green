import React from 'react'


const packages = [
    {
      title: "Essential",
      items: [
        "Logo design",
        "Brand colors & fonts",
        "Up to 3 mockups of brand assets",
        "Banner & profile image for social media",
        "Brand guidelines",
      ],
      terms: "2 weeks",
    },
    {
      title: "Advanced",
      items: [
        "Logo design",
        "Brand colors & fonts",
        "Up to 3 mockups of brand assets",
        "Banner & profile image for social media",
        "Brand guidelines",
        "Social media posts & stories templates",
        "Corporate docs template",
        "Email template",
      ],
      terms: "3-4 weeks",
    },
    {
      title: "Custom",
      items: [
        "Logo design",
        "Brand colors & fonts",
        "Up to 3 mockups of brand assets",
        "Banner & profile image for social media",
        "Brand guidelines",
        "Social media posts & stories templates",
        "Corporate docs template",
        "Email template",
        "Basic slide template",
        "Infographics slide template",
        "Custom illustration slide template",
      ],
      terms: "From 4 weeks",
    },
  ];
//   lg:py-60 font-['Sono'] text-[#134A55] px-6 gap-9 py-[120px] flex flex-col justify-center relative w-full lg:px-[120px]
function PackagesSection() {
  return (
    <div className="  lg:pt-60 font-['Sono'] text-[#134A55] px-6 gap-9 py-[120px] flex flex-col justify-center relative w-full lg:px-[120px] ">
        <h2 className="text-3xl  font-bold text-center text-orange-500 ">
          packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((i) => (
            <div
              key={i.title}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800">{i.title}</h3>
                <hr className="my-4 border-gray-300" />
                <ul className="text-gray-600 space-y-2">
                  {i.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-500 mt-6">Terms: {i.terms}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Got a project? Want to collaborate?
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600">
            Discuss your project
          </button>
        </div>
      </div>
  )
}

export default PackagesSection