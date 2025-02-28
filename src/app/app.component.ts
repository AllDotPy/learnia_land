import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learnia✨';

  constructor(){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.loadScripts()
        // this.startScrollAnimation()
    }

  loadScripts(){
    const script = document.createElement('script');
    script.src = 'assets/js/main.js'
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
        // reveal('')
        window.addEventListener("load", ()=>{
            // SCROLL ANIMATION
            // this.startScrollAnimation()
        });
    }
    document.body.appendChild(script);
}
}
