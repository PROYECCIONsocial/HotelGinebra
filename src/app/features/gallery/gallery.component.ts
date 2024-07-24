import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: '../../../assets/images/imagen1.png', alt: 'Imagen 1' },
    { src: '../../../assets/images/imagen2.png', alt: 'Imagen 2' },
    { src: '../../../assets/images/imagen3.png', alt: 'Imagen 3' },
    { src: '../../../assets/images/servicios.png', alt: 'Imagen 4' },
    { src: '../../../assets/images/habitacion.jpeg', alt: 'Imagen 5' },
    { src: '../../../assets/images/eventos.png', alt: 'Imagen 6' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
