import { MotivationalQuote } from '../types';

export const motivationalQuotes: MotivationalQuote[] = [
  {
    id: 1,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    id: 2,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    id: 3,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    id: 5,
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    id: 6,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 7,
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke"
  },
  {
    id: 8,
    text: "If you want to achieve greatness, stop asking for permission.",
    author: "Anonymous"
  },
  {
    id: 9,
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    id: 10,
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Anonymous"
  },
  {
    id: 11,
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    id: 12,
    text: "Your CGPA doesn't define your potential, but your effort does!",
    author: "Anonymous"
  },
  {
    id: 13,
    text: "Stay up late today, or stay behind tomorrow. Your choice!",
    author: "Anonymous"
  },
  {
    id: 14,
    text: "RTU exams are tough, but so are you!",
    author: "Anonymous"
  },
  {
    id: 15,
    text: "One hour of focused study is better than three hours of distraction.",
    author: "Anonymous"
  }
];

export const getRandomQuote = (): MotivationalQuote => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};