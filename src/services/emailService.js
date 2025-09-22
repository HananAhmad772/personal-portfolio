// Email Service for Contact Form
// This is a simple client-side email service that can be integrated with various email providers

export const sendEmail = async (formData) => {
  try {
    // For development purposes, we'll simulate sending an email
    // In production, you would integrate with services like:
    // - EmailJS (https://www.emailjs.com/)
    // - Formspree (https://formspree.io/)
    // - Netlify Forms (if deployed on Netlify)
    // - Your own backend API
    
    console.log('Email would be sent with data:', formData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For now, we'll just log the data and return success
    // In a real implementation, you would send this to your email service
    
    // Example integration with EmailJS:
    /*
    const emailjs = window.emailjs;
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your.email@example.com'
      },
      'YOUR_PUBLIC_KEY'
    );
    return { success: true, result };
    */
    
    // Example integration with Formspree:
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return { success: true };
    */
    
    return { success: true };
    
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

// Instructions for setting up real email service:
export const emailSetupInstructions = {
  emailjs: {
    title: "EmailJS Setup",
    steps: [
      "1. Go to https://www.emailjs.com/ and create an account",
      "2. Create a new service (Gmail, Outlook, etc.)",
      "3. Create an email template",
      "4. Get your Service ID, Template ID, and Public Key",
      "5. Install EmailJS: npm install @emailjs/browser",
      "6. Replace the commented code in emailService.js with your credentials"
    ]
  },
  formspree: {
    title: "Formspree Setup",
    steps: [
      "1. Go to https://formspree.io/ and create an account",
      "2. Create a new form and get the form ID",
      "3. Replace 'YOUR_FORM_ID' in the Formspree example code",
      "4. The form will send emails to your registered email address"
    ]
  },
  netlify: {
    title: "Netlify Forms Setup",
    steps: [
      "1. Deploy your site to Netlify",
      "2. Add 'netlify' attribute to your form: <form netlify>",
      "3. Add hidden input: <input type='hidden' name='form-name' value='contact' />",
      "4. Netlify will automatically handle form submissions"
    ]
  }
};
