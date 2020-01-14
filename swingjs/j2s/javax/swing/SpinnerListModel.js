(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpinnerListModel", null, 'javax.swing.AbstractSpinnerModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
this.index=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
Clazz.super_(C$, this,1);
if (values == null  || values.size$() == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["SpinnerListModel(List) expects non-null non-empty List"]);
}this.list=values;
this.index=0;
}, 1);

Clazz.newMeth(C$, 'c$$OA', function (values) {
Clazz.super_(C$, this,1);
if (values == null  || values.length == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["SpinnerListModel(Object[]) expects non-null non-empty Object[]"]);
}this.list=$I$(1).asList$TTA(values);
this.index=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$OA.apply(this, [Clazz.array(java.lang.Object, -1, ["empty"])]);
}, 1);

Clazz.newMeth(C$, 'getList$', function () {
return this.list;
});

Clazz.newMeth(C$, 'setList$java_util_List', function (list) {
if ((list == null ) || (list.size$() == 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid list"]);
}if (!list.equals$O(this.list)) {
this.list=list;
this.index=0;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getValue$', function () {
return this.list.get$I(this.index);
});

Clazz.newMeth(C$, 'setValue$O', function (elt) {
var index=this.list.indexOf$O(elt);
if (index == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid sequence element"]);
} else if (index != this.index) {
this.index=index;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getNextValue$', function () {
return (this.index >= (this.list.size$() - 1)) ? null : this.list.get$I(this.index + 1);
});

Clazz.newMeth(C$, 'getPreviousValue$', function () {
return (this.index <= 0) ? null : this.list.get$I(this.index - 1);
});

Clazz.newMeth(C$, 'findNextMatch$S', function (substring) {
var max=this.list.size$();
if (max == 0) {
return null;
}var counter=this.index;
do {
var value=this.list.get$I(counter);
var string=value.toString();
if (string != null  && string.startsWith$S(substring) ) {
return value;
}counter=(counter + 1) % max;
} while (counter != this.index);
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
