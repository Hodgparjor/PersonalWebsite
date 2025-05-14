
export default function Contact() {
  const contactInfo = [
    {
      type: 'Phone',
      value: '+48 123 456 789', // Replace with your actual phone number
      href: 'tel:+48123456789',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: 'Email',
      value: 'olekbrzost@gmail.com',
      href: 'mailto:olekbrzost@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      type: 'GitHub',
      value: 'Hodgparjor',
      href: 'https://github.com/Hodgparjor',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      type: 'LinkedIn',
      value: 'Aleksander Brzostowski',
      href: 'https://www.linkedin.com/in/aleksander-brzostowski-533b5523a',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-heading text-4xl text-text-light dark:text-text-dark mb-12 text-center">
          Let's Connect
        </h1>
        <div className="grid gap-6">
          {contactInfo.map((info) => (
            <a
              key={info.type}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 dark:bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-all flex items-center space-x-4 text-text-light dark:text-text-dark hover:text-accent"
            >
              <div className="text-accent">
                {info.icon}
              </div>
              <div>
                <h2 className="font-heading text-xl mb-1">{info.type}</h2>
                <p className="text-text-light/80 dark:text-text-dark/80">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
