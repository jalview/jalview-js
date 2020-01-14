(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[];
var C$=Clazz.newClass(P$, "ChimeraListener", null, 'jalview.httpserver.AbstractRequestHandler', 'jalview.structure.SelectionSource');
C$.chimeraId=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.chimeraId=0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myChimeraId=0;
this.chimeraBinding=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.myChimeraId=0;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ext_rbvi_chimera_JalviewChimeraBinding', function (binding) {
Clazz.super_(C$, this,1);
this.myChimeraId=C$.chimeraId++;
this.chimeraBinding=binding;
this.setPath$S("chimera" + this.myChimeraId);
this.registerHandler$();
}, 1);

Clazz.newMeth(C$, 'processRequest$javax_servlet_http_HttpServletRequest$javax_servlet_http_HttpServletResponse', function (request, response) {
var message=request.getParameter$S("chimeraNotification");
if ("SelectionChanged: selection changed\n".equals$O(message)) {
this.chimeraBinding.highlightChimeraSelection$();
} else if (message != null  && message.startsWith$S("ModelChanged: ") ) {
this.processModelChanged$S(message.substring$I("ModelChanged: ".length$()));
} else {
System.err.println$S("Unexpected chimeraNotification: " + message);
}});

Clazz.newMeth(C$, 'processModelChanged$S', function (message) {
});

Clazz.newMeth(C$, 'getName$', function () {
return "ChimeraListener";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
