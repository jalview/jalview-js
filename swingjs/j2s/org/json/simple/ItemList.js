(function(){var P$=Clazz.newPackage("org.json.simple"),I$=[[0,'java.util.ArrayList','java.util.StringTokenizer','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ItemList");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sp=null;
this.items=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sp=",";
this.items=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.split$S$S$java_util_List(s, this.sp, this.items);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (s, sp) {
C$.$init$.apply(this);
this.sp=s;
this.split$S$S$java_util_List(s, sp, this.items);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z', function (s, sp, isMultiToken) {
C$.$init$.apply(this);
this.split$S$S$java_util_List$Z(s, sp, this.items, isMultiToken);
}, 1);

Clazz.newMeth(C$, 'getItems$', function () {
return this.items;
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.items.toArray$();
});

Clazz.newMeth(C$, 'split$S$S$java_util_List$Z', function (s, sp, append, isMultiToken) {
if (s == null  || sp == null  ) return;
if (isMultiToken) {
var tokens=Clazz.new_($I$(2).c$$S$S,[s, sp]);
while (tokens.hasMoreTokens$()){
append.add$TE(tokens.nextToken$().trim$());
}
} else {
this.split$S$S$java_util_List(s, sp, append);
}});

Clazz.newMeth(C$, 'split$S$S$java_util_List', function (s, sp, append) {
if (s == null  || sp == null  ) return;
var pos=0;
var prevPos=0;
do {
prevPos=pos;
pos=s.indexOf$S$I(sp, pos);
if (pos == -1) break;
append.add$TE(s.substring$I$I(prevPos, pos).trim$());
pos+=sp.length$();
} while (pos != -1);
append.add$TE(s.substring$I(prevPos).trim$());
});

Clazz.newMeth(C$, 'setSP$S', function (sp) {
this.sp=sp;
});

Clazz.newMeth(C$, 'add$I$S', function (i, item) {
if (item == null ) return;
this.items.add$I$TE(i, item.trim$());
});

Clazz.newMeth(C$, 'add$S', function (item) {
if (item == null ) return;
this.items.add$TE(item.trim$());
});

Clazz.newMeth(C$, 'addAll$org_json_simple_ItemList', function (list) {
this.items.addAll$java_util_Collection(list.items);
});

Clazz.newMeth(C$, 'addAll$S', function (s) {
this.split$S$S$java_util_List(s, this.sp, this.items);
});

Clazz.newMeth(C$, 'addAll$S$S', function (s, sp) {
this.split$S$S$java_util_List(s, sp, this.items);
});

Clazz.newMeth(C$, 'addAll$S$S$Z', function (s, sp, isMultiToken) {
this.split$S$S$java_util_List$Z(s, sp, this.items, isMultiToken);
});

Clazz.newMeth(C$, 'get$I', function (i) {
return this.items.get$I(i);
});

Clazz.newMeth(C$, 'size$', function () {
return this.items.size$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.toString$S(this.sp);
});

Clazz.newMeth(C$, 'toString$S', function (sp) {
var sb=Clazz.new_($I$(3));
for (var i=0; i < this.items.size$(); i++) {
if (i == 0) sb.append$O(this.items.get$I(i));
 else {
sb.append$S(sp);
sb.append$O(this.items.get$I(i));
}}
return sb.toString();
});

Clazz.newMeth(C$, 'clear$', function () {
this.items.clear$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.sp=",";
this.items.clear$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
