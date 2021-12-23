(this.webpackJsonpdigestable=this.webpackJsonpdigestable||[]).push([[0],{55:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),u=(n(55),n(10)),l=n.n(u),s=n(44),o=n(5),d=n(72),f=n(73),h=n(69),v=n(46),p=n(70),m=n(75),g=n(71),j=n(4),b=n(2),x=n(1),y=[{name:"quantiles",type:"rows"},{name:"kmeans",type:"rows"},{name:"gap",type:"rows",transform:!0}],O={apply:!1,columnType:"numeric",methods:y,method:y[0],amount:.5,transformBase:1,unique:0,rows:10},w=function(e,t){switch(t.type){case"setApply":return Object(b.a)(Object(b.a)({},e),{},{apply:t.apply});case"setMethod":return Object(b.a)(Object(b.a)({},e),{},{method:t.method});case"setAmount":return Object(b.a)(Object(b.a)({},e),{},{amount:t.amount});case"setTransformBase":return Object(b.a)(Object(b.a)({},e),{},{transformBase:t.transformBase});case"setColumnInfo":return Object(b.a)(Object(b.a)({},e),{},{columnType:t.columnType,unique:t.unique,rows:Math.min(e.rows,t.unique)});case"setRows":return Object(b.a)(Object(b.a)({},e),{},{rows:t.rows});default:throw new Error("Invalid simplify context action: "+t.type)}},k=Object(r.createContext)(O),C=function(e){var t=e.children,n=Object(r.useReducer)(w,O),c=Object(o.a)(n,2),a=c[0],i=c[1];return Object(x.jsx)(k.Provider,{value:[a,i],children:t})},A=["text","visualizations","both","interactive"],S=["row","column"],M={modes:A,mode:A[0],showLinks:!1,categoryScalingOptions:S,categoryScaling:S[0]},D=function(e,t){switch(t.type){case"setMode":return Object(b.a)(Object(b.a)({},e),{},{mode:t.mode});case"setShowLinks":return Object(b.a)(Object(b.a)({},e),{},{showLinks:t.showLinks});case"setCategoryScaling":return Object(b.a)(Object(b.a)({},e),{},{categoryScaling:t.categoryScaling});default:throw new Error("Invalid visualization context action: "+t.type)}},E=Object(r.createContext)(M),q=function(e){var t=e.children,n=Object(r.useReducer)(D,M),c=Object(o.a)(n,2),a=c[0],i=c[1];return Object(x.jsx)(E.Provider,{value:[a,i],children:t})},L=n(15);function B(e,t,n){for(var r=e[0].length,c=n-t,a=[],i=0;i<r;i++)a.push(0);for(var u=t;u<n;u++)for(var l=0;l<r;l++)a[l]=a[l]+e[u][l]/c;return a}function N(e,t){for(var n=e.length,r=Math.floor(n/t),c=[],a=0;a<t;a++){var i=r*a,u=r*(a+1);a+1===t&&(u=n),c.push(B(e,i,u))}return c}function R(e,t){for(var n,r,c,a=e.length,i=[];i.length<t;)r=0,c=a,n=Math.floor(Math.random()*(c-r)+r),-1===i.indexOf(n)&&i.push(n);for(var u=[],l=0;l<i.length;l++){var s=Object(L.a)(e[i[l]]);u.push(s)}return u}function z(e,t){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function I(e,t,n){if(n>50)return!0;if(!e||!e.length)return!1;for(var r=!0,c=0;c<t.length;c++)z(t[c],e[c])||(r=!1);return r}function T(e,t){for(var n=[],r=0;r<e.length;r++)n.push(e[r]-t[r]);return n.reduce((function(e,t){return e+t*t}),0)}function V(e,t){for(var n={},r=0;r<t.length;r++)n[r]={points:[],indeces:[],centroid:t[r]};for(var c=0;c<e.length;c++){for(var a=e[c],i=void 0,u=void 0,l=0;l<t.length;l++){var s=t[l];if(0===l)i=l,u=T(a,s);else{var o=T(a,s);o<u&&(u=o,s,i=l)}}n[i].points.push(a),n[i].indeces.push(c)}return n}function F(e){for(var t=e.length,n=[],r=0;r<e[0].length;r++)n.push(0);for(var c=0;c<e.length;c++)for(var a=e[c],i=0;i<a.length;i++){var u=a[i];n[i]=n[i]+u/t}return n}function U(e,t,n){var r,c=[];for(var a in t){var i=t[a];r=i.points.length>0?F(i.points):R(e,1)[0],c.push(r)}return c}var G=n(33),W=function(e,t){var n=G.sampleCorrelation(e,t);return isNaN(n)?0:n},H=function(e){return Array.from(e.reduce((function(e,t){return e.add(t)}),new Set))},J=function(e,t){var n=H(e),r=H(t);if(1===n.length||1===r.length)return 0;var c=function(e,t,n,r){var c=function(e){return e.reduce((function(e,t){return e[t]?e[t]++:e[t]=1,e}),{})},a=c(e),i=c(n),u=t.reduce((function(e,t){return e[t]={},r.forEach((function(n){e[t][n]=0})),e}),{});e.forEach((function(e,t){var r=n[t];u[e][r]++}));var l=e.length,s=[],o=[];return t.forEach((function(e){r.forEach((function(t){s.push(u[e][t]),o.push(a[e]*i[t]/l)}))})),G.sumSimple(s.map((function(e,t){var n=o[t];return Math.pow(e-n,2)/n})))}(e,n,t,r),a=e.length,i=n.length,u=r.length,l=Math.min(i,u);return 2===i&&2===u?Math.sqrt(c/a):Math.sqrt(c/(a*(l-1)))},P=n(45),Q=n.n(P),_=function(e,t){var n=e.reduce((function(n,r,c){return null!==e[c]&&null!==t[c]&&(n[0].push(e[c]),n[1].push(t[c])),n}),[[],[]]),r=Object(o.a)(n,2),c=r[0],a=r[1],i=H(c);if(1===i.length)return 0;var u=i.slice(0,-1),l=c.map((function(e){return Object(L.a)(u.map((function(t){return e===t?1:0})))})),s=new Q.a.LinearRegression(l,a,{algorithm:"NormalEquation"}),d=[];return s.train((function(e){e&&console.log(e),l.forEach((function(e){return d.push(s.predict(e))}))})),W(a,d)},K=(n(64),function(){var e=j.select(),t=j.select(),n=[],r=[],c=[],a=[],i=!1,u=!1,l="threshold",s=.9,d=20,f=1,h="text",v=!1,p="row",m=["","NA","na"],g=function(e){return m.includes(e)},x=j.dispatch("clusterByColumn");function y(r){r.each((function(r){var a;t=j.select(this).selectAll(".linkSvg").data([[]]).join((function(e){return e.append("svg").attr("class","linkSvg")})),e=j.select(this).selectAll("table").data([[]]).join((function(e){var t=e.append("table");return t.append("thead").append("tr"),t.append("tbody"),t})),(c=(a=r).columns.map((function(e){return{name:e}}))).forEach((function(e){var t=e.name,n=a.map((function(e){return e[t]})),r=Array.from(n.reduce((function(e,t){return e.add(t)}),new Set)),c=r.filter((function(e){return!g(e)})),i=c.reduce((function(e,t){return e&&!isNaN(t)}),!0);if(e.uniqueValues=r,i){var u=c.map((function(e){return+e}));if(u.length===a.length){u.sort((function(e,t){return j.ascending(e,t)}));var l=u.reduce((function(e,t,n,r){return e&&(0===n||t===r[n-1]+1)}),!0);e.type=l?"id":"numeric"}else 2===u.length&&u.includes(0)&&u.includes(1)?e.type="categorical":e.type="numeric";"numeric"===e.type?(e.values=u,e.extent=j.extent(u),e.maxDigits=j.max(u,w)):"categorical"===e.type&&(e.type="categorical",e.counts=O(r,n))}else r.length===a.length?e.type="id":(e.type="categorical",e.counts=O(r,n))})),k(),C(),function(e){n=e.map((function(e,t){var n=Object(b.a)({},e);return c.forEach((function(e){var t=e.type,r=e.name,c=n[r];g(c)?n[r]=null:"numeric"===t&&(n[r]=+c)})),{initialIndex:t,isCluster:!1,cluster:null,pinned:!1,expanded:!1,values:n}}))}(r),A(),S(),M()}))}var O=function(e,t){return Object.entries(t.reduce((function(e,t){return e[t]++,e}),e.reduce((function(e,t){return e[t]=0,e}),{}))).map((function(e){var t=Object(o.a)(e,2);return{value:t[0],count:t[1]}})).sort((function(e,t){return j.descending(e.count,t.count)}))},w=function(e){var t=Math.log(10),n=String(e).split("."),r=Object(o.a)(n,2),c=r[0],a=r[1];c=Math.abs(c);var i=Math.floor(Math.log(e)/t)+1,u=a?c>0?a.length:Math.floor(Math.log(+e)/t)+1:0;return Math.max(i+u,1)};function k(){c.forEach((function(e){return e.sort=null}))}function C(){c.forEach((function(e){return e.cluster=null}))}function A(){!function(){var e=c.find((function(e){return e.cluster})),t=e?e.cluster:"ascending";n.sort((function(n,r){var c=e?n.values[e.name]:n.initialIndex,a=e?r.values[e.name]:r.initialIndex;return c===a?0:null===c?1:null===a?-1:j[t](c,a)}))}(),n.forEach((function(e){return e.expanded=!1}));var e=c.find((function(e){return e.cluster}));if(c.filter((function(e){return"numeric"!==e.type})).forEach((function(e){return e.maxCount=1})),i=u&&e&&"id"!==e.type){var t=e.name,a=e.type,s=e.cluster,h=n.map((function(e){return e.values[t]})),v=("numeric"===a?function(e,t){var n=function(e){var n="ascending"===t?1/f:f,r=j.scaleLinear().domain(j.extent(e)).range([0,1]);return e.map((function(e){return Math.pow(r(e),n)}))},r=function(e){var t=e.indexOf(null),n=t>-1?j.range(t,e.length):null;return[t>-1?e.slice(0,t):e,n,n?d-1:d]},c=function(e,t){return t?e.concat([t]):e};switch(l){case"quantiles":var a=r(e),i=Object(o.a)(a,3),u=i[0],s=i[1],h=function(e,t){var n=j.range(t),r=j.scaleQuantile().domain(e).range(n);return e.reduce((function(e,t,n){return e[r(t)].push(n),e}),n.map((function(){return[]})))}(u,i[2]);return"descending"===t&&h.reverse(),c(h,s);case"kmeans":var v=r(e),p=Object(o.a)(v,3),m=p[0],g=p[1],b=p[2],x=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e.length&&e[0].length&&e.length>=t){var r,c,a,i=0;for(a=n?N(e,t):R(e,t);!I(r,a,i);)r=Object(L.a)(a),i++,a=U(e,c=V(e,a));for(var u=[],l=0;l<t;l++)u.push(c[l]);return{clusters:u,centroids:a,iterations:i,converged:i<=50}}throw new Error("Invalid dataset")}(m.map((function(e){return[e]})),b),y=x.clusters;return y.sort((function(e,n){return j[t](e.centroid[0],n.centroid[0])})),c(y.map((function(e){return e.indeces})),g);case"gap":var O=r(e),w=Object(o.a)(O,3),k=w[0],C=w[1],A=w[2],S=function(e,t){var n=j.pairs(e).map((function(e,t){return{value:Math.abs(e[1]-e[0]),index:t}}));n.sort((function(e,t){return e.value===t.value?j.ascending(e.index,t.index):j.descending(e.value,t.value)}));var r=n.slice(0,t-1).map((function(e){return e.index}));return r.sort(j.ascending),r.unshift(-1),r.push(e.length-1),j.pairs(r).map((function(e){return j.range(e[0]+1,e[1]+1)}))}(n(k),A);return c(S,C);default:console.log("Unknown simplification method: ".concat(l))}}(h,s):function(e){return function(e){return e.reduce((function(e,t,n,r){return 0===n?e.push([n]):t===r[n-1]?e[e.length-1].push(n):e.push([n]),e}),[])}(e)}(h)).filter((function(e){return e.length>0}));r=v.map((function(e){var t=e.length;if(1===t)return n[e[0]].cluster=null,n[e[0]];var r={isCluster:!0,indeces:e,size:t,values:{}};return e.forEach((function(e){return n[e].cluster=r})),c.forEach((function(t){var c=t.name,a=t.type,i=t.uniqueValues;if("numeric"===a){var u=e.map((function(e){return n[e].values[c]}));if(u.length>0){var l=u.filter((function(e){return null!==e}));r.values[c]=l.length>0?{valid:!0,values:u,validValues:l,min:j.min(l),max:j.max(l),median:j.median(l),q1:j.quantile(l,.25),q2:j.quantile(l,.75)}:{valid:!1,values:u}}else r.values[c]=null}else{var s=e.map((function(e){return n[e].values[c]}));if(s.length>0){var o=O(i,s);t.maxCount=Math.max(t.maxCount,o[0].count),r.values[c]={counts:o}}else r.values[c]=null}})),r}))}else r=Object(L.a)(n)}function S(){var e=c.find((function(e){return null!==e.sort}));if(e){var t=e.name,n=e.type,a=e.sort;r.sort((function(e,r){switch(n){case"numeric":var c=e.isCluster?e.values[t].median:e.values[t],i=r.isCluster?r.values[t].median:r.values[t];return c===i?0:null===c?1:null===i?-1:j[a](c,i);case"categorical":var u=e.isCluster?e.values[t].counts[0].count/e.size:e.values[t],l=r.isCluster?r.values[t].counts[0].count/r.size:r.values[t];return u===l?0:null===u?1:null===l?-1:j[a](u,l);case"id":var s=e.isCluster?e.values[t].counts[0].value:e.values[t],o=r.isCluster?r.values[t].counts[0].value:r.values[t];return s===o?0:null===s?1:null===o?-1:j[a](s,o);default:return console.log("Unknown column type ".concat(n)),0}}))}}function M(){var a="5px",l="0px",s=c.find((function(e){return e.cluster})),o=u&&s&&"categorical"===s.type;e.selectAll("svg").attr("width",0),function(){var t=this,n=function(e){switch(e.type){case"numeric":var t=e.extent[0],n=e.extent[1];return t===n?t:"<div class='range'><div>".concat(t,"</div><div class='dash'><hr /></div><div>").concat(n,"</div>");case"categorical":return"<div>".concat(e.uniqueValues.length," categories</div>");case"id":return"<div>".concat(e.uniqueValues.length," unique values<div>");default:return null}},r=e.select("thead").select("tr").selectAll("th").data(c,(function(e){return e.name})).join((function(e){var r=e.append("th"),c=r.append("div").attr("class","headerDiv"),a=c.append("div").attr("class","nameDiv");return a.append("div").text((function(e){return e.name})),a.append("button").attr("class","headerButton sortButton").on("click",(function(e,t){!function(e){var t="descending"===e.sort?"ascending":"descending";k(),e.sort=t}(t),S(),M()})),a.append("button").attr("class","headerButton clusterButton").style("font-weight","bold").on("click",(function(e,n){!function(e){var t=null===e.cluster?"descending":"descending"===e.cluster?"ascending":null;C(),k(),e.cluster=t}(n),A(),S(),M(),x.call("clusterByColumn",t,n)})),c.append("div").attr("class","info").html(n),c.each((function(e){j.select(this).selectAll(".visDiv").data("id"===e.type?[]:[e]).join((function(e){var t=e.append("div").attr("class","visDiv");return t.append("svg"),t}))})),r.append("div").attr("class","highlight"),r})).classed("active",(function(e){return null!==e.cluster})).style("padding-left",a).style("padding-right",a).style("padding-top",l).style("padding-bottom",l);r.select(".clusterButton").classed("active",(function(e){return null!==e.cluster})).text((function(e){return"ascending"===(t=e.cluster)?"\u22bb":"descending"===t?"\u22bc":"\u2261";var t})),r.select(".sortButton").classed("active",(function(e){return null!==e.sort})).style("visibility",(function(e){return null===e.cluster&&o?null:"hidden"})).text((function(e){return"ascending"===e.sort?"\u21e3":"\u21e1"})),e.select("thead").selectAll("tr").each((function(){j.select(this).selectAll("th").each((function(e){var t=j.select(this).select(".nameDiv").node().clientWidth;switch(e.type){case"numeric":var n=j.select(this).select(".visDiv svg").attr("width",t).attr("height",10),r=j.scaleLinear().domain(e.extent).rangeRound([0,t]),c=j.bin().domain(r.domain())(e.values),a=j.scaleLinear().domain([0,j.max(c,(function(e){return e.length}))]).range([10,0]);n.selectAll("rect").data(c).join((function(e){var t=e.append("rect").style("fill","#aaa");return t.append("title"),t})).attr("x",(function(e){return r(e.x0)})).attr("y",(function(e){return a(e.length)})).attr("width",(function(e){return r(e.x1)-r(e.x0)-1})).attr("height",(function(e){return a(0)-a(e.length)})).select("title").text((function(e){return"".concat(e.x0,"-").concat(e.x1,": ").concat(e.length)}));break;case"categorical":var i=j.select(this).select(".visDiv svg").attr("width",t).attr("height",10),u=j.scaleOrdinal().domain(e.uniqueValues).range(j.schemeTableau10),l=j.scaleBand().domain(e.uniqueValues).range([0,t]),s=j.scaleLinear().domain([0,j.max(e.counts,(function(e){return e.count}))]).range([10,0]);i.selectAll("rect").data(e.counts).join((function(e){var t=e.append("rect");return t.append("title"),t})).attr("x",(function(e){return l(e.value)})).attr("y",(function(e){return s(e.count)})).attr("width",l.bandwidth()).attr("height",(function(e){return s(0)-s(e.count)})).attr("fill",(function(e){return u(e.value)})).select("title").text((function(e){return"".concat(e.value,": ").concat(e.count)}));break;case"id":j.select(this).select(".visDiv svg").attr("width",t).attr("height",10);break;default:console.log("Unknown column type ".concat(e.type))}}))}))}(),function(){var u=function(e,t,n,r){switch(e){case"numeric":if(null!==t&&n&&t.valid){var c=j.format(".".concat(r,"r"))(t.median);return t.min===t.max?c:"<div class='range'><div class='extrema'>".concat(t.min,"</div><div>").concat(c,"</div><div class='extrema'>").concat(t.max,"<div>")}return null===t||n?"":t;case"categorical":if(null!==t&&n){var a=t.counts[0],i=t.counts.slice(1).filter((function(e){return e.count>0})),u=i.map((function(e){return"".concat(e.value," (").concat(e.count,")")})).join(", "),l="<div>".concat(a.value)+(a.count>1?" (".concat(a.count,")</div>"):"<div>"),s=1===i.length?"<div class='others' title=\"".concat(u,'">and 1 other category</div>'):i.length>1?"<div class='others' title=\"".concat(u,'">and ').concat(i.length," other categories</div>"):"";return"<div class='categories'>".concat(l).concat(s,"</div>")}return null===t?"":t;case"id":if(null!==t&&n){var o=t.counts[0],d=t.counts.slice(1).filter((function(e){return e.count>0})),f=d.map((function(e){return e.value})).join(", "),h="<div>".concat(o.value,"<div>"),v=1===d.length?"<div class='others' title=\"".concat(f,'">and 1 other</div>'):d.length>1?"<div class='others' title=\"".concat(f,'">and ').concat(d.length," others</div>"):"";return"<div class='categories'>".concat(h).concat(v,"</div>")}return null===t?"":t;case"cluster":return"<div class='clusterSize'>n = ".concat(t,"</div>");default:return null}},s=[],o=c.find((function(e){return null!==e.sort})),d=c.find((function(e){return null!==e.cluster}));r.forEach((function(e){if(s.push(e),e.isCluster){var t=e.indeces.map((function(e){return n[e]})).filter((function(e){return e.pinned||e.expanded})),r=o?o.name:d.name,c=o?o.sort:d.cluster;t.sort((function(e,t){var n=e.values[r],a=t.values[r];return null===n&&null===a?0:null===n?1:null===a?-1:j[c](n,a)})),s.push.apply(s,Object(L.a)(t))}}));var f=j.max(r,(function(e){return e.isCluster?e.size:1}));e.select("tbody").selectAll("tr").data(s).join("tr").style("cursor","pointer").each((function(e){j.select(this).selectAll("td").data(c,(function(e){return e.name})).join((function(e){var t=e.append("td"),n=t.append("div").attr("class","cellDiv").append("div").attr("class","valueDiv");return n.append("div").attr("class","textDiv").classed("notId",(function(e){return"id"!==e.type})).style("text-align",(function(e){return"numeric"===e.type?"center":"left"})),n.append("div").attr("class","visDiv"),t})).classed("active",(function(e){return null!==e.cluster})).style("padding-left",a).style("padding-right",a).style("padding-top",l).style("padding-bottom",l).each((function(t){var n=e.values[t.name],r=j.select(this).classed("expanded",e.expanded).classed("pinned",e.pinned);r.select(".valueDiv .textDiv").html(u(t.type,n,e.isCluster,t.maxDigits)),r.select(".cellDiv").selectAll(".clusterDiv").data(i&&null!==t.cluster?[n]:[]).join((function(e){var t=e.append("div").attr("class","clusterDiv");return t.append("div").attr("class","textDiv notId"),t.append("div").attr("class","visDiv"),t})).select(".textDiv").html(e.expanded?"":u("cluster",e.isCluster?e.size:1))}))})),e.select("tbody").selectAll("tr").each((function(n,r){j.select(this).selectAll("td").each((function(e){0===r&&(e.width=j.select(this).select(".valueDiv").node().clientWidth);var t=n.values[e.name];switch(e.type){case"numeric":j.select(this).select(".valueDiv .visDiv").selectAll("svg").data(null===t||n.isCluster&&!t.valid?[]:[t]).join("svg").attr("width",e.width).attr("height",10).each((function(t){var r=j.select(this),c=Math.max(Math.floor(1.5),1),a=j.scaleLinear().domain([e.extent[0],(e.extent[0]+e.extent[1])/2,e.extent[1]]).range(["#2171b5","#999","#cb181d"]),i=j.scaleLinear().domain(e.extent).range([3,e.width-3]);r.selectAll("line").data(n.isCluster?[[t.min,t.max,t.median],[t.q1,t.q2,t.median]]:[]).join((function(e){return e.append("line").style("margin",0).style("padding",0).style("stroke-linecap","round")})).attr("x1",(function(e){return i(e[0])})).attr("y1",3).attr("x2",(function(e){return i(e[1])})).attr("y2",3).style("stroke",(function(e){return a(e[2])})).style("stroke-width",(function(e,t){return 0===t?c:3})),r.selectAll("circle").data(n.isCluster?[t.median]:[t]).join("circle").attr("cx",(function(e){return i(e)})).attr("cy",3).attr("r",3).style("fill",(function(e){return a(e)}))}));break;case"categorical":j.select(this).select(".valueDiv .visDiv").selectAll("svg").data(null===t?[]:[t]).join("svg").attr("width",e.width).attr("height",10).each((function(t){var n=j.select(this),r=t.counts?t.counts:[{value:t,count:1}],c=j.scaleOrdinal().domain(e.uniqueValues).range(j.schemeTableau10),a=j.scaleBand().domain(e.uniqueValues).range([0,e.width]),i=j.scaleLinear().domain("row"===p?[0,j.max(r,(function(e){return e.count}))]:[0,e.maxCount]).range([10,0]);n.selectAll("rect").data(r).join((function(e){var t=e.append("rect");return t.append("title"),t})).attr("x",(function(e){return a(e.value)})).attr("y",(function(e){return i(e.count)})).attr("width",a.bandwidth()).attr("height",(function(e){return i(0)-i(e.count)})).attr("fill",(function(e){return c(e.value)})).select("title").text((function(e){return"".concat(e.value,": ").concat(e.count)}))}));break;case"id":break;default:console.log("Unknown column type ".concat(e.type))}j.select(this).select(".clusterDiv .visDiv").selectAll("svg").data([n]).join("svg").attr("width",30).attr("height",10).each((function(e){var t=j.select(this),n=e.isCluster?e.size:1,r=j.scaleLinear().domain([0,f]).range([0,30]);t.selectAll("rect").data(e.expanded?[]:[e]).join("rect").attr("width",r(n)).attr("height",5).attr("fill","#bbb")}))})).on("mouseover",(function(n,r){e.selectAll("th").filter((function(e){return e===r})).select(".highlight").style("visibility",null),"interactive"===h&&e.selectAll("td").filter((function(e){return e===r||null!==e.cluster})).selectAll(".textDiv.notId").style("visibility",null),t.selectAll("path").style("visibility",(function(e){return e.source===r||e.target===r?null:"hidden"}))})).on("mouseout",(function(n,r){e.selectAll("th").filter((function(e){return e===r})).select(".highlight").style("visibility",(function(e){return null!==e.cluster?null:"hidden"})),"interactive"===h&&e.selectAll("td").filter((function(e){return e===r||null!==e.cluster})).selectAll(".textDiv.notId").style("visibility","hidden"),t.selectAll("path").style("visibility",null)}))})).on("mouseover",(function(t,n){e.select("tbody").selectAll("tr").filter((function(e){return e===n})).selectAll("td").classed("mouseOver",!0)})).on("mouseout",(function(t,n){e.select("tbody").selectAll("tr").filter((function(e){return e===n})).selectAll("td").classed("mouseOver",!1)})).on("click",(function(e,t){t.isCluster?(t.indeces.forEach((function(e){n[e].expanded=!n[e].expanded})),M()):(t.pinned=!t.pinned,t.pinned?j.select(this).selectAll("td").classed("pinned",!0):M())}))}(),E(),function(){var t=e.node()?e.node().clientHeight-4:0;e.selectAll("th").select(".highlight").style("height","".concat(t,"px")).style("visibility",(function(e){return null!==e.cluster?null:"hidden"}))}(),D()}function D(){if(e.node()&&(0===a.length&&(a=c.reduce((function(e,t,r,c){for(var a=n.map((function(e){return e.values[t.name]})),i=function(r){var i=c[r],u=n.map((function(e){return e.values[i.name]})),l="id"===t.type||"id"===i.type?0:"categorical"===t.type&&"categorical"===i.type?J(a,u):"categorical"===t.type&&"numeric"===i.type?_(a,u):"numeric"===t.type&&"categorical"===i.type?_(u,a):W(a,u);e.push({source:t,target:i,value:l,magnitude:Math.abs(l)})},u=r+1;u<c.length;u++)i(u);return e}),[])).sort((function(e,t){return j.ascending(e.magnitude,t.magnitude)})),t.style("display",v?null:"none"),v)){var r=e.node().offsetWidth,i=200,u=r/i,l=e.node().getBoundingClientRect().x;e.selectAll("th").nodes().forEach((function(e,t){var n=e.getBoundingClientRect(),r=n.left,a=n.right;c[t].pos=r+(a-r)/2-l})),a.forEach((function(e){var t=e.source.pos,n=e.target.pos,r=i-(n-t)/u,c=j.interpolateNumber(t,n),a=j.interpolateNumber(i,r);e.points=[{x:c(0),y:a(0)},{x:c(.1),y:a(.5)},{x:c(.5),y:a(1)},{x:c(.9),y:a(.5)},{x:c(1),y:a(0)}]}));var s=j.line().x((function(e){return e.x})).y((function(e){return e.y})).curve(j.curveBasis),o=j.scaleSequential(j.interpolateRdBu).domain([1,-1]),d=j.scaleLinear().domain([0,1]).range([0,1]),f=j.scaleLinear().domain([0,1]).range([0,5]);t.attr("width",r).attr("height",i).selectAll("path").data(a).join("path").attr("d",(function(e){return s(e.points)})).style("fill","none").style("stroke",(function(e){return o(e.value)})).style("stroke-opacity",(function(e){return d(e.magnitude)})).style("stroke-width",(function(e){return f(e.magnitude)})).style("stroke-linecap","round").append("title").text((function(e){return e.value}))}}function E(){var t=e.selectAll("td");t.selectAll(".textDiv.notId").style("visibility","text"===h||"both"===h?"visible":"hidden"),t.selectAll("svg").style("visibility","text"!==h?"visible":"hidden")}return y.applySimplification=function(e){if(!arguments.length)return u;u=e;var t=c.find((function(e){return null!==e.cluster}));return t&&"id"!==t.type&&(A(),S(),M()),y},y.simplificationMethod=function(e){return arguments.length?(l=e,i&&(A(),S(),M()),y):l},y.simplificationAmount=function(e){return arguments.length?(s=e,i&&(A(),S(),M()),y):s},y.simplificationRows=function(e){return arguments.length?(d=e,i&&(A(),S(),M()),y):d},y.transformBase=function(e){return arguments.length?(f=e,i&&(A(),S(),M()),y):f},y.visualizationMode=function(e){return arguments.length?(h=e,E(),y):h},y.showLinks=function(e){return arguments.length?(v=e,M(),y):v},y.categoryScaling=function(e){return arguments.length?(p=e,M(),y):p},y.updateLinks=function(){return D(),y},y.on=function(){var e=x.on.apply(x,arguments);return e===x?y:e},y}),X=function(e){var t=e.data,n=Object(r.useContext)(k),c=Object(o.a)(n,2),a=c[0],i=a.apply,u=a.method,l=a.amount,s=a.rows,d=a.transformBase,f=c[1],h=Object(r.useContext)(E),v=Object(o.a)(h,1)[0],p=v.mode,m=v.showLinks,g=v.categoryScaling,b=Object(r.useRef)(),y=Object(r.useRef)(),O=function(e,t,n){var c=Object(r.useRef)(0),a=Object(r.useRef)(0),i=Object(r.useRef)(!1);return function(){if(t.current)switch(n){case"horizontal":var r=t.current.scrollLeft;r!==c.current&&(c.current=r,i.current||(window.requestAnimationFrame((function(){e(r),i.current=!1})),i.current=!0));break;case"vertical":var u=t.current.scrollTop;u!==a.current&&(a.current=u,i.current||(window.requestAnimationFrame((function(){e(u),i.current=!1})),i.current=!0));break;case"both":var l=t.current.scrollLeft,s=t.current.scrollTop;l===c.current&&s===a.current||(c.current=l,a.current=s,i.current||(window.requestAnimationFrame((function(){e(l,s),i.current=!1})),i.current=!0));break;default:console.log("Invalid scroll type")}}}((function(){y.current&&y.current.updateLinks()}),b,"horizontal");return Object(r.useEffect)((function(){y.current||(y.current=K().applySimplification(i).simplificationMethod(u.name).simplificationAmount(l).simplificationRows(s).transformBase(d).visualizationMode(p).categoryScaling(g).on("clusterByColumn",(function(e){f({type:"setColumnInfo",columnType:e.type,unique:e.uniqueValues.length})})))}),[]),Object(r.useEffect)((function(){j.select(b.current).datum(t).call(y.current)}),[t]),Object(r.useEffect)((function(){y.current&&y.current.applySimplification(i)}),[i]),Object(r.useEffect)((function(){y.current&&y.current.simplificationMethod(u.name)}),[u]),Object(r.useEffect)((function(){y.current&&y.current.simplificationAmount(l)}),[l]),Object(r.useEffect)((function(){y.current&&y.current.simplificationRows(s)}),[s]),Object(r.useEffect)((function(){y.current&&y.current.transformBase(d)}),[d]),Object(r.useEffect)((function(){y.current&&y.current.visualizationMode(p)}),[p]),Object(r.useEffect)((function(){y.current&&y.current.showLinks(m)}),[m]),Object(r.useEffect)((function(){y.current&&y.current.categoryScaling(g)}),[g]),Object(x.jsx)("div",{ref:b,style:{height:"100%",overflow:"auto"},onScroll:O})},Y=n(47),Z=n(74),$=Z.a.Header,ee=Z.a.Body,te=function(e){var t=e.title,n=e.children;return Object(x.jsxs)(Z.a,{children:[Object(x.jsx)($,{children:t}),Object(x.jsx)(ee,{children:Object(x.jsx)(m.a,{gap:3,children:n})})]})},ne=f.a.Group,re=f.a.Label,ce=f.a.Check,ae=f.a.Select,ie=f.a.Range,ue=f.a.Control,le=function(){var e=Object(r.useContext)(k),t=Object(o.a)(e,2),n=t[0],c=n.apply,a=n.columnType,i=n.methods,u=n.method,l=n.amount,s=n.transformBase,d=n.unique,f=n.rows,h=t[1];return Object(x.jsxs)(te,{title:"Simplification",children:[Object(x.jsx)(ne,{children:Object(x.jsx)(ce,{type:"checkbox",label:"Apply",id:"apply-simplification-checkbox",size:"sm",checked:c,disabled:"id"===a,onChange:function(e){h({type:"setApply",apply:e.target.checked})}})}),Object(x.jsx)(ne,{children:Object(x.jsx)(Y.a,{label:"Method",children:Object(x.jsx)(ae,{value:u.name,disabled:"numeric"!==a,onChange:function(e){h({type:"setMethod",method:i.find((function(t){return t.name===e.target.value}))})},children:i.map((function(e,t){var n=e.name;return Object(x.jsx)("option",{value:n,children:n},t)}))})})}),"amount"===u.type?Object(x.jsxs)(ne,{children:[Object(x.jsx)(re,{children:"Amount"}),Object(x.jsx)(ie,{min:0,max:100,step:1,value:100*l,disabled:"numeric"!==a,onChange:function(e){h({type:"setAmount",amount:+e.target.value/100})}})]}):Object(x.jsxs)(ne,{children:[Object(x.jsx)(re,{children:"Number of rows"}),Object(x.jsx)(ue,{type:"number",min:1,max:d,step:1,value:f,disabled:"numeric"!==a,onChange:function(e){h({type:"setRows",rows:+e.target.value})}})]}),u.transform&&Object(x.jsxs)(ne,{children:[Object(x.jsx)(re,{children:"Depth weight"}),Object(x.jsx)(ie,{min:100,max:400,step:1,value:100*s,onChange:function(e){h({type:"setTransformBase",transformBase:+e.target.value/100})}})]})]})},se=f.a.Group,oe=f.a.Select,de=f.a.Check,fe=function(){var e=Object(r.useContext)(E),t=Object(o.a)(e,2),n=t[0],c=n.modes,a=n.mode,i=n.showLinks,u=n.categoryScalingOptions,l=n.categoryScaling,s=t[1];return Object(x.jsxs)(te,{title:"Visualization",children:[Object(x.jsx)(se,{children:Object(x.jsx)(Y.a,{label:"Mode",children:Object(x.jsx)(oe,{value:a,onChange:function(e){s({type:"setMode",mode:e.target.value})},children:c.map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)}))})})}),Object(x.jsx)(se,{children:Object(x.jsx)(de,{type:"checkbox",label:"Show links",id:"show-links-checkbox",size:"sm",checked:i,onChange:function(e){s({type:"setShowLinks",showLinks:e.target.checked})}})}),Object(x.jsx)(se,{children:Object(x.jsx)(Y.a,{label:"Category scaling",children:Object(x.jsx)(oe,{value:l,onChange:function(e){s({type:"setCategoryScaling",categoryScaling:e.target.value})},children:u.map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)}))})})})]})},he=d.a.Brand,ve=f.a.Group,pe=f.a.Control,me=f.a.Select,ge=[{name:"MT Cars",url:"data/mtcars.csv"},{name:"NFL Combine 2017",url:"data/NFL Combine 2017.csv"}],je=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(o.a)(a,2),u=i[0],b=i[1],y=Object(r.useState)(!1),O=Object(o.a)(y,2),w=O[0],k=O[1],A=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),k(!0),e.prev=2,e.next=5,j.csv(t);case 5:n=e.sent,b(n),k(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(C,{children:Object(x.jsxs)(q,{children:[Object(x.jsxs)(d.a,{bg:"dark",variant:"dark",children:[Object(x.jsxs)(he,{className:"ms-2",children:[Object(x.jsx)("img",{src:"/digestable_512.png",alt:"digestable logo",height:"32px",className:"me-1"}),Object(x.jsxs)("span",{className:"text-align-bottom",children:["diges",Object(x.jsx)("b",{children:"table"})]})]}),Object(x.jsx)(f.a,{children:Object(x.jsxs)(ve,{as:h.a,className:"align-items-center",children:[Object(x.jsx)(v.a,{children:Object(x.jsxs)(me,{value:n,onChange:function(e){var t=e.target.value;c(t),A(t)},children:[Object(x.jsx)("option",{value:"",disabled:!0,children:"Choose dataset"}),ge.map((function(e,t){return Object(x.jsx)("option",{value:e.url,children:e.name},t)}))]})}),Object(x.jsx)(v.a,{sm:"auto",className:"text-center",children:Object(x.jsx)("span",{className:"text-light",children:"or"})}),Object(x.jsx)(v.a,{children:Object(x.jsx)(pe,{type:"file",accept:".csv",onChange:function(e){var t=1===e.target.files.length?e.target.files[0]:null;t&&(c(""),A(URL.createObjectURL(t)))}})})]})})]}),u?Object(x.jsx)(p.a,{fluid:!0,style:{height:"calc(100% - 100px)"},children:Object(x.jsxs)(h.a,{style:{height:"100%"},children:[Object(x.jsx)(v.a,{xs:10,className:"mt-3",style:{height:"100%"},children:Object(x.jsx)(X,{data:u})}),Object(x.jsx)(v.a,{className:"bg-dark",children:Object(x.jsxs)(m.a,{gap:3,children:[Object(x.jsx)(le,{}),Object(x.jsx)(fe,{})]})})]})}):Object(x.jsx)(p.a,{children:Object(x.jsx)("div",{className:"m-4 text-center",children:w?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h5",{children:"Loading..."}),Object(x.jsx)(g.a,{animation:"border"})]}):Object(x.jsx)("h3",{children:"No data"})})})]})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(je,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.9e400500.chunk.js.map