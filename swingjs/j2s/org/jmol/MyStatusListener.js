(function(){var P$=Clazz.newPackage("org.jmol"),p$1={},I$=[[0,'javax.swing.JFrame','javax.swing.JTextField','org.jmol.MyStatusListener','java.util.Hashtable','org.openscience.jmol.app.Jmol','org.jmol.c.CBK']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MyStatusListener", null, null, 'org.jmol.api.JmolStatusListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.monitor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (type) {
switch (type) {
case $I$(6).ECHO:
case $I$(6).LOADSTRUCT:
case $I$(6).MESSAGE:
case $I$(6).PICK:
return true;
case $I$(6).ANIMFRAME:
case $I$(6).APPLETREADY:
case $I$(6).ATOMMOVED:
case $I$(6).ERROR:
case $I$(6).HOVER:
case $I$(6).IMAGE:
case $I$(6).MEASURE:
case $I$(6).MINIMIZATION:
case $I$(6).SERVICE:
case $I$(6).RESIZE:
case $I$(6).SYNC:
case $I$(6).STRUCTUREMODIFIED:
case $I$(6).SCRIPT:
case $I$(6).CLICK:
case $I$(6).DRAGDROP:
case $I$(6).EVAL:
break;
}
return false;
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
switch (type) {
case $I$(6).ECHO:
p$1.sendConsoleEcho$S.apply(this, [data[1]]);
break;
case $I$(6).LOADSTRUCT:
var strInfo=data[1];
System.out.println$S(strInfo);
this.monitor.setText$S(strInfo);
break;
case $I$(6).MESSAGE:
p$1.sendConsoleMessage$S.apply(this, [data == null  ? null : data[1]]);
break;
case $I$(6).PICK:
p$1.notifyAtomPicked$I$S.apply(this, [(data[2]).intValue$(), data[1]]);
break;
}
});

Clazz.newMeth(C$, 'notifyAtomPicked$I$S', function (atomIndex, strInfo) {
this.monitor.setText$S(strInfo);
}, p$1);

Clazz.newMeth(C$, 'showUrl$S', function (url) {
System.out.println$S(url);
});

Clazz.newMeth(C$, 'createImage$S$S$I', function (file, type, quality) {
});

Clazz.newMeth(C$, 'functionXY$S$I$I', function (functionName, nx, ny) {
return null;
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I', function (functionName, nx, ny, nz) {
return null;
});

Clazz.newMeth(C$, 'sendConsoleEcho$S', function (strEcho) {
}, p$1);

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (strStatus) {
}, p$1);

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackType, callbackFunction) {
});

Clazz.newMeth(C$, 'eval$S', function (strEval) {
return null;
});

Clazz.newMeth(C$, 'getRegistryInfo$', function () {
return null;
});

Clazz.newMeth(C$, 'createImage$S$S$O$I', function (file, type, text_or_bytes, quality) {
return null;
});

Clazz.newMeth(C$, 'dialogAsk$S$S', function (type, data) {
return null;
});

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
return null;
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S', function (type) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
