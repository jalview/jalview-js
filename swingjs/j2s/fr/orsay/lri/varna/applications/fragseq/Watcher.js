(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'Thread']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Watcher", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._terminated=false;
},1);

C$.$fields$=[['Z',['_terminated'],'O',['_model','fr.orsay.lri.varna.applications.fragseq.FragSeqTreeModel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel', function (model) {
Clazz.super_(C$, this);
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
$I$(1).sleep$J(1000);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
