import Climbing from '../images/Climbing.jpg';
import Dancing from '../images/Dancing.jpg';
import DIY from '../images/DIY.jpg';
import USNA from '../images/usna.jpg';
import Helena from '../images/Helena.jpg';
import ClimbingDescription from '../textFiles/climbingDescriptions';
import SchoolEducationDescription from '../textFiles/educationDescription';
import SubmarineEducationDescription from '../textFiles/submarineEducationDescription';
import DancingDescription from '../textFiles/dancingDescription';
import DoItYourself from '../textFiles/doItYourself';

const itemObject = {
  'AboutHobbiesItems': [
    { 
      description: ClimbingDescription.shortDescription,
      image: Climbing, 
      longDescription: ClimbingDescription.longDescription,
    },
    { 
      description: DancingDescription.shortDescription, 
      image: Dancing,
      longDescription: DancingDescription.longDescription,
    },
    { 
      description: DoItYourself.shortDescription, 
      image: DIY,
      longDescription: DoItYourself.longDescription,
     },
  ],
  'AboutEducationItems': [
    { 
      description: SchoolEducationDescription.shortDescription, 
      image: USNA,
      longDescription: SchoolEducationDescription.longDescription,
    },
    { 
      description: SubmarineEducationDescription.shortDescription, 
      image: Helena,
      longDescription: SubmarineEducationDescription.longDescription,
    },
  ],
  'WorkFullstackItems': [
    { 
      description: SchoolEducationDescription.shortDescription, 
      image: USNA,
      longDescription: SchoolEducationDescription.longDescription,
    },
    { 
      description: SubmarineEducationDescription.shortDescription, 
      image: Helena,
      longDescription: SubmarineEducationDescription.longDescription,
    },
  ],
  'WorkNavyItems': [
    { 
      description: SchoolEducationDescription.shortDescription, 
      image: USNA,
      longDescription: SchoolEducationDescription.longDescription,
    },
    { 
      description: SubmarineEducationDescription.shortDescription, 
      image: Helena,
      longDescription: SubmarineEducationDescription.longDescription,
    },
  ],
};

export default itemObject