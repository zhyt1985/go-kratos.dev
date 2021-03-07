(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||g[b]||a;return r?o.a.createElement(f,u(u({ref:t},i),{},{components:r})):o.a.createElement(f,u({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(113)),c={slug:"go-project-layout",title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",author:"Tony",author_title:"Maintainer of go-kratos",author_url:"https://github.com/tonybase",author_image_url:"https://avatars.githubusercontent.com/u/3871120?s=460&v=4",tags:["go","golang","project layout","best practice"]},u={permalink:"/blog/go-project-layout",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/blog/2021-03-08-go-project-layout.md",source:"@site/blog/2021-03-08-go-project-layout.md",description:"\u968f\u7740Go\u8bed\u8a00\u8fd9\u4e9b\u5e74\u7684\u53d1\u5c55\uff0c\u5df2\u7ecf\u5728\u4e92\u8054\u7f51\u5f00\u53d1\u884c\u884c\u4e1a\u4e2d\u5360\u6709\u4e00\u5e2d\u4e4b\u5730\uff0c\u4f8b\u5982docker\u3001kubernetes\u3001consul\u3001etcd\u3001grafana\u7b49\u7b49\u8fd9\u4e9b\u975e\u5e38\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u4eec\u76f8\u4fe1\u672a\u6765Go\u8bed\u8a00\u80af\u5b9a\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u597d\uff01",date:"2021-03-08T00:00:00.000Z",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"golang",permalink:"/blog/tags/golang"},{label:"project layout",permalink:"/blog/tags/project-layout"},{label:"best practice",permalink:"/blog/tags/best-practice"}],title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",readingTime:.02,truncated:!1},l=[],i={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u968f\u7740Go\u8bed\u8a00\u8fd9\u4e9b\u5e74\u7684\u53d1\u5c55\uff0c\u5df2\u7ecf\u5728\u4e92\u8054\u7f51\u5f00\u53d1\u884c\u884c\u4e1a\u4e2d\u5360\u6709\u4e00\u5e2d\u4e4b\u5730\uff0c\u4f8b\u5982docker\u3001kubernetes\u3001consul\u3001etcd\u3001grafana\u7b49\u7b49\u8fd9\u4e9b\u975e\u5e38\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u4eec\u76f8\u4fe1\u672a\u6765Go\u8bed\u8a00\u80af\u5b9a\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u597d\uff01\n\u800c\u4eca\u5929\u4e3b\u8981\u60f3\u804a\u4e00\u804a Go\u8bed\u8a00\u5de5\u7a0b\u5316 \u8fd9\u5757\uff0c\u8ddf\u5927\u5bb6\u63a2\u8ba8\u4e0b\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u6807\u51c6\u5316\u7684Go\u5de5\u7a0b\u9879\u76ee\uff0c\u4ee5\u53ca\u4e00\u4e9b\u7ecf\u9a8c\u7684\u601d\u8003\uff0c\u5982\u6709\u4ec0\u4e48\u4e0d\u597d\u5728\u5730\u65b9\u4e5f\u5e0c\u671b\u5927\u5bb6\u53ef\u4ee5\u6307\u51fa\u7ea0\u6b63\u3002"))}p.isMDXComponent=!0}}]);