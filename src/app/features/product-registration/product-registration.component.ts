import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FinancialProduct } from 'src/app/core/models/financial-product.model';
import { FinancialProductsService } from 'src/app/core/services/financial-products.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css'],
})
export class ProductRegistrationComponent implements OnInit {
  productForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private financialProductsService: FinancialProductsService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  // Inicializa el formulario con validaciones y lógica de negocio.
  private initializeForm(): void {
    const today = new Date().toISOString().substring(0, 10); // Fecha de hoy en formato YYYY-MM-DD
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1); // Fecha de un año después

    this.productForm = this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
        [this.validateIdNotTaken()],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      logo: ['', [Validators.required]],
      release_date: [today, [Validators.required, this.validateReleaseDate]],
      revision_date: [
        { value: nextYear.toISOString().substring(0, 10), disabled: true },
        Validators.required,
      ],
    });

    // Actualiza automáticamente la fecha de revisión cuando cambia la fecha de lanzamiento
    this.productForm.get('release_date')?.valueChanges.subscribe((value) => {
      this.updateRevisionDate(value);
    });
  }

  // Valida que la fecha de lanzamiento no sea anterior a hoy.
  validateReleaseDate(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value).toISOString().split('T')[0];
    if (selectedDate >= new Date().toISOString().split('T')[0]) {
      return null; // Fecha válida
    }
    return { releaseDateInvalid: true }; // Fecha inválida
  }

  // Valida que el ID del producto no esté ya tomado.

  validateIdNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ idTaken: true } | null> => {
      if (!control.value) {
        return of(null); // Si no hay valor, no se verifica el ID
      }
      return this.financialProductsService.checkIfIdExists(control.value).pipe(
        catchError((e) => {
          return of(null); // Manejo de errores, asumiendo no tomado si hay error
        }),
        map((isTaken) => {
          return isTaken ? { idTaken: true } : null;
        })
      );
    };
  }

  // Actualiza la fecha de revisión basada en la fecha de lanzamiento seleccionada.
  private updateRevisionDate(value: string): void {
    const releaseDate = new Date(value);
    releaseDate.setFullYear(releaseDate.getFullYear() + 1); // Añade un año
    this.productForm
      .get('revision_date')
      ?.setValue(releaseDate.toISOString().substring(0, 10));
  }

  // Crea un nuevo producto y maneja la respuesta.
  createProduct(): void {
    if (this.productForm.valid) {
      this.isLoading = true;
      const productData = this.productForm.getRawValue(); // Usa getRawValue para incluir campos deshabilitados
      const newProduct = new FinancialProduct(
        productData.id,
        productData.name,
        productData.description,
        new Date(productData.release_date),
        new Date(productData.revision_date),
        productData.logo
      );

      this.financialProductsService.addFinancialProduct(newProduct).subscribe({
        next: () => console.log('Product created successfully'),
        error: (error) => console.error('Error creating product:', error),
        complete: () => {
          this.isLoading = false;
          this.resetForm();
        },
      });
    } else {
      console.error('Form is not valid');
    }
  }

  // Restablece el formulario a su estado inicial
  resetForm(): void {
    this.productForm.reset();
    this.initializeForm(); // Re-inicializa el formulario para restablecer valores predeterminados y lógica
  }
}
