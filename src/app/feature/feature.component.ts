import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "ns-app-feature",
    templateUrl: "./feature.component.html"
})
export class FeatureComponent {

    constructor(private routereXTENSION: RouterExtensions, private route: ActivatedRoute) { }
    go() {
        this.routereXTENSION.navigate(['/teste2'], { relativeTo: this.route });
    }
}
