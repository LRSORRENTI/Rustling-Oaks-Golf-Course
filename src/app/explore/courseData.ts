// app/explore/courseData.ts (or wherever you like)

import lakes1 from "@/assets/images/slugImages/lakesCourse/lakes1.jpg";
import lakes2 from "@/assets/images/slugImages/lakesCourse/lakes2.jpg";
import lakes3 from "@/assets/images/slugImages/lakesCourse/lakes3.jpg";
import lakes4 from "@/assets/images/slugImages/lakesCourse/lakes4.jpg";

import valley1 from "@/assets/images/slugImages/valleyCourse/valley1.jpg";
import valley2 from "@/assets/images/slugImages/valleyCourse/valley2.jpg";
import valley3 from "@/assets/images/slugImages/valleyCourse/valley3.jpg";
import valley4 from "@/assets/images/slugImages/valleyCourse/valley4.jpg";

import driving1 from "@/assets/images/slugImages/drivingRange/driving1.jpg";
import driving2 from "@/assets/images/slugImages/drivingRange/driving2.jpg";
import driving3 from "@/assets/images/slugImages/drivingRange/driving3.jpg";
import driving4 from "@/assets/images/slugImages/drivingRange/driving4.jpg";

import mini1 from "@/assets/images/slugImages/miniGolf/miniGolf1.jpg";
import mini2 from "@/assets/images/slugImages/miniGolf/miniGolf2.jpg";
import mini3 from "@/assets/images/slugImages/miniGolf/miniGolf3.jpg";
import mini4 from "@/assets/images/slugImages/miniGolf/miniGolf4.jpg";

import rest1 from "@/assets/images/slugImages/Restaurant/rest1.jpg";
import rest2 from "@/assets/images/slugImages/Restaurant/rest2.jpg";
import rest3 from "@/assets/images/slugImages/Restaurant/rest3.jpg";
import rest4 from "@/assets/images/slugImages/Restaurant/rest4.jpg";
import rest5 from "@/assets/images/slugImages/Restaurant/rest5.jpg";

/**
 * This record maps each slug (must match `projects.slug`) to
 * the checkerboard images and text you want displayed in /explore/[slug].
 */
export const courseData: Record<
  string,
  {
    checkerboard: { image: any; text: string }[];
    introParagraph: string; // optional: set unique intro text for each slug
  }
> = {
  "the-lakes-course": {
    checkerboard: [
      {
        image: lakes1,
        text: "Breathtaking water views and challenging fairways at every turn.",
      },
      {
        image: lakes2,
        text: "Strategic bunkers and gentle breezes keep you on your toes.",
      },
      {
        image: lakes3,
        text: "Nature’s beauty merges with meticulous course design for a golfer’s dream.",
      },
      {
        image: lakes4,
        text: "A course to remember—experienced players will love the watery hazards!",
      },
    ],
    introParagraph:
      "Welcome to The Lakes Course! Discover serene lakeside holes and pristine fairways. Below you'll find more details and photos of the course.",
  },
  "the-valley-course": {
    checkerboard: [
      {
        image: valley1,
        text: "Sweeping valley vistas and rolling green hills greet every golfer.",
      },
      {
        image: valley2,
        text: "Mild slopes give way to challenging bends in this scenic layout.",
      },
      {
        image: valley3,
        text: "Lush fairways and hidden hazards test both accuracy and nerves.",
      },
      {
        image: valley4,
        text: "Tranquil surroundings ensure a memorable round time and again.",
      },
    ],
    introParagraph:
      "Welcome to The Valley Course! Nestled between gentle hills, this course offers a pleasant yet challenging experience for all skill levels.",
  },
  "driving-range": {
    checkerboard: [
      {
        image: driving1,
        text: "Refine your swing with unlimited turf at our driving range.",
      },
      {
        image: driving2,
        text: "Multiple distance markers help you track and perfect your aim.",
      },
      {
        image: driving3,
        text: "Practice bunkers and chipping greens let you master every shot.",
      },
      {
        image: driving4,
        text: "Professional instruction available for players seeking an edge.",
      },
    ],
    introParagraph:
      "Welcome to our Driving Range! Perfect your drives, practice your irons, and sharpen your short game all in one convenient location.",
  },
  "mini-golf": {
    checkerboard: [
      {
        image: mini1,
        text: "Fun-filled obstacles add excitement to every putt.",
      },
      {
        image: mini2,
        text: "Bring the family and enjoy a whimsical round under the lights.",
      },
      {
        image: mini3,
        text: "Take on creative water features and playful sculptures.",
      },
      {
        image: mini4,
        text: "Ideal for parties, date nights, or a casual outing with friends.",
      },
    ],
    introParagraph:
      "Welcome to Mini Golf! Whether you're playing with kids or just a kid at heart, enjoy a whimsical course filled with unique obstacles and plenty of laughs.",
  },
  restaurant: {
    checkerboard: [
      {
        image: rest1,
        text: "Experience our signature dishes prepared fresh each day.",
      },
      {
        image: rest2,
        text: "Locally sourced ingredients and a menu that celebrates the season.",
      },
      {
        image: rest3,
        text: "Spacious outdoor patio seating for scenic dining.",
      },
      {
        image: rest4,
        text: "Indulge in our curated wine list and handcrafted cocktails.",
      },
      {
        image: rest5,
        text: "Save room for dessert—our pastry chef's creations are a must-try!",
      },
    ],
    introParagraph:
      "Welcome to the Rustling Oaks Restaurant! Relax in our inviting atmosphere, savoring freshly prepared cuisine and a warm ambiance.",
  },
};
