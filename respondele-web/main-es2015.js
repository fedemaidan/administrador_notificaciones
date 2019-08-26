(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n    \n    <notifier-container></notifier-container>\n    <!-- Page Content -->\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    <!-- /.container -->\n\n    <!-- jQuery -->\n    <script src=\"js/jquery.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"js/bootstrap.min.js\"></script>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/spinner/spinner.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/spinner/spinner.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div id=\"loader\">\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"loading\"></div>\n        </div>\n        <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\n            {{message}}\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuracion/configuracion.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuracion/configuracion.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navegador></app-navegador>\n<app-spinner *ngIf=\"this.user.loading\" message=\"Inicializando datos...\"></app-spinner>\n<div class=\"general\" *ngIf=\"!this.user.loading\">\n  <div class=\"container\">\n\n    <!-- <div class=\"row\">\n      \n    </div> -->\n\n    <div class=\"row text-center\" *ngIf=\"this.user.cantidadDeCuentas() == 0\">\n      <div class=\"col-md-12 col-sm-12\">\n        <h3 class=\"title-help\">Vincular tu cuenta de Mercado Libre</h3>\n      </div>\n      <div class=\"col-md-12 col-sm-12\">\n        <a class=\"shortcut\" (click)=\"agregarCuenta()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n          <h2>Agregar Cuenta</h2>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"row text-center\" *ngIf=\"this.user.cantidadDeCuentas() > 0\">\n      <div class=\"col-md-12 col-sm-12\">\n        <h3 class=\"title-help\">Vincular tu cuenta de Mercado Libre</h3>\n      </div>\n      <div class=\"col-md-2 col-sm-3 col-xs-6\" *ngFor=\"let cuenta of this.user.cuentas\">\n        <a class=\"shortcut\" (click)=\"verUsuario(cuenta.id_ml)\" [attr.title]=\"cuenta.nickname\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n          <h4>{{ cuenta.nickname }}</h4>\n        </a>\n        <a class=\"extra-shortcut\" (click)=\"removerCuenta(cuenta)\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n          <span class=\"glyphicon glyphicon-remove inside\"></span>\n        </a>\n      </div>\n      <div class=\"col-md-2 col-sm-3 col-xs-6\">\n        <a class=\"shortcut\" (click)=\"agregarCuenta()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n          <h4>Agregar Cuenta</h4>\n        </a>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/conversacion/conversacion.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/conversacion/conversacion.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navegador></app-navegador>\n<div class=\"list-group\" *ngIf=\"this.meli.pregunta\">\n\n    <div class=\"container\">\n\n      <!-- New Layout -->\n      <div class=\"row text-center\">\n        <div class=\"col-md-5 col-left\">\n          <app-publicacion></app-publicacion>\n        </div>\n\n        <div class=\"col-md-7\">\n\n          <div class=\"row\">\n            <form class=\"form-inline\">\n              <fieldset disabled>\n                <div class=\"form-group\">\n                  <input name=\"username\" class=\"form-control\" placeholder=\"Username\" type=\"text\" value=\"{{ this.usuarioPregunta }}\" />\n                </div>\n                <div class=\"form-group\">\n                  <input name=\"reputacion\" class=\"form-control\" placeholder=\"Reputación\" type=\"text\" />\n                </div>\n              </fieldset>\n            </form>\n          </div>\n          <hr />\n          <div class=\"row\">\n            <div class=\"ps\" style=\"position: relative; max-width: 600px; max-height: 400px;\" >\n\n            <perfect-scrollbar class=\"content-chat\">\n              <div  *ngFor=\"let pregunta of this.meli.pregunta.preguntas_previas\">\n              <span>\n                <div [ngClass]=\"{\n                  'message': true,\n                  'mano': pregunta.answer == null,\n                  'selected': this.meli.pregunta.question_id == pregunta.id\n                }\" (click)=\"seleccionarPregunta(pregunta.id, pregunta.answer == null )\">\n                  <div><p>{{ pregunta.text }}</p></div>\n                </div>\n                <div class=\"message me\" *ngIf=\"pregunta.answer\">\n                  <div><p>{{ pregunta.answer.text }}</p></div>\n                </div>\n              </span>\n            </div>\n            </perfect-scrollbar>\n            <form class=\"form-inline responder\" [@preguntaState]=\"this.meli.pregunta? 'active' : 'inactive'\">\n              <div class=\"form-group\">\n                <textarea type=\"text\" name=\"responder\" class=\"form-control\" placeholder=\"Respondele .. \"  [(ngModel)]=\"respuesta\" (keyup.control.enter)=\"responder()\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\" (click)=\"responder()\">\n                <span class=\"glyphicon glyphicon-send\"></span>\n              </button>\n              <div class=\"btn-group\" role=\"group\">\n                <button type=\"button\" [ngClass]=\"this.enviarPrefijo ? 'btn buttonSelected':'btn btn-default'\" (click)=\"this.enviarPrefijo = !this.enviarPrefijo\" [(title)]=\"this.prefijo\">Prefijo</button>\n                <button type=\"button\" [ngClass]=\"this.enviarSufijo ? 'btn buttonSelected':'btn btn-default'\" (click)=\"this.enviarSufijo = !this.enviarSufijo\" [(title)]=\"this.sufijo\">Sufijo</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- END New Layout -->\n\n      <!-- Old Layout -->\n      <!--div class=\"row\">\n    \t\t<div class=\"col-md-2\">\n    \t\t\t\t<img  [src]=\"this.meli.pregunta.item.thumbnail\" class=\"img-circle\" horizontalAlignment=\"center\"/>\n    \t\t\t</div>\n    \t\t\t<div class=\"col-md-6\" (click)=\"setPregunta(this.meli.pregunta)\">\n    \t\t\t\t<h3 class=\"\">{{ this.meli.pregunta.item.title }}</h3>\n    \t\t\t</div>\n\n    \t\t\t<div class=\"col-md-4\" style=\"text-align: center;\">\n    \t\t\t\t<span class=\"usuario\">{{ this.meli.pregunta.seller_name }}</span>\n\n    \t\t\t\t<div class=\"btn-group acciones\" role=\"group\" aria-label=\"...\" style=\"text-align: center;\">\n    \t\t\t\t  <a type=\"button\" class=\"btn btn-default\" title=\"Volver\" routerLink=\"/preguntas\">\n    \t\t\t\t  \t<span class=\"glyphicon glyphicon-menu-left\"></span>\n    \t\t\t\t  </a>\n    \t\t\t\t  <button type=\"button\" class=\"btn btn-default\" title=\"Ver publicación\" (click)=\"verPublicacion(this.meli.pregunta.item)\">\n    \t\t\t\t  \t<span class=\"glyphicon glyphicon-modal-window\"></span>\n    \t\t\t\t  </button>\n    \t\t\t\t  <button type=\"button\" class=\"btn btn-default\" title=\"Ver usuario del cliente\" (click)=\"verUsuario(this.meli.pregunta.from)\">\n    \t\t\t\t  \t<span class=\"glyphicon glyphicon-user\"></span>\n    \t\t\t\t  </button>\n    \t\t\t\t</div>\n\n    \t\t\t</div>\n\n    \t\t<div *ngFor=\"let pregunta of this.meli.pregunta.preguntas_previas\" class=\"pregunta col-md-12\">\n    \t\t\t<div  [ngClass]=\"(pregunta.answer == null)?'envoltura col-md-8 mano':'envoltura col-md-8'\" (click)=\"seleccionarPregunta(pregunta.id, pregunta.answer == null )\">\n    \t\t\t\t<div class=\"col-md-2\">\n    \t\t\t\t\t<span class=\"glyphicon glyphicon-comment icono\" style=\"color: #60CE65\"></span>\n    \t\t\t\t\t<span class=\"time-right\">{{dameFechaArgentina(pregunta.date_created)  | date:'dd/MM/yyyy HH:mm:ss' }} </span>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-10\">\n    \t\t\t\t\t<p class=\"texto\">{{ pregunta.text }}</p>\n    \t\t\t\t</div>\n    \t\t\t</div>\n\n    \t\t\t<div class=\"col-md-8 col-md-offset-4 envoltura\" *ngIf=\"pregunta.answer\" >\n    \t\t\t\t<div class=\"col-md-9\">\n    \t\t\t\t\t<p class=\"texto\">{{ pregunta.answer.text }} </p>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-2\">\n    \t\t\t\t\t{{dameFechaArgentina(pregunta.answer.date_created)  | date:'dd/MM/yyyy HH:mm:ss' }}\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-1\">\n    \t\t\t\t\t<span class=\"glyphicon glyphicon-comment icono\" style=\"color: #337AB7\"></span>\n    \t\t\t\t</div>\n    \t\t\t</div>\n\n    \t\t\t<div class=\"col-md-8 col-md-offset-4 envoltura\"  [@preguntaState]=\"this.meli.pregunta.question_id == pregunta.id ? 'active' : 'inactive'\">\n    \t\t\t\t<textarea rows=\"8\" class=\"form-control \" [(ngModel)]=\"respuesta\" (keyup.control.enter)=\"responder()\"></textarea>\n    \t\t\t\t<button class=\"btn btn-primary botonResponder col-md-12\" (click)=\"responder()\">Responder</button>\n    \t\t\t</div>\n\n    \t\t</div>\n      </div-->\n      <!-- END Old Layout -->\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid vertically-centered\">\n  <div class=\"row\">\n\t </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6 col-sm-12 col-xs-12 text-right\">\n      <div class=\"logo-container\">\n        <img src=\"./assets/res-pon-dele.png\" >\n      </div>\n    </div>\n\n    <div class=\"col-md-6 col-sm-12 col-xs-12 \">\n      <div class=\"form\">\n\n          <div class=\"inner-addon right-addon\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n            <input type=\"text\" class=\"form-control\" \n            [(ngModel)]=\"account.name\" \n            placeholder=\"Username\"/>\n          </div>\n\n          <div class=\"inner-addon right-addon\">\n            <i class=\"glyphicon glyphicon-lock\"></i>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"account.password\" placeholder=\"Password\"/>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12 text-right\">\n              <label class=\"re-checkbox\">Remember me\n                <input type=\"checkbox\" checked=\"checked\">\n                <span class=\"re-checkmark\"></span>\n              </label>\n            </div>\n          </div>\n\n          <!--<re-captcha site_key=\"6Lf2rBwUAAAAAAo3n58ifSSWOq1uYFrqne2JEm2m\"></re-captcha>\n          --><button (click)=\"submit()\">login</button>\n\n          <div class=\"row\">\n            <div class=\"help-links\">\n              <div class=\"col-md-6 col-xs-12\">\n                <a routerLink=\"/registracion\">Crea una cuenta</a>\n              </div>\n              <div class=\"col-md-6 col-xs-12\">\n                <a routerLink=\"/recuperar_contrasena\">Recuperar contraseña</a>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navegador/navegador.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navegador/navegador.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n\n        <ul class=\"nav navbar-nav navbar-left\">\n          <li>\n            <button type=\"button\" class=\"navbar-toggle collapsed boton_colapsador\" (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button> <!-- #1 -->\n               <img class=\"logo\" src=\"assets/res-pon-dele.png\" alt=\"\">\n              <!-- <p class=\"titulo\">MultiML</p> -->\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"collapse navbar-collapse boton_colapsador\"  [ngClass]=\"{ 'in': isIn }\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"icon_btn\">\n                <div class=\"inner-addon right-addon\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                </div>\n              </li>\n               <li class=\"icon_btn\">\n                  <a routerLink=\"/configuracion\" title=\"Configurar cuentas\"><span class=\"glyphicon glyphicon-user nav_icon\"></span>\n                   </a>\n              </li>\n              <li class=\"icon_btn\">\n                  <a routerLink=\"/preguntas\" title=\"Ver preguntas\"><span class=\"glyphicon glyphicon-comment nav_icon\"></span> <span class=\"badge\">{{ this.meli.cantidadPreguntas}}</span>\n                   </a>\n              </li>\n              <li class=\"icon_btn\">\n                  <a routerLink=\"/preguntas\" (click)=\"sincronizarTodo()\" title=\"Sincronizar todo nuevamente\"><span class=\"glyphicon glyphicon-refresh nav_icon\" ></span></a>\n              </li>\n              <li class=\"icon_btn\">\n                  <a routerLink=\"/faq\" title=\"FAQ\"><span class=\"glyphicon glyphicon-question-sign nav_icon\"></span></a>\n              </li>\n              <li class=\"icon_btn\">\n                  <a title=\"Logout\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out nav_icon\"></span></a>\n              </li>\n          </ul>\n      </div> <!-- #2 -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preguntas/preguntas.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preguntas/preguntas.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navegador></app-navegador>\n<app-spinner *ngIf=\"this.meli.loading\" message=\"Buscando consultas...\"></app-spinner>\n<div class=\"list-group\" *ngIf=\"!this.meli.loading\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n    </div>\n\n  \t\t<div class=\"container\">\n\n        <div id=\"wrapper\" [ngClass]=\"{'toggled':showMenu}\">\n\n          <!-- Sidebar -->\n          <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n              <li *ngFor=\"let cuenta of this.user.cuentas\">\n                <a class=\"shortcut\">\n                  <span class=\"glyphicon glyphicon-user\"></span>\n                  <span class=\"username\"> {{ cuenta.nickname }}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <!-- /#sidebar-wrapper -->\n\n          <!-- Page Content -->\n          <div id=\"page-content-wrapper\">\n\n            <a class=\"btn btn-default\" id=\"menu-toggle\" (click)=\"toggleMenu()\"><span class=\"glyphicon glyphicon-chevron-left\" [ngClass]=\"{'rotate':showMenu}\"></span></a>\n\n            <!-- no questions -->\n            <div class=\"row\" *ngIf=\"this.meli.cantidadPreguntas == 0\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n                <img src=\"./assets/sin-preguntas.png\" >\n              </div>\n            </div>\n\n            <!-- questions list -->\n            <div class=\"media\" *ngFor=\"let pregunta of this.meli.preguntas\">\n\n              <div class=\"media-left\">\n                <a href=\"#\">\n                  <img class=\"media-object\" [src]=\"pregunta.item.thumbnail\" data-holder-rendered=\"true\">\n                </a>\n              </div>\n\n              <div class=\"media-body\">\n                <h4 class=\"media-heading mano\" (click)=\"verPublicacion(pregunta.item)\">{{ pregunta.item.title }}</h4>\n                <p class=\"media-heading fecha\">{{ dameFechaArgentina(pregunta.date_created)  | date:'dd/MM/yyyy HH:mm:ss' }}</p>\n                <p class=\"question-text mano\" (click)=\"verConversacion(pregunta)\">{{ pregunta.text }}</p>\n                <div class=\"btn-group acciones\">\n                  <button type=\"button\" class=\"btn btn-default\" title=\"Ver usuario del cliente\" (click)=\"verUsuario(pregunta.from)\">\n                    <span class=\"glyphicon glyphicon-user\"> {{ pregunta.from.nickname }}</span>\n                  </button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <!-- /#page-content-wrapper -->\n\n        </div>\n        <!-- /#wrapper -->\n      </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/publicacion/publicacion.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/publicacion/publicacion.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs mb-3\" id=\"pills-tab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link \" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-publis\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Publicación</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-detalle\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Detalle</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-preguntas\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">Otras preguntas</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-compras\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">Comprador</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"pills-tabContent\">\n  <div class=\"tab-pane fade in active\" id=\"pills-publis\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n    <h3 class=\"\">{{ this.meli.pregunta.item.title }}</h3>\n          <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"item active\" >\n                <img class=\"img-thumbnail .img-responsive\" [src]=\"this.meli.pregunta.item.pictures[0].url\"/>\n            </div>\n            <div class=\"item\" *ngFor=\"let picture of this.meli.pregunta.item.pictures; let idx = index\">\n                <img class=\"img-thumbnail .img-responsive\" [src]=\"picture.url\"/>\n            </div>\n          </div>\n\n          <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            <span class=\"sr-only\">Previo</span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            <span class=\"sr-only\">Siguiente</span>\n          </a>\n        </div>\n  </div>\n  <div class=\"tab-pane fade\" id=\"pills-detalle\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n    <ul>\n            <li class=\"dropdown-header\" *ngFor=\"let attr of this.meli.pregunta.item.attributes\">{{ attr.name }}: {{ attr.value_name}}</li>\n          </ul></div>\n  <div class=\"tab-pane fade\" id=\"pills-preguntas\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">preguntas</div>\n  <div class=\"tab-pane fade\" id=\"pills-compras\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">compras</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recuperar-contrasena/recuperar-contrasena.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recuperar-contrasena/recuperar-contrasena.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>recuperar-contrasena works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registracion/registracion.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registracion/registracion.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid vertically-centered\">\n\n  <div class=\"row\">\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6 text-right\">\n      <div class=\"logo-container\">\n        <img src=\"./assets/res-pon-dele.png\" >\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"form\">\n\n        <div class=\"inner-addon right-addon\">\n          <i class=\"glyphicon glyphicon-user\"></i>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"account.name\" placeholder=\"Username\"/>\n        </div>\n\n        <div class=\"inner-addon right-addon\">\n          <i class=\"glyphicon glyphicon-envelope\"></i>\n          <input type=\"text\" [(ngModel)]=\"account.mail\"  placeholder=\"Email\"/>\n        </div>\n\n        <div class=\"inner-addon right-addon\">\n          <i class=\"glyphicon glyphicon-lock\"></i>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"account.password\" placeholder=\"Password\"/>\n        </div>\n\n        <div class=\"inner-addon right-addon\">\n          <i class=\"glyphicon glyphicon-phone\"></i>\n          <input type=\"text\" placeholder=\"Phone number\"/>\n        </div>\n\n        <div class=\"row font-12\">\n          <div class=\"col-md-7 col-xs-12 text-left\">\n            <label class=\"re-checkbox\">Accept Terms of Use\n              <input type=\"checkbox\">\n              <span class=\"re-checkmark\"></span>\n            </label>\n          </div>\n          <div class=\"col-md-5 col-xs-12 text-left\">\n            <label class=\"re-checkbox\">Remember me\n              <input type=\"checkbox\" checked=\"checked\">\n              <span class=\"re-checkmark\"></span>\n            </label>\n          </div>\n        </div>\n\n        <re-captcha site_key=\"6Lf2rBwUAAAAAAo3n58ifSSWOq1uYFrqne2JEm2m\"></re-captcha>\n\n        <button (click)=\"registrar()\">Crear usuario</button>\n\n        <div class=\"help-links\">\n          <p class=\"message\">¿Ya tienes usuario?<a routerLink=\"/\"> Entrar</a></p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    get(url, endpoint, params, options) {
        let p = "";
        // Support easy query params for GET requests
        if (params) {
            p = "?";
            for (let k in params) {
                p += "&" + k + "=" + params[k];
            }
        }
        return this.http.get(url + '/' + endpoint + p, options);
    }
    post(url, endpoint, body, options) {
        return this.http.post(url + '/' + endpoint, body, options);
    }
    put(url, endpoint, body) {
        return this.http.put(url + '/' + endpoint, body);
    }
    delete(url, endpoint, value, headers) {
        return this.http.delete(`${url}/${endpoint}/${value}`);
    }
    patch(url, endpoint, body) {
        return this.http.put(url + '/' + endpoint, body);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registracion_registracion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registracion/registracion.component */ "./src/app/registracion/registracion.component.ts");
/* harmony import */ var _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preguntas/preguntas.component */ "./src/app/preguntas/preguntas.component.ts");
/* harmony import */ var _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion/configuracion.component */ "./src/app/configuracion/configuracion.component.ts");
/* harmony import */ var _conversacion_conversacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversacion/conversacion.component */ "./src/app/conversacion/conversacion.component.ts");








const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registracion', component: _registracion_registracion_component__WEBPACK_IMPORTED_MODULE_4__["RegistracionComponent"] },
    { path: 'preguntas', component: _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_5__["PreguntasComponent"] },
    { path: 'configuracion', component: _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionComponent"] },
    { path: 'conversacion', component: _conversacion_conversacion_component__WEBPACK_IMPORTED_MODULE_7__["ConversacionComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'respondele-web';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mercadolibre.service */ "./src/app/mercadolibre.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _registracion_registracion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registracion/registracion.component */ "./src/app/registracion/registracion.component.ts");
/* harmony import */ var _recuperar_contrasena_recuperar_contrasena_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recuperar-contrasena/recuperar-contrasena.component */ "./src/app/recuperar-contrasena/recuperar-contrasena.component.ts");
/* harmony import */ var _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./preguntas/preguntas.component */ "./src/app/preguntas/preguntas.component.ts");
/* harmony import */ var _navegador_navegador_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navegador/navegador.component */ "./src/app/navegador/navegador.component.ts");
/* harmony import */ var _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./configuracion/configuracion.component */ "./src/app/configuracion/configuracion.component.ts");
/* harmony import */ var _conversacion_conversacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./conversacion/conversacion.component */ "./src/app/conversacion/conversacion.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./publicacion/publicacion.component */ "./src/app/publicacion/publicacion.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _registracion_registracion_component__WEBPACK_IMPORTED_MODULE_13__["RegistracionComponent"],
            _recuperar_contrasena_recuperar_contrasena_component__WEBPACK_IMPORTED_MODULE_14__["RecuperarContrasenaComponent"],
            _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_15__["PreguntasComponent"],
            _navegador_navegador_component__WEBPACK_IMPORTED_MODULE_16__["NavegadorComponent"],
            _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_17__["ConfiguracionComponent"],
            _conversacion_conversacion_component__WEBPACK_IMPORTED_MODULE_18__["ConversacionComponent"],
            _publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_20__["PublicacionComponent"],
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_22__["NotifierModule"]
        ],
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _mercadolibre_service__WEBPACK_IMPORTED_MODULE_8__["MercadolibreService"], {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loader {\n    bottom: 0;\n    height: 175px;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 175px;\n  }\n  \n  #loader {\n    bottom: 0;\n    height: 175px;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 175px;\n  }\n  \n  #loader .dot {\n    bottom: 0;\n    height: 100%;\n    left: 0;\n    margin: auto;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 87.5px;\n  }\n  \n  #loader .dot::before {\n    border-radius: 100%;\n    content: \"\";\n    height: 87.5px;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    width: 87.5px;\n  }\n  \n  #loader .dot:nth-child(7n+1) {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  \n  #loader .dot:nth-child(7n+1)::before {\n    -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n            animation: 0.8s linear 0.1s normal none infinite running load;\n    background: #00ff80 none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+2) {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  \n  #loader .dot:nth-child(7n+2)::before {\n    -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n            animation: 0.8s linear 0.2s normal none infinite running load;\n    background: #00ffea none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+3) {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  \n  #loader .dot:nth-child(7n+3)::before {\n    -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n            animation: 0.8s linear 0.3s normal none infinite running load;\n    background: #00aaff none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+4) {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  \n  #loader .dot:nth-child(7n+4)::before {\n    -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n            animation: 0.8s linear 0.4s normal none infinite running load;\n    background: #0040ff none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+5) {\n    -webkit-transform: rotate(225deg);\n            transform: rotate(225deg);\n  }\n  \n  #loader .dot:nth-child(7n+5)::before {\n    -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n            animation: 0.8s linear 0.5s normal none infinite running load;\n    background: #2a00ff none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+6) {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  \n  #loader .dot:nth-child(7n+6)::before {\n    -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n            animation: 0.8s linear 0.6s normal none infinite running load;\n    background: #9500ff none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+7) {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n  }\n  \n  #loader .dot:nth-child(7n+7)::before {\n    -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n            animation: 0.8s linear 0.7s normal none infinite running load;\n    background: magenta none repeat scroll 0 0;\n  }\n  \n  #loader .dot:nth-child(7n+8) {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n  \n  #loader .dot:nth-child(7n+8)::before {\n    -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n            animation: 0.8s linear 0.8s normal none infinite running load;\n    background: #ff0095 none repeat scroll 0 0;\n  }\n  \n  #loader .loading {\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    bottom: -40px;\n    height: 20px;\n    left: 0;\n    position: absolute;\n    right: 0;\n    width: 180px;\n  }\n  \n  @-webkit-keyframes load {\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n  \n  @keyframes load {\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n  \n  @keyframes load {\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n  \n  .spinner-message {\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtFQUNkOztFQUVBO0lBQ0UsU0FBUztJQUNULFlBQVk7SUFDWixPQUFPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxRUFBNkQ7WUFBN0QsNkRBQTZEO0lBQzdELDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBTEE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbiAgXG4gICNsb2FkZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Qge1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogODcuNXB4O1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogODcuNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHdpZHRoOiA4Ny41cHg7XG4gIH1cbiAgXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisxKTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMGZmODAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzIpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4ycyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzAwZmZlYSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4zcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzAwYWFmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC40cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzAwNDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC41cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzJhMDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC42cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogIzk1MDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC43cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogbWFnZW50YSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC44cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmMDA5NSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB9XG4gIFxuICAjbG9hZGVyIC5sb2FkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm90dG9tOiAtNDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxvYWQge1xuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxvYWQge1xuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICAuc3Bpbm5lci1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() {
        this.message = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpinnerComponent.prototype, "message", void 0);
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/spinner/spinner.component.html"),
        styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/components/spinner/spinner.component.css")]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/configuracion/configuracion.component.scss":
/*!************************************************************!*\
  !*** ./src/app/configuracion/configuracion.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".general {\n  margin-top: 105px;\n}\n\n.mano {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.botonRegistrar {\n  border-radius: 50px;\n  font-size: 20px;\n  text-transform: uppercase;\n  padding: 10px 40px;\n  min-width: 192px;\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  color: #fff;\n  background-color: #2691C2;\n  border-color: #2691C2;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  clear: both;\n  overflow: hidden;\n  height: auto;\n}\n\n.botonRegistrar:hover {\n  background-color: white;\n  color: #2691C2;\n}\n\n.botonRemover {\n  border-radius: 50px;\n  font-size: 15px;\n  text-transform: uppercase;\n  padding: 10px 40px;\n  min-width: 30px;\n  text-align: right;\n  font-weight: 700;\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.botonRemover:hover {\n  background-color: white;\n  color: #d9534f;\n}\n\ntd {\n  font-size: 20px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.shortcut {\n  color: #c6c6c6 !important;\n  cursor: pointer;\n}\n\n.shortcut:hover, .shortcut:hover > span {\n  color: #f5585d !important;\n  text-decoration: none;\n}\n\n.shortcut span.glyphicon {\n  font-size: 30px;\n  color: #c6c6c6;\n  background-color: #f6f6f6;\n  padding: 35px;\n  border-radius: 100px;\n}\n\n.shortcut h4 {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.extra-shortcut span.glyphicon {\n  font-size: 26px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 12px;\n  color: red;\n  cursor: pointer;\n}\n\n.extra-shortcut span.glyphicon.inside:hover {\n  font-size: 20px;\n  color: #ffffff;\n  right: 3px;\n  top: 2px;\n}\n\n.title-help {\n  color: #c6c6c6;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9hcHAvY29uZmlndXJhY2lvbi9jb25maWd1cmFjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25maWd1cmFjaW9uL2NvbmZpZ3VyYWNpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9mZWRlL3dvcmtzcGFjZS9yZXNwb25kZWxlLXdlYi9zcmMvc3R5bGVzL2dsb2JhbC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxpQkFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtFQUFpQixZQUFBO0FDQWxCOztBREdBO0VBQ0MsbUJBQUE7RUFDRyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNDLG1CQUFBO0VBQ0csZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0csa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FESUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNJLGVBQUE7RUFDQSxjRXhFYztFRnlFZCx5QkV4RWtCO0VGeUVsQixhQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsY0VwR2dCO0VGcUdoQixvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29uZmlndXJhY2lvbi9jb25maWd1cmFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWwvX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5nZW5lcmFsIHtcblx0bWFyZ2luLXRvcDogMTA1cHg7XG59XG5cbi5tYW5vIHtcblx0Y3Vyc29yOiBwb2ludGVyOyBjdXJzb3I6IGhhbmQ7XG59XG5cbi5ib3RvblJlZ2lzdHJhciB7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIG1pbi13aWR0aDogMTkycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OTFDMjtcbiAgICBib3JkZXItY29sb3I6ICMyNjkxQzI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAgMjBweDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmJvdG9uUmVnaXN0cmFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzI2OTFDMjtcbn1cblxuLmJvdG9uUmVtb3ZlciB7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAgNXB4O1xufVxuXG4uYm90b25SZW1vdmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogI2Q5NTM0Zjtcbn1cblxudGQge1xuXHRmb250LXNpemU6IDIwcHg7XG5cdG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAgNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLnNob3J0Y3V0IHtcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3IhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2hvcnRjdXQ6aG92ZXIsIC5zaG9ydGN1dDpob3ZlciA+IHNwYW4ge1xuICBjb2xvcjogJG1haW4tY29sb3IhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaG9ydGN1dCBzcGFuLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhbHQtc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4uc2hvcnRjdXQgaDQge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4uZXh0cmEtc2hvcnRjdXQgc3Bhbi5nbHlwaGljb24ge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leHRyYS1zaG9ydGN1dCBzcGFuLmdseXBoaWNvbi5pbnNpZGU6aG92ZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICByaWdodDogM3B4O1xuICB0b3A6IDJweDtcbn1cblxuLnRpdGxlLWhlbHAge1xuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4iLCIuZ2VuZXJhbCB7XG4gIG1hcmdpbi10b3A6IDEwNXB4O1xufVxuXG4ubWFubyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuXG4uYm90b25SZWdpc3RyYXIge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgbWluLXdpZHRoOiAxOTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjkxQzI7XG4gIGJvcmRlci1jb2xvcjogIzI2OTFDMjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJvdG9uUmVnaXN0cmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjY5MUMyO1xufVxuXG4uYm90b25SZW1vdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYm90b25SZW1vdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjZDk1MzRmO1xufVxuXG50ZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaG9ydGN1dCB7XG4gIGNvbG9yOiAjYzZjNmM2ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNob3J0Y3V0OmhvdmVyLCAuc2hvcnRjdXQ6aG92ZXIgPiBzcGFuIHtcbiAgY29sb3I6ICNmNTU4NWQgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2hvcnRjdXQgc3Bhbi5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjYzZjNmM2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBwYWRkaW5nOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnNob3J0Y3V0IGg0IHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leHRyYS1zaG9ydGN1dCBzcGFuLmdseXBoaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4dHJhLXNob3J0Y3V0IHNwYW4uZ2x5cGhpY29uLmluc2lkZTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDogMnB4O1xufVxuXG4udGl0bGUtaGVscCB7XG4gIGNvbG9yOiAjYzZjNmM2O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iLCIkbWFpbi1jb2xvcjogI2Y1NTg1ZDtcbiRzZWNvbmRhcnktY29sb3I6ICNjNmM2YzY7XG4kYWx0LXNlY29uZGFyeS1jb2xvcjogI2Y2ZjZmNjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/configuracion/configuracion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuracion/configuracion.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfiguracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionComponent", function() { return ConfiguracionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mercadolibre.service */ "./src/app/mercadolibre.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ConfiguracionComponent = class ConfiguracionComponent {
    constructor(user, meli, router) {
        this.user = user;
        this.meli = meli;
        this.router = router;
        this.url = null;
    }
    ngOnInit() {
        var accountInfo = { user: this.user._user };
        this.meli.urlIniML(accountInfo).subscribe((data) => {
            console.log(data);
            this.url = data.url;
        });
        if (!this.user.token)
            this.router.navigate(["/"]);
        this.isLoading = true;
        this.user.actualizarCuentas({})
            .subscribe(res => {
            this.isLoading = false;
        });
    }
    agregarCuenta() {
        window.location.replace(this.url);
        console.log("aaaa");
    }
    removerCuenta(cuenta) {
        this.meli.removerCuentaML({
            user_id_ml: cuenta.id_ml,
            nickname: cuenta.nickname
        });
    }
    irAPreguntas() {
        this.router.navigate(["/preguntas"]);
    }
    verUsuario(id) {
        var url = "http://www.mercadolibre.com.ar/jm/profile?id=" + id;
        window.open(url);
    }
};
ConfiguracionComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _mercadolibre_service__WEBPACK_IMPORTED_MODULE_3__["MercadolibreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfiguracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracion',
        template: __webpack_require__(/*! raw-loader!./configuracion.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuracion/configuracion.component.html"),
        styles: [__webpack_require__(/*! ./configuracion.component.scss */ "./src/app/configuracion/configuracion.component.scss")]
    })
], ConfiguracionComponent);



/***/ }),

/***/ "./src/app/conversacion/conversacion.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/conversacion/conversacion.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.mano {\n  cursor: pointer;\n  cursor: hand;\n}\n.envoltura {\n  border: 1px solid #ccc !important;\n  border-radius: 16px !important;\n  padding: 10px;\n  margin-top: 10px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n  text-align: center;\n}\n.usuario {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: black;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: transparent;\n  border-radius: 10px;\n}\n/* Chat containers */\n.container .col-left {\n  background-color: #f6f6f6;\n}\n/* Darker chat container */\n.darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n.buttonSelected {\n  background-color: #f5585d;\n}\n/* Clear floats */\n.container::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n/* Style images #54d9be */\n.container img {\n  width: 90%;\n  margin-top: 30px;\n}\nhr {\n  border: solid 2px #f6f6f6;\n  border-radius: 15px;\n  width: 94%;\n  margin-top: 1rem !important;\n}\ninput[type=text] {\n  height: 30px;\n}\n.form-group {\n  margin-left: 20px;\n  margin-right: 10px;\n}\n@media (min-width: 768px) {\n  label {\n    margin: 5px 15px 0px 43px;\n  }\n}\n/* Style the right image */\n.container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0;\n}\n/* Style time text */\n.time-right {\n  float: right;\n  color: #aaa;\n}\n/* Style time text */\n.time-left {\n  float: left;\n  color: #999;\n}\n.botonResponder {\n  border-radius: 50px;\n  font-size: 20px;\n  line-height: 2em;\n  text-transform: uppercase;\n  padding: 10px 40px;\n  min-width: 192px;\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  color: #fff;\n  background-color: #2691C2;\n  border-color: #2691C2;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.botonResponder:hover {\n  background-color: white;\n  color: #2691C2;\n}\n.texto {\n  font-family: \"RobotoThin\", sans-serif;\n  font-size: 20px;\n  letter-spacing: 0.05em;\n  line-height: 20px;\n}\n.content-chat {\n  display: block;\n  width: 100%;\n  max-height: calc(100vh - 375px);\n  overflow-y: hidden;\n  overflow-x: hidden;\n  background: #fff;\n}\n.content-chat .message {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 80px 10px 80px;\n  min-height: 30px;\n  height: auto;\n  text-align: left;\n  padding: 10px;\n  border-radius: 25px;\n}\n.content-chat .message.selected {\n  background-color: #e4e4e4;\n}\n.content-chat .message.me img {\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n  margin: 0 0 0 3px;\n}\n.content-chat .message.me div {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  padding: 0 8px 0 0;\n}\n.content-chat .message.me div p {\n  float: right;\n}\n.content-chat .message.me div:before {\n  position: relative;\n  float: right;\n  content: \"\";\n  margin: 7px -8px 0 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 8px 0 8px 8px;\n  border-color: transparent transparent transparent #c6c6c6;\n}\n.content-chat .message img {\n  display: block;\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  margin: 0 10px 0 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n}\n.content-chat .message div {\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n}\n.content-chat .message div p {\n  display: inline-block;\n  margin: 0;\n  width: auto;\n  padding: 8px 10px 8px 10px;\n  background: #c6c6c6;\n  word-wrap: break-word;\n  /*font-family: Monospace;*/\n  border-radius: 3px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.content-chat .message div:before {\n  position: relative;\n  float: left;\n  content: \"\";\n  margin: 7px 0 0 -8px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 8px 8px 8px 0;\n  border-color: transparent #c6c6c6 transparent transparent;\n}\nperfect-scrollbar .ps__rail-y {\n  opacity: 0.6 !important;\n}\nform.responder .form-group {\n  width: 90%;\n}\nform.responder .form-group textarea {\n  width: 100%;\n}\nform button.btn {\n  border-radius: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzIiwiL2hvbWUvZmVkZS93b3Jrc3BhY2UvcmVzcG9uZGVsZS13ZWIvc3JjL2FwcC9jb252ZXJzYWNpb24vY29udmVyc2FjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb252ZXJzYWNpb24vY29udmVyc2FjaW9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmVkZS93b3Jrc3BhY2UvcmVzcG9uZGVsZS13ZWIvc3JjL3N0eWxlcy9nbG9iYWwvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUE7O0VBRUU7QUFDRjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkRBQTJEO0VBQzNELG1FQUFtRTtFQUNuRSxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDJEQUEyRDtFQUMzRCxtRUFBbUU7RUFDbkUsV0FBVztFQUNYLG1EQUFtRDtFQUNuRCxRQUFRO0VBQ1IsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFFQTs7Ozs7O0VBTUUsWUFBWTtBQUNkO0FBRUE7Ozs7OztFQU1FLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwrREFBK0Q7RUFDL0QsdUVBQXVFO0VBQ3ZFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFB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RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJFOU1FO0VGK01GLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDaEJoQjtBRG1CWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0FDakJoQjtBRHVCQTtFQUNFLHVCQUFBO0FDcEJGO0FEdUJBO0VBQ0UsVUFBQTtBQ3BCRjtBRHNCQTtFQUNFLFdBQUE7QUNuQkY7QURxQkE7RUFDRSw4QkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhY2lvbi9jb252ZXJzYWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29udGFpbmVyIHN0eWxlXG4gKi9cbi5wcyB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bztcbn1cblxuLypcbiAqIFNjcm9sbGJhciByYWlsIHN0eWxlc1xuICovXG4ucHNfX3JhaWwteCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgb3IgJ3RvcCcgZm9yIHBzX19yYWlsLXggKi9cbiAgYm90dG9tOiAwcHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fcmFpbC15IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIHdpZHRoOiAxNXB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnIGZvciBwc19fcmFpbC15ICovXG4gIHJpZ2h0OiAwO1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHMtLWFjdGl2ZS14ID4gLnBzX19yYWlsLXgsXG4ucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wczpob3ZlciA+IC5wc19fcmFpbC14LFxuLnBzOmhvdmVyID4gLnBzX19yYWlsLXksXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXgsXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXksXG4ucHMtLXNjcm9sbGluZy14ID4gLnBzX19yYWlsLXgsXG4ucHMtLXNjcm9sbGluZy15ID4gLnBzX19yYWlsLXkge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5wcyAucHNfX3JhaWwteDpob3Zlcixcbi5wcyAucHNfX3JhaWwteTpob3Zlcixcbi5wcyAucHNfX3JhaWwteDpmb2N1cyxcbi5wcyAucHNfX3JhaWwteTpmb2N1cyxcbi5wcyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4ucHMgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKlxuICogU2Nyb2xsYmFyIHRodW1iIHN0eWxlc1xuICovXG4ucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGhlaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogNnB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIGZvciBwc19fdGh1bWIteCAqL1xuICBib3R0b206IDJweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDZweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIGZvciBwc19fdGh1bWIteSAqL1xuICByaWdodDogMnB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14OmZvY3VzID4gLnBzX190aHVtYi14LFxuLnBzX19yYWlsLXgucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB3aWR0aDogMTFweDtcbn1cblxuLyogTVMgc3VwcG9ydHMgKi9cbkBzdXBwb3J0cyAoLW1zLW92ZXJmbG93LXN0eWxlOiBub25lKSB7XG4gIC5wcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCAnfnBlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MnO1xuLm1hbm8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cblxuLmVudm9sdHVyYSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2MhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxNnB4IWltcG9ydGFudDtcblx0cGFkZGluZzogMTBweDtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0Ym94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzdWFyaW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cblxuLyogQ2hhdCBjb250YWluZXJzICovXG4uY29udGFpbmVyIC5jb2wtbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRhbHQtc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG4vKiBEYXJrZXIgY2hhdCBjb250YWluZXIgKi9cbi5kYXJrZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5cbi5idXR0b25TZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBTdHlsZSBpbWFnZXMgIzU0ZDliZSAqL1xuLmNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaHIge1xuICBib3JkZXI6IHNvbGlkIDJweCAkYWx0LXNlY29uZGFyeS1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLXRvcDogMXJlbSFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBsYWJlbCB7XG4gICAgbWFyZ2luOiA1cHggMTVweCAwcHggNDNweDtcbiAgfVxufVxuXG5cbi8qIFN0eWxlIHRoZSByaWdodCBpbWFnZSAqL1xuLmNvbnRhaW5lciBpbWcucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6MDtcbn1cblxuLyogU3R5bGUgdGltZSB0ZXh0ICovXG4udGltZS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjYWFhO1xufVxuXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cbi50aW1lLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjOTk5O1xufVxuXG5cbi5ib3RvblJlc3BvbmRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICBtaW4td2lkdGg6IDE5MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjkxQzI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjY5MUMyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogIDIwcHg7XG59XG5cbi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMyNjkxQzI7XG59XG5cblxuLnRleHRvIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9UaGluXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cblxuLmNvbnRlbnQtY2hhdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM3NXB4KTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAmIC5tZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDgwcHggMTBweCA4MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWUge1xuICAgICAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgICAgIG9yZGVyOiAyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIGRpdiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHggMCAwO1xuXG4gICAgICAgICAgICAgICAgJiBwIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAtOHB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA4cHggMCA4cHggOHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBvcmRlcjogMjtcblxuICAgICAgICAgICAgJiBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIC8qZm9udC1mYW1pbHk6IE1vbm9zcGFjZTsqL1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDAgMCAtOHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogOHB4IDhweCA4cHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRzZWNvbmRhcnktY29sb3IgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnBlcmZlY3Qtc2Nyb2xsYmFyIC5wc19fcmFpbC15IHtcbiAgb3BhY2l0eTogMC42IWltcG9ydGFudDtcbn1cblxuZm9ybS5yZXNwb25kZXIgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogOTAlO1xufVxuZm9ybS5yZXNwb25kZXIgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cbmZvcm0gYnV0dG9uLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnfnBlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MnO1xuLm1hbm8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cblxuLmVudm9sdHVyYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXN1YXJpbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIENoYXQgY29udGFpbmVycyAqL1xuLmNvbnRhaW5lciAuY29sLWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufVxuXG4vKiBEYXJrZXIgY2hhdCBjb250YWluZXIgKi9cbi5kYXJrZXIge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5idXR0b25TZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTU4NWQ7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIFN0eWxlIGltYWdlcyAjNTRkOWJlICovXG4uY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2Y2ZjZmNjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBsYWJlbCB7XG4gICAgbWFyZ2luOiA1cHggMTVweCAwcHggNDNweDtcbiAgfVxufVxuLyogU3R5bGUgdGhlIHJpZ2h0IGltYWdlICovXG4uY29udGFpbmVyIGltZy5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLyogU3R5bGUgdGltZSB0ZXh0ICovXG4udGltZS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xuLnRpbWUtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmJvdG9uUmVzcG9uZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIG1pbi13aWR0aDogMTkycHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY5MUMyO1xuICBib3JkZXItY29sb3I6ICMyNjkxQzI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzI2OTFDMjtcbn1cblxuLnRleHRvIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvVGhpblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uY29udGVudC1jaGF0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzc1cHgpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jb250ZW50LWNoYXQgLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggODBweCAxMHB4IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jb250ZW50LWNoYXQgLm1lc3NhZ2Uuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xufVxuLmNvbnRlbnQtY2hhdCAubWVzc2FnZS5tZSBpbWcge1xuICBvcmRlcjogMjtcbiAgbWFyZ2luOiAwIDAgMCAzcHg7XG59XG4uY29udGVudC1jaGF0IC5tZXNzYWdlLm1lIGRpdiB7XG4gIG9yZGVyOiAxO1xuICBwYWRkaW5nOiAwIDhweCAwIDA7XG59XG4uY29udGVudC1jaGF0IC5tZXNzYWdlLm1lIGRpdiBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbnRlbnQtY2hhdCAubWVzc2FnZS5tZSBkaXY6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogN3B4IC04cHggMCAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDhweCAwIDhweCA4cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M2YzZjNjtcbn1cbi5jb250ZW50LWNoYXQgLm1lc3NhZ2UgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9yZGVyOiAxO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuLmNvbnRlbnQtY2hhdCAubWVzc2FnZSBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgb3JkZXI6IDI7XG59XG4uY29udGVudC1jaGF0IC5tZXNzYWdlIGRpdiBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA4cHggMTBweCA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAvKmZvbnQtZmFtaWx5OiBNb25vc3BhY2U7Ki9cbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNvbnRlbnQtY2hhdCAubWVzc2FnZSBkaXY6YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luOiA3cHggMCAwIC04cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogOHB4IDhweCA4cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjYzZjNmM2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG5wZXJmZWN0LXNjcm9sbGJhciAucHNfX3JhaWwteSB7XG4gIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xufVxuXG5mb3JtLnJlc3BvbmRlciAuZm9ybS1ncm91cCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbmZvcm0ucmVzcG9uZGVyIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmZvcm0gYnV0dG9uLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbn0iLCIkbWFpbi1jb2xvcjogI2Y1NTg1ZDtcbiRzZWNvbmRhcnktY29sb3I6ICNjNmM2YzY7XG4kYWx0LXNlY29uZGFyeS1jb2xvcjogI2Y2ZjZmNjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/conversacion/conversacion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/conversacion/conversacion.component.ts ***!
  \********************************************************/
/*! exports provided: ConversacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversacionComponent", function() { return ConversacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mercadolibre.service */ "./src/app/mercadolibre.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");







let ConversacionComponent = class ConversacionComponent {
    constructor(user, meli, router, notifier) {
        this.user = user;
        this.meli = meli;
        this.router = router;
        this.notifier = notifier;
    }
    ngOnInit() {
        if (!this.user.token)
            this.router.navigate(["/"]);
        if (this.meli.pregunta) {
            this.usuarioPregunta = "USUARIO";
            this.respuesta = "";
            this.isLoading = false;
            this.meli.dameNombreUsuario(this.meli.pregunta.from)
                .subscribe((respuesta) => {
                this.usuarioPregunta = respuesta.nickname;
                this.prefijo = `Hola ${this.usuarioPregunta}.`;
                this.sufijo = " // Podes realizar la compra mediante Mercado Libre o mediante ------ @youtec.arg ------- InstG -----  tambien por nuestra Web Youtec /// Abonando por Transferencia Bancaria te podemos BONIFICAR 5% y Efec. 10% // Muchas gracias! - Somos @youtec.arg";
                this.enviarPrefijo = true;
                this.enviarSufijo = true;
            }, (err) => {
                console.log(err);
            });
        }
    }
    responder() {
        if (this.enviarPrefijo)
            this.respuesta = `${this.prefijo} ${this.respuesta}`;
        if (this.enviarSufijo)
            this.respuesta = `${this.respuesta} ${this.sufijo}`;
        this.notifier.notify('info', "Enviando .. ");
        this.meli.responderPregunta({
            user_id_ml: this.meli.pregunta.seller_id,
            question_id: this.meli.pregunta.question_id,
            text: this.respuesta
        })
            .subscribe((respuesta) => {
            this.respuesta = "";
            this.meli.removerPregunta();
            this.notifier.notify('success', respuesta["msg"]);
            this.router.navigate(["/preguntas"]);
        }, (err) => {
            this.notifier.notify('error', err);
        });
    }
    seleccionarPregunta(question_id, actualizar) {
        if (actualizar)
            this.meli.setPreguntaPorId(question_id);
    }
    dameFechaArgentina(fecha) {
        var date = new Date(fecha);
        date.setHours(date.getHours() + 2);
        return date;
    }
    verPublicacion(item) {
        var url = item.permalink;
        window.open(url);
    }
    verUsuario(from) {
        var url = "http://www.mercadolibre.com.ar/jm/profile?id=" + from.id;
        window.open(url);
    }
};
ConversacionComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _mercadolibre_service__WEBPACK_IMPORTED_MODULE_2__["MercadolibreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"] }
];
ConversacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conversacion',
        template: __webpack_require__(/*! raw-loader!./conversacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/conversacion/conversacion.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('preguntaState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    height: '0',
                    transform: 'scale(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-out'))
            ])
        ],
        styles: [__webpack_require__(/*! ./conversacion.component.scss */ "./src/app/conversacion/conversacion.component.scss")]
    })
], ConversacionComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 390px;\n  /*margin: 70px auto 100px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/\n  text-align: center;\n  padding: 45px;\n}\n.form input {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  outline: 0;\n  width: 100%;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button, .btn.botonResponder {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  outline: 0;\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 25px;\n  background: #fff;\n  border: 2px solid #f5585d;\n  padding: 15px;\n  color: #f5585d;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover, .form button:active, .form button:focus, .btn.botonResponder:hover {\n  background: #f5585d;\n  color: #fff;\n}\n.help-links {\n  margin: 15px 0 0;\n  font-size: 12px;\n}\n.help-links a {\n  color: #c6c6c6;\n  text-decoration: none;\n}\n.help-links a:hover {\n  color: #f5585d;\n  text-decoration: underline;\n}\n/* enable absolute positioning */\n.inner-addon {\n  position: relative;\n  color: #c6c6c6;\n}\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px;\n}\n.right-addon .glyphicon {\n  right: 0px;\n}\n/* add padding  */\n.left-addon input {\n  padding-left: 30px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n/* Customize the label (the container) */\n.re-checkbox {\n  /*display: block;*/\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  font-weight: 100;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.re-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.re-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 25px;\n  background-color: #eee;\n}\n/* On mouse-over, add a grey background color */\n.re-checkbox:hover input ~ .re-checkmark {\n  background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.re-checkbox input:checked ~ .re-checkmark {\n  background-color: #f5585d;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.re-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.re-checkbox input:checked ~ .re-checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.re-checkbox .re-checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.login-page {\n  width: 500px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.form .register-form {\n  display: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #EF3B3A;\n}\nbody {\n  background: #76b852;\n  /* fallback for old browsers */\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* @media (min-width: @screen-md-min) { ... } */\n@media (max-width: 500px) {\n  div.logo-container > img {\n    width: 170px;\n    padding-top: 160px;\n  }\n\n  div.col-md-6.text-right {\n    text-align: center;\n  }\n}\n@media (min-width: 501px) and (max-width: 812px) {\n  div.logo-container > img {\n    width: 260px;\n  }\n\n  div.col-md-6.text-right {\n    text-align: left;\n  }\n}\n/* reCaptcha styles */\n/* Medium devices (desktops, 992px and up) */\n/*@media (max-width: 450px) {\n  re-captcha /deep/ iframe {\n    width: 300px;\n    padding-right: 100px;\n  }\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9mZWRlL3dvcmtzcGFjZS9yZXNwb25kZWxlLXdlYi9zcmMvc3R5bGVzL2dsb2JhbC9fZm9ybS5zY3NzIiwiL2hvbWUvZmVkZS93b3Jrc3BhY2UvcmVzcG9uZGVsZS13ZWIvc3JjL3N0eWxlcy9nbG9iYWwvX2NoZWNrYm94LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmVkZS93b3Jrc3BhY2UvcmVzcG9uZGVsZS13ZWIvc3JjL3N0eWxlcy9nbG9iYWwvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtEQUFBO0FDQUEsK0RBQUE7QUNBQSwrREFBQTtBREdSO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBOzhFQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0FFQ0Y7QUZDQTtFQUNFLDZDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUVFRjtBRkFBO0VBQ0UsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjR2pDVztFSGtDWCxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUVHRjtBRkRBO0VBQ0UsbUJHeENXO0VIeUNYLFdBQUE7QUVJRjtBRkRBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FFSUY7QUZGQTtFQUNFLGNHaERnQjtFSGlEaEIscUJBQUE7QUVLRjtBRkhBO0VBQ0UsY0dyRFc7RUhzRFgsMEJBQUE7QUVNRjtBRkhBLGdDQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNHM0RjO0FEaUVsQjtBRkhBLGVBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FFTUY7QUZIQSxlQUFBO0FBQ0E7RUFBMEIsU0FBQTtBRU8xQjtBRk5BO0VBQTBCLFVBQUE7QUVVMUI7QUZSQSxpQkFBQTtBQUNBO0VBQXFCLGtCQUFBO0FFWXJCO0FGWEE7RUFBcUIsbUJBQUE7QUVlckI7QUR4RkEsd0NBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUMyRkY7QUR4RkEsd0NBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQzJGRjtBRHhGQSw2QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQzJGRjtBRHhGQSwrQ0FBQTtBQUNBO0VBQ0Usc0JBQUE7QUMyRkY7QUR4RkEsd0RBQUE7QUFDQTtFQUNFLHlCRTVDVztBRHVJYjtBRHhGQSw2REFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzJGRjtBRHhGQSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBQzJGRjtBRHhGQSxrQ0FBQTtBQUNBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUVBLHdCQUFBO0FDMkZGO0FINUpBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FHK0pGO0FIN0pBO0VBQ0UsYUFBQTtBR2dLRjtBSDlKQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBR2lLRjtBSC9KQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBR2tLRjtBSGhLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUdtS0Y7QUhqS0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FHb0tGO0FIbEtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUdxS0Y7QUhuS0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUdzS0Y7QUhwS0E7RUFDRSxjQUFBO0FHdUtGO0FIcktBO0VBQ0UsbUJBQUE7RUFBcUIsOEJBQUE7RUFJckIscUZBQUE7RUFBQSxzREFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBR3lLRjtBSHRLQSwrQ0FBQTtBQUNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUd5S0Y7O0VIdktBO0lBQ0Usa0JBQUE7RUcwS0Y7QUFDRjtBSHhLQTtFQUNFO0lBQ0UsWUFBQTtFRzBLRjs7RUh4S0E7SUFDRSxnQkFBQTtFRzJLRjtBQUNGO0FIeEtBLHFCQUFBO0FBQ0EsNENBQUE7QUFDQTs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWwvX2Zvcm0uc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWwvX2NoZWNrYm94LnNjc3NcIjtcblxuLmxvZ2luLXBhZ2Uge1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDglIDAgMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmZvcm0gLnJlZ2lzdGVyLWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250YWluZXIgLmluZm8ge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uY29udGFpbmVyIC5pbmZvIHNwYW4ge1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gIGNvbG9yOiAjRUYzQjNBO1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICM3NmI4NTI7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1tZC1taW4pIHsgLi4uIH0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBkaXYubG9nby1jb250YWluZXIgPiBpbWcge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBwYWRkaW5nLXRvcDogMTYwcHg7XG4gIH1cbiAgZGl2LmNvbC1tZC02LnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgZGl2LmxvZ28tY29udGFpbmVyID4gaW1nIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbiAgZGl2LmNvbC1tZC02LnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuLyogcmVDYXB0Y2hhIHN0eWxlcyAqL1xuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4vKkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICByZS1jYXB0Y2hhIC9kZWVwLyBpZnJhbWUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgfVxufSovXG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XG5AaW1wb3J0IFwiLi9fdmFyaWFibGVzLnNjc3NcIjtcblxuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1heC13aWR0aDogMzkwcHg7XG4gIC8qbWFyZ2luOiA3MHB4IGF1dG8gMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpOyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDVweDtcbn1cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9vbmV5U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybSBidXR0b24sIC5idG4uYm90b25SZXNwb25kZXIge1xuICBmb250LWZhbWlseTogXCJSb29uZXlTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cywgLCAuYnRuLmJvdG9uUmVzcG9uZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogJG1haW4tY29sb3I7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVscC1saW5rcyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5oZWxwLWxpbmtzIGEge1xuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlbHAtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbi8qIHN0eWxlIGljb24gKi9cbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogYWxpZ24gaWNvbiAqL1xuLmxlZnQtYWRkb24gLmdseXBoaWNvbiAgeyBsZWZ0OiAgMHB4O31cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHsgcmlnaHQ6IDBweDt9XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQgIHsgcGFkZGluZy1sZWZ0OiAgMzBweDsgfVxuLnJpZ2h0LWFkZG9uIGlucHV0IHsgcGFkZGluZy1yaWdodDogMzBweDsgfVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuQGltcG9ydCBcIi4vX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXG4ucmUtY2hlY2tib3gge1xuICAvKmRpc3BsYXk6IGJsb2NrOyovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4ucmUtY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4ucmUtY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLnJlLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLnJlLWNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLnJlLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAucmUtY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4ucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4ucmUtY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5yZS1jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbi5yZS1jaGVja2JveCAucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDRweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1heC13aWR0aDogMzkwcHg7XG4gIC8qbWFyZ2luOiA3MHB4IGF1dG8gMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpOyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDVweDtcbn1cblxuLmZvcm0gaW5wdXQge1xuICBmb250LWZhbWlseTogXCJSb29uZXlTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0gYnV0dG9uLCAuYnRuLmJvdG9uUmVzcG9uZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9vbmV5U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y1NTg1ZDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmNTU4NWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybSBidXR0b246aG92ZXIsIC5mb3JtIGJ1dHRvbjphY3RpdmUsIC5mb3JtIGJ1dHRvbjpmb2N1cywgLmJ0bi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNTU4NWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVscC1saW5rcyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhlbHAtbGlua3MgYSB7XG4gIGNvbG9yOiAjYzZjNmM2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWxwLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogI2Y1NTg1ZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2M2YzZjNjtcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgbGVmdDogMHB4O1xufVxuXG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXG4ucmUtY2hlY2tib3gge1xuICAvKmRpc3BsYXk6IGJsb2NrOyovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4ucmUtY2hlY2tib3ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4ucmUtY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLnJlLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLnJlLWNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLnJlLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAucmUtY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTg1ZDtcbn1cblxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5yZS1jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cbi5yZS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuLnJlLWNoZWNrYm94IC5yZS1jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA4cHg7XG4gIHRvcDogNHB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5sb2dpbi1wYWdlIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiA4JSAwIDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0gLnJlZ2lzdGVyLWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb250YWluZXIgLmluZm8ge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIC5pbmZvIGgxIHtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzFhMWExYTtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcbiAgY29sb3I6ICNFRjNCM0E7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjNzZiODUyO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IEBzY3JlZW4tbWQtbWluKSB7IC4uLiB9ICovXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgZGl2LmxvZ28tY29udGFpbmVyID4gaW1nIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgcGFkZGluZy10b3A6IDE2MHB4O1xuICB9XG5cbiAgZGl2LmNvbC1tZC02LnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgZGl2LmxvZ28tY29udGFpbmVyID4gaW1nIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cblxuICBkaXYuY29sLW1kLTYudGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuLyogcmVDYXB0Y2hhIHN0eWxlcyAqL1xuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4vKkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICByZS1jYXB0Y2hhIC9kZWVwLyBpZnJhbWUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgfVxufSovIiwiJG1haW4tY29sb3I6ICNmNTU4NWQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjYzZjNmM2O1xuJGFsdC1zZWNvbmRhcnktY29sb3I6ICNmNmY2ZjY7XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mercadolibre.service */ "./src/app/mercadolibre.service.ts");





//import { ReCaptchaComponent } from 'angular2-recaptcha';
let LoginComponent = class LoginComponent {
    constructor(user, meli, router) {
        this.user = user;
        this.meli = meli;
        this.router = router;
        //@ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
        this.account = {
            name: 'fede',
            password: 'fede',
            response_captcha: null
        };
    }
    ngOnInit() {
        if (this.user.hasUser()) {
            console.log("aaaaa pepito es un lquito");
            this.router.navigate(["/preguntas"]);
        }
    }
    resolveCaptcha() {
        console.log("resolvi");
    }
    submit() {
        //this.account.response_captcha = this.captcha.getResponse();
        this.user.login(this.account).subscribe((resp) => {
            if (resp.success == true) {
                this.router.navigate(["/preguntas"]);
            }
            else {
                //this.mensajero.mostrarMensajeError(resp.msg)
                //  	this.captcha.reset();
            }
        }, (err) => {
            //  this.captcha.reset();
            //this.mensajero.mostrarMensajeError("Falló en el servidor")
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _mercadolibre_service__WEBPACK_IMPORTED_MODULE_4__["MercadolibreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/mercadolibre.service.ts":
/*!*****************************************!*\
  !*** ./src/app/mercadolibre.service.ts ***!
  \*****************************************/
/*! exports provided: MercadolibreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadolibreService", function() { return MercadolibreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");


//import { Http,  RequestOptions } from '@angular/http';



let MercadolibreService = class MercadolibreService {
    constructor(http, api, user) {
        this.http = http;
        this.api = api;
        this.user = user;
        this.urlML = "https://api.mercadolibre.com";
        this.cantidadPreguntas = null;
        this.socketOn = false;
        this.preguntas = [];
        this.loading = true;
        if (this.user.hasUser()) {
            this.user.init();
            this.actualizarPreguntas(true);
        }
    }
    urlIniML(params) {
        var accountInfo = this.user.cargarHeadersAutorizations(null);
        let seq = this.api.get(this.user.getApi(), 'cuentas/iniciarConML', params, accountInfo);
        return seq;
    }
    logoutML() {
        return "http://www.mercadolibre.com/jms/mla/lgz/logout";
    }
    removerCuentaML(body) {
        var headers = this.user.cargarHeadersAutorizations(body);
        let seq = this.api.delete(this.user.getApi(), 'cuentas/cuentas', body.nickname, headers);
        seq.subscribe((res) => {
            if (res.success == true) {
                this.user.actualizarCuentas({});
            }
            else {
            }
        }, err => {
            console.error('ERROR', err);
        });
        return seq;
    }
    responderPregunta(datos) {
        let accountInfo = this.user.cargarHeadersAutorizations({});
        let seq = this.api.post(this.user.getApi(), 'preguntas/responder', datos, accountInfo);
        return seq;
    }
    sincronizarPreguntas(body) {
        var headers = this.user.cargarHeadersAutorizations({});
        let seq = this.api.post(this.user.getApi(), 'preguntas/sincronizar', body, headers);
        this.loading = true;
        seq.subscribe((res) => {
            if (res.success == true) {
                this.setPreguntas(res.data);
            }
            else {
                console.log(res);
            }
        }, err => {
            console.error('ERROR', err);
        });
        return seq;
    }
    actualizarConversaciones() {
        if (this.preguntas) {
            this.preguntas.forEach((pregunta) => {
                if (pregunta.preguntas_previas == null) {
                    this.actualizarConveracionCon(pregunta);
                }
            });
        }
    }
    actualizarConveracionCon(pregunta) {
        if (this.user.cuentas != null) {
            this.user.cuentas.forEach((cuenta) => {
                if (cuenta.id_ml == pregunta.seller_id) {
                    var token = cuenta.token;
                    let seq = this.api.get(this.urlML, 'questions/search', {
                        item: pregunta.item_id,
                        from: pregunta.from.id,
                        access_token: token,
                        sort: 'date_created_asc'
                    });
                    seq.subscribe((res) => {
                        if (res.questions != null) {
                            pregunta.preguntas_previas = res.questions;
                            pregunta.cantidad_preguntas_previas = pregunta.preguntas_previas.length;
                        }
                        else {
                            console.error('ERROR ACTUALIZANDO CONVERSACION DE UNA PREGUNTA', res);
                            return res.msg;
                        }
                    }, err => {
                        console.error('ERROR', err);
                        return err.msg;
                    });
                    return seq;
                }
            });
        }
    }
    dameNombreUsuario(from) {
        let seq = this.api.get(this.urlML, 'users/' + from.id, {});
        return seq;
    }
    setPregunta(pregunta) {
        this.pregunta = pregunta;
        this.actualizarConveracionCon(this.pregunta);
    }
    setPreguntaPorId(question_id) {
        var pregunta = this.preguntas.filter((pregunta) => {
            return pregunta.question_id == question_id;
        });
        this.setPregunta(pregunta[0]);
    }
    removerPregunta() {
        var index = this.preguntas.indexOf(this.pregunta);
        this.preguntas.splice(index, 1);
    }
    // cargarNuevaPregunta(resource) {
    //   this.actualizarPreguntas({})
    // }
    actualizarPreguntas(showLoading) {
        /*    if (!this.socketOn) {
                this.user.socket.on('actualizar', (mensaje) => {
                  this.actualizarPreguntas({})
              })
            }*/
        let accountInfo = this.user.cargarHeadersAutorizations({});
        let seq = this.api.get(this.user.getApi(), 'preguntas/pregunta', {}, accountInfo);
        if (showLoading && this.preguntas.length == 0)
            this.loading = true;
        seq.subscribe((res) => {
            if (res.success == true) {
                this.setPreguntas(res.data);
            }
            else {
                console.error('ERROR ACTUALIZANDO PREGUNTAS', res);
                return res.msg;
            }
        }, err => {
            console.error('ERROR', err);
            return err.msg;
        });
        return seq;
    }
    setPreguntas(preguntas) {
        this.preguntas = preguntas;
        this.loading = false;
        if (this.preguntas) {
            this.preguntas.forEach((pregunta) => {
                this.actualizarConveracionCon(pregunta);
                pregunta.seller_name = this.user.dameNickname(pregunta.seller_id);
            });
            this.cantidadPreguntas = this.preguntas.length;
        }
    }
};
MercadolibreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
MercadolibreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MercadolibreService);



/***/ }),

/***/ "./src/app/navegador/navegador.component.scss":
/*!****************************************************!*\
  !*** ./src/app/navegador/navegador.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n/*\n * Start Bootstrap - Logo Nav (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n/* Customize the label (the container) */\n.re-checkbox {\n  /*display: block;*/\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  font-weight: 100;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.re-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.re-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 25px;\n  background-color: #eee;\n}\n/* On mouse-over, add a grey background color */\n.re-checkbox:hover input ~ .re-checkmark {\n  background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.re-checkbox input:checked ~ .re-checkmark {\n  background-color: #f5585d;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.re-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.re-checkbox input:checked ~ .re-checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.re-checkbox .re-checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 390px;\n  /*margin: 70px auto 100px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/\n  text-align: center;\n  padding: 45px;\n}\n.form input {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  outline: 0;\n  width: 100%;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button, .btn.botonResponder {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  outline: 0;\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 25px;\n  background: #fff;\n  border: 2px solid #f5585d;\n  padding: 15px;\n  color: #f5585d;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover, .form button:active, .form button:focus, .btn.botonResponder:hover {\n  background: #f5585d;\n  color: #fff;\n}\n.help-links {\n  margin: 15px 0 0;\n  font-size: 12px;\n}\n.help-links a {\n  color: #c6c6c6;\n  text-decoration: none;\n}\n.help-links a:hover {\n  color: #f5585d;\n  text-decoration: underline;\n}\n/* enable absolute positioning */\n.inner-addon {\n  position: relative;\n  color: #c6c6c6;\n}\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px;\n}\n.right-addon .glyphicon {\n  right: 0px;\n}\n/* add padding  */\n.left-addon input {\n  padding-left: 30px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\nbody {\n  padding-top: 120px;\n  /* Required padding for .navbar-fixed-top. Change if height of navigation changes. */\n}\n.navbar-fixed-top .nav {\n  padding: 15px 0;\n}\n.nav > li > a, .dropdown > .glyphicon {\n  padding: 5px 5px;\n}\n.navbar-fixed-top.navbar-brand {\n  padding: 0 15px;\n}\n.inner-addon.right-addon > .glyphicon {\n  font-size: 18px !important;\n}\n.inner-addon.right-addon > input[type=text] {\n  height: 38px !important;\n}\n.nav.navbar-nav.navbar-right {\n  position: relative;\n}\n.dropdown.open:before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  right: 5px;\n  top: 100%;\n  margin-top: 0px;\n  border-width: 0px 12px 12px 12px;\n  border-style: solid;\n  border-color: #c6c6c6 rgba(0, 0, 0, 0);\n}\n.dropdown > ul {\n  margin-top: 12px;\n  background-color: #c6c6c6;\n}\n.dropdown > ul > li > a {\n  color: #FFFFFF;\n  border: 1px solid #FFFFFF;\n  font-weight: bold;\n}\n@media (min-width: 768px) {\n  body {\n    padding-top: 100px;\n    /* Required padding for .navbar-fixed-top. Change if height of navigation changes. */\n  }\n\n  .navbar-fixed-top .navbar-brand {\n    padding: 15px 0;\n  }\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: black;\n}\n.navbar-inverse {\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n.preguntas {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: black;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px;\n}\n.logo {\n  height: 75px;\n  margin-left: 40px;\n}\n.icon_btn {\n  margin: 0px;\n  background-color: #fff0 !important;\n}\n.glyphicon {\n  font-size: 25px;\n}\n.icon_btn:hover {\n  background-color: white;\n  color: #000000;\n}\n.icon_btn:hover span {\n  background-color: white;\n  color: #f5585d;\n}\n.icon_btn:hover b {\n  color: #f5585d;\n}\n.icon_btn span, b {\n  color: #c6c6c6;\n}\nspan.badge {\n  position: absolute;\n  top: -3px;\n  right: -5px;\n  color: #FFFFFF !important;\n  background-color: #f5585d;\n}\nspan.badge:hover {\n  color: #f5585d !important;\n  background-color: #FFFFFF !important;\n}\n.titulo {\n  color: white;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.72);\n  line-height: 1.2;\n  font-size: 30px;\n}\n.boton_colapsador {\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9zdHlsZXMvZ2xvYmFsL19jaGVja2JveC5zY3NzIiwiL2hvbWUvZmVkZS93b3Jrc3BhY2UvcmVzcG9uZGVsZS13ZWIvc3JjL3N0eWxlcy9nbG9iYWwvX2Zvcm0uc2NzcyIsIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9hcHAvbmF2ZWdhZG9yL25hdmVnYWRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2ZWdhZG9yL25hdmVnYWRvci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEsK0RBQUE7QUNBQSwrREFBQTtBQ0FSOzs7O0VBQUE7QUZHQSx3Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBR0tGO0FIRkEsd0NBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBR0tGO0FIRkEsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUdLRjtBSEZBLCtDQUFBO0FBQ0E7RUFDRSxzQkFBQTtBR0tGO0FIRkEsd0RBQUE7QUFDQTtFQUNFLHlCSTVDVztBRGlEYjtBSEZBLDZEQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FHS0Y7QUhGQSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBR0tGO0FIRkEsa0NBQUE7QUFDQTtFQUNFLFNBQUE7RUFDQSxRQUFB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ZmlsZSI6InNyYy9hcHAvbmF2ZWdhZG9yL25hdmVnYWRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcbkBpbXBvcnQgXCIuL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xuLnJlLWNoZWNrYm94IHtcbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLnJlLWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLnJlLWNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5yZS1jaGVja2JveDpob3ZlciBpbnB1dCB+IC5yZS1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5yZS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLnJlLWNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLnJlLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4ucmUtY2hlY2tib3ggLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDhweDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcbkBpbXBvcnQgXCIuL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgbWF4LXdpZHRoOiAzOTBweDtcbiAgLyptYXJnaW46IDcwcHggYXV0byAxMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7Ki9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0NXB4O1xufVxuLmZvcm0gaW5wdXQge1xuICBmb250LWZhbWlseTogXCJSb29uZXlTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtIGJ1dHRvbiwgLmJ0bi5ib3RvblJlc3BvbmRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvb25leVNhbnMtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogJG1haW4tY29sb3I7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0gYnV0dG9uOmhvdmVyLC5mb3JtIGJ1dHRvbjphY3RpdmUsLmZvcm0gYnV0dG9uOmZvY3VzLCAsIC5idG4uYm90b25SZXNwb25kZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWxwLWxpbmtzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmhlbHAtbGlua3MgYSB7XG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVscC1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogZW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nICovXG4uaW5uZXItYWRkb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uICB7IGxlZnQ6ICAwcHg7fVxuLnJpZ2h0LWFkZG9uIC5nbHlwaGljb24geyByaWdodDogMHB4O31cblxuLyogYWRkIHBhZGRpbmcgICovXG4ubGVmdC1hZGRvbiBpbnB1dCAgeyBwYWRkaW5nLWxlZnQ6ICAzMHB4OyB9XG4ucmlnaHQtYWRkb24gaW5wdXQgeyBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XG4iLCIvKlxuICogU3RhcnQgQm9vdHN0cmFwIC0gTG9nbyBOYXYgKGh0dHA6Ly9zdGFydGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTMtMjAxNiBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAvYmxvYi9naC1wYWdlcy9MSUNFTlNFKVxuICovXG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2dsb2JhbC9fY2hlY2tib3guc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWwvX2Zvcm0uc2Nzc1wiO1xuXG5ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7IC8qIFJlcXVpcmVkIHBhZGRpbmcgZm9yIC5uYXZiYXItZml4ZWQtdG9wLiBDaGFuZ2UgaWYgaGVpZ2h0IG9mIG5hdmlnYXRpb24gY2hhbmdlcy4gKi9cbn1cblxuLm5hdmJhci1maXhlZC10b3AgLm5hdiB7XG4gICAgcGFkZGluZzogMTVweCAwO1xufVxuXG4ubmF2ID4gbGkgPiBhLCAuZHJvcGRvd24gPiAuZ2x5cGhpY29uIHtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLm5hdmJhci1maXhlZC10b3AubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5pbm5lci1hZGRvbi5yaWdodC1hZGRvbiA+IC5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDE4cHghaW1wb3J0YW50O1xufVxuXG4uaW5uZXItYWRkb24ucmlnaHQtYWRkb24gPiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGhlaWdodDogMzhweCFpbXBvcnRhbnQ7XG59XG5cbi5uYXYubmF2YmFyLW5hdi5uYXZiYXItcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxufVxuXG4uZHJvcGRvd24ub3BlbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMTJweCAxMnB4IDEycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmRyb3Bkb3duID4gdWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG4uZHJvcGRvd24gPiB1bCA+IGxpID4gYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xuICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIFJlcXVpcmVkIHBhZGRpbmcgZm9yIC5uYXZiYXItZml4ZWQtdG9wLiBDaGFuZ2UgaWYgaGVpZ2h0IG9mIG5hdmlnYXRpb24gY2hhbmdlcy4gKi9cbiAgICB9XG5cbiAgICAubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgIH1cbn1cblxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2PmxpPmEge1xuXHRjb2xvcjogYmxhY2s7XG59XG4ubmF2YmFyLWludmVyc2Uge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5wcmVndW50YXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbWFyZ2luLWxlZnQ6NDBweDtcbn1cblxuLmljb25fYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMCFpbXBvcnRhbnQ7XG59XG5cbi5nbHlwaGljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmljb25fYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmljb25fYnRuOmhvdmVyIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbn1cblxuLmljb25fYnRuOmhvdmVyIGIge1xuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbn1cblxuLmljb25fYnRuIHNwYW4sIGIge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG5zcGFuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtM3B4O1xuICAgIHJpZ2h0OiAtNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbn1cblxuc3Bhbi5iYWRnZTpob3ZlciB7XG4gICAgY29sb3I6ICRtYWluLWNvbG9yIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGIWltcG9ydGFudDtcbn1cblxuXG4udGl0dWxvIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLDAsMCwuNzIpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYm90b25fY29sYXBzYWRvciB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4XG59XG4iLCIvKlxuICogU3RhcnQgQm9vdHN0cmFwIC0gTG9nbyBOYXYgKGh0dHA6Ly9zdGFydGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTMtMjAxNiBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAvYmxvYi9naC1wYWdlcy9MSUNFTlNFKVxuICovXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xuLnJlLWNoZWNrYm94IHtcbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLnJlLWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLnJlLWNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5yZS1jaGVja2JveDpob3ZlciBpbnB1dCB+IC5yZS1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5yZS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLnJlLWNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTU4NWQ7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4ucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4ucmUtY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5yZS1jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbi5yZS1jaGVja2JveCAucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDRweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgbWF4LXdpZHRoOiAzOTBweDtcbiAgLyptYXJnaW46IDcwcHggYXV0byAxMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7Ki9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0NXB4O1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvb25leVNhbnMtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybSBidXR0b24sIC5idG4uYm90b25SZXNwb25kZXIge1xuICBmb250LWZhbWlseTogXCJSb29uZXlTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjU1ODVkO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2Y1NTg1ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtIGJ1dHRvbjpob3ZlciwgLmZvcm0gYnV0dG9uOmFjdGl2ZSwgLmZvcm0gYnV0dG9uOmZvY3VzLCAuYnRuLmJvdG9uUmVzcG9uZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1NTg1ZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWxwLWxpbmtzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVscC1saW5rcyBhIHtcbiAgY29sb3I6ICNjNmM2YzY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhlbHAtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjU1ODVkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogZW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nICovXG4uaW5uZXItYWRkb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjYzZjNmM2O1xufVxuXG4vKiBzdHlsZSBpY29uICovXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIGFsaWduIGljb24gKi9cbi5sZWZ0LWFkZG9uIC5nbHlwaGljb24ge1xuICBsZWZ0OiAwcHg7XG59XG5cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLyogYWRkIHBhZGRpbmcgICovXG4ubGVmdC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgLyogUmVxdWlyZWQgcGFkZGluZyBmb3IgLm5hdmJhci1maXhlZC10b3AuIENoYW5nZSBpZiBoZWlnaHQgb2YgbmF2aWdhdGlvbiBjaGFuZ2VzLiAqL1xufVxuXG4ubmF2YmFyLWZpeGVkLXRvcCAubmF2IHtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4ubmF2ID4gbGkgPiBhLCAuZHJvcGRvd24gPiAuZ2x5cGhpY29uIHtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLm5hdmJhci1maXhlZC10b3AubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaW5uZXItYWRkb24ucmlnaHQtYWRkb24gPiAuZ2x5cGhpY29uIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lci1hZGRvbi5yaWdodC1hZGRvbiA+IGlucHV0W3R5cGU9dGV4dF0ge1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cblxuLm5hdi5uYXZiYXItbmF2Lm5hdmJhci1yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLm9wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTJweCAxMnB4IDEycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2M2YzZjNiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uZHJvcGRvd24gPiB1bCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmM2YzY7XG59XG5cbi5kcm9wZG93biA+IHVsID4gbGkgPiBhIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIC8qIFJlcXVpcmVkIHBhZGRpbmcgZm9yIC5uYXZiYXItZml4ZWQtdG9wLiBDaGFuZ2UgaWYgaGVpZ2h0IG9mIG5hdmlnYXRpb24gY2hhbmdlcy4gKi9cbiAgfVxuXG4gIC5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgfVxufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5wcmVndW50YXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmljb25fYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYwICFpbXBvcnRhbnQ7XG59XG5cbi5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pY29uX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmljb25fYnRuOmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNmNTU4NWQ7XG59XG5cbi5pY29uX2J0bjpob3ZlciBiIHtcbiAgY29sb3I6ICNmNTU4NWQ7XG59XG5cbi5pY29uX2J0biBzcGFuLCBiIHtcbiAgY29sb3I6ICNjNmM2YzY7XG59XG5cbnNwYW4uYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTU4NWQ7XG59XG5cbnNwYW4uYmFkZ2U6aG92ZXIge1xuICBjb2xvcjogI2Y1NTg1ZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYm90b25fY29sYXBzYWRvciB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn0iLCIkbWFpbi1jb2xvcjogI2Y1NTg1ZDtcbiRzZWNvbmRhcnktY29sb3I6ICNjNmM2YzY7XG4kYWx0LXNlY29uZGFyeS1jb2xvcjogI2Y2ZjZmNjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navegador/navegador.component.ts":
/*!**************************************************!*\
  !*** ./src/app/navegador/navegador.component.ts ***!
  \**************************************************/
/*! exports provided: NavegadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegadorComponent", function() { return NavegadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mercadolibre.service */ "./src/app/mercadolibre.service.ts");




let NavegadorComponent = class NavegadorComponent {
    constructor(user, meli) {
        this.user = user;
        this.meli = meli;
        this.isIn = false; // store state
    }
    ngOnInit() {
    }
    logout() {
        this.user.logout();
    }
    sincronizarTodo() {
        this.meli.sincronizarPreguntas({});
    }
    toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
    }
};
NavegadorComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _mercadolibre_service__WEBPACK_IMPORTED_MODULE_3__["MercadolibreService"] }
];
NavegadorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navegador',
        template: __webpack_require__(/*! raw-loader!./navegador.component.html */ "./node_modules/raw-loader/index.js!./src/app/navegador/navegador.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./navegador.component.scss */ "./src/app/navegador/navegador.component.scss")]
    })
], NavegadorComponent);



/***/ }),

/***/ "./src/app/preguntas/preguntas.component.scss":
/*!****************************************************!*\
  !*** ./src/app/preguntas/preguntas.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 390px;\n  /*margin: 70px auto 100px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/\n  text-align: center;\n  padding: 45px;\n}\n.form input {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  outline: 0;\n  width: 100%;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button, .btn.botonResponder {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  outline: 0;\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 25px;\n  background: #fff;\n  border: 2px solid #f5585d;\n  padding: 15px;\n  color: #f5585d;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover, .form button:active, .form button:focus, .btn.botonResponder:hover {\n  background: #f5585d;\n  color: #fff;\n}\n.help-links {\n  margin: 15px 0 0;\n  font-size: 12px;\n}\n.help-links a {\n  color: #c6c6c6;\n  text-decoration: none;\n}\n.help-links a:hover {\n  color: #f5585d;\n  text-decoration: underline;\n}\n/* enable absolute positioning */\n.inner-addon {\n  position: relative;\n  color: #c6c6c6;\n}\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px;\n}\n.right-addon .glyphicon {\n  right: 0px;\n}\n/* add padding  */\n.left-addon input {\n  padding-left: 30px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.list-group {\n  margin-top: 20px;\n  font-family: \"Roboto\", sans-serif;\n  border-color: #363a8e;\n  border-radius: 3px;\n  cursor: inherit;\n}\n.pregunta_texto {\n  font-size: 30px;\n  font-family: \"Roboto\", sans-serif;\n  border-color: #363a8e;\n  border-radius: 3px;\n  cursor: inherit;\n}\n.pregunta {\n  width: 100%;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.usuario {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: black;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: transparent;\n  border-radius: 10px;\n}\n.texto {\n  font-family: \"RobotoThin\", sans-serif;\n  font-size: 20px;\n  letter-spacing: 0.05em;\n  line-height: 20px;\n}\n.icono {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #c6c6c6;\n}\n.verConversacion {\n  margin: 10px;\n}\n.botonResponder {\n  border-radius: 50px;\n  font-size: 20px;\n  line-height: 2em;\n  text-transform: uppercase;\n  padding: 10px 40px;\n  min-width: 192px;\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  color: #fff;\n  background-color: #2691C2;\n  border-color: #2691C2;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.botonResponder:hover {\n  background-color: white;\n  color: #2691C2;\n}\n.acciones {\n  margin: 1px;\n  float: right;\n}\n.mano {\n  cursor: pointer;\n  cursor: hand;\n}\n.fecha {\n  color: #9F9F9F;\n}\n/* Toggle Styles */\n#menu-toggle {\n  /*position: absolute;\n  left: -40px;*/\n}\n.btn.btn-default span.glyphicon {\n  font-size: 15px;\n  color: #c6c6c6;\n}\n.btn.btn-default span.glyphicon.glyphicon-chevron-left {\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.btn.btn-default span.glyphicon.glyphicon-chevron-left.rotate {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled {\n  padding-left: 250px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  /*left: 250px;*/\n  width: 0;\n  height: 100%;\n  margin-left: -240px;\n  overflow-y: auto;\n  /*background: #000;*/\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  width: 100%;\n}\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n  padding: 0px 15px 15px 15px;\n}\n/* Sidebar Styles */\n.sidebar-nav {\n  padding: 25px 0px 0px 0px;\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  list-style: none;\n}\n.sidebar-nav li {\n  padding: 5px 12px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n  border-radius: 25px;\n  padding: 5px;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background: rgba(255, 0, 0, 0.2);\n}\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none;\n}\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav > .sidebar-brand a {\n  color: #999999;\n}\n.sidebar-nav > .sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 250px;\n  }\n\n  #wrapper.toggled {\n    padding-left: 0;\n  }\n\n  #sidebar-wrapper {\n    width: 250px;\n    margin-left: -285px;\n  }\n\n  #wrapper.toggled #sidebar-wrapper {\n    width: 0;\n  }\n\n  #page-content-wrapper {\n    padding: 0px 20px 20px 20px;\n  }\n\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n  }\n}\n@media (max-width: 768px) {\n  .media {\n    padding-right: -20px !important;\n    padding-left: -20px !important;\n  }\n\n  .media-left img {\n    width: 64px !important;\n    height: 64px !important;\n  }\n\n  .acciones .btn {\n    padding: 5px;\n  }\n\n  .acciones .btn.btn-default span.glyphicon {\n    font-size: 14px;\n  }\n\n  .container, .container-fluid {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  body > app-root > .container {\n    width: 95% !important;\n  }\n}\n.acciones .btn-default {\n  border-color: white !important;\n  border-radius: 25px !important;\n}\n.shortcut span.glyphicon {\n  font-size: 20px;\n  color: #c6c6c6;\n  background-color: #f6f6f6;\n  padding: 10px;\n  border-radius: 100px;\n}\n.shortcut span.username {\n  padding-left: 12px;\n}\n.shortcut span.glyphicon:hover, .shortcut span.username:hover {\n  color: inherit;\n}\n.media {\n  border-right: 7px solid #f6f6f6;\n  border-bottom: 7px solid #f6f6f6;\n  margin-left: 0px !important;\n  background-color: #f9f9f959;\n  margin-top: 0px;\n  margin-bottom: 20px;\n}\nh3.media-heading {\n  /*margin-top: 15px;*/\n}\n.media-left {\n  /* padding-right: 0px; */\n  padding-left: 0px;\n}\n.media-left img {\n  width: 128px;\n  height: 128px;\n}\n.media-body {\n  padding-left: 5px;\n}\np.question-text {\n  /* min-height: 74px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9hcHAvcHJlZ3VudGFzL3ByZWd1bnRhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJlZ3VudGFzL3ByZWd1bnRhcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3NyYy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL2ZlZGUvd29ya3NwYWNlL3Jlc3BvbmRlbGUtd2ViL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtEQUFBO0FBR1I7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0E7OEVBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7QUNERjtBREdBO0VBQ0UsNkNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FERUE7RUFDRSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNFakNXO0VGa0NYLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0E7RUFDRSxtQkV4Q1c7RUZ5Q1gsV0FBQTtBQ0VGO0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBO0VBQ0UsY0VoRGdCO0VGaURoQixxQkFBQTtBQ0dGO0FEREE7RUFDRSxjRXJEVztFRnNEWCwwQkFBQTtBQ0lGO0FEREEsZ0NBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsY0UzRGM7QUQrRGxCO0FEREEsZUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNJRjtBRERBLGVBQUE7QUFDQTtFQUEwQixTQUFBO0FDSzFC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O0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFRjBGRjs7RUV4RkE7SUFDRSxZQUFBO0VGMkZGOztFRXpGQTtJQUNFLGVBQUE7RUY0RkY7O0VFMUZBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFRjZGRjs7RUUzRkE7SUFDRSxxQkFBQTtFRjhGRjtBQUNGO0FFM0ZBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtBRjZGRjtBRTFGQTtFQUNJLGVBQUE7RUFDQSxjRHhRYztFQ3lRZCx5QkR4UWtCO0VDeVFsQixhQUFBO0VBQ0Esb0JBQUE7QUY2Rko7QUUzRkE7RUFDSSxrQkFBQTtBRjhGSjtBRTNGQTtFQUNFLGNBQUE7QUY4RkY7QUUzRkE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRjhGRjtBRTVGQTtFQUNFLG9CQUFBO0FGK0ZGO0FFN0ZBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBRmdHRjtBRTdGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FGZ0dGO0FFOUZBO0VBQ0UsaUJBQUE7QUZpR0Y7QUUvRkE7RUFDRSxzQkFBQTtBRmtHRiIsImZpbGUiOiJzcmMvYXBwL3ByZWd1bnRhcy9wcmVndW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XG5AaW1wb3J0IFwiLi9fdmFyaWFibGVzLnNjc3NcIjtcblxuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1heC13aWR0aDogMzkwcHg7XG4gIC8qbWFyZ2luOiA3MHB4IGF1dG8gMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpOyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDVweDtcbn1cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9vbmV5U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybSBidXR0b24sIC5idG4uYm90b25SZXNwb25kZXIge1xuICBmb250LWZhbWlseTogXCJSb29uZXlTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cywgLCAuYnRuLmJvdG9uUmVzcG9uZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogJG1haW4tY29sb3I7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVscC1saW5rcyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5oZWxwLWxpbmtzIGEge1xuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlbHAtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbi8qIHN0eWxlIGljb24gKi9cbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogYWxpZ24gaWNvbiAqL1xuLmxlZnQtYWRkb24gLmdseXBoaWNvbiAgeyBsZWZ0OiAgMHB4O31cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHsgcmlnaHQ6IDBweDt9XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQgIHsgcGFkZGluZy1sZWZ0OiAgMzBweDsgfVxuLnJpZ2h0LWFkZG9uIGlucHV0IHsgcGFkZGluZy1yaWdodDogMzBweDsgfVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG1heC13aWR0aDogMzkwcHg7XG4gIC8qbWFyZ2luOiA3MHB4IGF1dG8gMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpOyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDVweDtcbn1cblxuLmZvcm0gaW5wdXQge1xuICBmb250LWZhbWlseTogXCJSb29uZXlTYW5zLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0gYnV0dG9uLCAuYnRuLmJvdG9uUmVzcG9uZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9vbmV5U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y1NTg1ZDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmNTU4NWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybSBidXR0b246aG92ZXIsIC5mb3JtIGJ1dHRvbjphY3RpdmUsIC5mb3JtIGJ1dHRvbjpmb2N1cywgLmJ0bi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNTU4NWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVscC1saW5rcyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhlbHAtbGlua3MgYSB7XG4gIGNvbG9yOiAjYzZjNmM2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWxwLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogI2Y1NTg1ZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2M2YzZjNjtcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgbGVmdDogMHB4O1xufVxuXG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xvcjogIzM2M2E4ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IGluaGVyaXQ7XG59XG5cbi5wcmVndW50YV90ZXh0byB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xvcjogIzM2M2E4ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IGluaGVyaXQ7XG59XG5cbi5wcmVndW50YSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi51c3VhcmlvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRleHRvIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvVGhpblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uaWNvbm8ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2M2YzZjNjtcbn1cblxuLnZlckNvbnZlcnNhY2lvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmJvdG9uUmVzcG9uZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIG1pbi13aWR0aDogMTkycHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY5MUMyO1xuICBib3JkZXItY29sb3I6ICMyNjkxQzI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzI2OTFDMjtcbn1cblxuLmFjY2lvbmVzIHtcbiAgbWFyZ2luOiAxcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1hbm8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cblxuLmZlY2hhIHtcbiAgY29sb3I6ICM5RjlGOUY7XG59XG5cbi8qIFRvZ2dsZSBTdHlsZXMgKi9cbiNtZW51LXRvZ2dsZSB7XG4gIC8qcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNDBweDsqL1xufVxuXG4uYnRuLmJ0bi1kZWZhdWx0IHNwYW4uZ2x5cGhpY29uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2M2YzZjNjtcbn1cblxuLmJ0bi5idG4tZGVmYXVsdCBzcGFuLmdseXBoaWNvbi5nbHlwaGljb24tY2hldnJvbi1sZWZ0IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5idG4uYnRuLWRlZmF1bHQgc3Bhbi5nbHlwaGljb24uZ2x5cGhpY29uLWNoZXZyb24tbGVmdC5yb3RhdGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4jd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbiN3cmFwcGVyLnRvZ2dsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKmxlZnQ6IDI1MHB4OyovXG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qYmFja2dyb3VuZDogIzAwMDsqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogLTI1MHB4O1xuICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi8qIFNpZGViYXIgU3R5bGVzICovXG4uc2lkZWJhci1uYXYge1xuICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSB7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnNpZGViYXItbmF2IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcbn1cblxuLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxuLnNpZGViYXItbmF2IGxpIGE6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuXG4uc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICN3cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xuICB9XG5cbiAgI3dyYXBwZXIudG9nZ2xlZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjg1cHg7XG4gIH1cblxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHg7XG4gIH1cblxuICAjd3JhcHBlci50b2dnbGVkICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZWRpYSB7XG4gICAgcGFkZGluZy1yaWdodDogLTIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IC0yMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVkaWEtbGVmdCBpbWcge1xuICAgIHdpZHRoOiA2NHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWNjaW9uZXMgLmJ0biB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmFjY2lvbmVzIC5idG4uYnRuLWRlZmF1bHQgc3Bhbi5nbHlwaGljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5jb250YWluZXIsIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuXG4gIGJvZHkgPiBhcHAtcm9vdCA+IC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLmFjY2lvbmVzIC5idG4tZGVmYXVsdCB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xufVxuXG4uc2hvcnRjdXQgc3Bhbi5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjYzZjNmM2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnNob3J0Y3V0IHNwYW4udXNlcm5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG59XG5cbi5zaG9ydGN1dCBzcGFuLmdseXBoaWNvbjpob3ZlciwgLnNob3J0Y3V0IHNwYW4udXNlcm5hbWU6aG92ZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1lZGlhIHtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgI2Y2ZjZmNjtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNmNmY2ZjY7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTU5O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgzLm1lZGlhLWhlYWRpbmcge1xuICAvKm1hcmdpbi10b3A6IDE1cHg7Ki9cbn1cblxuLm1lZGlhLWxlZnQge1xuICAvKiBwYWRkaW5nLXJpZ2h0OiAwcHg7ICovXG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubWVkaWEtbGVmdCBpbWcge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG59XG5cbi5tZWRpYS1ib2R5IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbnAucXVlc3Rpb24tdGV4dCB7XG4gIC8qIG1pbi1oZWlnaHQ6IDc0cHg7ICovXG59IiwiJG1haW4tY29sb3I6ICNmNTU4NWQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjYzZjNmM2O1xuJGFsdC1zZWNvbmRhcnktY29sb3I6ICNmNmY2ZjY7XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2dsb2JhbC9fdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL19mb3JtLnNjc3NcIjtcblxuLmxpc3QtZ3JvdXAge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzYzYThlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogaW5oZXJpdDtcbn1cblxuLnByZWd1bnRhX3RleHRvIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzYThlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjdXJzb3I6IGluaGVyaXQ7XG5cbn1cbi5wcmVndW50YSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi51c3VhcmlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG4udGV4dG8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1RoaW5cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmljb25vIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbi52ZXJDb252ZXJzYWNpb24ge1xuXHRtYXJnaW46MTBweDtcbn1cblxuLmJvdG9uUmVzcG9uZGVyIHtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICBtaW4td2lkdGg6IDE5MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjkxQzI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjY5MUMyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogIDIwcHg7XG59XG5cbi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMyNjkxQzI7XG59XG5cbi5hY2Npb25lcyB7XG5cdG1hcmdpbjogMXB4O1xuXHRmbG9hdDogcmlnaHQ7XG59XG5cbi5tYW5vIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IGN1cnNvcjogaGFuZDtcbn1cblxuLmZlY2hhIHtcbiAgICBjb2xvcjogIzlGOUY5Rjtcbn1cblxuLyogVG9nZ2xlIFN0eWxlcyAqL1xuI21lbnUtdG9nZ2xlIHtcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC00MHB4OyovXG59XG4uYnRuLmJ0bi1kZWZhdWx0IHNwYW4uZ2x5cGhpY29uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbn1cbi5idG4uYnRuLWRlZmF1bHQgc3Bhbi5nbHlwaGljb24uZ2x5cGhpY29uLWNoZXZyb24tbGVmdCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLmJ0bi5idG4tZGVmYXVsdCBzcGFuLmdseXBoaWNvbi5nbHlwaGljb24tY2hldnJvbi1sZWZ0LnJvdGF0ZSB7XG4gICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4jd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG4jd3JhcHBlci50b2dnbGVkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKmxlZnQ6IDI1MHB4OyovXG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjQwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAvKmJhY2tncm91bmQ6ICMwMDA7Ki9cbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi8qIFNpZGViYXIgU3R5bGVzICovXG4uc2lkZWJhci1uYXYge1xuICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSB7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjIpO1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXG4uc2lkZWJhci1uYXYgbGkgYTpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbn1cblxuLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XG4gICAgfVxuXG4gICAgI3dyYXBwZXIudG9nZ2xlZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG5cbiAgICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTI4NXB4O1xuICAgIH1cblxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcbiAgICB9XG5cbiAgICAjd3JhcHBlci50b2dnbGVkICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KSB7XG4gIC5tZWRpYSB7XG4gICAgcGFkZGluZy1yaWdodDogLTIwcHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogLTIwcHghaW1wb3J0YW50O1xuICB9XG4gIC5tZWRpYS1sZWZ0IGltZyB7XG4gICAgd2lkdGg6IDY0cHghaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjRweCFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFjY2lvbmVzIC5idG4ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuYWNjaW9uZXMgLmJ0bi5idG4tZGVmYXVsdCBzcGFuLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb250YWluZXIsIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICBib2R5ID4gYXBwLXJvb3QgPiAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYWNjaW9uZXMgLmJ0bi1kZWZhdWx0IHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHghaW1wb3J0YW50O1xufVxuXG4uc2hvcnRjdXQgc3Bhbi5nbHlwaGljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWx0LXNlY29uZGFyeS1jb2xvcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuLnNob3J0Y3V0IHNwYW4udXNlcm5hbWUge1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbn1cblxuLnNob3J0Y3V0IHNwYW4uZ2x5cGhpY29uOmhvdmVyLCAuc2hvcnRjdXQgc3Bhbi51c2VybmFtZTpob3ZlcntcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZWRpYSB7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICRhbHQtc2Vjb25kYXJ5LWNvbG9yO1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJGFsdC1zZWNvbmRhcnktY29sb3I7XG4gIG1hcmdpbi1sZWZ0OiAwcHghaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5NTk7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmgzLm1lZGlhLWhlYWRpbmcge1xuICAvKm1hcmdpbi10b3A6IDE1cHg7Ki9cbn1cbi5tZWRpYS1sZWZ0IHtcbiAgLyogcGFkZGluZy1yaWdodDogMHB4OyAqL1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcblxufVxuLm1lZGlhLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xufVxuLm1lZGlhLWJvZHkge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbnAucXVlc3Rpb24tdGV4dCB7XG4gIC8qIG1pbi1oZWlnaHQ6IDc0cHg7ICovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/preguntas/preguntas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/preguntas/preguntas.component.ts ***!
  \**************************************************/
/*! exports provided: PreguntasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasComponent", function() { return PreguntasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mercadolibre.service */ "./src/app/mercadolibre.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let PreguntasComponent = class PreguntasComponent {
    constructor(meli, user, router) {
        this.meli = meli;
        this.user = user;
        this.router = router;
        this.isLoading = false;
        this.respuesta = "";
        this.showMenu = true;
    }
    ngOnInit() {
        if (!this.user.token)
            this.router.navigate(["/"]);
        if (this.user.cantidadDeCuentas() == 0) {
            this.router.navigate(["/configuracion"]);
        }
        this.isLoading = true;
        this.meli.actualizarPreguntas(false)
            .subscribe(res => {
            this.isLoading = false;
        });
    }
    irACuentas() {
        this.router.navigate(["/list"]);
    }
    verPublicacion(item) {
        var url = item.permalink;
        window.open(url);
    }
    verUsuario(from) {
        var url = "http://www.mercadolibre.com.ar/jm/profile?id=" + from.id;
        window.open(url);
    }
    verConversacion(pregunta) {
        console.log(pregunta);
        this.meli.setPregunta(pregunta);
        // .subscribe((pregunta) => {
        //   
        // })
        this.router.navigate(["/conversacion"]);
    }
    setPregunta(pregunta) {
        this.meli.setPregunta(pregunta);
    }
    responder() {
        this.meli.responderPregunta({
            user_id_ml: this.meli.pregunta.seller_id,
            question_id: this.meli.pregunta.question_id,
            text: this.respuesta
        })
            .subscribe((respuesta) => {
            this.respuesta = "";
        }, (err) => {
            console.log(err);
        });
    }
    dameFechaArgentina(fecha) {
        var date = new Date(fecha);
        date.setHours(date.getHours() + 2);
        return date;
    }
    dameNickname(id) {
        return this.user.dameNickname(id);
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
};
PreguntasComponent.ctorParameters = () => [
    { type: _mercadolibre_service__WEBPACK_IMPORTED_MODULE_2__["MercadolibreService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PreguntasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preguntas',
        template: __webpack_require__(/*! raw-loader!./preguntas.component.html */ "./node_modules/raw-loader/index.js!./src/app/preguntas/preguntas.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('preguntaState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    height: '0',
                    margin: '1',
                    transform: 'scale(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    margin: '30',
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-out'))
            ])
        ],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./preguntas.component.scss */ "./src/app/preguntas/preguntas.component.scss")]
    })
], PreguntasComponent);



/***/ }),

/***/ "./src/app/publicacion/publicacion.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publicacion/publicacion.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2FjaW9uL3B1YmxpY2FjaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/publicacion/publicacion.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publicacion/publicacion.component.ts ***!
  \******************************************************/
/*! exports provided: PublicacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionComponent", function() { return PublicacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mercadolibre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mercadolibre.service */ "./src/app/mercadolibre.service.ts");



let PublicacionComponent = class PublicacionComponent {
    constructor(meli) {
        this.meli = meli;
    }
    ngOnInit() {
    }
};
PublicacionComponent.ctorParameters = () => [
    { type: _mercadolibre_service__WEBPACK_IMPORTED_MODULE_2__["MercadolibreService"] }
];
PublicacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicacion',
        template: __webpack_require__(/*! raw-loader!./publicacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/publicacion/publicacion.component.html"),
        styles: [__webpack_require__(/*! ./publicacion.component.css */ "./src/app/publicacion/publicacion.component.css")]
    })
], PublicacionComponent);



/***/ }),

/***/ "./src/app/recuperar-contrasena/recuperar-contrasena.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/recuperar-contrasena/recuperar-contrasena.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3VwZXJhci1jb250cmFzZW5hL3JlY3VwZXJhci1jb250cmFzZW5hLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recuperar-contrasena/recuperar-contrasena.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/recuperar-contrasena/recuperar-contrasena.component.ts ***!
  \************************************************************************/
/*! exports provided: RecuperarContrasenaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarContrasenaComponent", function() { return RecuperarContrasenaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecuperarContrasenaComponent = class RecuperarContrasenaComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecuperarContrasenaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recuperar-contrasena',
        template: __webpack_require__(/*! raw-loader!./recuperar-contrasena.component.html */ "./node_modules/raw-loader/index.js!./src/app/recuperar-contrasena/recuperar-contrasena.component.html"),
        styles: [__webpack_require__(/*! ./recuperar-contrasena.component.css */ "./src/app/recuperar-contrasena/recuperar-contrasena.component.css")]
    })
], RecuperarContrasenaComponent);



/***/ }),

/***/ "./src/app/registracion/registracion.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registracion/registracion.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n$main-color: #f5585d;\n$secondary-color: #c6c6c6;\n$alt-secondary-color: #f6f6f6;\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 390px;\n  /*margin: 70px auto 100px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/\n  text-align: center;\n  padding: 45px;\n}\n.form input {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  outline: 0;\n  width: 100%;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button, .btn.botonResponder {\n  font-family: \"RooneySans-Regular\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  outline: 0;\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 25px;\n  background: #fff;\n  border: 2px solid $main-color;\n  padding: 15px;\n  color: $main-color;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,.form button:active,.form button:focus, , .btn.botonResponder:hover {\n  background: $main-color;\n  color: #fff;\n}\n.help-links {\n  margin: 15px 0 0;\n  font-size: 12px;\n}\n.help-links a {\n  color: $secondary-color;\n  text-decoration: none;\n}\n.help-links a:hover {\n  color: $main-color;\n  text-decoration: underline;\n}\n/* enable absolute positioning */\n.inner-addon {\n    position: relative;\n    color: $secondary-color;\n}\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n/* align icon */\n.left-addon .glyphicon  { left:  0px;}\n.right-addon .glyphicon { right: 0px;}\n/* add padding  */\n.left-addon input  { padding-left:  30px; }\n.right-addon input { padding-right: 30px; }\n/* Customize the label (the container) */\n.re-checkbox {\n  /*display: block;*/\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  font-weight: 100;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.re-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.re-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 25px;\n  background-color: #eee;\n}\n/* On mouse-over, add a grey background color */\n.re-checkbox:hover input ~ .re-checkmark {\n  background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.re-checkbox input:checked ~ .re-checkmark {\n  background-color: $main-color;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.re-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.re-checkbox input:checked ~ .re-checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.re-checkbox .re-checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n/* Customize the label (the container) */\n.re-checkbox {\n  /*display: block;*/\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  font-weight: 100;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.re-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n/* Create a custom checkbox */\n.re-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 25px;\n  background-color: #eee;\n}\n/* On mouse-over, add a grey background color */\n.re-checkbox:hover input ~ .re-checkmark {\n  background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.re-checkbox input:checked ~ .re-checkmark {\n  background-color: $main-color;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.re-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n/* Show the checkmark when checked */\n.re-checkbox input:checked ~ .re-checkmark:after {\n  display: block;\n}\n/* Style the checkmark/indicator */\n.re-checkbox .re-checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.register-page {\n  width: 500px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #EF3B3A;\n}\nbody {\n  background: #76b852; /* fallback for old browsers */\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* @media (min-width: @screen-md-min) { ... } */\ndiv.logo-container > img {\n  padding-top: 40px;\n}\n@media (max-width: 500px) {\n  div.col-md-6.text-right {\n    text-align: center!important;\n  }\n}\n@media (max-width: 600px) and (max-height: 700px) {\n  div.logo-container > img {\n    padding-top: 400px;\n    width: 170px;\n  }\n}\n@media (min-height: 701px) and (max-height: 900px) {\n  div.logo-container > img {\n    padding-top: 250px;\n    width: 170px;\n  }\n}\n@media (max-width: 812px) {\n  div.col-md-6.text-right {\n    text-align: left;\n  }\n}\n/* reCaptcha styles */\n/* Medium devices (desktops, 992px and up) */\n@media (max-width: 450px) {\n  re-captcha /deep/ iframe {\n    width: 300px;\n    padding-right: 100px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFjaW9uL3JlZ2lzdHJhY2lvbi5jb21wb25lbnQuY3NzIiwic3JjL3N0eWxlcy9nbG9iYWwvX2Zvcm0uc2NzcyIsInNyYy9zdHlsZXMvZ2xvYmFsL19jaGVja2JveC5zY3NzIiwic3JjL3N0eWxlcy9nbG9iYWwvX2ZvbnQuc2NzcyIsInNyYy9zdHlsZXMvZ2xvYmFsL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUNBL0QsK0RBQStEO0FDQS9ELCtEQUErRDtBQ0EvRCwrREFBK0Q7QUNBL0Qsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUhDN0I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEI7OEVBQzRFO0VBQzVFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDZDQUE2QztFQUM3QyxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDZDQUE2QztFQUM3QyxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBRUEsZUFBZTtBQUNm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QUVBLCtDQUErQztBQUMvQztFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0EscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1QztFQUNFO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmFjaW9uL3JlZ2lzdHJhY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWwvX2Zvcm0uc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWwvX2NoZWNrYm94LnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZ2xvYmFsL19mb250LnNjc3NcIjtcblxuLnJlZ2lzdGVyLXBhZ2Uge1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDglIDAgMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250YWluZXIgLmluZm8ge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uY29udGFpbmVyIC5pbmZvIHNwYW4ge1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gIGNvbG9yOiAjRUYzQjNBO1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICM3NmI4NTI7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1tZC1taW4pIHsgLi4uIH0gKi9cbmRpdi5sb2dvLWNvbnRhaW5lciA+IGltZyB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgZGl2LmNvbC1tZC02LnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gIGRpdi5sb2dvLWNvbnRhaW5lciA+IGltZyB7XG4gICAgcGFkZGluZy10b3A6IDQwMHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA3MDFweCkgYW5kIChtYXgtaGVpZ2h0OiA5MDBweCkge1xuICBkaXYubG9nby1jb250YWluZXIgPiBpbWcge1xuICAgIHBhZGRpbmctdG9wOiAyNTBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIGRpdi5jb2wtbWQtNi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG4vKiByZUNhcHRjaGEgc3R5bGVzICovXG4vKiBNZWRpdW0gZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICByZS1jYXB0Y2hhIC9kZWVwLyBpZnJhbWUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xuQGltcG9ydCBcIi4vX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtYXgtd2lkdGg6IDM5MHB4O1xuICAvKm1hcmdpbjogNzBweCBhdXRvIDEwMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTsqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ1cHg7XG59XG4uZm9ybSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvb25leVNhbnMtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm0gYnV0dG9uLCAuYnRuLmJvdG9uUmVzcG9uZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9vbmV5U2Fucy1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybSBidXR0b246aG92ZXIsLmZvcm0gYnV0dG9uOmFjdGl2ZSwuZm9ybSBidXR0b246Zm9jdXMsICwgLmJ0bi5ib3RvblJlc3BvbmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICRtYWluLWNvbG9yO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlbHAtbGlua3Mge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaGVscC1saW5rcyBhIHtcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWxwLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogJG1haW4tY29sb3I7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBlbmFibGUgYWJzb2x1dGUgcG9zaXRpb25pbmcgKi9cbi5pbm5lci1hZGRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG4vKiBzdHlsZSBpY29uICovXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIGFsaWduIGljb24gKi9cbi5sZWZ0LWFkZG9uIC5nbHlwaGljb24gIHsgbGVmdDogIDBweDt9XG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7IHJpZ2h0OiAwcHg7fVxuXG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0ICB7IHBhZGRpbmctbGVmdDogIDMwcHg7IH1cbi5yaWdodC1hZGRvbiBpbnB1dCB7IHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcbkBpbXBvcnQgXCIuL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xuLnJlLWNoZWNrYm94IHtcbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLnJlLWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLnJlLWNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5yZS1jaGVja2JveDpob3ZlciBpbnB1dCB+IC5yZS1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5yZS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLnJlLWNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLnJlLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4ucmUtY2hlY2tib3ggLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDhweDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcbkBpbXBvcnQgXCIuL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xuLnJlLWNoZWNrYm94IHtcbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLnJlLWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLnJlLWNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5yZS1jaGVja2JveDpob3ZlciBpbnB1dCB+IC5yZS1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5yZS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLnJlLWNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLnJlLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAucmUtY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4ucmUtY2hlY2tib3ggLnJlLWNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDhweDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbiIsIiRtYWluLWNvbG9yOiAjZjU1ODVkO1xuJHNlY29uZGFyeS1jb2xvcjogI2M2YzZjNjtcbiRhbHQtc2Vjb25kYXJ5LWNvbG9yOiAjZjZmNmY2O1xuIl19 */"

/***/ }),

/***/ "./src/app/registracion/registracion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registracion/registracion.component.ts ***!
  \********************************************************/
/*! exports provided: RegistracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistracionComponent", function() { return RegistracionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegistracionComponent = class RegistracionComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.account = {
            name: '',
            mail: '',
            password: '',
            response_captcha: null
        };
    }
    ngOnInit() {
    }
    registrar() {
        //this.account.response_captcha = this.captcha.getResponse();
        this.user.signup(this.account).subscribe((resp) => {
            if (resp.success == true) {
                this.user.login(this.account).subscribe((resp) => {
                    if (resp.success == true) {
                        this.router.navigate(["/preguntas"]);
                    }
                    else {
                        //this.captcha.reset();
                        //this.mensajero.mostrarMensajeError(resp.json().msg)
                    }
                }, (err) => {
                    console.log(err);
                    // this.captcha.reset();
                    //this.mensajero.mostrarMensajeError("Falló en el servidor")
                });
            }
            else {
                //this.mensajero.mostrarMensajeError(resp.json().msg)
            }
        }, (err) => {
            console.log(err.message);
            //this.mensajero.mostrarMensajeError("Falló en el servidor")
        });
    }
};
RegistracionComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegistracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registracion',
        template: __webpack_require__(/*! raw-loader!./registracion.component.html */ "./node_modules/raw-loader/index.js!./src/app/registracion/registracion.component.html"),
        styles: [__webpack_require__(/*! ./registracion.component.css */ "./src/app/registracion/registracion.component.css")]
    })
], RegistracionComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





////import * as SocketIO from 'socket.io-client';
let UserService = class UserService {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        // socket: any
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api;
        this.urlSocket = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].socketApi;
    }
    init() {
        this.loading = true;
        if (localStorage.getItem('_user')) {
            this.cargarUsuario(localStorage.getItem('_user'), localStorage.getItem('token'));
        }
        if (localStorage.getItem('cuentas')) {
            this.cuentas = JSON.parse(localStorage.getItem("cuentas"));
            this.loading = false;
        }
    }
    hasUser() {
        return localStorage.getItem('_user');
    }
    dameNickname(id) {
        var aux = "a";
        this.cuentas.forEach((cuenta) => {
            if (cuenta.id_ml == id)
                aux = cuenta.nickname;
        });
        return aux;
    }
    cargarUsuario(user, token) {
        this.loading = true;
        this._user = user;
        this.token = token;
        this.actualizarCuentas({});
        localStorage.setItem('_user', this._user);
        localStorage.setItem('token', this.token);
        //this.socket = SocketIO(this.urlSocket).connect();
        //this.socket.emit("hola", this._user)
        //this.socket.on('actualizar', (mensaje) => {
        //    this.actualizarCuentas({})
        //})
    }
    getApi() {
        return this.url;
    }
    login(accountInfo) {
        accountInfo = this.cargarHeadersAutorizations(accountInfo);
        let obs = this.api.post(this.url, 'login/authenticate_web', accountInfo);
        obs.subscribe((res) => {
            if (res.success == true) {
                var self = this;
                this.loading = true;
                self.cargarUsuario(accountInfo.name, res.token);
            }
            else {
                console.log(res);
                console.log("TODO - Falla LOGIN");
            }
        });
        return obs;
    }
    recuperarContrasena(accountInfo) {
        accountInfo = this.cargarHeadersAutorizations(accountInfo);
        return this.api.post(this.url, 'login/recuperarContrasena', accountInfo);
    }
    signup(accountInfo) {
        accountInfo = this.cargarHeadersAutorizations(accountInfo);
        let seq = this.api.post(this.url, 'login/signup', accountInfo);
        seq.subscribe((res) => {
            if (res.status == 'success') {
                this.login(accountInfo);
            }
        }, err => {
            console.error('ERROR', err);
        });
        return seq;
    }
    actualizarCuentas(accountInfo) {
        accountInfo = this.cargarHeadersAutorizations(accountInfo);
        let seq = this.api.get(this.url, 'cuentas/cuentas', {}, accountInfo);
        seq.subscribe((res) => {
            if (res.success == true) {
                this.cuentas = res.data;
                localStorage.setItem('cuentas', JSON.stringify(this.cuentas));
                this.loading = false;
            }
            else {
                console.error('ERROR ACTUALIZANDO CUENTAS', res);
                return res.msg;
            }
        }, err => {
            console.error('ERROR', err);
            return err.msg;
        });
        return seq;
    }
    dameToken(ml_id) {
        if (this.cuentas != null) {
            this.cuentas.forEach((cuenta) => {
                if (cuenta.id_ml == ml_id) {
                    return cuenta.token.valueOf();
                }
            });
        }
        return null;
    }
    logout() {
        this._user = null;
        this.token = null;
        localStorage.removeItem('_user');
        localStorage.removeItem('token');
    }
    cargarHeadersAutorizations(options) {
        if (!options) {
            options = {};
        }
        if (this.token) {
            options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.token });
        }
        return options;
    }
    cantidadDeCuentas() {
        if (this.cuentas) {
            return this.cuentas.length;
        }
        return 0;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    api: 'https://us-central1-notiml.cloudfunctions.net',
    socketApi: 'https://api.respondele.com/',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fede/workspace/respondele-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map