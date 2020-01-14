(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.Lst']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CommandHistory");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.commandList=null;
this.maxSize=0;
this.nextCommand=0;
this.cursorPos=0;
this.isOn=false;
this.lstStates=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.commandList=null;
this.maxSize=100;
this.isOn=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.reset$I(100);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
this.reset$I(this.maxSize);
});

Clazz.newMeth(C$, 'reset$I', function (maxSize) {
this.maxSize=maxSize;
this.commandList=Clazz.new_($I$(1));
this.nextCommand=0;
this.commandList.addLast$TV("");
this.cursorPos=0;
});

Clazz.newMeth(C$, 'setMaxSize$I', function (maxSize) {
if (maxSize == this.maxSize) return;
if (maxSize < 2) maxSize=2;
while (this.nextCommand > maxSize){
this.commandList.removeItemAt$I(0);
this.nextCommand--;
}
if (this.nextCommand > maxSize) this.nextCommand=maxSize - 1;
this.cursorPos=this.nextCommand;
this.maxSize=maxSize;
});

Clazz.newMeth(C$, 'getCommandUp$', function () {
if (this.cursorPos <= 0) return null;
this.cursorPos--;
var str=p$1.getCommand.apply(this, []);
if (str.endsWith$S("#??")) this.removeCommand$I(this.cursorPos--);
if (this.cursorPos < 0) this.cursorPos=0;
return str;
});

Clazz.newMeth(C$, 'getCommandDown$', function () {
if (this.cursorPos >= this.nextCommand) return null;
this.cursorPos++;
return p$1.getCommand.apply(this, []);
});

Clazz.newMeth(C$, 'getCommand', function () {
return this.commandList.get$I(this.cursorPos);
}, p$1);

Clazz.newMeth(C$, 'addCommand$S', function (strCommand) {
if (!this.isOn && !strCommand.endsWith$S("#??") ) return;
if (strCommand.endsWith$S("#----")) return;
var i;
while ((i=strCommand.indexOf$S("\n")) >= 0){
var str=strCommand.substring$I$I(0, i);
if (str.length$() > 0) p$1.addCommandLine$S.apply(this, [str]);
strCommand=strCommand.substring$I(i + 1);
}
if (strCommand.length$() > 0) p$1.addCommandLine$S.apply(this, [strCommand]);
});

Clazz.newMeth(C$, 'getSetHistory$I', function (n) {
this.isOn=(n == -2 ? this.isOn : true);
switch (n) {
case 0:
this.isOn=false;
this.clear$();
return "";
case -2147483648:
case -2:
this.clear$();
return "";
case -1:
return this.getCommandUp$();
case 1:
return this.getCommandDown$();
default:
if (n < 0) {
this.setMaxSize$I(-2 - n);
return "";
}n=Math.max(this.nextCommand - n, 0);
}
var str="";
for (var i=n; i < this.nextCommand; i++) if (!this.commandList.get$I(i).toUpperCase$().startsWith$S("WRITE HISTORY")) str += this.commandList.get$I(i) + "\n";

return str;
});

Clazz.newMeth(C$, 'find$S$I', function (cmd, dir) {
var cpos=this.cursorPos;
var c=cmd;
while (c != null ){
c=this.getSetHistory$I(dir);
if (c == null ) break;
if (c.startsWith$S(cmd)) return c;
}
this.cursorPos=cpos;
return null;
});

Clazz.newMeth(C$, 'removeCommand$', function () {
return this.removeCommand$I(this.nextCommand - 1);
});

Clazz.newMeth(C$, 'removeCommand$I', function (n) {
if (n < 0 || n >= this.nextCommand ) return "";
var str=this.commandList.removeItemAt$I(n);
this.nextCommand--;
return str;
});

Clazz.newMeth(C$, 'addCommandLine$S', function (command) {
if (command == null  || command.length$() == 0 ) return;
if (command.endsWith$S("#--")) return;
if (this.nextCommand >= this.maxSize) {
this.commandList.removeItemAt$I(0);
this.nextCommand=this.maxSize - 1;
}this.commandList.add$I$TE(this.nextCommand, command);
this.nextCommand++;
this.cursorPos=this.nextCommand;
this.commandList.add$I$TE(this.nextCommand, "");
}, p$1);

Clazz.newMeth(C$, 'pushState$S', function (stateInfo) {
if (this.lstStates == null ) this.lstStates=Clazz.new_($I$(1));
this.lstStates.addLast$TV(stateInfo);
});

Clazz.newMeth(C$, 'popState$', function () {
if (this.lstStates == null  || this.lstStates.size$() == 0 ) return null;
var s=this.lstStates.removeItemAt$I(this.lstStates.size$() - 1);
return s;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
