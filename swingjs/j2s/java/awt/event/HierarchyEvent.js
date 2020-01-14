(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "HierarchyEvent", null, 'java.awt.AWTEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.changed=null;
this.changedParent=null;
this.changeFlags=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_Component$java_awt_Container', function (source, id, changed, changedParent) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.changed=changed;
this.changedParent=changedParent;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_Component$java_awt_Container$J', function (source, id, changed, changedParent, changeFlags) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.changed=changed;
this.changedParent=changedParent;
this.changeFlags=changeFlags;
}, 1);

Clazz.newMeth(C$, 'getComponent$', function () {
return (Clazz.instanceOf(this.source, "java.awt.Component")) ? this.source : null;
});

Clazz.newMeth(C$, 'getChanged$', function () {
return this.changed;
});

Clazz.newMeth(C$, 'getChangedParent$', function () {
return this.changedParent;
});

Clazz.newMeth(C$, 'getChangeFlags$', function () {
return this.changeFlags;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 1401:
typeStr="ANCESTOR_MOVED (" + this.changed + "," + this.changedParent + ")" ;
break;
case 1402:
typeStr="ANCESTOR_RESIZED (" + this.changed + "," + this.changedParent + ")" ;
break;
case 1400:
{
typeStr="HIERARCHY_CHANGED (";
var first=true;
if ((this.changeFlags & 1) != 0) {
first=false;
typeStr += "PARENT_CHANGED";
}if ((this.changeFlags & 2) != 0) {
if (first) {
first=false;
} else {
typeStr += ",";
}typeStr += "DISPLAYABILITY_CHANGED";
}if ((this.changeFlags & 4) != 0) {
if (first) {
first=false;
} else {
typeStr += ",";
}typeStr += "SHOWING_CHANGED";
}if (!first) {
typeStr += ",";
}typeStr += this.changed + "," + this.changedParent + ")" ;
break;
}default:
typeStr="unknown type";
}
return typeStr;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
