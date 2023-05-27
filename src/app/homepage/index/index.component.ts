import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  amicoImage = '../../../assets/images/amico.svg';


  image1= '../../../assets/images/Rectangle 31.svg'


  times=  [{
    icon:'../../../assets/images/file-invoice-solid.svg',
    title: 'Unlimited Access to courses',
  }, 
  {
    icon: "../../../assets/images/person-chalkboard-solid.svg",
    title: 'Taught by top instructors.',
  },
  {
    icon:'../../../assets/images/graduation-cap-solid.svg',
    title: 'Learning at your pace',
  }
]


products =[
  {
  img: this.image1
},
{
  img: this.image1
},
{
  img: this.image1
},
{
  img: this.image1
},
{
  img: this.image1
},
{
  img: this.image1
}]


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
