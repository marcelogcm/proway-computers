"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[706],{3706:(q,s,l)=>{l.r(s),l.d(s,{ContatoModule:()=>x});var i=l(6814),c=l(33),a=l(95),o=l(9468),f=l(7523);function d(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa no minimo de 4 caracteres. "),o.qZA())}function u(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo \xe9 de preenchimento obrigat\xf3rio. "),o.qZA())}function p(n,e){if(1&n&&(o.TgZ(0,"div"),o.YNc(1,d,2,0,"small",11),o.YNc(2,u,2,0,"small",11),o.qZA()),2&n){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",r.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",r.formContato.controls.nome.hasError("required"))}}function C(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa no minimo de 10 caracteres. "),o.qZA())}function g(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo \xe9 de preenchimento obrigat\xf3rio. "),o.qZA())}function _(n,e){if(1&n&&(o.TgZ(0,"div"),o.YNc(1,C,2,0,"small",11),o.YNc(2,g,2,0,"small",11),o.qZA()),2&n){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",r.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",r.formContato.controls.assunto.hasError("required"))}}function v(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa no minimo de 11 caracteres. "),o.qZA())}function h(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo \xe9 de preenchimento obrigat\xf3rio. "),o.qZA())}function Z(n,e){if(1&n&&(o.TgZ(0,"div"),o.YNc(1,v,2,0,"small",11),o.YNc(2,h,2,0,"small",11),o.qZA()),2&n){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",r.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",r.formContato.controls.telefone.hasError("required"))}}function T(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de um email v\xe1lido. "),o.qZA())}function y(n,e){1&n&&(o.TgZ(0,"small",12),o._uU(1," Esse campo \xe9 de preenchimento obrigat\xf3rio. "),o.qZA())}function b(n,e){if(1&n&&(o.TgZ(0,"div"),o.YNc(1,T,2,0,"small",11),o.YNc(2,y,2,0,"small",11),o.qZA()),2&n){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",r.formContato.controls.email.hasError("email")),o.xp6(1),o.Q6J("ngIf",r.formContato.controls.email.hasError("required"))}}const E=[{path:"",component:(()=>{var n;class e{constructor(m){this.fb=m,this.formContato=this.fb.group({nome:["",[a.kI.minLength(4),a.kI.required]],assunto:["",[a.kI.minLength(10),a.kI.required]],telefone:["",[a.kI.minLength(11),a.kI.required]],email:["",[a.kI.email,a.kI.required]],mensagem:["",[a.kI.minLength(20),a.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada com Sucesso!!!"),this.formContato.reset()}}return(n=e).\u0275fac=function(m){return new(m||n)(o.Y36(a.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contato"]],decls:23,vars:26,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","mask","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite seu email","formControlName","email"],["maxlength","300","placeholder","Digite sua mensagem","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031366!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1693844301870!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(m,t){1&m&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return t.enviarFormulario()}),o._UZ(4,"input",3),o.YNc(5,p,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,_,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,Z,3,2,"div",4),o._UZ(10,"input",7),o.YNc(11,b,3,2,"div",4),o.TgZ(12,"textarea",8),o._uU(13,"        <div\n            *ngIf=\"formContato.controls['mensagem'].invalid "),o._uU(14,"&"),o._uU(15,"&"),o._uU(16,"\n            (formContato.controls['mensagem'].touched || formContato.controls['mensagem'].dirty)\"\n        \n        >\n            <small class=\"error-message\" *ngIf=\"formContato.controls['mensagem'].hasError('minlength')\">\n                Esse campo precisa no minimo de 20 caracteres.\n            </small>\n            <small class=\"error-message\" *ngIf=\"formContato.controls['mensagem'].hasError('required')\">\n                Esse campo \xe9 de preenchimento obrigat\xf3rio.\n            </small> \n\n        </div>\n\n        >"),o.qZA(),o.TgZ(17,"button",9),o._uU(18,"Enviar"),o.qZA()(),o.TgZ(19,"address"),o._UZ(20,"iframe",10),o.TgZ(21,"p"),o._uU(22,"R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),o.qZA()()()),2&m&&(o.xp6(3),o.Q6J("formGroup",t.formContato),o.xp6(1),o.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.nome.dirty)),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),o.xp6(5),o.Q6J("disabled",t.formContato.invalid))},dependencies:[i.O5,a._Y,a.Fj,a.JJ,a.JL,a.nD,a.sg,a.u,f.Z6],styles:[".contact__title[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),e})()}];let I=(()=>{var n;class e{}return(n=e).\u0275fac=function(m){return new(m||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.Bz.forChild(E),c.Bz]}),e})(),x=(()=>{var n;class e{}return(n=e).\u0275fac=function(m){return new(m||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[i.ez,I,a.UX]}),e})()}}]);