import { Component } from '@angular/core';

@Component({
  selector: 'app-aide',
  standalone: true,
  imports: [],
  templateUrl: './aide.component.html',
  styleUrl: './aide.component.css'
})
export class AideComponent {
  constructor() { }

  ngOnInit(): void {
    console.log("Message de la page Help");
  }
}
