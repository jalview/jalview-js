(function(){var P$=Clazz.newPackage("intervalstore.impl"),I$=[[0,'intervalstore.impl.NCList','StringBuilder',['intervalstore.impl.NCNode','.NCNodeIterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NCNode", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'intervalstore.api.IntervalI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.region=null;
this.subregions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (ranges) {
C$.$init$.apply(this);
if (ranges.isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["List may not be empty"]);
}this.region=ranges.get$I(0);
if (ranges.size$() > 1) {
this.subregions=Clazz.new_($I$(1).c$$java_util_List,[ranges.subList$I$I(1, ranges.size$())]);
}}, 1);

Clazz.newMeth(C$, 'c$$TT', function (range) {
C$.$init$.apply(this);
this.region=range;
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.region.getBegin$();
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.region.getEnd$();
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(2).c$$I,[10 * this.size$()]);
sb.append$S(this.region.toString());
if (this.subregions != null ) {
sb.append$S(" ").append$S(this.subregions.toString());
}return sb.toString();
});

Clazz.newMeth(C$, 'prettyPrint$StringBuilder$I$I', function (sb, offset, indent) {
for (var i=0; i < offset; i++) {
sb.append$S(" ");
}
sb.append$S(this.region.toString());
if (this.subregions != null ) {
sb.append$S(System.lineSeparator$());
this.subregions.prettyPrint$StringBuilder$I$I(sb, offset + 2, indent);
}});

Clazz.newMeth(C$, 'findOverlaps$J$J$java_util_List', function (from, to, result) {
if (this.region.getBegin$() <= to && this.region.getEnd$() >= from ) {
result.add$TE(this.region);
if (this.subregions != null ) {
this.subregions.findOverlaps$J$J$java_util_List(from, to, result);
}}});

Clazz.newMeth(C$, 'addNode$intervalstore_impl_NCNode', function (entry) {
if (!this.region.containsInterval$intervalstore_api_IntervalI(entry)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[String.format$S$OA("adding improper subrange %d-%d to range %d-%d", [new Integer(entry.getBegin$()), new Integer(entry.getEnd$()), new Integer(this.region.getBegin$()), new Integer(this.region.getEnd$())])]);
}if (this.subregions == null ) {
this.subregions=Clazz.new_($I$(1));
}this.subregions.addNode$intervalstore_impl_NCNode(entry);
});

Clazz.newMeth(C$, 'isValid$', function () {
if (this.region != null  && this.region.getBegin$() > this.region.getEnd$() ) {
return false;
}if (this.subregions == null ) {
return true;
}if (this.subregions.isEmpty$()) {
return false;
}return this.subregions.isValid$I$I(this.getBegin$(), this.getEnd$());
});

Clazz.newMeth(C$, 'getEntries$java_util_List', function (entries) {
entries.add$TE(this.region);
if (this.subregions != null ) {
this.subregions.getEntries$java_util_List(entries);
}});

Clazz.newMeth(C$, 'contains$intervalstore_api_IntervalI', function (entry) {
if (entry == null ) {
return false;
}if (entry.equals$O(this.region)) {
return true;
}return this.subregions == null  ? false : this.subregions.contains$O(entry);
});

Clazz.newMeth(C$, 'getRegion$', function () {
return this.region;
});

Clazz.newMeth(C$, 'getSubRegions$', function () {
return this.subregions;
});

Clazz.newMeth(C$, 'size$', function () {
return this.subregions == null  ? 1 : 1 + this.subregions.size$();
});

Clazz.newMeth(C$, 'getDepth$', function () {
return this.subregions == null  ? 1 : 1 + this.subregions.getDepth$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(3), [this, null]);
});

Clazz.newMeth(C$, 'remove$TT', function (entry) {
if (this.region.equals$O(entry)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["NCNode can\'t remove self"]);
}if (this.subregions == null ) {
return false;
}if (this.subregions.remove$TT(entry)) {
if (this.subregions.isEmpty$()) {
this.subregions=null;
}return true;
}return false;
});
;
(function(){var C$=Clazz.newClass(P$.NCNode, "NCNodeIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=false;
this.subregionIterator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.first || (this.subregionIterator != null  && this.subregionIterator.hasNext$() ) ;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.first) {
this.subregionIterator=this.this$0.subregions == null  ? null : this.this$0.subregions.iterator$();
this.first=false;
return this.this$0.region;
}if (this.subregionIterator == null  || !this.subregionIterator.hasNext$() ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}return this.subregionIterator.next$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-13 17:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
