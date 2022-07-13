(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2.port"),p$1={},I$=[[0,'java.util.HashMap','java.io.BufferedReader','java.io.InputStreamReader','org.slf4j.LoggerFactory','Thread',['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','.ModelUpdater'],['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','.SelectionUpdater'],['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads','.NetworkUpdater'],'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ListenerThreads", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Thread');
C$.$classes$=[['ModelUpdater',0],['SelectionUpdater',0],['NetworkUpdater',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineReader=null;
this.chimera=null;
this.replyLog=null;
this.structureManager=null;
this.stopMe=false;
},1);

C$.$fields$=[['Z',['stopMe'],'O',['lineReader','java.io.BufferedReader','chimera','Process','replyLog','java.util.Map','logger','org.slf4j.Logger','structureManager','ext.edu.ucsf.rbvi.strucviz2.StructureManager']]]

Clazz.newMeth(C$, 'c$$Process$ext_edu_ucsf_rbvi_strucviz2_StructureManager',  function (chimera, structureManager) {
Clazz.super_(C$, this);
this.chimera=chimera;
this.structureManager=structureManager;
this.replyLog=Clazz.new_($I$(1,1));
var readChan=chimera.getInputStream$();
this.lineReader=Clazz.new_([Clazz.new_($I$(3,1).c$$java_io_InputStream,[readChan])],$I$(2,1).c$$java_io_Reader);
this.logger=$I$(4,"getLogger$Class",[Clazz.getClass(C$)]);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
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

Clazz.newMeth(C$, 'getResponse$S',  function (command) {
var reply;
while (!this.replyLog.containsKey$O(command)){
try {
$I$(5).sleep$J(100);
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

Clazz.newMeth(C$, 'clearResponse$S',  function (command) {
try {
$I$(5).sleep$J(100);
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

Clazz.newMeth(C$, 'chimeraRead',  function () {
if (this.chimera == null ) {
return;
}var line=null;
while ((line=this.lineReader.readLine$()) != null ){
if (line.startsWith$S("CMD")) {
p$1.chimeraCommandRead$S.apply(this, [line.substring$I(4)]);
} else if (line.startsWith$S("ModelChanged: ")) {
(Clazz.new_($I$(6,1),[this, null])).start$();
} else if (line.startsWith$S("SelectionChanged: ")) {
(Clazz.new_($I$(7,1),[this, null])).start$();
} else if (line.startsWith$S("Trajectory residue network info:")) {
(Clazz.new_($I$(8,1).c$$S,[this, null, line])).start$();
}}
return;
}, p$1);

Clazz.newMeth(C$, 'chimeraCommandRead$S',  function (command) {
var reply=Clazz.new_($I$(9,1));
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
reply.add$O(line);
} else if (line.startsWith$S("Trajectory residue network info:")) {
importNetwork=true;
}}
this.replyLog.put$O$O(command, reply);
}if (updateModels) {
(Clazz.new_($I$(6,1),[this, null])).start$();
}if (updateSelection) {
(Clazz.new_($I$(7,1),[this, null])).start$();
}if (importNetwork) {
(Clazz.new_($I$(8,1).c$$S,[this, null, line])).start$();
}return;
}, p$1);

Clazz.newMeth(C$, 'requestStop$',  function () {
this.stopMe=true;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ListenerThreads, "ModelUpdater", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads'].structureManager.updateModels$();
this.b$['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads'].structureManager.modelChanged$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ListenerThreads, "SelectionUpdater", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
try {
this.b$['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads'].logger.info$S("Responding to chimera selection");
this.b$['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads'].structureManager.chimeraSelectionChanged$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.b$['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads'].logger.warn$S$Throwable("Could not update selection", e);
} else {
throw e;
}
}
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ListenerThreads, "NetworkUpdater", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['line']]]

Clazz.newMeth(C$, 'c$$S',  function (line) {
Clazz.super_(C$, this);
this.line=line;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
try {
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.b$['ext.edu.ucsf.rbvi.strucviz2.port.ListenerThreads'].logger.warn$S$Throwable("Could not import trajectory network", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
