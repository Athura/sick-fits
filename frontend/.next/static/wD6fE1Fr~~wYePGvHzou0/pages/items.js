(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{11:function(e,t,n){e.exports=n(48)},15:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r="https://sick-fitterino-yoga-prod.herokuapp.com/",o=4},23:function(e,t,n){e.exports=n(57)},349:function(e,t,n){__NEXT_REGISTER_PAGE("/items",function(){return e.exports=n(350),{page:e.exports.default}})},350:function(e,t,n){"use strict";n.r(t);var r=n(86);t.default=r.default},48:function(e,t,n){"use strict";var r=n(35),o=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(49)),a=o(n(46)),u=o(n(19)),c=o(n(20)),l=o(n(31)),f=o(n(32)),p=o(n(33)),s=o(n(47)),d=o(n(27)),m=n(69),y=r(n(0)),h=(o(n(4)),r(n(37))),b=n(38);(0,b.execOnce)(b.warn);var g=function(e){function t(){var e,n,r,o,i,c;(0,u.default)(this,t);for(var p=arguments.length,y=new Array(p),g=0;g<p;g++)y[g]=arguments[g];return n=(0,l.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(y))),(0,d.default)((0,s.default)((0,s.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?(0,m.format)(e):e,as:t&&"object"===(0,a.default)(t)?(0,m.format)(t):t}},o=null,i=null,c=null,function(e,t){if(e===o&&t===i)return c;var n=r(e,t);return o=e,i=t,c=n,n})),(0,d.default)((0,s.default)((0,s.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,u=i.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,m.resolve)(c,a),u=u?(0,m.resolve)(c,u):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=u.indexOf("#")<0);var f=n.props.replace?"replace":"push";h.default[f](a,u,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=y.default.createElement("a",null,t));var i=y.Children.only(t),a={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,h._rewriteUrlForNextExport)(a.href)),y.default.cloneElement(i,a)}}]),t}(y.Component);t.default=g},49:function(e,t,n){e.exports=n(50)},50:function(e,t,n){var r=n(9),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},86:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n(3),u=n.n(a),c=n(2),l=(n(4),n(11)),f=n.n(l),p=c.b.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:",";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"],function(e){return e.theme.red}),s=c.b.div.withConfig({displayName:"ItemStyles__Item",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid ",";box-shadow:",";position:relative;display:flex;flex-direction:column;img{width:100%;height:500px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ",";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:",";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"],function(e){return e.theme.offWhite},function(e){return e.theme.bs},function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),d=c.b.span.withConfig({displayName:"PriceTag",componentId:"nwbk6t-0"})(["background:",";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"],function(e){return e.theme.red}),m=n(17);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);return w=function(){return e},e}var E=u()(w()),O=function(e){function t(){var e,n,r,o,i,a,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),f=0;f<c;f++)l[f]=arguments[f];return r=this,n=!(o=(e=b(t)).call.apply(e,[this].concat(l)))||"object"!==y(o)&&"function"!=typeof o?v(r):o,i=v(v(n)),u=function(e,t){var n=e.readQuery({query:H});console.log(n,t),n.items=n.items.filter(function(e){return e.id!==t.data.deleteItem.id}),e.writeQuery({query:H,data:n})},(a="update")in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this;return o.a.createElement(i.Mutation,{mutation:E,variables:{id:this.props.id},update:this.update},function(t,n){n.error;return o.a.createElement("button",{onClick:function(){confirm("Are you sure you want to delete this item?")&&t().catch(function(e){alert(e.message)})}},e.props.children)})}}])&&h(n.prototype,a),u&&h(n,u),t}(),_=n(6);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);return C=function(){return e},e}var T=u()(C()),I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,P(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.id;return o.a.createElement(i.Mutation,{mutation:T,variables:{id:e},refetchQueries:[{query:_.a}]},function(e,t){var n=t.loading;return o.a.createElement("button",{disabled:n,onClick:e},"Add",n&&"ing"," To Cart 🛒")})}}])&&x(n.prototype,r),a&&x(n,a),t}();function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),q(this,z(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.item;return o.a.createElement(s,null,e.image&&o.a.createElement("img",{src:e.image,alt:e.title}),o.a.createElement(p,null,o.a.createElement(f.a,{href:{pathname:"/item",query:{id:e.id}}},o.a.createElement("a",null,e.title))),o.a.createElement(d,null,Object(m.a)(e.price)),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"buttonList"},o.a.createElement(f.a,{href:{pathname:"update",query:{id:e.id}}},o.a.createElement("a",null,"Edit ✏️")),o.a.createElement(I,{id:e.id}),o.a.createElement(O,{id:e.id},"Delete Item")))}}])&&A(n.prototype,i),a&&A(n,a),t}(),U=c.b.div.withConfig({displayName:"PaginationStyles",componentId:"aduuar-0"})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ",";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ",";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"],function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),M=n(15),R=n(23),$=n.n(R);function Q(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query PAGINATION_QUERY {\n        itemsConnection {\n            aggregate {\n                count\n            }\n        }\n    }\n"]);return Q=function(){return e},e}var J=u()(Q()),F=function(e){return o.a.createElement(i.Query,{query:J},function(t){var n=t.data,r=t.loading;if(t.error,r)return o.a.createElement("p",null,"Loading...");var i=n.itemsConnection.aggregate.count,a=Math.ceil(i/M.a),u=e.page;return o.a.createElement(U,null,o.a.createElement($.a,null,o.a.createElement("title",null,"Sick Fits! Page ",u," of ",a)),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"items",query:{page:u-1}}},o.a.createElement("a",{className:"prev","aria-disabled":u<=1},"Prev")),o.a.createElement("p",null,"Page ",u," of ",a,"!"),o.a.createElement("p",null,i," Items total"),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"items",query:{page:u+1}}},o.a.createElement("a",{className:"prev","aria-disabled":u>=a},"Next")))})};function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ",") {\n    items(first: $first, skip: $skip, orderBy: createdAt_DESC ) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);return B=function(){return e},e}var H=u()(B(),M.a),V=c.b.div.withConfig({displayName:"Items__Center",componentId:"tikday-0"})(["text-align:center;"]),Z=c.b.div.withConfig({displayName:"Items__ItemsList",componentId:"tikday-1"})(["position:relative;display:grid;grid-template-columns:1fr 1fr;grid-gap:45px;max-width:",";margin:0 auto;"],function(e){return e.theme.maxWidth}),ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,W(t).apply(this,arguments))}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement(V,null,o.a.createElement(F,{page:this.props.page}),o.a.createElement(i.Query,{query:H,variables:{skip:this.props.page*M.a-M.a,first:M.a}},function(e){var t=e.data,n=e.error;return e.loading?o.a.createElement("p",null,"Loading..."):n?o.a.createElement("p",null,"Error: ",n.message):o.a.createElement(Z,null,t.items.map(function(e){return o.a.createElement(L,{item:e,key:e.id})}))}),o.a.createElement(F,null))}}])&&K(n.prototype,a),u&&K(n,u),t}();t.default=function(e){return o.a.createElement("div",null,o.a.createElement(ee,{page:parseFloat(e.query.page)||1}))}}},[[349,1,0]]]);