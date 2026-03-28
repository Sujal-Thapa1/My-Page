export const POSTS = [
  {
    id: 1,
    category: "Cloud Computing",
    categoryColor: "#7698DC",
    title: "My Journey into AWS & Cloud Infrastructure",
    excerpt:
      "From confusion after school to deploying my first EC2 instance — how I discovered cloud computing and started building real-world skills as a student.",
    date: "October 3, 2025",
    readTime: "6 min read",
    featured: true,
    content: [
      {
        type: "intro",
        text: "After completing my higher secondary education from Sumi School, Kalimpong, with a science background, I found myself in a situation many students face — confusion. I wasn't sure whether to choose the medical field or explore something else. Today, I am actively learning and working with AWS cloud infrastructure, and that journey has been both unexpected and exciting.",
      },
      {
        type: "h2",
        text: "Choosing the Right Path",
      },
      {
        type: "p",
        text: "Initially, I considered going into the medical field. However, I quickly realized it required memorizing complex and lengthy terminologies, which didn't align with my interests. That led me to explore the IT field instead, where I discovered multiple domains like web development, software engineering, and cloud computing.",
      },
      {
        type: "p",
        text: "At first, I chose web development because it seemed like the most straightforward option. But as I researched industry trends, I found that cloud computing was one of the most in-demand and rapidly growing fields. What made it even more appealing was that it didn't strictly require deep coding knowledge to get started. That curiosity pushed me to explore cloud computing further.",
      },
      {
        type: "h2",
        text: "Starting with the Basics",
      },
      {
        type: "p",
        text: "When I joined college, the curriculum began with web development and basic programming. Surprisingly, I started enjoying programming more than I expected. I began learning coding concepts, working with Linux systems, and understanding how applications function behind the scenes.",
      },
      {
        type: "p",
        text: "This foundation helped me gain confidence and prepared me to dive deeper into cloud technologies.",
      },
      {
        type: "h2",
        text: "My First Steps into AWS",
      },
      {
        type: "p",
        text: "I created an AWS Free Tier account and started exploring its services. Like every beginner, I was overwhelmed by the number of tools available. I decided to focus on one service at a time, starting with EC2.",
      },
      {
        type: "p",
        text: "Launching my first EC2 instance and deploying a simple web application was a turning point. It helped me understand how servers work in the cloud and gave me the confidence to continue learning.",
      },
      {
        type: "image",
        src: "/images/blog/blog-1/dark.jpg",
        alt: "Cloud infrastructure visualization from space",
        caption: "AWS cloud — a global network of data centres powering the modern internet.",
      },
      {
        type: "h2",
        text: "Exploring Core AWS Services",
      },
      {
        type: "p",
        text: "After EC2, I gradually explored other essential AWS services. I learned how to manage databases using RDS, store files using S3, and control access using IAM. I also explored VPC to understand networking and implemented basic security practices to protect resources.",
      },
      {
        type: "p",
        text: "Each service taught me something new about how modern cloud infrastructure is built and managed.",
      },
      {
        type: "image",
        src: "/images/blog/blog-1/about.jpeg",
        alt: "Server racks in a data centre",
        caption: "Physical servers in a data centre — the hardware behind AWS's virtual machines.",
      },
      {
        type: "h2",
        text: "Where I Am Now",
      },
      {
        type: "p",
        text: "Currently, I am continuing to explore more AWS services and improving my understanding of cloud architecture. I am also combining my knowledge of programming and cloud to build real-world projects.",
      },
      {
        type: "p",
        text: "Looking back, what started as confusion after school has now turned into a clear direction. Cloud computing is not just a career choice for me anymore — it's something I genuinely enjoy learning and building in.",
      },
      {
        type: "h2",
        text: "Final Thoughts",
      },
      {
        type: "quote",
        text: "The cloud is not just someone else's computer — it's a new way of thinking about infrastructure, scalability, and resilience.",
        author: "Sujal Thapa",
      },
      {
        type: "p",
        text: "It's okay to be unsure in the beginning. Exploring different fields, making mistakes, and learning along the way is part of the journey. Sometimes, the path you don't initially plan for turns out to be the right one.",
      },
    ],
  },
  {
    id: 2,
    category: "AI & Developer Tools",
    categoryColor: "#a855f7",
    title: "How AI Tools Transformed My Coding Workflow",
    excerpt:
      "From writing every line manually to using AI in terminals, editors, and cloud — how I evolved my workflow for speed, understanding, and productivity.",
    date: "Jan 2, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: "intro",
        text: "When I first started coding, I used to write everything myself — every line, every function, every logic. I made sure I understood what I was doing, but it took a lot of time. Over time, my workflow evolved as I discovered AI tools, and today, they play a major role in how I build, learn, and experiment.",
      },
      {
        type: "h2",
        text: "From Manual Coding to Smart Assistance",
      },
      {
        type: "p",
        text: "In the beginning, I avoided shortcuts and focused on understanding code deeply. Later, I started using ChatGPT to better understand concepts and sometimes generate code. Like many developers, I also used the classic Ctrl+C and Ctrl+V approach — but with a difference: I only used code that I fully understood and could modify.",
      },
      {
        type: "p",
        text: "This shift wasn't about avoiding learning — it was about managing time better. Instead of writing everything from scratch, I started focusing more on logic, structure, and problem-solving.",
      },
      {
        type: "image",
        src: "/images/blog/blog-2/flow.png",
        alt: "AI neural network visualization",
        caption: "AI tools are becoming a natural extension of a developer's toolkit.",
      },
      {
        type: "h2",
        text: "Falling in Love with the Terminal",
      },
      {
        type: "p",
        text: "While learning Linux, I discovered how powerful the terminal can be. I enjoyed performing tasks through the command line rather than using graphical interfaces. This curiosity led me to explore AI-powered terminal tools.",
      },
      {
        type: "p",
        text: "One of the first tools I tried was Warp AI, which can generate commands directly inside the terminal. This was a game-changer — instead of searching and copying commands, I could generate and execute them in the same place.",
      },
      {
        type: "h2",
        text: "Expanding My AI Toolkit",
      },
      {
        type: "p",
        text: "After that, I started experimenting with multiple AI tools like Gemini CLI, Claude, and Blackbox. Each tool had its own strengths, and using them helped me understand different ways AI can assist in development.",
      },
      {
        type: "p",
        text: "At this point, I started thinking beyond coding — can AI also help manage cloud infrastructure?",
      },
      {
        type: "h2",
        text: "Using AI with Cloud & AWS",
      },
      {
        type: "p",
        text: "This curiosity led me to tools like AWS CLI, where I could control cloud resources directly from the terminal. I also explored Amazon Q Developer and similar tools to interact with AWS services more efficiently.",
      },
      {
        type: "image",
        src: "/images/blog/blog-2/n8n.png",
        alt: "Developer typing code in dark terminal",
        caption: "The terminal — home for a developer who loves efficiency and speed.",
      },
      {
        type: "p",
        text: "I'm still in the learning phase, so I won't say I know everything. But I'm comfortable with the basics and commonly used commands, and I continue to improve with practice.",
      },
      {
        type: "h2",
        text: "AI in My Daily Workflow",
      },
      {
        type: "p",
        text: "Today, I regularly use GitHub Copilot inside VS Code to speed up coding. I also experimented with tools like Claude Code, but due to pricing, I explored alternatives like Antigravity by Google, which turned out to be quite useful.",
      },
      {
        type: "p",
        text: "With tools like MCP, Stitch, and integrations inside Antigravity, my workflow has become faster and more efficient. I spend less time switching between tools and more time actually building.",
      },
      {
        type: "h2",
        text: "Final Thoughts",
      },
      {
        type: "quote",
        text: "AI didn't replace my learning — it enhanced it. The key is not just using AI, but understanding what it generates.",
        author: "Sujal Thapa",
      },
      {
        type: "p",
        text: "Today, I focus on speed, efficiency, and continuous learning, while making sure I never lose my fundamentals. Recently, I came across n8n, and I'm exploring how to build AI-powered automations — opening up yet another perspective on what's possible.",
      },
    ],
  },
  {
    id: 3,
    category: "Career",
    categoryColor: "#f59e0b",
    title: "Student to Intern: My First Tech Experience",
    excerpt:
      "From leading a college Flutter project to landing my first internship — how I overcame nervousness, improved my skills, and kept learning every day.",
    date: "March 10, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: "intro",
        text: "During my 4th semester, I got an opportunity to start my internship at Emeyc Pvt. Ltd in Gangtok. It was my first real experience working in a professional environment, and I was both excited and nervous at the same time.",
      },
      {
        type: "h2",
        text: "How I Got the Opportunity",
      },
      {
        type: "p",
        text: "I was selected for the role of Application Developer, which honestly wasn’t even in my original plan to learn. However, things changed because of a college project — the MSU Shuttle Service app built using Flutter.",
      },
      {
        type: "p",
        text: "In that project, I was assigned the role of Team Leader. That responsibility pushed me to learn Flutter from scratch. Thanks to that experience, I gained practical knowledge, which later helped me secure this internship opportunity.",
      },
      {
        type: "h2",
        text: "First Days: Excitement and Nervousness",
      },
      {
        type: "p",
        text: "At the beginning, I was very nervous. It was my first time working in an office environment, with real responsibilities and expectations. But as days passed, the nervousness slowly disappeared, and I started feeling more comfortable working with the team.",
      },
      {
        type: "p",
        text: "Adapting to the work culture, understanding tasks, and collaborating with others became easier with time.",
      },
      {
        type: "h2",
        text: "Learning Beyond the Internship",
      },
      {
        type: "p",
        text: "One thing I made sure of was that this internship wouldn’t stop my learning. Alongside my office work, I continued exploring new tools and technologies. Every day became an opportunity to learn something new.",
      },
      {
        type: "p",
        text: "Working in the office also helped me improve my communication and other soft skills. Interacting with team members, discussing problems, and sharing ideas played a huge role in my growth.",
      },
      {
        type: "image",
        src: "/images/blog/blog-3/offer.jpeg",
        alt: "First internship experience",
        caption: "From student projects to real-world work — the journey begins here.",
      },
      {
        type: "h2",
        text: "Growth and Mindset",
      },
      {
        type: "p",
        text: "This experience made me realize that growth doesn’t come from comfort. Stepping into something unfamiliar — like Flutter or a professional workspace — helped me improve both technically and personally.",
      },
      {
        type: "p",
        text: "I am still learning, still making mistakes, but I can clearly see that I am becoming a better version of myself compared to before.",
      },
      {
        type: "h2",
        text: "Final Thoughts",
      },
      {
        type: "p",
        text: "Your first opportunity might not match your original plan, but it can open doors you never expected. Keep learning, stay curious, and don’t let fear stop you from trying something new.",
      },
      {
        type: "quote",
        text: "Growth starts when you step into the unknown and keep moving forward.",
        author: "Sujal Thapa",
      },
    ],
  }
];
