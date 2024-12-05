import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  // Corrected styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  title = 'ILEYCOM';
  inputValue: string = '';  // Two-way binding with input field
  loading: boolean = false; // Track loading state
  product: any;
  responseMessage: string = ''; // Store the response message

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Initialization logic (if any)
  }

  // This method will be called when the button is clicked
  processProduct() {
    this.loading = true; // Show spinner
    this.responseMessage = ''; // Reset message

    console.log('Input Value:', this.inputValue);  // Log the value

    // Call the service and pass the input value
    this.productService.getProductById(this.inputValue).subscribe(
      (response) => {
        this.loading = false; // Hide spinner on success
        this.product = response; // Store product data
        this.responseMessage = 'Success! Product updated successfully.'; // Update success message
        console.log('Service response:', response); // Log the response
      },
      (error) => {
        this.loading = false; // Hide spinner on error
        this.responseMessage = 'Error: Unable to fetch product.'; // Update error message
        console.error('Error:', error); // Log the error
      }
    );
  }
}

