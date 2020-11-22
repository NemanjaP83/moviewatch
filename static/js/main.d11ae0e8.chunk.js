(this.webpackJsonpmoviewatch=this.webpackJsonpmoviewatch||[]).push([[0],{26:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=c(19),r=c.n(i),l=(c(26),c(8)),o=c(2),j=function(){return Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"inner-content",children:[Object(a.jsx)("div",{className:"brand",children:Object(a.jsx)(l.b,{to:"/",children:"WATCHLIST"})}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/",children:"Watchlist"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/watched",children:"Watched"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/add",className:"btn btn-main",children:"+ Add"})})]})]})})})},d=c(9),h=c(14),b=c(7),O=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(h.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},m={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},u=Object(s.createContext)(m),v=function(e){var t=Object(s.useReducer)(O,m),c=Object(d.a)(t,2),n=c[0],i=c[1];Object(s.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(n.watchlist)),localStorage.setItem("watched",JSON.stringify(n.watched))}),[n]);return Object(a.jsx)(u.Provider,{value:{watchlist:n.watchlist,watched:n.watched,addMovieToWatchlist:function(e){i({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){i({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){i({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){i({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){i({type:"REMOVE_FROM_WATCHED",payload:e})}},children:e.children})},x=function(e){var t=e.type,c=e.movie,n=Object(s.useContext)(u),i=n.removeMovieFromWatchlist,r=n.addMovieToWatched,l=n.moveToWatchlist,o=n.removeFromWatched;return Object(a.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"ctrl-btn",onClick:function(){return r(c)},children:Object(a.jsx)("i",{className:"fa-fw far fa-eye"})}),Object(a.jsx)("button",{className:"ctrl-btn",onClick:function(){return i(c.id)},children:Object(a.jsx)("i",{className:"fa-fw fa fa-times"})})]}),"watched"===t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"ctrl-btn",onClick:function(){return l(c)},children:Object(a.jsx)("i",{className:"fa-fw far fa-eye-slash"})}),Object(a.jsx)("button",{className:"ctrl-btn",onClick:function(){return o(c.id)},children:Object(a.jsx)("i",{className:"fa-fw fa fa-times"})})]})]})},f=function(e){var t=e.movie,c=e.type;return Object(a.jsxs)("div",{className:"movie-card",children:[Object(a.jsx)("div",{className:"overlay"}),Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}),Object(a.jsx)(x,{type:c,movie:t})]})},p=function(){var e=Object(s.useContext)(u).watchlist;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"movie-page",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{className:"heading",children:"My Watchlist"}),Object(a.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),Object(a.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(a.jsx)(f,{movie:e,type:"watchlist"},e.id)}))})]})})})},N=function(e){var t=e.movie,c=Object(s.useContext)(u),n=c.addMovieToWatchlist,i=c.watchlist,r=c.watched,o=i.find((function(e){return e.id===t.id})),j=r.find((function(e){return e.id===t.id})),d=!!o||!!j;return Object(a.jsxs)("div",{id:"card",children:[Object(a.jsx)("div",{className:"reuslt-card",children:Object(a.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," - Poster")}):Object(a.jsxs)("div",{className:"filler-poster",children:[Object(a.jsx)("span",{children:t.title}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})," NO POSTER"]})})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h3",{className:"title",children:t.title}),Object(a.jsxs)("h4",{className:"release-date",children:["Release year - ",t.release_date?t.release_date.substring(0,4):"-"]})]}),Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("button",{disabled:d,className:"btn",onClick:function(){return n(t)},children:"Add to watchlist"}),Object(a.jsx)(l.b,{to:"".concat(t.id),children:Object(a.jsx)("button",{className:"btn btn-info",onClick:function(){return function(e){console.log(e.overview)}(t)},children:"More"})})]})]})]})},g=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),r=Object(d.a)(i,2),l=r[0],o=r[1];return Object(a.jsx)("div",{className:"add-page section",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"add-content",children:[Object(a.jsx)("div",{className:"input-wrapper",children:Object(a.jsx)("input",{type:"text",value:c,name:"search",id:"movie",placeholder:"Search for a movie",onChange:function(e){e.preventDefault(),n(e.target.value);var t="https://api.themoviedb.org/3/search/movie?api_key=".concat("2034353c3c4368999a00554aecd8ab8d","&language=en-US&query=").concat(e.target.value,"&page=1&include_adult=false");fetch(t).then((function(e){return e.json()})).then((function(e){e.errors?o([]):o(e.results)}))}})}),l.length>0&&Object(a.jsx)("ul",{className:"results",children:l.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(N,{movie:e})},e.id)}))})]})})})},w=function(){var e=Object(s.useContext)(u).watched;return Object(a.jsx)("div",{className:"movie-page section",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{className:"heading",children:"Watched Movies"}),Object(a.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(a.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(a.jsx)(f,{movie:e,type:"watched"},e.id)}))}):Object(a.jsx)("h2",{className:"no-movies",children:"No movies in your list!"})]})})};var y=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("p",{children:["\xa9 Moviewatch 2020, ",Object(a.jsxs)("a",{href:"https://github.com/NemanjaP83",target:"blank",children:["coded by NemanjaP83 ",Object(a.jsx)("i",{className:"fab fa-github"})]})]})})},_=function(e){var t=e.match,c="https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat("2034353c3c4368999a00554aecd8ab8d","&language=en-US"),n=Object(s.useState)([]),i=Object(d.a)(n,2),r=i[0],l=i[1],o=Object(s.useState)({}),j=Object(d.a)(o,2),h=j[0],b=j[1];return Object(s.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){l(e),console.log(e),b(e.genres)}))}),[]),Object(a.jsxs)("div",{className:"movie-overview",children:[r.backdrop_path?Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r.backdrop_path),alt:"".concat(r.title," - Poster")})}):Object(a.jsx)("div",{className:"background"}),Object(a.jsx)("div",{className:"movie-overlay",children:Object(a.jsxs)("div",{className:"more-info",children:[Object(a.jsxs)("h2",{children:[Object(a.jsx)("i",{className:"fas fa-film"})," Overview"]}),Object.keys(h).map((function(e,t){return Object(a.jsx)("div",{className:"genre",children:Object(a.jsxs)("span",{className:"genre-title",children:[Object(a.jsx)("i",{className:"fas fa-circle"}),h[e].name]})},e)})),Object(a.jsx)("h2",{className:"info-purple",children:r.title}),Object(a.jsx)("h4",{children:r.tagline}),Object(a.jsx)("p",{children:r.overview}),Object(a.jsxs)("span",{className:"",children:[Object(a.jsx)("i",{className:"fas fa-clock"}),"Duration: ",r.runtime," min"]}),Object(a.jsxs)("span",{className:"",children:[Object(a.jsx)("i",{className:"fas fa-star"}),"Rating: ",r.vote_average]})]})})]})};c(35);var M=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v,{children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(j,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:p}),Object(a.jsx)(o.a,{path:"/add",component:g}),Object(a.jsx)(o.a,{path:"/watched",component:w}),Object(a.jsx)(o.a,{path:"/:id",component:_})]}),Object(a.jsx)(y,{})]})})})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.d11ae0e8.chunk.js.map