// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { TesteComponent } from "./teste.component";

export const routes: Routes = [
    {
        path: "",
        component: TesteComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class TesteRoutingModule { }