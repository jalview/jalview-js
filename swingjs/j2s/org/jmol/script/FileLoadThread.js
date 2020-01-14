(function(){var P$=Clazz.newPackage("org.jmol.script"),I$=[];
var C$=Clazz.newClass(P$, "FileLoadThread", null, 'org.jmol.thread.JmolThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fileName=null;
this.cacheName=null;
this.key=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolScriptEvaluator$org_jmol_viewer_Viewer$S$S$S', function (eval, vwr, fileName, key, cacheName) {
Clazz.super_(C$, this,1);
this.setViewer$org_jmol_viewer_Viewer$S(vwr, "FileLoadThread");
this.fileName=fileName;
this.key=key;
this.cacheName=cacheName;
this.setEval$org_jmol_api_JmolScriptEvaluator(eval);
this.sc.pc--;
}, 1);

Clazz.newMeth(C$, 'run1$I', function (mode) {
while (true)switch (mode) {
case -1:
mode=0;
break;
case 0:
if (this.stopped || !this.vwr.testAsync && this.eval.isStopped$()  ) {
mode=-2;
break;
}var jmol=null;
{
jmol = self.Jmol;
}
if (jmol != null ) jmol.loadFileAsynchronously(this, this.vwr.html5Applet, this.fileName, null);
{

}
return;
case 1:
var data=this.vwr.fm.getFileAsBytes$S$javajs_util_OC(this.fileName, null);
this.setData$S$S$O$O(this.fileName, this.fileName, data, null);
return;
case -2:
this.resumeEval$();
return;
}

});

Clazz.newMeth(C$, 'setData$S$S$O$O', function (fileName, fileName0, data, myData) {
var isCanceled=fileName.equals$O("#CANCELED#");
this.sc.parentContext.htFileCache.put$TK$TV(this.key, (isCanceled ? fileName : (this.cacheName=this.cacheName.substring$I$I(0, this.cacheName.lastIndexOf$S("_") + 1) + fileName)));
this.vwr.cachePut$S$O(this.cacheName, data);
if (fileName0 != null ) {
this.vwr.cachePut$S$O(this.vwr.fm.getFilePath$S$Z$Z(fileName, true, false), data);
}this.run1$I(-2);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
