export const companyData = {
    company: {
        name: 'Xodion',
        description: 'Creating human-focused digital experiences that drive results for forward-thinking organizations.',
        founded: '2010',
        location: 'City Time Square 2, Mandaue',
        email: 'xodiontech@gmail.com',
        phone: '+1 (234) 567-890'
    },
    services: [
        {
            name: 'Web Development',
            description: 'Custom web applications built with modern technologies and best practices.'
        },
        {
            name: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android.'
        },
        {
            name: 'AI Integration',
            description: 'Intelligent solutions integrating cutting-edge AI technologies into your business.'
        },
        {
            name: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with users in mind.'
        }
    ],
    team: [
        { name: 'Sarah Johnson', role: 'CEO & Founder' },
        { name: 'Michael Chen', role: 'Chief Technology Officer' },
        { name: 'Emily Rodriguez', role: 'Chief Marketing Officer' },
        { name: 'David Park', role: 'Head Developer' },
        { name: 'Philip', role: 'Head of WordPress Development' }
    ],
    projects: [
        { name: 'Mamasusan BBQ', type: 'Inventory Management System' },
        { name: 'Shared Marketing MLM System', type: 'Networking Platform' }
    ],
    faqs: [
        {
            question: 'what services do you offer',
            answer: 'We specialize in Web Development, Mobile App Development, AI Integration, and UI/UX Design. Each service is tailored to deliver impactful results.'
        },
        {
            question: 'how can i contact you',
            answer: "You can reach us at xodiontech@gmail.com or call us at +63 967 176 633. We're located at City Time Square 2, Mandaue.",
        },
        {
            question: 'who are your team members',
            answer: 'Our leadership team includes Sarah Johnson (CEO & Founder), Michael Chen (CTO), Emily Rodriguez (CMO), David Park (Head Developer), and Philip (Head of WordPress Development).'
        },
        {
            question: 'what projects have you worked on',
            answer: 'We\'ve worked on projects like Mamasusan BBQ (an inventory management system) and the Shared Marketing MLM System (a comprehensive networking platform).'
        },
        {
            question: 'do you work with wordpress',
            answer: 'Yes! We specialize in WordPress and Drupal development. Our Head of WordPress Development, Philip, leads our WordPress projects with expertise in creating robust and scalable solutions.'
        },
        {
            question: 'what is your process',
            answer: 'Our process includes 4 key phases: 1) Strategy - Digital foundation and planning, 2) UX/UI Design - Beautiful and functional design, 3) Web Development - Technical excellence with WordPress/Drupal, 4) Ongoing Support - Continuous care and optimization.'
        },
        {
            question: 'when was xodion founded',
            answer: 'Xodion was founded in 2010. We have over a decade of experience in digital transformation and web development.',
        }
    ]
};

// Improved keyword matching function
export const findAnswer = (userQuestion: string): string => {
    const question = userQuestion.toLowerCase().trim();

    // Greetings
    if (question === 'hi' || question === 'hello' || question === 'hey' || question === 'greetings') {
        return `Hello! I'm the ${companyData.company.name} AI assistant. I can answer questions specifically about our services, team, and projects (like Mamasusan BBQ and Shared Marketing MLM). How can I help you today?`;
    }

    // Gratitude
    if (question.includes('thank') || question.includes('thanks')) {
        return "You're welcome! I'm here to provide official information about our company.";
    }

    // Project specific queries
    if (question.includes('project') || question.includes('portfolio') || question.includes('work')) {
        const projectNames = companyData.projects.map(p => `${p.name} (${p.type})`).join(', ');
        return `Our current projects include: ${projectNames}. You can find more details about these on our Projects page.`;
    }

    if (question.includes('mamasusan') || question.includes('bbq')) {
        const p = companyData.projects.find(proj => proj.name.includes('Mamasusan'));
        return `${p?.name} is an ${p?.type} we developed to streamline stock tracking and business analytics.`;
    }

    if (question.includes('mlm') || question.includes('shared marketing') || question.includes('networking')) {
        const p = companyData.projects.find(proj => proj.name.includes('Shared Marketing'));
        return `The ${p?.name} is a ${p?.type} that features member hierarchy management and commission tracking.`;
    }

    // Service specific queries
    if (question.includes('service') || question.includes('what do you do') || question.includes('offer')) {
        const services = companyData.services.map(s => s.name).join(', ');
        return `We offer several specialized services: ${services}. Each is designed to deliver high-impact digital solutions.`;
    }

    // Team specific queries
    if (question.includes('team') || question.includes('who works') || question.includes('member')) {
        const teamNames = companyData.team.map(t => `${t.name} (${t.role})`).join(', ');
        return `Our leadership team consists of: ${teamNames}.`;
    }

    // Location / Contact
    if (question.includes('contact') || question.includes('email') || question.includes('phone') || question.includes('address') || question.includes('location') || question.includes('where')) {
        return `${companyData.company.name} is located at ${companyData.company.location}. You can contact us via email at ${companyData.company.email} or by phone at +63 967 176 633.`;
    }

    // Company About
    if (question.includes('about') || question.includes('what is') || question.includes('who are you')) {
        return `${companyData.company.name} was founded in ${companyData.company.founded}. ${companyData.company.description}`;
    }

    // Process
    if (question.includes('process') || question.includes('how do you work')) {
        return "Our process involves 4 phases: Strategy, UX/UI Design, Web Development, and Ongoing Support/Optimization.";
    }

    // Check specific FAQs as fallback
    for (const faq of companyData.faqs) {
        if (question.includes(faq.question) || faq.question.includes(question)) {
            return faq.answer;
        }
    }

    // Default response for unrelated questions (Enforcing data-only answers)
    return "I'm sorry, I only have information regarding Xodion's official services, team, and current projects (Mamasusan BBQ and Shared Marketing MLM). Please ask a question related to these topics.";
};
