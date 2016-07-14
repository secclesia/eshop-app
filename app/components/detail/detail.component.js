System.register(['angular2/core', 'angular2/router', '../../models/product/product.model', '../../repositories/product/product.repository', '../../directives/product-detail/product-detail.directive', '../_shared/sidenav/sidenav.component', '../../services/cart/cart.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_model_1, product_repository_1, product_detail_directive_1, sidenav_component_1, cart_service_1;
    var DetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_model_1_1) {
                product_model_1 = product_model_1_1;
            },
            function (product_repository_1_1) {
                product_repository_1 = product_repository_1_1;
            },
            function (product_detail_directive_1_1) {
                product_detail_directive_1 = product_detail_directive_1_1;
            },
            function (sidenav_component_1_1) {
                sidenav_component_1 = sidenav_component_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }],
        execute: function() {
            DetailComponent = (function () {
                function DetailComponent(_routeParams, _productRepository, _cartService) {
                    this._routeParams = _routeParams;
                    this._productRepository = _productRepository;
                    this._cartService = _cartService;
                    this.product = new product_model_1.Product();
                }
                DetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.selectedId = this._routeParams.get('id');
                    this._productRepository.getProduct(this.selectedId).subscribe(function (data) { return _this.product = data; }, function (error) { return console.log(error); });
                    window.scrollTo(0, 0);
                };
                DetailComponent.prototype.addToCart = function (prod) {
                    this._cartService.agregarProducto(prod);
                };
                DetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/detail/detail.html',
                        directives: [product_detail_directive_1.ProductDetailDirective, sidenav_component_1.SideNavComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [product_repository_1.ProductRepository]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, product_repository_1.ProductRepository, cart_service_1.CartService])
                ], DetailComponent);
                return DetailComponent;
            }());
            exports_1("DetailComponent", DetailComponent);
        }
    }
});
//# sourceMappingURL=detail.component.js.map