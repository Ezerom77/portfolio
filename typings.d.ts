interface SanityBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanityPageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroudInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface SanitySkills extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}
export interface SanityTechnology extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}
export interface SanityProjects extends SanityBody {
  _type: "project";
  title: string;
  description: string;
  image: Image;
  url: string;
  github: string;
  technologies: SanityTechnology[];
}

export interface SanityExperiences extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: SanityTechnology[];
}

export interface SanitySocials extends SanityBody {
  _type: "socialMedia";
  name: string;
  url: string;
}
