export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Novak Veckov",
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer from Serbia specializing in modern web technologies, React, Node.js, and web development.",
    url: "https://veckov-portfolio.vercel.app",
    // image: "https://veckov-portfolio.vercel.app/profile-image.jpg", //profile image URL
    address: {
      "@type": "PostalAddress",
      addressLocality: "Serbia",
      addressCountry: "RS"
    },
    sameAs: [
      "https://github.com/VeckovN", 
      "https://www.linkedin.com/in/novak-veckov-4299aa1a1"
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Faculty of Electronic Engineering, Niš Serbia" 
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}