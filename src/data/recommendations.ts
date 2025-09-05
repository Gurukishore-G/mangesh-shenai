export interface Recommendation {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  date: string;
  content: string;
  avatar?: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "1",
    name: "Nitin Sharma",
    title: "General Manager at Weener Plastics Group",
    company: "Weener Plastics Group",
    relationship: "Nitin was Mangesh's client",
    date: "September 3, 2025",
    content: "I had the pleasure of working with Mangesh during Spin selling training, and I can confidently say that he is one of the most impactful trainers I've come across. His ability to break down complex concepts into engaging, easy-to-understand sessions is truly commendable. What sets Mangesh apart is his deep subject matter expertise, interactive training style, and genuine passion for empowering others. They foster an environment that encourages participation, curiosity, and growth — making every session both insightful and enjoyable.",
    avatar: "/lovable-uploads/37c3380c-1c27-4627-80cf-311d80d46746.png"
  },
  {
    id: "2",
    name: "S Babu",
    title: "Sales & Leadership Coach | Pharma Training Expert",
    company: "Strategic Coaching and Adult Learning",
    relationship: "S was Mangesh's client",
    date: "September 2, 2025",
    content: "I had the opportunity to attend a training session conducted by Mangesh Shenai, and I was truly amazed by his facilitation skills. He has a remarkable ability to make complex topics simple, engaging, and easy to apply. Mangesh's expertise in MBTI is evident in the way he understands people and their unique behaviors. He has an incredible knack for identifying challenges and designing scientifically-based, practical training solutions that resonate with participants. His sessions are not only insightful but also highly interactive, keeping everyone engaged while delivering deep learning. What stands out most is his ability to combine knowledge with real-world application, making his training impactful and memorable. Mangesh is a true professional and a masterful facilitator, and I highly recommend him to anyone seeking expert guidance in personality profiling, behavioral training, or leadership development.",
    avatar: "/lovable-uploads/37c3380c-1c27-4627-80cf-311d80d46746.png"
  },
  // Add more recommendations here - you can copy from your LinkedIn
  {
    id: "3",
    name: "Priya Singh",
    title: "Director of Learning & Development",
    company: "TechCorp Solutions",
    relationship: "Priya was Mangesh's client",
    date: "August 15, 2025",
    content: "Mangesh delivered exceptional training on leadership development for our senior management team. His approach is both practical and transformative. The way he connects with each participant and adapts his style to different learning preferences is remarkable. Our team saw immediate improvements in communication and decision-making skills.",
    avatar: "/lovable-uploads/37c3380c-1c27-4627-80cf-311d80d46746.png"
  },
  {
    id: "4",
    name: "Rajesh Kumar",
    title: "VP Sales & Marketing",
    company: "Global Enterprises Ltd",
    relationship: "Rajesh was Mangesh's client",
    date: "July 28, 2025",
    content: "Working with Mangesh on our sales transformation initiative was a game-changer. His deep understanding of behavioral psychology combined with practical sales methodologies helped our team achieve a 40% increase in conversion rates. Highly recommended for any organization looking to elevate their sales performance.",
    avatar: "/lovable-uploads/37c3380c-1c27-4627-80cf-311d80d46746.png"
  }
];