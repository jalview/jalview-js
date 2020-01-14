(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[[0,'sun.awt.SunToolkit','sun.awt.AppContext']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FocusEvent", null, 'java.awt.event.ComponentEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.temporary=false;
this.opposite=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$Z$java_awt_Component', function (source, id, temporary, opposite) {
C$.superclazz.c$$java_awt_Component$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.temporary=temporary;
this.opposite=opposite;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$Z', function (source, id, temporary) {
C$.c$$java_awt_Component$I$Z$java_awt_Component.apply(this, [source, id, temporary, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I', function (source, id) {
C$.c$$java_awt_Component$I$Z.apply(this, [source, id, false]);
}, 1);

Clazz.newMeth(C$, 'isTemporary$', function () {
return this.temporary;
});

Clazz.newMeth(C$, 'getOppositeComponent$', function () {
if (this.opposite == null ) {
return null;
}return ($I$(1).targetToAppContext$O(this.opposite) === $I$(2).getAppContext$() ) ? this.opposite : null;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 1004:
typeStr="FOCUS_GAINED";
break;
case 1005:
typeStr="FOCUS_LOST";
break;
default:
typeStr="unknown type";
}
return typeStr + (this.temporary ? ",temporary" : ",permanent") + ",opposite=" + this.getOppositeComponent$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
