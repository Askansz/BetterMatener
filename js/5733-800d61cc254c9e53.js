!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="643cb404-daac-49c5-af74-9f79cb6011be",e._sentryDebugIdIdentifier="sentry-dbid-643cb404-daac-49c5-af74-9f79cb6011be")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5733],{67161:function(e,t,n){function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{MG:function(){return v}});var i=n(7653);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t,n){var r,i,o=null!=(r=n.initialDeps)?r:[];return function(){n.key&&null!=n.debug&&n.debug()&&(r=Date.now());var r,s,l=e();if(!(l.length!==o.length||l.some(function(e,t){return o[t]!==e})))return i;if(o=l,n.key&&null!=n.debug&&n.debug()&&(s=Date.now()),i=t.apply(void 0,l),n.key&&null!=n.debug&&n.debug()){var a=Math.round((Date.now()-r)*100)/100,u=Math.round((Date.now()-s)*100)/100,c=u/16,h=function(e,t){for(e=String(e);e.length<t;)e=" "+e;return e};console.info("%c⏱ "+h(u,5)+" /"+h(a,5)+" ms","\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl("+Math.max(0,Math.min(120-120*c,120))+"deg 100% 31%);",null==n?void 0:n.key)}return null==n||null==n.onChange||n.onChange(i),i}}function l(e,t){if(void 0!==e)return e;throw Error("Unexpected undefined"+(t?": "+t:""))}var a=function(e){return e},u=function(e){for(var t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),r=[],i=t;i<=n;i++)r.push(i);return r},c=function(e,t){var n=e.scrollElement;if(n){var r=function(e){t({width:Math.round(e.width),height:Math.round(e.height)})};r(n.getBoundingClientRect());var i=new ResizeObserver(function(e){var t=e[0];if(null!=t&&t.borderBoxSize){var i=t.borderBoxSize[0];if(i){r({width:i.inlineSize,height:i.blockSize});return}}r(n.getBoundingClientRect())});return i.observe(n,{box:"border-box"}),function(){i.unobserve(n)}}},h=function(e,t){var n=e.scrollElement;if(n){var r=function(){t(n[e.options.horizontal?"scrollLeft":"scrollTop"])};return r(),n.addEventListener("scroll",r,{passive:!0}),function(){n.removeEventListener("scroll",r)}}},d=function(e,t,n){if(null!=t&&t.borderBoxSize){var r=t.borderBoxSize[0];if(r)return Math.round(r[n.options.horizontal?"inlineSize":"blockSize"])}return Math.round(e.getBoundingClientRect()[n.options.horizontal?"width":"height"])},p=function(e,t,n){var r,i,o=t.adjustments,s=t.behavior;null==(r=n.scrollElement)||null==r.scrollTo||r.scrollTo(((i={})[n.options.horizontal?"left":"top"]=e+(void 0===o?0:o),i.behavior=s,i))},f=function(e){var t,n,r=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=(t=null,n=function(){return t||("undefined"!=typeof ResizeObserver?t=new ResizeObserver(function(e){e.forEach(function(e){r._measureElement(e.target,e)})}):null)},{disconnect:function(){var e;return null==(e=n())?void 0:e.disconnect()},observe:function(e){var t;return null==(t=n())?void 0:t.observe(e,{box:"border-box"})},unobserve:function(e){var t;return null==(t=n())?void 0:t.unobserve(e)}}),this.range={startIndex:0,endIndex:0},this.setOptions=function(e){Object.entries(e).forEach(function(t){var n=t[0];void 0===t[1]&&delete e[n]}),r.options=o({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:a,rangeExtractor:u,onChange:function(){},measureElement:d,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},e)},this.notify=function(){null==r.options.onChange||r.options.onChange(r)},this.cleanup=function(){r.unsubs.filter(Boolean).forEach(function(e){return e()}),r.unsubs=[],r.scrollElement=null},this._didMount=function(){return r.measureElementCache.forEach(r.observer.observe),function(){r.observer.disconnect(),r.cleanup()}},this._willUpdate=function(){var e=r.options.getScrollElement();r.scrollElement!==e&&(r.cleanup(),r.scrollElement=e,r._scrollToOffset(r.scrollOffset,{adjustments:void 0,behavior:void 0}),r.unsubs.push(r.options.observeElementRect(r,function(e){var t=r.scrollRect;r.scrollRect=e,(r.options.horizontal?e.width!==t.width:e.height!==t.height)&&r.maybeNotify()})),r.unsubs.push(r.options.observeElementOffset(r,function(e){r.scrollAdjustments=0,r.scrollOffset!==e&&(null!==r.isScrollingTimeoutId&&(clearTimeout(r.isScrollingTimeoutId),r.isScrollingTimeoutId=null),r.isScrolling=!0,r.scrollDirection=r.scrollOffset<e?"forward":"backward",r.scrollOffset=e,r.maybeNotify(),r.isScrollingTimeoutId=setTimeout(function(){r.isScrollingTimeoutId=null,r.isScrolling=!1,r.scrollDirection=null,r.maybeNotify()},r.options.scrollingDelay))})))},this.getSize=function(){return r.scrollRect[r.options.horizontal?"width":"height"]},this.memoOptions=s(function(){return[r.options.count,r.options.paddingStart,r.options.scrollMargin,r.options.getItemKey]},function(e,t,n,i){return r.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:i}},{key:!1}),this.getFurthestMeasurement=function(e,t){for(var n=new Map,i=new Map,o=t-1;o>=0;o--){var s=e[o];if(!n.has(s.lane)){var l=i.get(s.lane);if(null==l||s.end>l.end?i.set(s.lane,s):s.end<l.end&&n.set(s.lane,!0),n.size===r.options.lanes)break}}return i.size===r.options.lanes?Array.from(i.values()).sort(function(e,t){return e.end-t.end})[0]:void 0},this.getMeasurements=s(function(){return[r.memoOptions(),r.itemSizeCache]},function(e,t){var n=e.count,i=e.paddingStart,o=e.scrollMargin,s=e.getItemKey,l=r.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,r.pendingMeasuredCacheIndexes):0;r.pendingMeasuredCacheIndexes=[];for(var a=r.measurementsCache.slice(0,l),u=l;u<n;u++){var c=s(u),h=1===r.options.lanes?a[u-1]:r.getFurthestMeasurement(a,u),d=h?h.end:i+o,p=t.get(c),f="number"==typeof p?p:r.options.estimateSize(u),m=d+f,g=h?h.lane:u%r.options.lanes;a[u]={index:u,start:d,size:f,end:m,key:c,lane:g}}return r.measurementsCache=a,a},{key:!1,debug:function(){return r.options.debug}}),this.calculateRange=s(function(){return[r.getMeasurements(),r.getSize(),r.scrollOffset]},function(e,t,n){return r.range=function(e){for(var t=e.measurements,n=e.outerSize,r=e.scrollOffset,i=t.length-1,o=m(0,i,function(e){return t[e].start},r),s=o;s<i&&t[s].end<r+n;)s++;return{startIndex:o,endIndex:s}}({measurements:e,outerSize:t,scrollOffset:n})},{key:!1,debug:function(){return r.options.debug}}),this.maybeNotify=s(function(){var e=r.calculateRange();return[e.startIndex,e.endIndex,r.isScrolling]},function(){r.notify()},{key:!1,debug:function(){return r.options.debug},initialDeps:[this.range.startIndex,this.range.endIndex,this.isScrolling]}),this.getIndexes=s(function(){return[r.options.rangeExtractor,r.calculateRange(),r.options.overscan,r.options.count]},function(e,t,n,r){return e(o({},t,{overscan:n,count:r}))},{key:!1,debug:function(){return r.options.debug}}),this.indexFromElement=function(e){var t=r.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn("Missing attribute name '"+t+"={index}' on measured element."),-1)},this._measureElement=function(e,t){var n,i=r.indexFromElement(e),o=r.measurementsCache[i];if(o){var s=r.measureElementCache.get(o.key);if(!e.isConnected){r.observer.unobserve(e),e===s&&r.measureElementCache.delete(o.key);return}s!==e&&(s&&r.observer.unobserve(s),r.observer.observe(e),r.measureElementCache.set(o.key,e));var l=r.options.measureElement(e,t,r),a=l-(null!=(n=r.itemSizeCache.get(o.key))?n:o.size);0!==a&&(o.start<r.scrollOffset&&r._scrollToOffset(r.scrollOffset,{adjustments:r.scrollAdjustments+=a,behavior:void 0}),r.pendingMeasuredCacheIndexes.push(i),r.itemSizeCache=new Map(r.itemSizeCache.set(o.key,l)),r.notify())}},this.measureElement=function(e){e&&r._measureElement(e,void 0)},this.getVirtualItems=s(function(){return[r.getIndexes(),r.getMeasurements()]},function(e,t){for(var n=[],r=0,i=e.length;r<i;r++){var o=t[e[r]];n.push(o)}return n},{key:!1,debug:function(){return r.options.debug}}),this.getVirtualItemForOffset=function(e){var t=r.getMeasurements();return l(t[m(0,t.length-1,function(e){return l(t[e]).start},e)])},this.getOffsetForAlignment=function(e,t){var n=r.getSize();"auto"===t&&(t=e<=r.scrollOffset?"start":e>=r.scrollOffset+n?"end":"start"),"start"===t||("end"===t?e-=n:"center"===t&&(e-=n/2));var i=r.options.horizontal?"scrollWidth":"scrollHeight";return Math.max(Math.min((r.scrollElement?"document"in r.scrollElement?r.scrollElement.document.documentElement[i]:r.scrollElement[i]:0)-r.getSize(),e),0)},this.getOffsetForIndex=function(e,t){void 0===t&&(t="auto"),e=Math.max(0,Math.min(e,r.options.count-1));var n=l(r.getMeasurements()[e]);if("auto"===t){if(n.end>=r.scrollOffset+r.getSize()-r.options.scrollPaddingEnd)t="end";else{if(!(n.start<=r.scrollOffset+r.options.scrollPaddingStart))return[r.scrollOffset,t];t="start"}}var i="end"===t?n.end+r.options.scrollPaddingEnd:n.start-r.options.scrollPaddingStart;return[r.getOffsetForAlignment(i,t),t]},this.isDynamicMode=function(){return r.measureElementCache.size>0},this.cancelScrollToIndex=function(){null!==r.scrollToIndexTimeoutId&&(clearTimeout(r.scrollToIndexTimeoutId),r.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(e,t){var n=void 0===t?{}:t,i=n.align,o=n.behavior;r.cancelScrollToIndex(),"smooth"===o&&r.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),r._scrollToOffset(r.getOffsetForAlignment(e,void 0===i?"start":i),{adjustments:void 0,behavior:o})},this.scrollToIndex=function(e,t){var n=void 0===t?{}:t,i=n.align,o=n.behavior;e=Math.max(0,Math.min(e,r.options.count-1)),r.cancelScrollToIndex(),"smooth"===o&&r.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var s=r.getOffsetForIndex(e,void 0===i?"auto":i),l=s[0],a=s[1];r._scrollToOffset(l,{adjustments:void 0,behavior:o}),"smooth"!==o&&r.isDynamicMode()&&(r.scrollToIndexTimeoutId=setTimeout(function(){r.scrollToIndexTimeoutId=null,r.measureElementCache.has(r.options.getItemKey(e))&&1>Math.abs(r.getOffsetForIndex(e,a)[0]-r.scrollOffset)||r.scrollToIndex(e,{align:a,behavior:o})}))},this.scrollBy=function(e,t){var n=(void 0===t?{}:t).behavior;r.cancelScrollToIndex(),"smooth"===n&&r.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),r._scrollToOffset(r.scrollOffset+e,{adjustments:void 0,behavior:n})},this.getTotalSize=function(){var e;return((null==(e=r.getMeasurements()[r.options.count-1])?void 0:e.end)||r.options.paddingStart)-r.options.scrollMargin+r.options.paddingEnd},this._scrollToOffset=function(e,t){var n=t.adjustments,i=t.behavior;r.options.scrollToFn(e,{behavior:i,adjustments:n},r)},this.measure=function(){r.itemSizeCache=new Map,r.notify()},this.setOptions(e),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(function(e){r.itemSizeCache.set(e.key,e.size)}),this.maybeNotify()},m=function(e,t,n,r){for(;e<=t;){var i=(e+t)/2|0,o=n(i);if(o<r)e=i+1;else{if(!(o>r))return i;t=i-1}}return e>0?e-1:0},g="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function v(e){var t,n,o,s;return t=r({observeElementRect:c,observeElementOffset:h,scrollToFn:p},e),n=i.useReducer(function(){return{}},{})[1],o=r({},t,{onChange:function(e){n(),null==t.onChange||t.onChange(e)}}),(s=i.useState(function(){return new f(o)})[0]).setOptions(o),i.useEffect(function(){return s._didMount()},[]),g(function(){return s._willUpdate()}),s}},68921:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(43036),i=function(){};i.prototype.append=function(e){return e.length?(e=i.from(e),!this.length&&e||e.length<200&&this.leafAppend(e)||this.length<200&&e.leafPrepend(this)||this.appendInner(e)):this},i.prototype.prepend=function(e){return e.length?i.from(e).append(this):this},i.prototype.appendInner=function(e){return new s(this,e)},i.prototype.slice=function(e,t){return(void 0===e&&(e=0),void 0===t&&(t=this.length),e>=t)?i.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,t))},i.prototype.get=function(e){if(!(e<0)&&!(e>=this.length))return this.getInner(e)},i.prototype.forEach=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=this.length),t<=n?this.forEachInner(e,t,n,0):this.forEachInvertedInner(e,t,n,0)},i.prototype.map=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=this.length);var r=[];return this.forEach(function(t,n){return r.push(e(t,n))},t,n),r},i.from=function(e){return e instanceof i?e:e&&e.length?new o(e):i.empty};var o=function(e){function t(t){e.call(this),this.values=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={length:{configurable:!0},depth:{configurable:!0}};return t.prototype.flatten=function(){return this.values},t.prototype.sliceInner=function(e,n){return 0==e&&n==this.length?this:new t(this.values.slice(e,n))},t.prototype.getInner=function(e){return this.values[e]},t.prototype.forEachInner=function(e,t,n,r){for(var i=t;i<n;i++)if(!1===e(this.values[i],r+i))return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){for(var i=t-1;i>=n;i--)if(!1===e(this.values[i],r+i))return!1},t.prototype.leafAppend=function(e){if(this.length+e.length<=200)return new t(this.values.concat(e.flatten()))},t.prototype.leafPrepend=function(e){if(this.length+e.length<=200)return new t(e.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(t.prototype,n),t}(i);i.empty=new o([]);var s=function(e){function t(t,n){e.call(this),this.left=t,this.right=n,this.length=t.length+n.length,this.depth=Math.max(t.depth,n.depth)+1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},t.prototype.getInner=function(e){return e<this.left.length?this.left.get(e):this.right.get(e-this.left.length)},t.prototype.forEachInner=function(e,t,n,r){var i=this.left.length;if(t<i&&!1===this.left.forEachInner(e,t,Math.min(n,i),r)||n>i&&!1===this.right.forEachInner(e,Math.max(t-i,0),Math.min(this.length,n)-i,r+i))return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){var i=this.left.length;if(t>i&&!1===this.right.forEachInvertedInner(e,t-i,Math.max(n,i)-i,r+i)||n<i&&!1===this.left.forEachInvertedInner(e,Math.min(t,i),n,r))return!1},t.prototype.sliceInner=function(e,t){if(0==e&&t==this.length)return this;var n=this.left.length;return t<=n?this.left.slice(e,t):e>=n?this.right.slice(e-n,t-n):this.left.slice(e,n).append(this.right.slice(0,t-n))},t.prototype.leafAppend=function(e){var n=this.right.leafAppend(e);if(n)return new t(this.left,n)},t.prototype.leafPrepend=function(e){var n=this.left.leafPrepend(e);if(n)return new t(n,this.right)},t.prototype.appendInner=function(e){return this.left.depth>=Math.max(this.right.depth,e.depth)+1?new t(this.left,new t(this.right,e)):new t(this,e)},t}(i),l=n(49736),a=n(70267);class u{constructor(e,t){this.items=e,this.eventCount=t}popEvent(e,t){let n,r,i,o;if(0==this.eventCount)return null;let s=this.items.length;for(;;s--)if(this.items.get(s-1).selection){--s;break}t&&(r=(n=this.remapping(s,this.items.length)).maps.length);let l=e.tr,a=[],h=[];return this.items.forEach((e,t)=>{if(!e.step){n||(r=(n=this.remapping(s,t+1)).maps.length),r--,h.push(e);return}if(n){h.push(new c(e.map));let t=e.step.map(n.slice(r)),i;t&&l.maybeStep(t).doc&&(i=l.mapping.maps[l.mapping.maps.length-1],a.push(new c(i,void 0,void 0,a.length+h.length))),r--,i&&n.appendMap(i,r)}else l.maybeStep(e.step);if(e.selection)return i=n?e.selection.map(n.slice(r)):e.selection,o=new u(this.items.slice(0,s).append(h.reverse().concat(a)),this.eventCount-1),!1},this.items.length,0),{remaining:o,transform:l,selection:i}}addTransform(e,t,n,r){var i,o;let s,l=[],a=this.eventCount,h=this.items,p=!r&&h.length?h.get(h.length-1):null;for(let n=0;n<e.steps.length;n++){let i=e.steps[n].invert(e.docs[n]),o=new c(e.mapping.maps[n],i,t),s;(s=p&&p.merge(o))&&(o=s,n?l.pop():h=h.slice(0,h.length-1)),l.push(o),t&&(a++,t=void 0),r||(p=o)}let f=a-n.depth;return f>d&&(i=h,o=f,i.forEach((e,t)=>{if(e.selection&&0==o--)return s=t,!1}),h=i.slice(s),a-=f),new u(h.append(l),a)}remapping(e,t){let n=new l.vs;return this.items.forEach((t,r)=>{let i=null!=t.mirrorOffset&&r-t.mirrorOffset>=e?n.maps.length-t.mirrorOffset:void 0;n.appendMap(t.map,i)},e,t),n}addMaps(e){return 0==this.eventCount?this:new u(this.items.append(e.map(e=>new c(e))),this.eventCount)}rebased(e,t){if(!this.eventCount)return this;let n=[],r=Math.max(0,this.items.length-t),i=e.mapping,o=e.steps.length,s=this.eventCount;this.items.forEach(e=>{e.selection&&s--},r);let l=t;this.items.forEach(t=>{let r=i.getMirror(--l);if(null==r)return;o=Math.min(o,r);let a=i.maps[r];if(t.step){let o=e.steps[r].invert(e.docs[r]),u=t.selection&&t.selection.map(i.slice(l+1,r));u&&s++,n.push(new c(a,o,u))}else n.push(new c(a))},r);let a=[];for(let e=t;e<o;e++)a.push(new c(i.maps[e]));let h=new u(this.items.slice(0,r).append(a).append(n),s);return h.emptyItemCount()>500&&(h=h.compress(this.items.length-n.length)),h}emptyItemCount(){let e=0;return this.items.forEach(t=>{!t.step&&e++}),e}compress(e=this.items.length){let t=this.remapping(0,e),n=t.maps.length,r=[],o=0;return this.items.forEach((i,s)=>{if(s>=e)r.push(i),i.selection&&o++;else if(i.step){let e=i.step.map(t.slice(n)),s=e&&e.getMap();if(n--,s&&t.appendMap(s,n),e){let l=i.selection&&i.selection.map(t.slice(n));l&&o++;let a=new c(s.invert(),e,l),u,h=r.length-1;(u=r.length&&r[h].merge(a))?r[h]=u:r.push(a)}}else i.map&&n--},this.items.length,0),new u(i.from(r.reverse()),o)}}u.empty=new u(i.empty,0);class c{constructor(e,t,n,r){this.map=e,this.step=t,this.selection=n,this.mirrorOffset=r}merge(e){if(this.step&&e.step&&!e.selection){let t=e.step.merge(this.step);if(t)return new c(t.getMap().invert(),t,this.selection)}}}class h{constructor(e,t,n,r,i){this.done=e,this.undone=t,this.prevRanges=n,this.prevTime=r,this.prevComposition=i}}let d=20;function p(e){let t=[];for(let n=e.length-1;n>=0&&0==t.length;n--)e[n].forEach((e,n,r,i)=>t.push(r,i));return t}function f(e,t){if(!e)return null;let n=[];for(let r=0;r<e.length;r+=2){let i=t.map(e[r],1),o=t.map(e[r+1],-1);i<=o&&n.push(i,o)}return n}let m=!1,g=null;function v(e){let t=e.plugins;if(g!=t){m=!1,g=t;for(let e=0;e<t.length;e++)if(t[e].spec.historyPreserveItems){m=!0;break}}return m}let y=new a.H$("history"),b=new a.H$("closeHistory");function w(e,t){return(n,r)=>{let i=y.getState(n);if(!i||0==(e?i.undone:i.done).eventCount)return!1;if(r){let o=function(e,t,n){let r=v(t),i=y.get(t).spec.config,o=(n?e.undone:e.done).popEvent(t,r);if(!o)return null;let s=o.selection.resolve(o.transform.doc),l=(n?e.done:e.undone).addTransform(o.transform,t.selection.getBookmark(),i,r),a=new h(n?l:o.remaining,n?o.remaining:l,null,0,-1);return o.transform.setSelection(s).setMeta(y,{redo:n,historyState:a})}(i,n,e);o&&r(t?o.scrollIntoView():o)}return!0}}let I=w(!1,!0),M=w(!0,!0);w(!1,!1),w(!0,!1);let E=r.hj.create({name:"history",addOptions:()=>({depth:100,newGroupDelay:500}),addCommands:()=>({undo:()=>({state:e,dispatch:t})=>I(e,t),redo:()=>({state:e,dispatch:t})=>M(e,t)}),addProseMirrorPlugins(){return[function(e={}){return e={depth:e.depth||100,newGroupDelay:e.newGroupDelay||500},new a.Sy({key:y,state:{init:()=>new h(u.empty,u.empty,null,0,-1),apply:(t,n,r)=>(function(e,t,n,r){let i=n.getMeta(y),o;if(i)return i.historyState;n.getMeta(b)&&(e=new h(e.done,e.undone,null,0,-1));let s=n.getMeta("appendedTransaction");if(0==n.steps.length)return e;if(s&&s.getMeta(y))return s.getMeta(y).redo?new h(e.done.addTransform(n,void 0,r,v(t)),e.undone,p(n.mapping.maps),e.prevTime,e.prevComposition):new h(e.done,e.undone.addTransform(n,void 0,r,v(t)),null,e.prevTime,e.prevComposition);if(!1===n.getMeta("addToHistory")||s&&!1===s.getMeta("addToHistory"))return(o=n.getMeta("rebased"))?new h(e.done.rebased(n,o),e.undone.rebased(n,o),f(e.prevRanges,n.mapping),e.prevTime,e.prevComposition):new h(e.done.addMaps(n.mapping.maps),e.undone.addMaps(n.mapping.maps),f(e.prevRanges,n.mapping),e.prevTime,e.prevComposition);{let i=n.getMeta("composition"),o=0==e.prevTime||!s&&e.prevComposition!=i&&(e.prevTime<(n.time||0)-r.newGroupDelay||!function(e,t){if(!t)return!1;if(!e.docChanged)return!0;let n=!1;return e.mapping.maps[0].forEach((e,r)=>{for(let i=0;i<t.length;i+=2)e<=t[i+1]&&r>=t[i]&&(n=!0)}),n}(n,e.prevRanges)),l=s?f(e.prevRanges,n.mapping):p(n.mapping.maps);return new h(e.done.addTransform(n,o?t.selection.getBookmark():void 0,r,v(t)),u.empty,l,n.time,null==i?e.prevComposition:i)}})(n,r,t,e)},config:e,props:{handleDOMEvents:{beforeinput(e,t){let n=t.inputType,r="historyUndo"==n?I:"historyRedo"==n?M:null;return!!r&&(t.preventDefault(),r(e.state,e.dispatch))}}}})}(this.options)]},addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Shift-Mod-z":()=>this.editor.commands.redo(),"Mod-y":()=>this.editor.commands.redo(),"Mod-я":()=>this.editor.commands.undo(),"Shift-Mod-я":()=>this.editor.commands.redo()}}})},6200:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(43036),i=n(70267),o=n(88588);let s=r.hj.create({name:"placeholder",addOptions:()=>({emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something …",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}),addProseMirrorPlugins(){return[new i.Sy({key:new i.H$("placeholder"),props:{decorations:({doc:e,selection:t})=>{let n=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:i}=t,s=[];if(!n)return null;let l=this.editor.isEmpty;return e.descendants((e,t)=>{let n=i>=t&&i<=t+e.nodeSize,a=!e.isLeaf&&(0,r.bR)(e);if((n||!this.options.showOnlyCurrent)&&a){let r=[this.options.emptyNodeClass];l&&r.push(this.options.emptyEditorClass);let i=o.p.node(t,t+e.nodeSize,{class:r.join(" "),"data-placeholder":"function"==typeof this.options.placeholder?this.options.placeholder({editor:this.editor,node:e,pos:t,hasAnchor:n}):this.options.placeholder});s.push(i)}return this.options.includeChildren}),o.EH.create(e,s)}}})]}})},72791:function(e,t,n){function r(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var r;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(r=n.getItem(e))?r:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}n.d(t,{FL:function(){return r},tJ:function(){return l}});let i=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>i(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>i(t)(e)}}},o=(e,t)=>(n,r,o)=>{let s,l,a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},u=!1,c=new Set,h=new Set;try{s=a.getStorage()}catch(e){}if(!s)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,o);let d=i(a.serialize),p=()=>{let e;let t=d({state:a.partialize({...r()}),version:a.version}).then(e=>s.setItem(a.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=o.setState;o.setState=(e,t)=>{f(e,t),p()};let m=e((...e)=>{n(...e),p()},r,o),g=()=>{var e;if(!s)return;u=!1,c.forEach(e=>e(r()));let t=(null==(e=a.onRehydrateStorage)?void 0:e.call(a,r()))||void 0;return i(s.getItem.bind(s))(a.name).then(e=>{if(e)return a.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(l=a.merge(e,null!=(t=r())?t:m),!0),p()}).then(()=>{null==t||t(l,void 0),u=!0,h.forEach(e=>e(l))}).catch(e=>{null==t||t(void 0,e)})};return o.persist={setOptions:e=>{a={...a,...e},e.getStorage&&(s=e.getStorage())},clearStorage:()=>{null==s||s.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>u,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(h.add(e),()=>{h.delete(e)})},g(),l||m},s=(e,t)=>(n,o,s)=>{let l,a={storage:r(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},u=!1,c=new Set,h=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},o,s);let p=()=>{let e=a.partialize({...o()});return d.setItem(a.name,{state:e,version:a.version})},f=s.setState;s.setState=(e,t)=>{f(e,t),p()};let m=e((...e)=>{n(...e),p()},o,s),g=()=>{var e,t;if(!d)return;u=!1,c.forEach(e=>{var t;return e(null!=(t=o())?t:m)});let r=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=o())?e:m))||void 0;return i(d.getItem.bind(d))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(l=a.merge(e,null!=(t=o())?t:m),!0),p()}).then(()=>{null==r||r(l,void 0),l=o(),u=!0,h.forEach(e=>e(l))}).catch(e=>{null==r||r(void 0,e)})};return s.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>u,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(h.add(e),()=>{h.delete(e)})},a.skipHydration||g(),l||m},l=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),o(e,t)):s(e,t)}}]);