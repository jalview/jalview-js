(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ChimeraListener", null, 'jalview.httpserver.AbstractRequestHandler', 'jalview.structure.SelectionSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myChimeraId=0;
},1);

C$.$fields$=[['I',['myChimeraId'],'O',['chimeraBinding','jalview.ext.rbvi.chimera.JalviewChimeraBinding']]
,['I',['chimeraId']]]

Clazz.newMeth(C$, 'c$$jalview_ext_rbvi_chimera_JalviewChimeraBinding', function (binding) {
Clazz.super_(C$, this);
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

C$.$static$=function(){C$.$static$=0;
C$.chimeraId=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
