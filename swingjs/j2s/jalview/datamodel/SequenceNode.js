(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceNode", null, 'jalview.datamodel.BinaryNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=$I$(1).black;
this.dummy=false;
this.placeholder=false;
},1);

C$.$fields$=[['Z',['dummy','placeholder'],'D',['dist','height'],'F',['ycount'],'I',['count'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_datamodel_SequenceNode$D$S',  function (val, parent, dist, name) {
;C$.superclazz.c$$O$jalview_datamodel_BinaryNode$S.apply(this,[val, parent, name]);C$.$init$.apply(this);
this.dist=dist;
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_datamodel_SequenceNode$S$D$I$Z',  function (val, parent, name, dist, bootstrap, dummy) {
;C$.superclazz.c$$O$jalview_datamodel_BinaryNode$S.apply(this,[val, parent, name]);C$.$init$.apply(this);
this.dist=dist;
this.bootstrap=bootstrap;
this.dummy=dummy;
}, 1);

Clazz.newMeth(C$, 'isDummy$',  function () {
return this.dummy;
});

Clazz.newMeth(C$, 'isPlaceholder$',  function () {
return this.placeholder;
});

Clazz.newMeth(C$, 'setDummy$Z',  function (newstate) {
var oldstate=this.dummy;
this.dummy=newstate;
return oldstate;
});

Clazz.newMeth(C$, 'setPlaceholder$Z',  function (Placeholder) {
this.placeholder=Placeholder;
});

Clazz.newMeth(C$, 'AscendTree$',  function () {
var c=this;
do {
c=c.parent$();
} while ((c != null ) && c.dummy );
return c;
});

Clazz.newMeth(C$, 'isSequenceLabel$',  function () {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
