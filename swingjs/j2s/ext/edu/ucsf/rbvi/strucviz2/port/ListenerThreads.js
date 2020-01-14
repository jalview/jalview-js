(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2.port"),p$1={},I$=[[0,'java.util.HashMap','java.io.BufferedReader','java.io.InputStreamReader','org.slf4j.LoggerFactory','Thread',['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','.ModelUpdater'],['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','.SelectionUpdater'],['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','.NetworkUpdater'],'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ListenerThreads", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lineReader=null;
this.chimera=null;
this.replyLog=null;
this.logger=null;
this.structureManager=null;
this.stopMe=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lineReader=null;
this.chimera=null;
this.replyLog=null;
this.structureManager=null;
this.stopMe=false;
}, 1);

Clazz.newMeth(C$, 'c$$Process$ext_edu_ucsf_rbvi_strucviz2_StructureManager', function (chimera, structureManager) {
Clazz.super_(C$, this,1);
this.chimera=chimera;
this.structureManager=structureManager;
this.replyLog=Clazz.new_($I$(1));
var readChan=chimera.getInputStream$();
this.lineReader=Clazz.new_($I$(2).c$$java_io_Reader,[Clazz.new_($I$(3).c$$java_io_InputStream,[readChan])]);
this.logger=$I$(4).getLogger$Class(Clazz.getClass(C$));
}, 1);

Clazz.newMeth(C$, 'run$', function () {
while (!this.stopMe){
try {
p$1.chimeraRead.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.logger.warn$S("UCSF Chimera has exited: " + e.getMessage$());
return;
} else {
throw e;
}
} finally {
if (this.lineReader != null ) {
try {
this.lineReader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}
});

Clazz.newMeth(C$, 'getResponse$S', function (command) {
var reply;
while (!this.replyLog.containsKey$O(command)){
try {
$I$(5).currentThread$().sleep$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
{
reply=this.replyLog.get$O(command);
this.replyLog.remove$O(command);
}return reply;
});

Clazz.newMeth(C$, 'clearResponse$S', function (command) {
try {
$I$(5).currentThread$().sleep$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
if (this.replyLog.containsKey$O(command)) {
this.replyLog.remove$O(command);
}return;
});

Clazz.newMeth(C$, 'chimeraRead', function () {
if (this.chimera == null ) {
return;
}var line=null;
while ((line=this.lineReader.readLine$()) != null ){
if (line.startsWith$S("CMD")) {
p$1.chimeraCommandRead$S.apply(this, [line.substring$I(4)]);
} else if (line.startsWith$S("ModelChanged: ")) {
(Clazz.new_($I$(6), [this, null])).start$();
} else if (line.startsWith$S("SelectionChanged: ")) {
(Clazz.new_($I$(7), [this, null])).start$();
} else if (line.startsWith$S("Trajectory residue network info:")) {
(Clazz.new_($I$(8).c$$S, [this, null, line])).start$();
}}
return;
}, p$1);

Clazz.newMeth(C$, 'chimeraCommandRead$S', function (command) {
var reply=Clazz.new_($I$(9));
var updateModels=false;
var updateSelection=false;
var importNetwork=false;
var line=null;
{
while ((line=this.lineReader.readLine$()) != null ){
if (line.startsWith$S("CMD")) {
this.logger.warn$S("Got unexpected command from Chimera: " + line);
} else if (line.startsWith$S("END")) {
break;
}if (line.startsWith$S("ModelChanged: ")) {
updateModels=true;
} else if (line.startsWith$S("SelectionChanged: ")) {
updateSelection=true;
} else if (line.length$() == 0) {
continue;
} else if (!line.startsWith$S("CMD")) {
reply.add$TE(line);
} else if (line.startsWith$S("Trajectory residue network info:")) {
importNetwork=true;
}}
this.replyLog.put$TK$TV(command, reply);
}if (updateModels) {
(Clazz.new_($I$(6), [this, null])).start$();
}if (updateSelection) {
(Clazz.new_($I$(7), [this, null])).start$();
}if (importNetwork) {
(Clazz.new_($I$(8).c$$S, [this, null, line])).start$();
}return;
}, p$1);

Clazz.newMeth(C$, 'requestStop$', function () {
this.stopMe=true;
});
;
(function(){var C$=Clazz.newClass(P$.ListenerThreads, "ModelUpdater", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.this$0.structureManager.updateModels$();
this.this$0.structureManager.modelChanged$();
});
})()
;
(function(){var C$=Clazz.newClass(P$.ListenerThreads, "SelectionUpdater", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.this$0.logger.info$S("Responding to chimera selection");
this.this$0.structureManager.chimeraSelectionChanged$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.this$0.logger.warn$S$Throwable("Could not update selection", e);
} else {
throw e;
}
}
});
})()
;
(function(){var C$=Clazz.newClass(P$.ListenerThreads, "NetworkUpdater", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.line=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (line) {
Clazz.super_(C$, this,1);
this.line=line;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.this$0.logger.warn$S$Throwable("Could not import trajectory network", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
