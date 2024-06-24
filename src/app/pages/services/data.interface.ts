export interface Datas {
    placeId: string;
    name: string;
    description: string;
    location: string;
    district: string;
    category: string;
    ticket_fee: number;
    show_hours: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    },
    seat:string[];

}

export interface seat {
}