import { ServiceGridTypes, Work } from "@/types/types";
import {
  Flower2Icon,
  Leaf,
  ScissorsIcon,
  TreesIcon as Plant,
  SproutIcon,
  TreesIcon,
} from "lucide-react";

const serviceContents = {
  gardens: {
    id: "gardens",
    title: "How we can help?",
    content: [
      "From site work to custom brick and stone masonry, Gardeny can install your project with its own talented artisans and quality landscaping equipment. Using our extensive knowledge of soils, plants, landscape materials, and construction techniques, we are well qualified for any size project. We employ all our resources to achieve the best possible results, no matter the scale.",
      "Our distinctive water features will introduce sound and motion into your landscape experience. The element of water will release your stress and introduce you to the essence of nature herself. No two water gardens are alike, yet most are similar. Constructed of quality components and natural materials, our water features compliment any setting.",
      "Gardeny plants and trees are grown at our own NC Certified Nursery in Durham. Our NC Certified Plant Professional and staff horticulturist have collaborated to create one of the best nursery resources in the Triangle. We offer Landscape Investment Plants and Trees that will return dividends in growth, beauty, and value throughout the life of your landscape.",
    ],
    heroImage: "/pexels-q-l-1447393640-29512043.jpg",
    heroImageAlt: "Gardens",
    heroTitle: "Gardens",
    heroDescription:
      "Our distinctive water features will introduce sound and motion into your landscape experience. The element of water will release your stress and introduce you to the essence of nature herself. No two water gardens are alike, yet most are similar. Constructed of quality components and natural materials, our water features compliment any setting.",
  },
  urban: {
    id: "urban",
    title: "Urban Solutions",
    content: [
      "Our urban landscaping solutions are designed to maximize green spaces in city environments.",
      "We specialize in rooftop gardens, vertical gardens, and small space optimization.",
      "Our team works with sustainable materials and smart irrigation systems perfect for urban settings.",
    ],
    heroImage: "/pexels-q-l-1447393640-29512043.jpg",
    heroImageAlt: "Urban",
    heroTitle: "Urban",
    heroDescription:
      "Our distinctive water features will introduce sound and motion into your landscape experience. The element of water will release your stress and introduce you to the essence of nature herself. No two water gardens are alike, yet most are similar. Constructed of quality components and natural materials, our water features compliment any setting.",
  },
  maintenance: {
    id: "maintenance",
    title: "Professional Maintenance",
    content: [
      "Regular maintenance programs to keep your landscape looking its best year-round.",
      "Seasonal clean-up and preparation services.",
      "Expert pruning and plant health care services.",
    ],
    heroImage: "/pexels-q-l-1447393640-29512043.jpg",
    heroImageAlt: "Maintenance",
    heroTitle: "Maintenance",
    heroDescription:
      "Our distinctive water features will introduce sound and motion into your landscape experience. The element of water will release your stress and introduce you to the essence of nature herself. No two water gardens are alike, yet most are similar. Constructed of quality components and natural materials, our water features compliment any setting.",
  },
  events: {
    id: "events",
    title: "Special Events",
    content: [
      "Custom landscape designs for special events and occasions.",
      "Temporary installations and seasonal decorations.",
      "Event-specific maintenance and care services.",
    ],
    heroImage: "/pexels-q-l-1447393640-29512043.jpg",
    heroImageAlt: "Events",
    heroTitle: "Events",
    heroDescription:
      "Our distinctive water features will introduce sound and motion into your landscape experience. The element of water will release your stress and introduce you to the essence of nature herself. No two water gardens are alike, yet most are similar. Constructed of quality components and natural materials, our water features compliment any setting.",
  },
};

const services = [
  { id: "gardens", title: "Gardens" },
  { id: "urban", title: "Urban" },
  { id: "maintenance", title: "Maintenance" },
  { id: "events", title: "Events" },
];
const works: Work[] = [
  {
    id: 1,
    title: "MAGAZINE PROMO",
    description: "Check our latest work.",
    image: "/pexels-q-l-1447393640-29512043.jpg",
    bgColor: "bg-[#f5f5f0]",
    textColor: "text-black",
    // gridClass: "col-span-1",
    size: "large",
  },
  {
    id: 2,
    title: "Character Design",
    description: "Check our latest work.",
    image: "/pexels-q-l-1447393640-29512043.jpg",
    bgColor: "bg-[#2a1c5a]",
    textColor: "text-white",
    // gridClass: "row-span-2 ",
    size: "medium",
  },
  {
    id: 4,
    title: "Product Design",
    description: "Check our latest work.",
    image: "/pexels-q-l-1447393640-29512043.jpg",
    bgColor: "bg-[#ff4d2e]",
    textColor: "text-white",
    // gridClass: "col-span-1",
    size: "medium",
  },
];
const servicesGrid: ServiceGridTypes[] = [
  {
    title: "Softscape",
    id: "Softscape",
    description:
      "We design and plant lush gardens with premium lawns, shrubs, trees, and palms—creating beautiful, balanced landscapes that thrive in any environment.",
    icon: Flower2Icon,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600",
    specialtyLabel: "Specialty Gardening",
  },
  {
    title: "Irrigation networks",
    id: "Irrigation networks",
    description:
      "Our smart irrigation systems deliver precise water efficiently, using advanced automation and weather-responsive controls to keep landscapes healthy",
    icon: Plant,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600",
    specialtyLabel: "Specialty Gardening",
  },
  {
    id: "Hardscape",
    title: "Hardscape",
    description:
      "From elegant pergolas and mesmerizing waterfalls to durable walkways, patios, and lighting fixtures, we craft stunning outdoor spaces that seamlessly blend design, functionality, and beauty.",
    icon: Leaf,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600",
    specialtyLabel: "Specialty Gardening",
  },
  {
    id: "3D design ",
    title: "3D design ",
    description:
      "Fast, high-quality, and affordable 3D designs that let you visualize your outdoor space beforeconstruction begins—ensuring a smooth transformation.",
    icon: SproutIcon,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600",
    specialtyLabel: "Specialty Gardening",
  },
  {
    id: "solar energy",
    title: "solar energy",
    description:
      "At I Green, we provide smart, sustainable energy solutions, from solar power systems to advanced central heating—ensuring efficiency, comfort, and reliability for every space.",
    icon: ScissorsIcon,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600",
    specialtyLabel: "Specialty Gardening",
  },
  {
    id: "events",
    title: "events",
    description:
      "In partnership with Cairo Tech Summit, we design and decorate events of all kinds, providing themes and essentials for weddings, corporate gatherings, and special occasions.",
    icon: TreesIcon,
    image: "/pexels-amie-roussel-1990939723-28965893.jpg?height=400&width=600",
    specialtyLabel: "Specialty Gardening",
  },
];

export { serviceContents, works, services, servicesGrid };
