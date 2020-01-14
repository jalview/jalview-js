(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.newGUI");
var C$=Clazz.newClass(P$, "Watcher", null, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._model=null;
this._terminated=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._terminated=false;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel', function (model) {
Clazz.super_(C$, this,1);
this._model=model;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
while (!this._terminated){
var folders=this._model.getFolders$();
for (var path, $path = folders.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
this._model.addFolder$S(path);
System.out.println$S("Watching [" + path + "]" );
}
try {
this.sleep$J(1000);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'finish$', function () {
this._terminated=true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
