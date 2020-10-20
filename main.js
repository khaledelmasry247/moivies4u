(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\covid19\application\src\main.ts */"zUnb");


/***/ }),

/***/ "06+7":
/*!******************************************************!*\
  !*** ./src/app/now-playing/now-playing.component.ts ***!
  \******************************************************/
/*! exports provided: NowPlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingComponent", function() { return NowPlayingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "NFrB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





function NowPlayingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imgsrc + movie_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 1, currentPage: a2, totalItems: a3 }; };
class NowPlayingComponent {
    constructor(_AuthServiceService) {
        this._AuthServiceService = _AuthServiceService;
        this.page = 1;
        this.imgsrc = 'https://image.tmdb.org/t/p/w500/';
        //  the first fire which work when open page the default value of page is 1
        this.getPopularMovies(this.page);
        console.log(this.page);
    }
    // function which sent data to api .it need the number of page every Sending
    getPopularMovies(page) {
        this._AuthServiceService.Now_playing(page).subscribe((res) => {
            console.log(res.results);
            this.playing_movies = res.results;
            this.totalRecords = res.total_pages;
        });
    }
    // function which get page number and sent it to the function that take page number
    getPagesIn(page) {
        this.page = page;
        this.getPopularMovies(this.page);
    }
    ngOnInit() {
    }
}
NowPlayingComponent.ɵfac = function NowPlayingComponent_Factory(t) { return new (t || NowPlayingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"])); };
NowPlayingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NowPlayingComponent, selectors: [["app-now-playing"]], decls: 9, vars: 7, consts: [[1, "mt-5", "pt-5"], [1, "container"], [1, "row"], ["class", "col-md-3    ", 4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "col-md-8", "mx-auto"], ["id", "listing_pagination", "maxSize", "7", "directionLinks", "true", 3, "pageChange"], [1, "col-md-3"], [1, "item", "card", "m-2"], [1, "img-fluid", 3, "src"], [1, "text-center"]], template: function NowPlayingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NowPlayingComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NowPlayingComponent_Template_pagination_controls_pageChange_8_listener($event) { return ctx.getPagesIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.playing_movies, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.page, ctx.totalRecords)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdy1wbGF5aW5nL25vdy1wbGF5aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NowPlayingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-now-playing',
                templateUrl: './now-playing.component.html',
                styleUrls: ['./now-playing.component.scss']
            }]
    }], function () { return [{ type: _auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "348/":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MoviesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 2, vars: 0, template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "movies works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "NFrB");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-typed-js */ "pRTP");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search.pipe */ "pDcK");
/* harmony import */ var _cut_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cut.pipe */ "z29X");










function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgsrc + movie_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.vote_average);
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "cut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, movie_r4.overview));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imgsrc + movie_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.vote_average);
} }
const _c0 = function () { return ["Welcome", "Millions of movies", "TV shows and people to discover", "Explore now."]; };
const _c1 = function () { return ["Whats popular"]; };
const _c2 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 1, currentPage: a2, totalItems: a3 }; };
class HomeComponent {
    constructor(_AuthServiceService, _NgwWowService) {
        this._AuthServiceService = _AuthServiceService;
        this._NgwWowService = _NgwWowService;
        this.imgsrc = 'https://image.tmdb.org/t/p/w500/';
        this.page = 1;
        this.slideConfig = { "slidesToShow": 5, 'autoplaySpeed': 4000, "slidesToScroll": 4, 'autoplay': true };
        this.getMovies(this.page);
        this._NgwWowService.init();
        this._AuthServiceService.getAllDetails().subscribe((res) => {
            this.AllMovies = res.results;
        });
    }
    getMovies(data) {
        this._AuthServiceService.getAllMovies(data).subscribe((res) => {
            this.movies = res.results;
            this.totalRecords = res.total_pages;
        });
    }
    getPagesIn(pageNo) {
        this.page = pageNo;
        this.getMovies(this.page);
    }
    ngOnInit() {
        this._NgwWowService.init();
    }
    reset() {
        this._NgwWowService.init();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 83, vars: 20, consts: [[1, "search-section"], [1, "container"], [1, "row"], [3, "typeSpeed", "loop", "strings"], [1, "typing"], ["data-wow-duration", "2s", "data-wow-delay", ".1s", 1, "popular", "mt-5", "overflow-auto"], [1, "container", "bg-white"], [1, "col-md-3"], [1, "carousel", 2, "width", "100%", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "col-md-4  position-relative", 4, "ngFor", "ngForOf"], [1, "mt-2", "pt-5"], [1, "row", "position-relative"], [1, "col-md-12", "offset-5", "bg-info"], ["class", "col-md-4  wow", 4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "col-md-8", "mx-auto"], ["id", "listing_pagination", "maxSize", "7", "directionLinks", "true", 3, "pageChange"], [1, "footer"], [1, "container", "m-auto", "bg-light", "p-5"], [1, "col-md-4"], [1, "col-2"], ["ngxSlickItem", "", 1, "col-md-4", "position-relative"], [1, "img-fluid", 3, "src"], [1, "text-center", "p-2"], [1, "vote_averge"], [1, "col-md-4", "wow"], [1, "item", "card", "my-2", "position-relative"], [1, "overlay", "position-absolute", "text-center"], [1, "text-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-typed-js", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-typed-js", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-slick-carousel", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 6, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 10, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "pagination-controls", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HomeComponent_Template_pagination_controls_pageChange_26_listener($event) { return ctx.getPagesIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "The Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About TmDb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Support Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "System Anaysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "GET INVOLVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Contribution Bible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3rd Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Support Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Add New TV show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Guidelines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Discussions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Leaderboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "LEGAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "API Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("typeSpeed", 150)("loop", true)("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("typeSpeed", 150)("loop", true)("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 12, ctx.movies, ctx.item), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c2, ctx.page, ctx.totalRecords)));
    } }, directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_3__["NgxTypedJsComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickItemDirective"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"], _cut_pipe__WEBPACK_IMPORTED_MODULE_8__["CutPipe"]], styles: ["body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  background-color: #1A86B5;\n}\n\n.search-section[_ngcontent-%COMP%] {\n  height: 50vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n.search-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  background-image: url('zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg');\n  position: absolute;\n  height: 50vh;\n  background-size: cover;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  border: 0px;\n}\n\n.search-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .search-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffff;\n}\n\n.vote_averge[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #224141;\n  position: absolute;\n  top: -10px;\n  right: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffff;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  top: 100%;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  z-index: 333;\n}\n\n.card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: transform 0.75s ease-out;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  top: 0px;\n  transition: top 0.75s ease-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slick-next[_ngcontent-%COMP%] {\n  color: royalblue !important;\n}\n\n.home-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #70C8B0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL21haW4tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0dVO0FESlo7O0FBR0E7RUFDRSxZQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFSTtFQUVJLHdEQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFY7O0FBRVc7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQWI7O0FBRVc7RUFDSCxZQzNCRDtBRDJCUDs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDRixZQzVDTztBRHdDUDs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpIOztBQVFBO0VBRUUsZ0JBQUE7RUFFQSxvQ0FBQTtBQVBGOztBQVNJO0VBRUcscUJBQUE7QUFSUDs7QUFXSztFQUVDLFFBQUE7RUFFQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWE47O0FBc0JBO0VBQ0UsMkJBQUE7QUFuQkY7O0FBcUJBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEJBOztBQXlCQTtFQU1FLHlCQ2xHWTtBRHVFZDs7QUFzQkU7RUFDTSxpQkFBQTtBQXBCUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0Jy4vbWFpbi1jb2xvcic7XHJcbmJvZHkgLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9wdWxhci1iZztcclxufVxyXG4uc2VhcmNoLXNlY3Rpb257XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy96cWttVFh6amtBZ1htRVdMUnNZNFVwVFdDZW8uanBnJyk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaDEsIGgye1xyXG4gICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG4udm90ZV9hdmVyZ2V7XHJcbiAgd2lkdGg6NDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCA2NSwgNjUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6LTEwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmNvbG9yOiR3aGl0ZTtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgkd2hpdGUsICRhbHBoYTogLjYpO1xyXG4gIHRvcDoxMDAlO1xyXG4gICByaWdodDogMHB4O1xyXG4gICBsZWZ0OiAwcHg7XHJcbiAgIGJvdHRvbTowcHg7XHJcbiAgIHotaW5kZXg6IDMzMztcclxuIFxyXG4gfVxyXG4gXHJcbi5jYXJke1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNzVzIGVhc2Utb3V0O1xyXG5cclxuICAgICY6aG92ZXJ7XHJcblxyXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxuXHJcbiAgICAgLm92ZXJsYXl7XHJcblxyXG4gICAgICB0b3A6MHB4O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogdG9wIC43NXMgZWFzZS1vdXQ7ICBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuICBcclxuXHJcbn1cclxuXHJcbi5zbGljay1uZXh0e1xyXG4gIGNvbG9yOiByb3lhbGJsdWUgIWltcG9ydGFudDtcclxufVxyXG4uaG9tZS1zZWFyY2gge1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOi0xMDBweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgcmlnaHQ6IDI1MHB4O1xyXG4vLyAgIHRvcDoxMDBweDtcclxuLy8gfVxyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gIHVsIGxpe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG4gICAgICBcclxuXHJcbiAgfVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItY29sb3I7XHJcbn0iLCIkd2hpdGU6I2ZmZmY7XHJcbiRuYXYtY29sb3I6IzAzMjU0MTtcclxuJGJvZHktYmc6IzE3QTJCQTtcclxuJGJvZHktY29sb3I6IzAzMjU0MTtcclxuJGJnLWRldGFpbHM6cmdiYSgxMzgsIDcxLCA3MSwgMC4xKTtcclxuJGRldGFpbHMtY29sb3I6IzJEQkJDRjtcclxuJHBvcHVsYXItYmc6IzFBODZCNTtcclxuJGJsYWNrOmJsYWNrO1xyXG4kZm9vdGVyLWNvbG9yOiM3MEM4QjA7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }, { type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B0uw":
/*!**********************************************************!*\
  !*** ./src/app/display-movie/display-movie.component.ts ***!
  \**********************************************************/
/*! exports provided: DisplayMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMovieComponent", function() { return DisplayMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DisplayMovieComponent {
    constructor() { }
    ngOnInit() {
    }
}
DisplayMovieComponent.ɵfac = function DisplayMovieComponent_Factory(t) { return new (t || DisplayMovieComponent)(); };
DisplayMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayMovieComponent, selectors: [["app-display-movie"]], decls: 2, vars: 0, template: function DisplayMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "display-movie works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktbW92aWUvZGlzcGxheS1tb3ZpZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-movie',
                templateUrl: './display-movie.component.html',
                styleUrls: ['./display-movie.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GRcQ":
/*!*****************************************************!*\
  !*** ./src/app/tv/air-today/air-today.component.ts ***!
  \*****************************************************/
/*! exports provided: AirTodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirTodayComponent", function() { return AirTodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AirTodayComponent {
    constructor() { }
    ngOnInit() {
    }
}
AirTodayComponent.ɵfac = function AirTodayComponent_Factory(t) { return new (t || AirTodayComponent)(); };
AirTodayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirTodayComponent, selectors: [["app-air-today"]], decls: 2, vars: 0, template: function AirTodayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "air-today works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2L2Fpci10b2RheS9haXItdG9kYXkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirTodayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-air-today',
                templateUrl: './air-today.component.html',
                styleUrls: ['./air-today.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LBoM":
/*!**********************************************!*\
  !*** ./src/app/popular/popular.component.ts ***!
  \**********************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "NFrB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search.pipe */ "pDcK");








const _c0 = function (a1) { return ["/movieDetails", a1]; };
function PopularComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movie_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imgsrc + movie_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.release_date);
} }
const _c1 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 1, currentPage: a2, totalItems: a3 }; };
class PopularComponent {
    constructor(_AuthServiceService) {
        this._AuthServiceService = _AuthServiceService;
        this.page = 1;
        this.imgsrc = 'https://image.tmdb.org/t/p/w500/';
        //  the first fire which work when open page the default value of page is 1
        this.getPopularMovies(this.page);
        console.log(this.page);
    }
    // function which sent data to api .it need the number of page every Sending
    getPopularMovies(page) {
        this._AuthServiceService.popular_movies(page).subscribe((res) => {
            console.log(res.results);
            this.popular_movies = res.results;
            this.totalRecords = res.total_pages;
        });
    }
    // function which get page number and sent it to the function that take page number
    getPagesIn(page) {
        this.page = page;
        this.getPopularMovies(this.page);
    }
    getinfo(info) {
        console.log(info.value);
    }
    ngOnInit() {
    }
}
PopularComponent.ɵfac = function PopularComponent_Factory(t) { return new (t || PopularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"])); };
PopularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularComponent, selectors: [["app-popular"]], decls: 14, vars: 12, consts: [[1, "mt-5", "pt-5"], [1, "container"], [1, "position-absolute", "popular-search"], ["type", "text", "size", "30", "placeholder", " Enter Search Movie", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "wow"], ["class", "col-md-3 wow ", 4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "col-md-8", "mx-auto"], ["id", "listing_pagination", "maxSize", "7", "directionLinks", "true", 3, "pageChange"], [1, "col-md-3", "wow"], [1, "item", "card", "m-2", 3, "routerLink"], [1, "img-fluid", 3, "src"], [1, "text-center"]], template: function PopularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopularComponent_Template_input_ngModelChange_4_listener($event) { return ctx.item = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopularComponent_div_7_Template, 7, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PopularComponent_Template_pagination_controls_pageChange_13_listener($event) { return ctx.getPagesIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.popular_movies, ctx.item), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx.page, ctx.totalRecords)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #1A86B5;\n}\n\n.popular-search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 250px;\n  top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdWxhci9wb3B1bGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL21haW4tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHlCQ0dRO0FESlo7O0FBR0E7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wb3B1bGFyL3BvcHVsYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0Jy4uL2hvbWUvbWFpbi1jb2xvcic7XHJcbmJvZHl7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokcG9wdWxhci1iZztcclxufVxyXG4ucG9wdWxhci1zZWFyY2gge1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNTBweDtcclxuICAgIHRvcDoxMDBweDtcclxufSIsIiR3aGl0ZTojZmZmZjtcclxuJG5hdi1jb2xvcjojMDMyNTQxO1xyXG4kYm9keS1iZzojMTdBMkJBO1xyXG4kYm9keS1jb2xvcjojMDMyNTQxO1xyXG4kYmctZGV0YWlsczpyZ2JhKDEzOCwgNzEsIDcxLCAwLjEpO1xyXG4kZGV0YWlscy1jb2xvcjojMkRCQkNGO1xyXG4kcG9wdWxhci1iZzojMUE4NkI1O1xyXG4kYmxhY2s6YmxhY2s7XHJcbiRmb290ZXItY29sb3I6IzcwQzhCMDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popular',
                templateUrl: './popular.component.html',
                styleUrls: ['./popular.component.scss']
            }]
    }], function () { return [{ type: _auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "NFrB":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthServiceService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    getAllDetails() {
        return this._HttpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=d1f1d4a56129ac167e61a02a7386468a&language=en-US&page=1');
    }
    //  pagination method
    getAllMovies(page) {
        let httpUrlMovies = this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);
        return httpUrlMovies;
    }
    popular_movies(page) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);
    }
    Now_playing(page) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);
    }
    up_coming(page) {
        return this._HttpClient.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);
    }
    getMovieDetails(movie_id) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US`);
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RZyK":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignINComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignINComponent", function() { return SignINComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SignINComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignINComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignINComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.signIn = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
        this.wowService.init();
    }
    ngOnInit() {
    }
}
SignINComponent.ɵfac = function SignINComponent_Factory(t) { return new (t || SignINComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"])); };
SignINComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignINComponent, selectors: [["app-sign-in"]], decls: 17, vars: 7, consts: [[1, "sigin-section", "mt-5", "bg-info", "pt-5"], [1, "container", "w-50", "pm-5"], [1, "text-center", "mb-4"], [3, "formGroup"], [1, "row", "w-75", "m-auto"], [1, "col-md-12"], ["data-wow-delay", "0.5s", 1, "form-group", "wow"], ["type", "text", "formControlName", "email", "placeholder", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "password", "placeholder", "password", 1, "form-control"], ["data-wow-delay", "0.5s", "type", "submit", 1, "btn", "btn-info", "m-3", "wow"], [1, "text-danger"]], template: function SignINComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SignINComponent_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignINComponent_p_14_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-valid", ctx.signIn.get("email").errors == null && ctx.signIn.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signIn.get("email").errors != null && ctx.signIn.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-valid", ctx.signIn.get("password").errors == null && ctx.signIn.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signIn.get("password").errors != null && ctx.signIn.get("password").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #17A2BA;\n  height: 100vh;\n}\n\n.sigin-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-family: \"lato\";\n}\n\n.sigin-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 20px;\n  font-family: \"lato\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL21haW4tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHlCQ0ZLO0VESUwsYUFBQTtBQUhKOztBQU9FO0VBQ0UsWUNYRztFRGNELG1CQUFBO0FBTk47O0FBV0U7RUFJSSxlQUFBO0VBQ0EsbUJBQUE7QUFaTiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQnLi4vaG9tZS9tYWluLWNvbG9yJztcclxuXHJcbmJvZHl7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokYm9keS1iZyA7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgfVxyXG4uc2lnaW4tc2VjdGlvbiB7XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgZm9udDoge1xyXG4gICAgICBmYW1pbHk6ICdsYXRvJztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG5cclxuICAgIGZvbnQ6IHtcclxuXHJcbiAgICAgIHNpemU6IDIwcHg7XHJcbiAgICAgIGZhbWlseTonbGF0bydcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCIkd2hpdGU6I2ZmZmY7XHJcbiRuYXYtY29sb3I6IzAzMjU0MTtcclxuJGJvZHktYmc6IzE3QTJCQTtcclxuJGJvZHktY29sb3I6IzAzMjU0MTtcclxuJGJnLWRldGFpbHM6cmdiYSgxMzgsIDcxLCA3MSwgMC4xKTtcclxuJGRldGFpbHMtY29sb3I6IzJEQkJDRjtcclxuJHBvcHVsYXItYmc6IzFBODZCNTtcclxuJGJsYWNrOmJsYWNrO1xyXG4kZm9vdGVyLWNvbG9yOiM3MEM4QjA7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignINComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'application';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YgZY":
/*!********************************!*\
  !*** ./src/app/mytime.pipe.ts ***!
  \********************************/
/*! exports provided: MytimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytimePipe", function() { return MytimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MytimePipe {
    transform(value) {
        if (value > 0 && (value / 60) < 1) {
            return value + 'minutes';
        }
        else {
            return (value / 60) + 'hours';
        }
    }
}
MytimePipe.ɵfac = function MytimePipe_Factory(t) { return new (t || MytimePipe)(); };
MytimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mytime", type: MytimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MytimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'mytime'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "dsE5");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "RZyK");
/* harmony import */ var _on_tv_on_tv_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./on-tv/on-tv.component */ "cfCN");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _popular_popular_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popular/popular.component */ "LBoM");
/* harmony import */ var _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./now-playing/now-playing.component */ "06+7");
/* harmony import */ var _upcomimg_upcomimg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upcomimg/upcomimg.component */ "xtYS");
/* harmony import */ var _tv_air_today_air_today_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tv/air-today/air-today.component */ "GRcQ");
/* harmony import */ var _tv_top_related_top_related_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tv/top-related/top-related.component */ "wGaC");
/* harmony import */ var _movies_details_movies_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./movies-details/movies-details.component */ "z0C0");
/* harmony import */ var _mytime_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mytime.pipe */ "YgZY");
/* harmony import */ var _display_movie_display_movie_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./display-movie/display-movie.component */ "B0uw");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search.pipe */ "pDcK");
/* harmony import */ var _cut_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cut.pipe */ "z29X");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-typed-js */ "pRTP");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_24__["NgxTypedJsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignINComponent"],
        _on_tv_on_tv_component__WEBPACK_IMPORTED_MODULE_12__["OnTvComponent"],
        _movies_movies_component__WEBPACK_IMPORTED_MODULE_13__["MoviesComponent"],
        _popular_popular_component__WEBPACK_IMPORTED_MODULE_14__["PopularComponent"],
        _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_15__["NowPlayingComponent"],
        _upcomimg_upcomimg_component__WEBPACK_IMPORTED_MODULE_16__["UpcomimgComponent"],
        _tv_air_today_air_today_component__WEBPACK_IMPORTED_MODULE_17__["AirTodayComponent"],
        _tv_top_related_top_related_component__WEBPACK_IMPORTED_MODULE_18__["TopRelatedComponent"],
        _movies_details_movies_details_component__WEBPACK_IMPORTED_MODULE_19__["MoviesDetailsComponent"],
        _mytime_pipe__WEBPACK_IMPORTED_MODULE_20__["MytimePipe"],
        _display_movie_display_movie_component__WEBPACK_IMPORTED_MODULE_21__["DisplayMovieComponent"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"],
        _cut_pipe__WEBPACK_IMPORTED_MODULE_23__["CutPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_24__["NgxTypedJsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignINComponent"],
                    _on_tv_on_tv_component__WEBPACK_IMPORTED_MODULE_12__["OnTvComponent"],
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_13__["MoviesComponent"],
                    _popular_popular_component__WEBPACK_IMPORTED_MODULE_14__["PopularComponent"],
                    _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_15__["NowPlayingComponent"],
                    _upcomimg_upcomimg_component__WEBPACK_IMPORTED_MODULE_16__["UpcomimgComponent"],
                    _tv_air_today_air_today_component__WEBPACK_IMPORTED_MODULE_17__["AirTodayComponent"],
                    _tv_top_related_top_related_component__WEBPACK_IMPORTED_MODULE_18__["TopRelatedComponent"],
                    _movies_details_movies_details_component__WEBPACK_IMPORTED_MODULE_19__["MoviesDetailsComponent"],
                    _mytime_pipe__WEBPACK_IMPORTED_MODULE_20__["MytimePipe"],
                    _display_movie_display_movie_component__WEBPACK_IMPORTED_MODULE_21__["DisplayMovieComponent"],
                    _search_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchPipe"],
                    _cut_pipe__WEBPACK_IMPORTED_MODULE_23__["CutPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                    ngx_typed_js__WEBPACK_IMPORTED_MODULE_24__["NgxTypedJsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cfCN":
/*!******************************************!*\
  !*** ./src/app/on-tv/on-tv.component.ts ***!
  \******************************************/
/*! exports provided: OnTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTvComponent", function() { return OnTvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OnTvComponent {
    constructor() { }
    ngOnInit() {
    }
}
OnTvComponent.ɵfac = function OnTvComponent_Factory(t) { return new (t || OnTvComponent)(); };
OnTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnTvComponent, selectors: [["app-on-tv"]], decls: 2, vars: 0, template: function OnTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "on-tv works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uLXR2L29uLXR2LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnTvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-on-tv',
                templateUrl: './on-tv.component.html',
                styleUrls: ['./on-tv.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dsE5":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SignUpComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Firt Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " repassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor() {
    }
    ngOnInit() {
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'repassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    getRegisterDate(data) {
        console.log(data);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 29, vars: 16, consts: [[1, "register-section"], [1, "container", "p-5", "py-5", "w-50"], [1, "mb-5", "text-center"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "formControlName", "first_name", "placeholder", "first name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "last_name", "placeholder", "last name", 1, "form-control"], [1, "col-md-12"], ["type", "text", "formControlName", "email", "placeholder", "email", 1, "form-control"], ["type", "text", "formControlName", "password", "placeholder", "password", 1, "form-control"], ["type", "text", "formControlName", "repassword", "placeholder", " repassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "m-3"], [1, "text-danger"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registeration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_5_listener() { return ctx.getRegisterDate(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignUpComponent_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignUpComponent_p_14_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignUpComponent_p_18_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_p_22_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignUpComponent_p_26_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.register.get("first_name").errors == null && ctx.register.get("first_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("first_name").errors != null && ctx.register.get("first_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.register.get("last_name").errors == null && ctx.register.get("last_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("last_name").errors != null && ctx.register.get("last_name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.register.get("email").errors == null && ctx.register.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("email").errors != null && ctx.register.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.register.get("password").errors == null && ctx.register.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("password").errors != null && ctx.register.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.register.get("repassword").errors == null && ctx.register.get("repassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("repassword").errors != null && ctx.register.get("repassword").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #17A2BA;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL21haW4tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHlCQ0RLO0VER0wsYUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCcuLi9ob21lL21haW4tY29sb3InO1xyXG5ib2R5e1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6JGJvZHktYmcgO1xyXG4gICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgIH0iLCIkd2hpdGU6I2ZmZmY7XHJcbiRuYXYtY29sb3I6IzAzMjU0MTtcclxuJGJvZHktYmc6IzE3QTJCQTtcclxuJGJvZHktY29sb3I6IzAzMjU0MTtcclxuJGJnLWRldGFpbHM6cmdiYSgxMzgsIDcxLCA3MSwgMC4xKTtcclxuJGRldGFpbHMtY29sb3I6IzJEQkJDRjtcclxuJHBvcHVsYXItYmc6IzFBODZCNTtcclxuJGJsYWNrOmJsYWNrO1xyXG4kZm9vdGVyLWNvbG9yOiM3MEM4QjA7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 62, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "sr-only"], ["routerLink", "/sign-in", 1, "nav-link"], ["routerLink", "/sign-up", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "/popular", 1, "dropdown-item"], ["routerLink", "/Now_playing", 1, "dropdown-item"], ["routerLink", "/upcaming", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cima4u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\nMovies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Now Playing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "upcaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\nTv shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\nPeople ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\nmore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #032541 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNBLG9DQUFBO0FBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCcuLi9ob21lL21haW4tY29sb3InO1xyXG4ubmF2YmFye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yICAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pDcK":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipe {
    transform(AllMovies, item) {
        if (item == undefined) {
            return AllMovies;
        }
        return AllMovies.filter(function (AllMovies) {
            return AllMovies.title.includes(item);
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "dsE5");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "RZyK");
/* harmony import */ var _popular_popular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popular/popular.component */ "LBoM");
/* harmony import */ var _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./now-playing/now-playing.component */ "06+7");
/* harmony import */ var _upcomimg_upcomimg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcomimg/upcomimg.component */ "xtYS");
/* harmony import */ var _movies_details_movies_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies-details/movies-details.component */ "z0C0");











const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'popular', component: _popular_popular_component__WEBPACK_IMPORTED_MODULE_5__["PopularComponent"] },
    { path: 'movieDetails/:id', component: _movies_details_movies_details_component__WEBPACK_IMPORTED_MODULE_8__["MoviesDetailsComponent"] },
    { path: 'Now_playing', component: _now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_6__["NowPlayingComponent"] },
    { path: 'upcaming', component: _upcomimg_upcomimg_component__WEBPACK_IMPORTED_MODULE_7__["UpcomimgComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignINComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wGaC":
/*!*********************************************************!*\
  !*** ./src/app/tv/top-related/top-related.component.ts ***!
  \*********************************************************/
/*! exports provided: TopRelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRelatedComponent", function() { return TopRelatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TopRelatedComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopRelatedComponent.ɵfac = function TopRelatedComponent_Factory(t) { return new (t || TopRelatedComponent)(); };
TopRelatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopRelatedComponent, selectors: [["app-top-related"]], decls: 2, vars: 0, template: function TopRelatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "top-related works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2L3RvcC1yZWxhdGVkL3RvcC1yZWxhdGVkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopRelatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-related',
                templateUrl: './top-related.component.html',
                styleUrls: ['./top-related.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xtYS":
/*!************************************************!*\
  !*** ./src/app/upcomimg/upcomimg.component.ts ***!
  \************************************************/
/*! exports provided: UpcomimgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomimgComponent", function() { return UpcomimgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "NFrB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





function UpcomimgComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imgsrc + movie_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 1, currentPage: a2, totalItems: a3 }; };
class UpcomimgComponent {
    constructor(_AuthServiceService) {
        this._AuthServiceService = _AuthServiceService;
        this.page = 1;
        this.imgsrc = 'https://image.tmdb.org/t/p/w500/';
        //  the first fire which work when open page the default value of page is 1
        this.getPopularMovies(this.page);
        console.log(this.page);
    }
    // function which sent data to api .it need the number of page every Sending
    getPopularMovies(page) {
        this._AuthServiceService.up_coming(page).subscribe((res) => {
            console.log(res.results);
            this.upcoming_movies = res.results;
            this.totalRecords = res.total_pages;
        });
    }
    // function which get page number and sent it to the function that take page number
    getPagesIn(page) {
        this.page = page;
        this.getPopularMovies(this.page);
    }
    ngOnInit() {
    }
}
UpcomimgComponent.ɵfac = function UpcomimgComponent_Factory(t) { return new (t || UpcomimgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"])); };
UpcomimgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpcomimgComponent, selectors: [["app-upcomimg"]], decls: 9, vars: 7, consts: [[1, "mt-5", "pt-5"], [1, "container"], [1, "row"], ["class", "col-md-3    ", 4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "col-md-8", "mx-auto"], ["id", "listing_pagination", "maxSize", "7", "directionLinks", "true", 3, "pageChange"], [1, "col-md-3"], [1, "item", "card", "m-2"], [1, "img-fluid", "rounded", 3, "src"], [1, "text-center"]], template: function UpcomimgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpcomimgComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UpcomimgComponent_Template_pagination_controls_pageChange_8_listener($event) { return ctx.getPagesIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.upcoming_movies, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.page, ctx.totalRecords)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwY29taW1nL3VwY29taW1nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpcomimgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upcomimg',
                templateUrl: './upcomimg.component.html',
                styleUrls: ['./upcomimg.component.scss']
            }]
    }], function () { return [{ type: _auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "z0C0":
/*!************************************************************!*\
  !*** ./src/app/movies-details/movies-details.component.ts ***!
  \************************************************************/
/*! exports provided: MoviesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesDetailsComponent", function() { return MoviesDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "NFrB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mytime_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mytime.pipe */ "YgZY");






function MoviesDetailsComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gen_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gen_r2.name, " ");
} }
function MoviesDetailsComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pro_r3.name, " ");
} }
const _c0 = function (a0) { return { "background": a0 }; };
class MoviesDetailsComponent {
    constructor(_ActivatedRoute, _AuthServiceService) {
        this._ActivatedRoute = _ActivatedRoute;
        this._AuthServiceService = _AuthServiceService;
        this.imgsrc = 'https://image.tmdb.org/t/p/w500/';
        this.cover = true;
        this.movie_id = this._ActivatedRoute.snapshot.paramMap.get('id');
        console.log(this.movie_id);
        this._AuthServiceService.getMovieDetails(this.movie_id).subscribe((res) => {
            console.log(res);
            this.movie_details = res;
        });
    }
    onScroll(event) {
        console.log(event);
    }
    ngOnInit() {
    }
}
MoviesDetailsComponent.ɵfac = function MoviesDetailsComponent_Factory(t) { return new (t || MoviesDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"])); };
MoviesDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesDetailsComponent, selectors: [["app-movies-details"]], decls: 58, vars: 16, consts: [[1, "details_section"], [1, "overlay"], [1, "container", "p-5"], [1, "row"], [1, "col-md-3", "position-relative"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "fas", "fa-expand-arrows-alt", "item-expand", "title='expand'"], [1, "img-fluid", "rounded", "position-absolute", 3, "src"], [1, "col-md-9", "p-5", "profile-image", "position-relative", "rounded", 3, "ngStyle"], [1, "text-light"], [1, "mb-4"], ["class", "d-inline", 4, "ngFor", "ngForOf"], [1, "d-inline"], [1, "p-2", "mb", "text-light"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "expand"], [1, "col-md-6", "im", "w-50", "bg-info", 3, "ngStyle"], [1, "col-md-6", "expand-info", "text-light"], [1, "col-md-12"], [1, "col-md-7"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle", "dropdown-toggle-split"], ["type", "text", "disabled", "", "aria-label", "Text input with segmented dropdown button", 1, "form-control", 3, "value"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button btn-lg", "data-dismiss", "modal", 1, "btn", "btn-light", "p-1"], [1, "p-2", "b", "m-1", "text-light"]], template: function MoviesDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MoviesDetailsComponent_li_14_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "mytime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "primary?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "mohamed?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "release_date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "production_companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MoviesDetailsComponent_li_54_Template, 2, 1, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgsrc + (ctx.movie_details == null ? null : ctx.movie_details.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, "url(" + ctx.imgsrc + (ctx.movie_details == null ? null : ctx.movie_details.backdrop_path) + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie_details == null ? null : ctx.movie_details.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie_details == null ? null : ctx.movie_details.release_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie_details == null ? null : ctx.movie_details.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx.movie_details == null ? null : ctx.movie_details.runtime), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie_details == null ? null : ctx.movie_details.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, "url(" + ctx.imgsrc + (ctx.movie_details == null ? null : ctx.movie_details.backdrop_path) + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.movie_details == null ? null : ctx.movie_details.release_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie_details == null ? null : ctx.movie_details.production_companies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_mytime_pipe__WEBPACK_IMPORTED_MODULE_4__["MytimePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #032541;\n  height: 100vh !important;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat !important;\n  background-position: center center !important;\n  background-size: cover !important;\n}\n\n.profile-image[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #032541;\n}\n\n.details_section[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 75vh;\n}\n\n.details_section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.row[_ngcontent-%COMP%]   .fa-expand-arrows-alt[_ngcontent-%COMP%] {\n  color: white !important;\n  position: absolute;\n  top: 54%;\n  left: 48%;\n  transform: translate(-57%, -47%);\n  z-index: 4334;\n  font-size: 40px;\n  opacity: 0;\n}\n\n.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 21;\n  right: 10px;\n  transition: filter 1s;\n}\n\n.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: blur(8px);\n}\n\n.row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]:hover   .fa-expand-arrows-alt[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.15s;\n  cursor: pointer;\n  transition: opacity 0.5s ease-out;\n}\n\n.row[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.row[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 35px;\n}\n\n.row[_ngcontent-%COMP%]   .col-md-9[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.im[_ngcontent-%COMP%] {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n}\n\n.expand-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #032541;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWRldGFpbHMvbW92aWVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbWFpbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJDRE87RURFUCx3QkFBQTtBQUFKOztBQUVBO0VBSUEsdUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0FBRkE7O0FBS0k7RUFDSSx5QkNkRztBRFdYOztBQVNBO0VBQ0ksb0NBQUE7RUFJSixZQUFBO0FBVEE7O0FBV0c7RUFFWSxrQkFBQTtBQVZmOztBQXdCQTtFQUVDLFlBQUE7QUF0QkQ7O0FBd0JJO0VBQ0ksdUJBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUF2QlI7O0FBNkJjO0VBRU4sV0FBQTtFQUNBLFdBQUE7RUFDUCxxQkFBQTtBQTVCRDs7QUFzQ0k7RUFDQSxpQkFBQTtBQXBDSjs7QUF1Q0s7RUFDRyxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFyQ1I7O0FBK0NBO0VBRUMsa0JBQUE7QUE5Q0Q7O0FBaURDO0VBSUksZ0JBQUE7RUFDQSxlQUFBO0FBbERMOztBQXFEQztFQUNJLGtCQUFBO0FBbkRMOztBQW1FQTtFQUVJLHVDQUFBO0VBRUEsaUNBQUE7QUFsRUo7O0FBMkVJO0VBQ0Esa0JBQUE7RUFDSCxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBeEVEOztBQTZFQTtFQUNJLHlCQ3BKTztBRDBFWCIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1kZXRhaWxzL21vdmllcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCcuLi9ob21lL21haW4tY29sb3InO1xyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuLy8gXHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICBjZW50ZXIgIWltcG9ydGFudDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG5cclxudWx7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbiB9XHJcblxyXG4uZGV0YWlsc19zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjYpO1xyXG4vLyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICB6LWluZGV4OiAzO1xyXG5oZWlnaHQ6IDc1dmg7XHJcbiAgIFxyXG4gICAuY29udGFpbmVye1xyXG5cclxuICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB9XHJcbi8vIC5vdmVybGF5e1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbi8vICAgICAvLyBoZWlnaHQ6IDE1MCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuXHJcbi8vICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuLy8gICAgIHotaW5kZXg6IC0xO1xyXG5cclxuLy8gfVxyXG5cclxuXHJcbn1cclxuLnJvd1xyXG57XHJcbiBoZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgLmZhLWV4cGFuZC1hcnJvd3MtYWx0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTQlO1xyXG4gICAgICAgIGxlZnQ6IDQ4JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTclLC00NyUpO1xyXG4gICAgICAgIHotaW5kZXg6IDQzMzQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgICAgICBvcGFjaXR5OjAgO1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb2wtbWQtMyB7XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG5cclxuICAgICAgICB6LWluZGV4OiAyMTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4mOmhvdmVye1xyXG4gICBcclxuICAgIGltZ3tcclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgIH0gXHJcblxyXG4gICAgIC5mYS1leHBhbmQtYXJyb3dzLWFsdHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxufVxyXG4uY29sLW1kLTl7XHJcblxyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgei1pbmRleDogLTE7XHJcbiBcclxuIGgye1xyXG4gICAgIGZvbnQ6XHJcbiAgICAge1xyXG5cclxuICAgICB3ZWlnaHQ6ODAwO1xyXG4gICAgIHNpemU6MzVweDtcclxuICAgICB9IDtcclxuIH1cclxuIHNwYW57XHJcbiAgICAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiB9XHJcblxyXG59XHJcblxyXG59XHJcbi8vIC5leHBhbmR7XHJcblxyXG4vLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgd2lkdGg6IDU1JTtcclxuLy8gIGhlaWdodDogNjAlO1xyXG4vLyAgdG9wOjEwJTtcclxuLy8gIGxlZnQ6IDI4JTtcclxuLy8gIHotaW5kZXg6IDEwMDA7XHJcblxyXG4vLyB9XHJcbi5pbXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLmV4cGFuZC1pbmZve1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gdG9wOjE1cHg7XHJcbiByaWdodDogMTVweDtcclxuIGZvbnQtc2l6ZToyMHB4O1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHJcbn1cclxufVxyXG4ubW9kYWwtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XHJcbn0iLCIkd2hpdGU6I2ZmZmY7XHJcbiRuYXYtY29sb3I6IzAzMjU0MTtcclxuJGJvZHktYmc6IzE3QTJCQTtcclxuJGJvZHktY29sb3I6IzAzMjU0MTtcclxuJGJnLWRldGFpbHM6cmdiYSgxMzgsIDcxLCA3MSwgMC4xKTtcclxuJGRldGFpbHMtY29sb3I6IzJEQkJDRjtcclxuJHBvcHVsYXItYmc6IzFBODZCNTtcclxuJGJsYWNrOmJsYWNrO1xyXG4kZm9vdGVyLWNvbG9yOiM3MEM4QjA7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies-details',
                templateUrl: './movies-details.component.html',
                styleUrls: ['./movies-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "z29X":
/*!*****************************!*\
  !*** ./src/app/cut.pipe.ts ***!
  \*****************************/
/*! exports provided: CutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutPipe", function() { return CutPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CutPipe {
    transform(desc) {
        return desc.slice(0, 170);
    }
}
CutPipe.ɵfac = function CutPipe_Factory(t) { return new (t || CutPipe)(); };
CutPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cut", type: CutPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CutPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'cut'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map