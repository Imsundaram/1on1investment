export interface Property {
    id: number;
    title: string;
    price: string;
    location: string;
    type: string;
    beds?: number;
    baths?: number;
    area: string;
    image: string;
    category: string;
    featured?: boolean;
    description?: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    phone: string;
    email: string;
}

export interface Socials {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
    address?: string;
    googleMapUrl?: string;
    officeImage?: string;
    officeHours?: string;
    teamGroupPhoto?: string;
    teamDescription?: string;
    heroImage?: string;
    whyUsImage?: string;
}
