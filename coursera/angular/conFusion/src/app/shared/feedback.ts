export class Feedback {
    firstname: string;
    lastname: string;
    telenum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export const ContactType: string[] = ['None', 'Tel', 'Email']