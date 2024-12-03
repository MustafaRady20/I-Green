type Size = "large" | "xlarge" | "medium" | "small"; 
  
  
interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  gridClass?: string;
  size: Size; // Use the defined Size type here
}
interface ServiceContent {
  id: string;
  title: string;
  content: string[];
  heroImage: string;
  heroImageAlt: string;
  heroTitle: string;
  heroDescription: string;
} 
type Services = {
  id : string;
  title: string;
}

interface ServiceGridTypes {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image: string
  specialtyLabel?: string
}



 export type { Work , Size  , ServiceContent , Services,ServiceGridTypes };