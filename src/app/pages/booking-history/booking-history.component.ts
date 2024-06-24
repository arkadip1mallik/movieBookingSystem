import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from "@angular/material/table"
export interface PeriodicElement {
  name: string;
  orderId: number;
  ticket: string;
  place: string;
  price: number;
  date: string;
  downloadUrl: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {orderId: 1, name: 'Arka', place: '', ticket: '#7894', price: 78, date: '12/07/24', downloadUrl: ''},
  
 

];
@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIcon],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss'
})
export class BookingHistoryComponent {
  displayedColumns: string[] = ['Order Id', 'name', 'place', 'ticket', 'price', 'date', 'download'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  
  downloadItem(element: PeriodicElement){
    console.log('Download clicked for:', element);
    const url = element.downloadUrl;
    window.open(url, '_blank');
      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
