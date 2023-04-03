import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService
  ) {}

  id!: any;
  data: any;
  medecines!: any;
  error = false;

  ngOnInit(): void {
    this.id = this.route.params.subscribe((prescription) => {
      this.prescriptionService.getById(3).subscribe(
        (b) => {
          this.data = b;
          console.log(this.data)
        },
        (error) => {
          this.error = true;
        }
      );
    });
  }
}
