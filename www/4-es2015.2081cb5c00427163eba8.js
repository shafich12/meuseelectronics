(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jD90:function(n,i,e){"use strict";e.r(i),e.d(i,"ListPageModule",(function(){return p}));var t=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),s=e("fXoL"),c=e("S3Px");const m=function(n){return["/mosaic",n]};function b(n,i){if(1&n&&(s.Lb(0),s.Nb(1,"ion-item",8),s.Nb(2,"ion-thumbnail",9),s.Jb(3,"img",10),s.Mb(),s.Nb(4,"ion-label"),s.Nb(5,"h2"),s.nc(6),s.Mb(),s.Mb(),s.Mb(),s.Kb()),2&n){const n=i.$implicit;s.xb(1),s.cc("routerLink",s.fc(3,m,n.id)),s.xb(2),s.cc("src",n.image.src,s.kc),s.xb(3),s.oc(n.name)}}const d=[{path:"",component:(()=>{class n{constructor(n){this.productService=n,this.categories=[],this.products=[{name:"Air Pro",image:"/assets/img/air.png",price:85},{name:"Air Retro",image:"/assets/img/retro.png",price:125},{name:"Green",image:"/assets/img/adidas2.png",price:96},{name:"Dark Mode",image:"/assets/img/air2.png",price:110},{name:"White Shine",image:"/assets/img/air3.png",price:145},{name:"Fuel Fusion",image:"/assets/img/air4.png",price:69}]}ngOnInit(){}ionViewWillEnter(){this.productService.getCategories().then(n=>{this.categories=JSON.parse(n.data)})}}return n.\u0275fac=function(i){return new(i||n)(s.Ib(c.a))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-list"]],decls:9,vars:2,consts:[["mode","md",1,"ion-no-border","ion-padding"],["mode","md"],["slot","end"],[1,"ion-padding",3,"fullscreen"],["lines","none",1,"ion-margin-bottom"],[1,"ion-no-padding","ion-no-margin"],["fill","clear","slot","end","color","dark","mode","ios"],[4,"ngFor","ngForOf"],["lines","none","detail","false",1,"product","ion-margin-bottom",3,"routerLink"],["slot","start"],[3,"src"]],template:function(n,i){1&n&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar",1),s.Jb(2,"ion-buttons",2),s.Mb(),s.Mb(),s.Nb(3,"ion-content",3),s.Nb(4,"ion-item",4),s.Nb(5,"h1",5),s.nc(6,"All Categories"),s.Mb(),s.Jb(7,"ion-button",6),s.Mb(),s.mc(8,b,7,5,"ng-container",7),s.Mb()),2&n&&(s.xb(3),s.cc("fullscreen",!0),s.xb(5),s.cc("ngForOf",i.categories))},directives:[r.p,r.M,r.h,r.m,r.t,r.g,t.i,r.R,a.h,r.L,r.x],styles:["ion-header[_ngcontent-%COMP%]{background:#fff}.product[_ngcontent-%COMP%]{box-shadow:none}.product[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:25px;min-width:130px;min-height:90px;padding:5px}.numberCircle[_ngcontent-%COMP%]{border-radius:50%;width:30px;height:30px;padding:7px;background:#000;color:#fff!important;text-align:center;font-weight:700!important;font-size:12px;margin-left:12px;font-family:Montserrat,sans-serif!important}"]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(i){return new(i||n)},imports:[[a.i.forChild(d)],a.i]}),n})(),p=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(i){return new(i||n)},imports:[[t.b,o.d,r.N,g]]}),n})()}}]);