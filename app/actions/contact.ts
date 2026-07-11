'use server';



export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'All fields are required.' };
    }

    // Since Supabase has been removed, mock a successful submission
    // Here you would typically integrate with a mail service (e.g. Resend, SendGrid)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', { name, email, message });

    return { success: true };
}
