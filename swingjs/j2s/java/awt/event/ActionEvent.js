(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[[0,'java.awt.event.KeyEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ActionEvent", null, 'java.awt.AWTEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.actionCommand=null;
this.when=0;
this.modifiers=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$I$S', function (source, id, command) {
C$.c$$O$I$S$I.apply(this, [source, id, command, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$S$I', function (source, id, command, modifiers) {
C$.c$$O$I$S$J$I.apply(this, [source, id, command, 0, modifiers]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$S$J$I', function (source, id, command, when, modifiers) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.actionCommand=command;
this.when=when;
this.modifiers=modifiers;
}, 1);

Clazz.newMeth(C$, 'getActionCommand$', function () {
return this.actionCommand;
});

Clazz.newMeth(C$, 'getWhen$', function () {
return this.when;
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 1001:
typeStr="ACTION_PERFORMED";
break;
default:
typeStr="unknown type";
}
return typeStr + ",cmd=" + this.actionCommand + ",when=" + this.when + ",modifiers=" + $I$(1).getKeyModifiersText$I(this.modifiers) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
