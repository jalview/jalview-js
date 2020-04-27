(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IIOInvalidTreeException", null, 'javax.imageio.IIOException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offendingNode=null;
},1);

C$.$fields$=[['O',['offendingNode','org.w3c.dom.Node']]]

Clazz.newMeth(C$, 'c$$S$org_w3c_dom_Node', function (message, offendingNode) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.offendingNode=offendingNode;
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable$org_w3c_dom_Node', function (message, cause, offendingNode) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.offendingNode=offendingNode;
}, 1);

Clazz.newMeth(C$, 'getOffendingNode$', function () {
return this.offendingNode;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
