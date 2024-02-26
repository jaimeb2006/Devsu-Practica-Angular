import { ApiResponseItem } from 'src/app/shared/api-response-types';
interface IFinancialProduct {
  id: string;
  name: string;
  description: string;
  releaseDate: Date;
  revisionDate: Date;
  logoUrl: string;
}

export class FinancialProduct implements IFinancialProduct {
  id: string;
  name: string;
  description: string;
  releaseDate: Date;
  revisionDate: Date;
  logoUrl: string;

  constructor(
    id: string,
    name: string,
    description: string,
    releaseDate: Date,
    revisionDate: Date,
    logoUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.releaseDate = releaseDate;
    this.revisionDate = revisionDate;
    this.logoUrl = logoUrl;
  }

  static fromApiResponse(data: ApiResponseItem[]): FinancialProduct[] {
    return data.map((item) => {
      return new FinancialProduct(
        item.id,
        item.name,
        item.description,
        new Date(item.date_release),
        new Date(item.date_revision),
        item.logo
      );
    });
  }
}
