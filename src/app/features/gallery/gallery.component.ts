import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: '../../../assets/images/habitaciondoble.jpg', alt: 'Habitación doble' },
    { src: '../../../assets/images/habitaciontriple1.jpg', alt: 'Habitación triple' },
    { src: '../../../assets/images/habitaciontriple2.jpg', alt: 'Habitación triple' },
    { src: '../../../assets/images/habitaciontriple3.jpg', alt: 'Habitación triple' },
    { src: '../../../assets/images/pasillo1.jpg', alt: 'Pasillo' },
    { src: '../../../assets/images/pasillo2.jpg', alt: 'Muebles pasillo' },
    { src: '../../../assets/images/pasillo3.jpg', alt: 'Gym pasillo' },
    { src: '../../../assets/images/habitacionmatrimonial.jpg', alt: 'Habitacion matrimonial' },
    { src: '../../../assets/images/servicios.jpg', alt: 'Mini Gym' },
    { src: '../../../assets/images/habitacion1.jpg', alt: 'Habitación' },
    { src: '../../../assets/images/habitacion2.jpg', alt: 'Habitación' },
    { src: '../../../assets/images/habitaciondoble2.jpg', alt: 'Habitación doble' },
    { src: '../../../assets/images/Instalaciones1.jpg', alt: 'Pasillos' },
    { src: '../../../assets/images/Instalaciones2.jpg', alt: 'Pasillos' },
    { src: '../../../assets/images/pasillo1.jpg', alt: 'Pasillos' },
  ];

  constructor() { }

  ngOnInit(): void { }
}
