(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceNode", null, 'jalview.datamodel.BinaryNode');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dist=0;
this.count=0;
this.height=0;
this.ycount=0;
this.color=null;
this.dummy=false;
this.placeholder=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(1).black;
this.dummy=false;
this.placeholder=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_datamodel_SequenceNode$F$S', function (val, parent, dist, name) {
C$.superclazz.c$$O$jalview_datamodel_BinaryNode$S.apply(this, [val, parent, name]);
C$.$init$.apply(this);
this.dist=dist;
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_datamodel_SequenceNode$S$F$I$Z', function (val, parent, name, dist, bootstrap, dummy) {
C$.superclazz.c$$O$jalview_datamodel_BinaryNode$S.apply(this, [val, parent, name]);
C$.$init$.apply(this);
this.dist=dist;
this.bootstrap=bootstrap;
this.dummy=dummy;
}, 1);

Clazz.newMeth(C$, 'isDummy$', function () {
return this.dummy;
});

Clazz.newMeth(C$, 'isPlaceholder$', function () {
return this.placeholder;
});

Clazz.newMeth(C$, 'setDummy$Z', function (newstate) {
var oldstate=this.dummy;
this.dummy=newstate;
return oldstate;
});

Clazz.newMeth(C$, 'setPlaceholder$Z', function (Placeholder) {
this.placeholder=Placeholder;
});

Clazz.newMeth(C$, 'AscendTree$', function () {
var c=this;
do {
c=c.parent$();
} while ((c != null ) && c.dummy );
return c;
});

Clazz.newMeth(C$, 'isSequenceLabel$', function () {
if (this.name != null  && this.name.length$() > 0 ) {
for (var c=0, s=this.name.length$(); c < s; c++) {
var q=this.name.charAt$I(c);
if ("0" <= q && q <= "9" ) {
continue;
}return true;
}
}return false;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
