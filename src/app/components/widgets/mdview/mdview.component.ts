import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mdview',
  templateUrl: './mdview.component.html',
  styleUrls: ['./mdview.component.css']
})
export class MdviewComponent {

    @Input() markdownContent!: string
    @Input() title!: String

    constructor(

    ){}
}
