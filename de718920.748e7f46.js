(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(116)),i={id:"tls",title:"TLS Configuration"},c={unversionedId:"configuration/tls",id:"version-7.1.x/configuration/tls",isDocsHomePage:!1,title:"TLS Configuration",description:"There are two recommended configurations.",source:"@site/versioned_docs/version-7.1.x/configuration/tls.md",slug:"/configuration/tls",permalink:"/oauth2-proxy/docs/7.1.x/configuration/tls",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.1.x/configuration/tls.md",version:"7.1.x",sidebar:"version-7.1.x/docs",previous:{title:"Session Storage",permalink:"/oauth2-proxy/docs/7.1.x/configuration/session_storage"},next:{title:"Alpha Configuration",permalink:"/oauth2-proxy/docs/7.1.x/configuration/alpha-config"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are two recommended configurations."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Configure SSL Termination with OAuth2 Proxy by providing a ",Object(a.b)("inlineCode",{parentName:"p"},"--tls-cert-file=/path/to/cert.pem")," and ",Object(a.b)("inlineCode",{parentName:"p"},"--tls-key-file=/path/to/cert.key"),"."),Object(a.b)("p",{parentName:"li"},"The command line to run ",Object(a.b)("inlineCode",{parentName:"p"},"oauth2-proxy")," in this configuration would look like this:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'./oauth2-proxy \\\n    --email-domain="yourcompany.com"  \\\n    --upstream=http://127.0.0.1:8080/ \\\n    --tls-cert-file=/path/to/cert.pem \\\n    --tls-key-file=/path/to/cert.key \\\n    --cookie-secret=... \\\n    --cookie-secure=true \\\n    --provider=... \\\n    --client-id=... \\\n    --client-secret=...\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Configure SSL Termination with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://nginx.org/"}),"Nginx")," (example config below), Amazon ELB, Google Cloud Platform Load Balancing, or ...."),Object(a.b)("p",{parentName:"li"},"Because ",Object(a.b)("inlineCode",{parentName:"p"},"oauth2-proxy")," listens on ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1:4180")," by default, to listen on all interfaces (needed when using an\nexternal load balancer like Amazon ELB or Google Platform Load Balancing) use ",Object(a.b)("inlineCode",{parentName:"p"},'--http-address="0.0.0.0:4180"')," or\n",Object(a.b)("inlineCode",{parentName:"p"},'--http-address="http://:4180"'),"."),Object(a.b)("p",{parentName:"li"},"Nginx will listen on port ",Object(a.b)("inlineCode",{parentName:"p"},"443")," and handle SSL connections while proxying to ",Object(a.b)("inlineCode",{parentName:"p"},"oauth2-proxy")," on port ",Object(a.b)("inlineCode",{parentName:"p"},"4180"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"oauth2-proxy")," will then authenticate requests for an upstream application. The external endpoint for this example\nwould be ",Object(a.b)("inlineCode",{parentName:"p"},"https://internal.yourcompany.com/"),"."),Object(a.b)("p",{parentName:"li"},"An example Nginx config follows. Note the use of ",Object(a.b)("inlineCode",{parentName:"p"},"Strict-Transport-Security")," header to pin requests to SSL\nvia ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security"}),"HSTS"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"server {\n    listen 443 default ssl;\n    server_name internal.yourcompany.com;\n    ssl_certificate /path/to/cert.pem;\n    ssl_certificate_key /path/to/cert.key;\n    add_header Strict-Transport-Security max-age=2592000;\n\n    location / {\n        proxy_pass http://127.0.0.1:4180;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Scheme $scheme;\n        proxy_connect_timeout 1;\n        proxy_send_timeout 30;\n        proxy_read_timeout 30;\n    }\n}\n")),Object(a.b)("p",{parentName:"li"},"The command line to run ",Object(a.b)("inlineCode",{parentName:"p"},"oauth2-proxy")," in this configuration would look like this:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'./oauth2-proxy \\\n   --email-domain="yourcompany.com"  \\\n   --upstream=http://127.0.0.1:8080/ \\\n   --cookie-secret=... \\\n   --cookie-secure=true \\\n   --provider=... \\\n   --reverse-proxy=true \\\n   --client-id=... \\\n   --client-secret=...\n')))))}s.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);