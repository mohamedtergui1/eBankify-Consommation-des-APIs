
export interface Transaction {
    id: string;          
    type: string;        
    amount: number;     
    date: Date;          
    description?: string;   
  }