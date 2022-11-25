"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{8802:(b,l,s)=>{s.r(l),s.d(l,{LoginPageModule:()=>J});var m=s(6895),t=s(433),g=s(6159),p=s(529),i=s(5035),d=s(655),o=s(8256),f=s(280);function h(e,r){1&e&&(o.TgZ(0,"ion-note",14),o._uU(1,"Este campo es requerido"),o.qZA())}function L(e,r){1&e&&(o.TgZ(0,"ion-note",14),o._uU(1,"Tiene que tener minimo 5 caracteres"),o.qZA())}function _(e,r){1&e&&(o.TgZ(0,"ion-note",14),o._uU(1,"Tiene que tener maximo 15 caracteres"),o.qZA())}function v(e,r){if(1&e&&(o.TgZ(0,"div",12),o.YNc(1,h,2,0,"ion-note",13),o.YNc(2,L,2,0,"ion-note",13),o.YNc(3,_,2,0,"ion-note",13),o.qZA()),2&e){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.usuario.errors.required),o.xp6(1),o.Q6J("ngIf",n.usuario.errors.minlength),o.xp6(1),o.Q6J("ngIf",n.usuario.errors.maxlength)}}function x(e,r){1&e&&(o.TgZ(0,"ion-note",14),o._uU(1,"Este campo es requerido"),o.qZA())}function Z(e,r){1&e&&(o.TgZ(0,"ion-note",14),o._uU(1,"Tiene que tener minimo 8 caracteres"),o.qZA())}function T(e,r){1&e&&(o.TgZ(0,"ion-note",14),o._uU(1,"Tiene que tener maximo 16 caracteres"),o.qZA())}function A(e,r){if(1&e&&(o.TgZ(0,"div",12),o.YNc(1,x,2,0,"ion-note",13),o.YNc(2,Z,2,0,"ion-note",13),o.YNc(3,T,2,0,"ion-note",13),o.qZA()),2&e){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.contrasenia.errors.required),o.xp6(1),o.Q6J("ngIf",n.contrasenia.errors.minlength),o.xp6(1),o.Q6J("ngIf",n.contrasenia.errors.maxlength)}}function P(e,r){1&e&&(o.TgZ(0,"ion-note",15),o._uU(1,"Los datos no son correctos"),o.qZA())}const I=function(){return["/register"]},q=[{path:"",component:(()=>{class e{constructor(n,a,u,c,U){this.builder=n,this.ruta=a,this.servicioUser=u,this.alerta=c,this.toast=U,this.messageAlert=!1}ngOnInit(){this.construirFormulario()}construirFormulario(){this.formularioLogin=this.builder.group({usuario:new t.NI("",[t.kI.required,t.kI.minLength(5),t.kI.maxLength(15)]),contrasenia:new t.NI("",[t.kI.required,t.kI.minLength(8),t.kI.maxLength(16)])})}alertaExito(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.toast.create({message:"Sesion iniciada con exito",duration:3e3,position:"bottom",buttons:["Aceptar"],animated:!0})).present()})}alertaErrorSesion(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alerta.create({header:"Error",message:"Los datos no son correctos",buttons:["Aceptar"]})).present()})}iniciarSesion(){const n=this.formularioLogin.value,a={username:n.usuario,password:n.contrasenia};this.formularioLogin.invalid?this.formularioLogin.markAllAsTouched():this.servicioUser.login(a).subscribe(u=>{sessionStorage.setItem("token",u.token),sessionStorage.setItem("user",JSON.stringify(u)),this.messageAlert&&(this.messageAlert=!1),this.alertaExito(),this.formularioLogin.reset(),this.ruta.navigate(["home"])},u=>{console.log(u),this.messageAlert=!0})}get usuario(){return this.formularioLogin.get("usuario")}get contrasenia(){return this.formularioLogin.get("contrasenia")}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(t.qu),o.Y36(g.F0),o.Y36(f.b),o.Y36(i.Br),o.Y36(i.yF))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:31,vars:7,consts:[["color","tertiary"],[1,"ion-text-center"],["novalidate","",3,"formGroup","ngSubmit"],["lines","full"],["position","floating"],["type","text","formControlName","usuario"],["class","container-messages-errors",4,"ngIf"],["type","password","formControlName","contrasenia"],["class","message-alert","color","danger",4,"ngIf"],["expand","block","shape","round","fill","outline","type","submit",3,"disabled"],["name","enter-outline","slot","start"],["color","success",3,"routerLink"],[1,"container-messages-errors"],["color","danger",4,"ngIf"],["color","danger"],["color","danger",1,"message-alert"]],template:function(n,a){1&n&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),o._uU(3,"Jummy Marcket"),o.qZA()()(),o.TgZ(4,"ion-content")(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title",1),o._uU(8," Iniciar Sesion "),o.qZA()(),o.TgZ(9,"ion-card-content")(10,"form",2),o.NdJ("ngSubmit",function(){return a.iniciarSesion()}),o.TgZ(11,"ion-list",3)(12,"ion-item")(13,"ion-label",4),o._uU(14,"Usuario"),o.qZA(),o._UZ(15,"ion-input",5),o.YNc(16,v,4,3,"div",6),o.qZA(),o.TgZ(17,"ion-item")(18,"ion-label",4),o._uU(19,"Contrase\xf1a"),o.qZA(),o._UZ(20,"ion-input",7),o.YNc(21,A,4,3,"div",6),o.qZA()(),o.YNc(22,P,2,0,"ion-note",8),o.TgZ(23,"ion-button",9),o._UZ(24,"ion-icon",10),o._uU(25," Login "),o.qZA()()()()(),o.TgZ(26,"ion-footer")(27,"ion-toolbar",0)(28,"ion-buttons")(29,"ion-button",11),o._uU(30," Registrarse "),o.qZA()()()()),2&n&&(o.xp6(10),o.Q6J("formGroup",a.formularioLogin),o.xp6(6),o.Q6J("ngIf",a.usuario.invalid&&(a.usuario.dirty||a.usuario.touched)),o.xp6(5),o.Q6J("ngIf",a.contrasenia.invalid&&(a.contrasenia.dirty||a.contrasenia.touched)),o.xp6(1),o.Q6J("ngIf",a.messageAlert),o.xp6(1),o.Q6J("disabled",a.formularioLogin.invalid),o.xp6(6),o.Q6J("routerLink",o.DdM(6,I)))},dependencies:[m.O5,t._Y,t.JJ,t.JL,i.YG,i.Sm,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.fr,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.q_,i.uN,i.wd,i.sr,i.j9,i.YI,g.rH,t.sg,t.u],styles:["ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}ion-card[_ngcontent-%COMP%]{max-width:500px;width:90%;margin:40px auto;border-radius:10px}ion-card-title[_ngcontent-%COMP%]{font-size:30px;font-weight:900;padding:10px 0 0}.message-alert[_ngcontent-%COMP%]{margin-left:15px;font-size:15px}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[g.Bz.forChild(q),g.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[f.b],imports:[m.ez,t.u5,i.Pc,y,g.Bz,p.JF,t.UX]}),e})()}}]);