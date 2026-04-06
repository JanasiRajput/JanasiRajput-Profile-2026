export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  badge?: string;
  category: 'Web' | 'Mobile' | 'Machine Learning' | 'iOS' | 'Other' | 'Java' | 'Other';
  status: 'Competition' | 'Personal' | 'Capstone';
  thumbnail: string;
  overview: string;
  timeline?: string;
  features: string[];
  githubLink?: string;
  liveDemo?: string;
  detailsImage?: string[];
};

export const projectsData: Project[] = [
  {
    id: 'fastapi-event',
    title: 'FastAPI Event Management System 🎟️',
    shortDescription: 'Award-winning full-stack event registration system built under extreme time pressure (4 hours).',
    techStack: ['Python', 'FastAPI', 'SQL', 'Bootstrap'],
    badge: '🥈 Silver Medal – Skill Sheridan 2026',
    category: 'Web',
    status: 'Competition',
    thumbnail: '/images/fastapi-event-thumb.png',
    overview: 'This project was built during the Skill Sheridan 2026 competition. The challenge was to construct a fully functional, full-stack event registration system from scratch in just 4 hours. The result won a Silver Medal for its robust backend and clean execution.',
    timeline: '1h Planning & Setup → 2h Backend → 45m Frontend → 15m Testing.',
    features: [
      'Registration workflow with validation',
      'SQL data management and persistent storage',
      'Responsive UI using Bootstrap',
      'FastAPI driven RESTful architecture'
    ],
    githubLink: 'https://github.com/JanasiRajput/Skill-Sheridan-2026-JanasiRajput.git',
    detailsImage: ['/images/fastapi-event-detail.png']
  },
  {
    id: 'pizza-order-app',
    title: 'PizzaOrderApp (iOS) 🍕',
    shortDescription: 'Feature-rich iOS app demonstrating custom pizza orders, persistent storage, and integrated web browsing.',
    techStack: ['Swift', 'UIKit', 'SQLite', 'UserDefaults', 'WKWebView'],
    category: 'iOS',
    status: 'Personal',
    thumbnail: '/images/pizza-app-thumb.png',
    overview: 'A native iOS application designed to streamline the pizza ordering process. It allows users to customize their pizzas, save order history natively on the device, and browse for more options via an integrated web view.',
    features: [
      'Custom pizza orders with size, toppings, and delivery options',
      'Persistent order history using SQLite',
      'Settings module utilizing UserDefaults',
      'Built-in browser via WKWebView'
    ],
    githubLink: 'https://github.com/JanasiRajput/Pizza-App.git',
    detailsImage: ['/images/pizza-app-detail.png']
  },
  {
    id: 'dog-show-scheduler',
    title: 'Dog Show Scheduler 🐶',
    shortDescription: 'Spring Boot web app for managing dogs, owners, judges, and relationships.',
    techStack: ['Java', 'Spring Boot', 'Thymeleaf', 'H2', 'Bootstrap'],
    category: 'Java',
    status: 'Personal',
    thumbnail: '/images/dog-show-thumb.png',
    overview: 'A robust web application designed to handle the complex relationships in a Dog Show event. It provides full CRUD operations and relationship management between owners, dogs, and judges.',
    features: [
      'Add and manage Owners, Dogs, and Judges',
      'Assign complex relationships (Owner → Dog, Judge → Dog)',
      'Detailed entity view pages',
      'Drop judge functionality directly from the dog page',
      'Pre-populated with dummy data (6 owners, 30 dogs, 3 judges) for testing'
    ],
    githubLink: 'https://github.com/JanasiRajput/DogShowScheduler.git',
    detailsImage: ['/images/dog-show-detail.png']
  },
  {
    id: 'bank-marketing-ml',
    title: 'Bank Marketing Prediction 💹',
    shortDescription: 'Predict customer subscription to term deposits using Logistic Regression with FastAPI integration.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'REST APIs', 'Jupyter'],
    category: 'Machine Learning',
    status: 'Capstone',
    thumbnail: '/images/ml-bank-thumb.png',
    overview: 'A machine learning pipeline built to predict whether a customer will subscribe to a term deposit. It uses data from direct marketing campaigns of a Portuguese bank and serves predictions via a high-performance REST API.',
    features: [
      'Data preprocessing and scaling using Pandas and Scikit-learn',
      'Logistic Regression model trained and evaluated',
      'REST API with /predict, /explain, and /sample endpoints',
      'High-performance serving with FastAPI'
    ],
    githubLink: '#',
    detailsImage: ['/images/ml-bank-detail.png']
  },
  {
    id: 'weather-adventure',
    title: 'Weather Adventure App 🌦️',
    shortDescription: 'Gamified weather app turning forecasts into quests with dynamic avatars.',
    techStack: ['FastAPI', 'React/Next.js', 'TailwindCSS', 'OpenWeather', 'Framer Motion', 'TypeScript'],
    category: 'Web',
    status: 'Personal',
    thumbnail: '/images/weather-app-thumb.png',
    overview: 'A modern, gamified approach to checking the weather. Forecasts are turned into contextual quests, accompanied by dynamic avatars and interactive animations that make the mundane task of checking the weather engaging and fun.',
    features: [
      'Gamified quests tailored to current weather conditions',
      'Interactive avatars and dynamic UI components',
      'Social sharing for adventures with friends',
      'Backend FastAPI API serving real-time weather and quest data',
      'Frontend interactive animations'
    ],
    githubLink: '#',
    detailsImage: ['/images/weather-app-detail.png']
  }
];
