(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "ItemEvent", null, 'java.awt.AWTEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.item=null;
this.stateChange=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_ItemSelectable$I$O$I', function (source, id, item, stateChange) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.item=item;
this.stateChange=stateChange;
}, 1);

Clazz.newMeth(C$, 'getItemSelectable$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getItem$', function () {
return this.item;
});

Clazz.newMeth(C$, 'getStateChange$', function () {
return this.stateChange;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 701:
typeStr="ITEM_STATE_CHANGED";
break;
default:
typeStr="unknown type";
}
var stateStr;
switch (this.stateChange) {
case 1:
stateStr="SELECTED";
break;
case 2:
stateStr="DESELECTED";
break;
default:
stateStr="unknown type";
}
return typeStr + ",item=" + this.item + ",stateChange=" + stateStr ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
