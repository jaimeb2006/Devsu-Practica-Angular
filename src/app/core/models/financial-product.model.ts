export interface FinancialProduct {
  id: string;
  name: string;
  description: string;
  releaseDate: Date;
  restructuringDate?: Date;
  logoUrl: string;
}
