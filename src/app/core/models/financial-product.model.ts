import { ApiResponseItem } from 'src/app/shared/api-response-types';

// Interfaces para segregación y abstracción
interface IFinancialProduct {
  id: string;
  name: string;
  description: string;
  releaseDate: Date;
  restructuringDate: Date;
  logoUrl: string;
}

// Implementación concreta de la interfaz
export class FinancialProduct implements IFinancialProduct {
  id: string;
  name: string;
  description: string;
  releaseDate: Date;
  restructuringDate: Date;
  logoUrl: string;

  constructor(
    id: string,
    name: string,
    description: string,
    releaseDate: Date,
    restructuringDate: Date,
    logoUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.releaseDate = releaseDate;
    this.restructuringDate = restructuringDate;
    this.logoUrl = logoUrl;
  }

  static fromApiResponse(data: ApiResponseItem[]): FinancialProduct[] {
    return data.map(
      (item) =>
        new FinancialProduct(
          item.id,
          item.name,
          item.description,
          new Date(item.releaseDate),
          new Date(item.restructuringDate),
          item.logoUrl
        )
    );
  }
}
