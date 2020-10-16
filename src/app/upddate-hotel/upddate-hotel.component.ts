import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-upddate-hotel',
  templateUrl: './upddate-hotel.component.html',
  styleUrls: ['./upddate-hotel.component.css']
})
export class UpddateHotelComponent implements OnInit {

  id: number;
  hotel: Hotel;
 submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private hotelService: HotelService) { }

  ngOnInit() {
    this.hotel = new Hotel();

    this.id = this.route.snapshot.params['id'];
    
    this.hotelService.getHotel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hotel = data;
      }, error => console.log(error));
  }

  upddateHotel() {
    this.hotelService.updateHotel(this.id, this.hotel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hotel = new Hotel();
    this.gotoList();
  }

  onSubmit() {
this.submitted = true;

    this.upddateHotel();    
  }

  gotoList() {
    this.router.navigate(['/hotels']);
  }
}

