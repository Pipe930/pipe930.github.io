"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1369],{1369:(I,l,c)=>{c.r(l),c.d(l,{ProductsPageModule:()=>y});var s=c(6895),p=c(433),u=c(6159),g=c(529),n=c(5035),t=c(8256),d=c(5456);function h(i,r){1&i&&t._UZ(0,"ion-icon",12)}function m(i,r){1&i&&t._UZ(0,"ion-icon",13)}function Z(i,r){1&i&&t._UZ(0,"ion-searchbar",14)}const _=function(i){return["/products/product/",i]};function P(i,r){if(1&i&&(t.TgZ(0,"ion-card"),t._UZ(1,"img",15),t.TgZ(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"ion-card-subtitle"),t._uU(6),t.qZA()(),t.TgZ(7,"ion-card-content")(8,"ion-list",16)(9,"ion-item")(10,"ion-label")(11,"h2"),t._uU(12," Precio "),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA()()(),t.TgZ(15,"ion-item")(16,"ion-label")(17,"h2"),t._uU(18," Cantidad Disponible "),t.qZA(),t.TgZ(19,"p"),t._uU(20),t.qZA()()(),t.TgZ(21,"ion-item")(22,"ion-label")(23,"h2"),t._uU(24," Descuento "),t.qZA(),t.TgZ(25,"p"),t._uU(26),t.qZA()()(),t.TgZ(27,"ion-item")(28,"ion-label",17)(29,"h2"),t._uU(30," Descripcion "),t.qZA(),t.TgZ(31,"p"),t._uU(32),t.qZA()()(),t.TgZ(33,"ion-button",18),t._uU(34,"Ver"),t.qZA()()()()),2&i){const o=r.$implicit;t.xp6(1),t.Q6J("alt","Imagen "+o.title)("src",o.thumbnail,t.LSH),t.xp6(3),t.Oqu(o.title),t.xp6(2),t.hij("Categoria: ",o.category,""),t.xp6(8),t.hij(" $",o.price," "),t.xp6(6),t.hij(" ",o.stock," "),t.xp6(6),t.hij(" %",o.discountPercentage," "),t.xp6(6),t.hij(" ",o.description," "),t.xp6(1),t.Q6J("routerLink",t.VKq(9,_,o.id))}}let f=(()=>{class i{constructor(o){this.servicioProduct=o,this.activarSearhBar=!1}ngOnInit(){this.servicioProduct.obtenerPrimerosProductos(),this.servicioProduct.listaProductos$.subscribe(o=>{console.log(o),this.scroll&&this.scroll.complete()},o=>{console.log(o)})}cargarMasElementos(){this.servicioProduct.obtenerMasProductos()}get servicio(){return this.servicioProduct}desplegarSearchBar(){this.activarSearhBar=!this.activarSearhBar}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(d.M))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-products"]],viewQuery:function(o,e){if(1&o&&t.Gf(n.ju,5),2&o){let a;t.iGM(a=t.CRH())&&(e.scroll=a.first)}},decls:17,vars:6,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],["name","search-outline","size","medium",4,"ngIf"],["name","close-outline","size","large",4,"ngIf"],["animated","true","placeholder","Buscar...","color","tertiary",4,"ngIf"],[1,"ion-padding"],[1,"container-cards"],[4,"ngFor","ngForOf"],[3,"ionInfinite"],["loadingText","Cargando..."],["name","search-outline","size","medium"],["name","close-outline","size","large"],["animated","true","placeholder","Buscar...","color","tertiary"],[3,"alt","src"],["lines","none"],[1,"ion-text-wrap"],["color","primary","expand","block","fill","outline","shape","round",3,"routerLink"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Productos"),t.qZA(),t.TgZ(6,"ion-buttons",2)(7,"ion-button",3),t.NdJ("click",function(){return e.desplegarSearchBar()}),t.YNc(8,h,1,0,"ion-icon",4),t.YNc(9,m,1,0,"ion-icon",5),t.qZA()()(),t.YNc(10,Z,1,0,"ion-searchbar",6),t.qZA(),t.TgZ(11,"ion-content",7)(12,"div",8),t.YNc(13,P,35,11,"ion-card",9),t.ALo(14,"async"),t.qZA(),t.TgZ(15,"ion-infinite-scroll",10),t.NdJ("ionInfinite",function(){return e.cargarMasElementos()}),t._UZ(16,"ion-infinite-scroll-content",11),t.qZA()()),2&o&&(t.xp6(8),t.Q6J("ngIf",!e.activarSearhBar),t.xp6(1),t.Q6J("ngIf",e.activarSearhBar),t.xp6(1),t.Q6J("ngIf",e.activarSearhBar),t.xp6(3),t.Q6J("ngForOf",t.lcZ(14,4,e.servicio.listaProductos$)))},dependencies:[s.sg,s.O5,n.oU,n.YG,n.Sm,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.W2,n.Gu,n.gu,n.ju,n.MB,n.Ie,n.Q$,n.q_,n.VI,n.wd,n.sr,n.j9,n.cs,n.YI,u.rH,s.Ov],styles:["ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}.container-cards[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;margin:auto;justify-content:center}ion-card[_ngcontent-%COMP%]{width:480px;height:90%}"]}),i})();var T=c(655);function b(i,r){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"img",10),t.qZA()),2&i){const o=r.$implicit;t.xp6(1),t.Q6J("src",o,t.LSH)}}function A(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"ion-list"),t.YNc(1,b,2,1,"div",3),t.TgZ(2,"ion-list-header")(3,"ion-label")(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()()(),t.TgZ(8,"ion-item")(9,"ion-label")(10,"h2"),t._uU(11," Precio "),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA()()(),t.TgZ(14,"ion-item")(15,"ion-label")(16,"h2"),t._uU(17," Cantidad Disponible "),t.qZA(),t.TgZ(18,"p"),t._uU(19),t.qZA()()(),t.TgZ(20,"ion-item")(21,"ion-label")(22,"h2"),t._uU(23," Descuento "),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.qZA()()(),t.TgZ(26,"ion-item")(27,"ion-label")(28,"h2"),t._uU(29," Raiting "),t.qZA(),t.TgZ(30,"p"),t._uU(31),t.qZA()()(),t.TgZ(32,"ion-item")(33,"ion-label",4)(34,"h2"),t._uU(35," Descripcion "),t.qZA(),t.TgZ(36,"p"),t._uU(37),t.qZA()()(),t.TgZ(38,"ion-item")(39,"ion-grid",5)(40,"ion-label")(41,"h2"),t._uU(42," Cantidad "),t.qZA()(),t.TgZ(43,"ion-row")(44,"ion-col")(45,"ion-button",6),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.restarCantidad())}),t._uU(46,"-"),t.qZA()(),t.TgZ(47,"ion-col")(48,"ion-label")(49,"h1"),t._uU(50),t.qZA()()(),t.TgZ(51,"ion-col")(52,"ion-button",7),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.sumarCantidad())}),t._uU(53,"+"),t.qZA()()()()(),t.TgZ(54,"div",8)(55,"ion-button",9),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.btnAgregarCarrito())}),t._uU(56,"Agregar Carrito"),t.qZA()()()}if(2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.producto.images),t.xp6(4),t.hij(" ",o.producto.title," "),t.xp6(2),t.hij(" Categoria: ",o.producto.category," "),t.xp6(6),t.hij(" $",o.producto.price," "),t.xp6(6),t.hij(" ",o.producto.stock," "),t.xp6(6),t.hij(" %",o.producto.discountPercentage," "),t.xp6(6),t.hij(" ",o.producto.rating," "),t.xp6(6),t.hij(" ",o.producto.description," "),t.xp6(13),t.hij(" ",o.cantidad," ")}}const U=[{path:"",component:f},{path:"product/:id",component:(()=>{class i{constructor(o,e,a,S){this.router=o,this.servicioProducto=e,this.ruta=a,this.toast=S,this.idProducto="",this.cantidad=1,this.router.params.subscribe(M=>{this.idProducto=M.id})}ngOnInit(){this.servicioProducto.obtenerProducto(this.idProducto).subscribe(o=>{this.producto=o},o=>{console.log(o)})}messageSuccess(){return(0,T.mG)(this,void 0,void 0,function*(){yield(yield this.toast.create({message:"Se agrego al carrito con exito",duration:3e3,position:"bottom",buttons:["Aceptar"],animated:!0})).present()})}sumarCantidad(){this.cantidad<this.producto.stock&&(this.cantidad=this.cantidad+1)}restarCantidad(){this.cantidad>1&&(this.cantidad=this.cantidad-1)}btnAgregarCarrito(){this.usuario=JSON.parse(sessionStorage.getItem("user")),this.servicioProducto.agregarCarrito({userId:this.usuario.id,products:[{id:this.producto.id,quantity:this.cantidad}]}).subscribe(e=>{console.log(e),this.messageSuccess(),this.ruta.navigate(["products"])},e=>{console.log(e)})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(u.gz),t.Y36(d.M),t.Y36(u.F0),t.Y36(n.yF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-see-product"]],decls:8,vars:1,consts:[["color","primary"],["slot","start"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],[1,"container-carrito"],["color","danger",3,"click"],["color","success",3,"click"],[1,"ion-padding"],["color","warning","expand","block",1,"btn-agregar-carrito",3,"click"],["alt","",1,"contianer-image",3,"src"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Producto"),t.qZA()()(),t.TgZ(6,"ion-content"),t.YNc(7,A,57,9,"ion-list",2),t.qZA()),2&o&&(t.xp6(7),t.Q6J("ngIf",e.producto))},dependencies:[s.sg,s.O5,n.oU,n.YG,n.Sm,n.wI,n.W2,n.jY,n.Gu,n.Ie,n.Q$,n.q_,n.yh,n.Nd,n.wd,n.sr,n.cs],styles:[".contianer-image[_ngcontent-%COMP%]{display:block;width:90%;margin:18px;border-radius:15px;border:2px solid #0F0F0F}.container-carrito[_ngcontent-%COMP%]{width:90%;text-align:center}"]}),i})(),canActivate:[c(4528).o]}];let C=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(U),u.Bz]}),i})();var q=c(3742);let y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[d.M,{provide:g.TP,useClass:q.N,multi:!0}],imports:[s.ez,p.u5,n.Pc,C,u.Bz,g.JF]}),i})()}}]);