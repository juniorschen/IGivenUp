// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Teste3Component } from "./teste3.component";

export const routes: Routes = [
    {
        path: "",
        component: Teste3Component
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class Teste3RoutingModule { }