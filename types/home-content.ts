export type TranslatedContent = {
    en: string;
    ar: string;
  };
  
  export type HomeContent = {
    heroSection: {
      backgroundImage: string;
      title: TranslatedContent;
      description: TranslatedContent;
    };
    servicesSection: {
      title: TranslatedContent;
      services: {
        title: TranslatedContent;
        description: TranslatedContent;
        icon: string;
      }[];
    };
    aboutSection: {
      title: TranslatedContent;
      content: TranslatedContent;
      image: string;
    };
    contactSection: {
      title: TranslatedContent;
      content: TranslatedContent;
    };
  };
  
  