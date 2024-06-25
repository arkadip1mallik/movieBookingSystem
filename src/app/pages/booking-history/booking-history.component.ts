import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from "@angular/material/table"
import { MatChip, MatChipSet } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl,FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  orderId: number;
  ticket: string;
  place: string;
  price: number;
  date: Date;
  time:string;
  seat:string;
  screen:string;
   downloadUrl: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {orderId: 1, name: 'arka', place: 'Ssr Cinema Hall', ticket: '#7894', price: 300, date: new Date('2024-06-12') , time:'4:00',seat:'A8,A9',screen:'Screen1',downloadUrl: ''},
  {orderId: 2, name: 'arka', place: 'Ssr Cinema Hall',ticket: '#7895', price: 450,date: new Date('2024-06-30'),time:'7:00',seat:'E5,E6',screen:'Screen1', downloadUrl: ''},


];
@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIcon, MatChipSet, MatChip, CommonModule, RouterLink, FormsModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss'
})
export class BookingHistoryComponent {
  displayedColumns: string[] = ['Order Id', 'name', 'place', 'ticket', 'price', 'date', 'time','seat','screen', 'download'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filterValue: string = '';
  completedItems: PeriodicElement[] = [];
  upComing : PeriodicElement[] = [];
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  ngOnInit():void  {
    this.showCompleted();
    this.showUpcoming();
  }

  
  downloadItem(element: PeriodicElement){
    console.log('Download clicked for:', element);
    const url = element.downloadUrl;
    window.open(url, '_blank');
      }
      showCompleted():void {
        console.log(this.dataSource);
        const today = new Date();
       this.completedItems = ELEMENT_DATA.filter(item => item.date < today);
        console.log("completed items", this.completedItems);
      
      }
      showUpcoming(): void {
        const today = new Date();
        this.upComing = ELEMENT_DATA.filter(item => item.date > today);
       console.log("upcoming 2 items line 83", this.upComing);
      }

      toggleItems(showCompleted: boolean, showUpcoming: boolean):void {
        if(showCompleted){
          this.dataSource.data = this.completedItems;

        } else if(showUpcoming){
          this.dataSource.data = this.upComing;
        } else {
          this.dataSource.data = ELEMENT_DATA;
        }
      }

}
