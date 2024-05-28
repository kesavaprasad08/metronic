export interface User {
    avatar: string;
    fName: string;
    lName: string;
    company: string;
    contactPhone: string;
    companySite: string;
    country: string;
    language: string;
    timeZone: string;
    currency: string;
    allowMarketing: boolean;
    payment: string;
    utcString:string;
    communications: {
        email: boolean;
        phone: boolean;
      };
      lastUpdated:string;
      createdAt:string;
}

// export type UserContextType={
//     user:User | null;
//     setUser:(user:User)=> void;
// }