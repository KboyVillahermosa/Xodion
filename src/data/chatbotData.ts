export const companyData = {
    company: {
        name: 'LimeHills',
        description: 'Creating human-focused digital experiences that drive results for forward-thinking organizations.',
        founded: '2010',
        location: 'City Time Square 2, Mandaue',
        email: 'hello@limehills.com',
        phone: '+1 (234) 567-890'
    },
    services: [
        {
            name: 'Web Development',
            description: 'Custom web applications built with modern technologies and best practices.'
        },
        {
            name: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with users in mind.'
        },
        {
            name: 'WordPress Development',
            description: 'WordPress and Drupal expertise for flexible content management.'
        },
        {
            name: 'Accessibility',
            description: 'WCAG compliant solutions ensuring inclusive digital experiences.'
        },
        {
            name: 'Performance Optimization',
            description: 'Lightning-fast websites optimized for speed and efficiency.'
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
        { name: 'BigasanHub', type: 'Inventory Management System for rice distribution' },
        { name: 'Jams Branded Collection', type: 'Bundle Inventory System for jams' },
        { name: 'The George Institute', type: 'Global Health platform' },
        { name: 'The Centre for Sex and Gender Equity', type: 'Health and Medicine platform' },
        { name: 'HeatNexus', type: 'Climate research platform' },
        { name: 'Clinical Trials Hub', type: 'Health translation and research tool' }
    ],
    faqs: [
        {
            question: 'what services do you offer',
            answer: 'We offer Web Development, UI/UX Design, WordPress Development, Accessibility services, and Performance Optimization. Each service is tailored to create exceptional digital experiences.'
        },
        {
            question: 'how can i contact you',
            answer: 'You can reach us at hello@limehills.com or call us at +1 (234) 567-890. We\'re located at City Time Square 2, Mandaue.'
        },
        {
            question: 'who are your team members',
            answer: 'Our leadership team includes Sarah Johnson (CEO & Founder), Michael Chen (CTO), Emily Rodriguez (CMO), David Park (Head Developer), and Philip (Head of WordPress Development).'
        },
        {
            question: 'what projects have you worked on',
            answer: 'We\'ve worked on various projects including BigasanHub (rice inventory system), Jams Branded Collection (jams inventory), The George Institute (global health platform), and HeatNexus (climate research platform).'
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
            question: 'when was limehills founded',
            answer: 'LimeHills was founded in 2010. We have over a decade of experience in digital transformation and web development.'
        }
    ]
};

// Simple keyword matching function
export const findAnswer = (userQuestion: string): string => {
    const question = userQuestion.toLowerCase().trim();

    // Greetings
    if (question === 'hi' || question === 'hello' || question === 'hey' || question === 'greetings') {
        return "Hello! How can I help you today? I can answer questions about LimeHills' services, team, and projects.";
    }

    // Gratitude
    if (question.includes('thank') || question.includes('thanks')) {
        return "You're welcome! If you have any more questions about LimeHills, feel free to ask.";
    }

    // Check FAQs
    for (const faq of companyData.faqs) {
        if (question.includes(faq.question) || faq.question.includes(question)) {
            return faq.answer;
        }
    }

    // Check for 'About' queries
    if (question.includes('about') || question.includes('what is limehills')) {
        return `${companyData.company.name} is about ${companyData.company.description} We were founded in ${companyData.company.founded} and have been delivering excellence ever since.`;
    }

    // Check for CEO / Team Member specific queries
    if (question.includes('ceo') || question.includes('founder') || question.includes('manager') || question.includes('boss')) {
        return "Our CEO and Founder is Sarah Johnson. She leads our team with a vision for human-centered digital experiences.";
    }

    // Keyword-based responses
    if (question.includes('service') || question.includes('what do you do')) {
        return companyData.faqs[0].answer;
    }

    if (question.includes('contact') || question.includes('email') || question.includes('phone') || question.includes('address') || question.includes('location')) {
        return companyData.faqs[1].answer;
    }

    if (question.includes('team') || question.includes('who works') || question.includes('member') || question.includes('who are')) {
        return companyData.faqs[2].answer;
    }

    if (question.includes('project') || question.includes('portfolio') || question.includes('work')) {
        return companyData.faqs[3].answer;
    }

    if (question.includes('wordpress') || question.includes('drupal') || question.includes('cms')) {
        return companyData.faqs[4].answer;
    }

    if (question.includes('process') || question.includes('how do you work')) {
        return companyData.faqs[5].answer;
    }

    if (question.includes('founded') || question.includes('when') || question.includes('started')) {
        return companyData.faqs[6].answer;
    }

    // Default response for unrelated questions
    return "I'm sorry, but I can only answer questions related to LimeHills, our services, team, and projects. Please ask me about our company, services, team members, or how we can help you!";
};
