interface Body {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

interface Imagen {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends Body {
  _type: "pageInfo";
  address: string;
  backgroudInformation: string;
  email: string;
  role: string;
  heroImage: any;
  name: string;
  phoneNumber: string;
  profilePic: any;
}

export interface SanitySkills extends Body {
  _type: "skill";
  title: string;
  progress: number;
  image: any;
}
export interface Technology extends Body {
  _type: "skill";
  title: string;
  progress: number;
  image: any;
}
export interface Projects extends Body {
  _type: "project";
  title: string;
  summary: string;
  image: any;
  linkToBuild: string;
  technologies: Technology[];
}

export interface Experiences extends Body {
  _type: "experience";
  company: string;
  companyImage: any;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Socials extends Body {
  _type: "socialMedia";
  name: string;
  url: string;
}
