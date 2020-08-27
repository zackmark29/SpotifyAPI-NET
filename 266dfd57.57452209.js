(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(187)),o=n(189),s={id:"implicit_grant",title:"Implicit Grant"},c={id:"implicit_grant",title:"Implicit Grant",description:"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in RFC-6749.",source:"@site/docs/implicit_grant.md",permalink:"/SpotifyAPI-NET/docs/next/implicit_grant",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/implicit_grant.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1598529342,sidebar:"docs",previous:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/next/client_credentials"},next:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/next/authorization_code"}},l=[{value:"Existing Web-Server",id:"existing-web-server",children:[]},{value:"Using custom Protocols",id:"using-custom-protocols",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in RFC-6749.")),Object(i.b)("p",null,"This flow is useful for getting a user access token for a short timespan"),Object(i.b)("h2",{id:"existing-web-server"},"Existing Web-Server"),Object(i.b)("p",null,"If you are already in control of a Web-Server (like ",Object(i.b)("inlineCode",{parentName:"p"},"ASP.NET"),"), you can start the flow by generating a login uri"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// Make sure "http://localhost:5000" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5000"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server\n')),Object(i.b)("p",null,"When the user is redirected to the generated uri, he will have to login with his spotify account and confirm, that your application wants to access his user data. Once confirmed, he will be redirect to ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:5000")," and the fragment identifier (",Object(i.b)("inlineCode",{parentName:"p"},"#")," part of URI) will contain an access token."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note, this parameter is not sent to the server! You need JavaScript to access it."))),Object(i.b)("h2",{id:"using-custom-protocols"},"Using custom Protocols"),Object(i.b)("p",null,"This flow can also be used with custom protocols instead of ",Object(i.b)("inlineCode",{parentName:"p"},"http"),"/",Object(i.b)("inlineCode",{parentName:"p"},"https"),". This is especially interesting for ",Object(i.b)("inlineCode",{parentName:"p"},"UWP")," apps, since your able to register custom protocol handlers quite easily."),Object(i.b)("img",{alt:"protocol handlers",src:Object(o.a)("img/auth_protocol_handlers.png")}),Object(i.b)("p",null,"The process is very similar, you generate a uri and open it for the user"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// Make sure "spotifyapi.web.oauth://token" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("spotifyapi.web.oauth://token"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n\n// This call requires Spotify.Web.Auth\nBrowserUtil.Open(uri);\n')),Object(i.b)("p",null,"After the user logged in and consented your app, your ",Object(i.b)("inlineCode",{parentName:"p"},"UWP")," app will receive a callback:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"protected override void OnActivated(IActivatedEventArgs args)\n{\n  if (args.Kind == ActivationKind.Protocol)\n  {\n    ProtocolActivatedEventArgs eventArgs = args as ProtocolActivatedEventArgs;\n    var publisher = Mvx.IoCProvider.Resolve<ITokenPublisherService>();\n\n    // This Uri contains your access token in the Fragment part\n    Console.WriteLine(eventArgs.Uri);\n  }\n}\n")),Object(i.b)("p",null,"For a real example, have a look at the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.UWP"}),"Example.UWP"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASP"}),"Example.ASP")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASPBlazor"}),"Example.ASPBlazor")),Object(i.b)("h1",{id:"using-spotifywebauth"},"Using Spotify.Web.Auth"),Object(i.b)("p",null,"For cross-platform CLI and desktop apps (non ",Object(i.b)("inlineCode",{parentName:"p"},"UWP")," apps), custom protocol handlers are sometimes not an option. The fallback here is a small cross-platform embedded web server running on ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:5000")," serving javascript. The javscript will parse the fragment part of the URI and sends a request to the web server in the background. The web server then notifies your appliciation via event."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'private static EmbedIOAuthServer _server;\n\npublic static async Task Main()\n{\n  // Make sure "http://localhost:5000/callback" is in your spotify application as redirect uri!\n  _server = new EmbedIOAuthServer(new Uri("http://localhost:5000/callback"), 5000);\n  await _server.Start();\n\n  _server.ImplictGrantReceived += OnImplicitGrantReceived;\n\n  var request = new LoginRequest(_server.BaseUri, "ClientId", LoginRequest.ResponseType.Token)\n  {\n    Scope = new List<string> { Scopes.UserReadEmail }\n  };\n  BrowserUtil.Open(request.ToUri());\n}\n\nprivate static async Task OnImplicitGrantReceived(object sender, ImplictGrantResponse response)\n{\n  await _server.Stop();\n  var spotify = new SpotifyClient(response.AccessToken);\n  // do calls with spotify\n}\n')),Object(i.b)("p",null,"For real examples, have a look at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig"}),"Example.CLI.PersistentConfig")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.CustomHTML"}),"Example.CLI.CustomHTML")))}u.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,s({ref:t},l,{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},188:function(e,t,n){"use strict";var r=n(0),a=n(49);t.a=function(){return Object(r.useContext)(a.a)}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(190);var r=n(188);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},190:function(e,t,n){"use strict";var r=n(17),a=n(35),i=n(191),o="".startsWith;r(r.P+r.F*n(192)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},191:function(e,t,n){var r=n(69),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},192:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);