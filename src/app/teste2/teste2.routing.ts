// app/feature/feature.routing
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Teste2Component } from "./teste2.component";

export const routes: Routes = [
    {
        path: "",
        component: Teste2Component
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class Teste2RoutingModule { }