(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},I$=[[0,'java.awt.event.ActionEvent','javax.swing.Timer',['javajs.async.SwingJSUtils','.StateHelper'],'java.awt.Dimension','java.awt.Image','javax.imageio.ImageIO','java.io.BufferedReader','java.io.InputStreamReader','java.util.stream.Collectors','java.io.BufferedInputStream','java.io.ByteArrayInputStream']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingJSUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StateMachine',9],['StateHelper',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setDim$I$I', function (w, h) {
var baseURI=(document.body.baseURI ||null);
var isTest=(baseURI == null  || baseURI.indexOf$S("_applet.html") >= 0 );
if (!isTest) return null;

J2S.thisApplet.__Info.width = w; J2S.thisApplet.__Info.height = h;
return Clazz.new_($I$(4,1).c$$I$I,[w, h]);
}, 1);

Clazz.newMeth(C$, 'getResource$Class$S$Class', function (baseClass, filename, cl) {
System.out.println$S("mpUtils.SwingJSUtils.getResource " + baseClass.getCanonicalName$() + " " + filename );
var is=baseClass.getResourceAsStream$S(filename);
if (cl === Clazz.getClass($I$(5)) ) {
try {
return $I$(6).read$java_io_InputStream(is);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
} else if (cl === Clazz.getClass(String) ) {
return Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_InputStream,[is])],$I$(7,1).c$$java_io_Reader).lines$().collect$java_util_stream_Collector($I$(9).joining$CharSequence("\n"));
}return is;
}, 1);

Clazz.newMeth(C$, 'loadImagesStatic$Class$java_awt_ImageA$S$S$I', function (cl, images, root, ext, nImages) {
for (var i=nImages; --i >= 0; ) {
images[i]=C$.getResource$Class$S$Class(cl, root + i + "." + ext , Clazz.getClass($I$(5)));
}
}, 1);

Clazz.newMeth(C$, 'loadImagesStatic$Class$S$SA$java_awt_ImageA', function (cl, root, names, images) {
for (var i=names.length; --i >= 0; ) {
images[i]=C$.getResource$Class$S$Class(cl, root + names[i], Clazz.getClass($I$(5)));
}
}, 1);

Clazz.newMeth(C$, 'getImage$java_awt_Component$S', function (c, fileName) {
return C$.getImage$Class$S(c.getClass$(), fileName);
}, 1);

Clazz.newMeth(C$, 'getImage$Class$S', function (c, fileName) {
return C$.getResource$Class$S$Class(c, fileName, Clazz.getClass($I$(5)));
}, 1);

Clazz.newMeth(C$, 'clearComponent$java_awt_Component', function (c) {
var gc=c.getGraphics$();
gc.clearRect$I$I$I$I(0, 0, c.getWidth$(), c.getHeight$());
gc.dispose$();
}, 1);

Clazz.newMeth(C$, 'openStream$Class$S', function (base, fileName) {
var s=C$.getResource$Class$S$Class(base, fileName, Clazz.getClass(String));
return Clazz.new_([Clazz.new_([s.getBytes$()],$I$(11,1).c$$BA)],$I$(10,1).c$$java_io_InputStream);
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.SwingJSUtils, "StateMachine", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingJSUtils, "StateHelper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['interrupted'],'I',['state','level','stateNext','levelNext'],'O',['machine','javajs.async.SwingJSUtils.StateMachine','stateTimer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$$javajs_async_SwingJSUtils_StateMachine', function (machine) {
;C$.$init$.apply(this);
this.machine=machine;
}, 1);

Clazz.newMeth(C$, 'interrupt$', function () {
this.interrupted=true;
});

Clazz.newMeth(C$, 'isInterrupted$', function () {
return this.interrupted;
});

Clazz.newMeth(C$, 'isAlive$', function () {
return !this.interrupted;
});

Clazz.newMeth(C$, 'restart$', function () {
this.interrupted=false;
});

Clazz.newMeth(C$, 'setState$I', function (state) {
this.state=this.stateNext=state;
});

Clazz.newMeth(C$, 'getState$', function () {
return this.state;
});

Clazz.newMeth(C$, 'setLevel$I', function (level) {
this.level=this.levelNext=level;
});

Clazz.newMeth(C$, 'getLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'setNextState$I', function (next) {
this.stateNext=next;
});

Clazz.newMeth(C$, 'getNextState$', function () {
return this.stateNext;
});

Clazz.newMeth(C$, 'getNextLevel$', function () {
return this.levelNext;
});

Clazz.newMeth(C$, 'setNextLevel$I', function (next) {
this.levelNext=next;
});

Clazz.newMeth(C$, 'nextState', function () {
return this.next$I$I(this.stateNext, this.levelNext);
}, p$1);

Clazz.newMeth(C$, 'next$I', function (state) {
return this.next$I$I(state, 0);
});

Clazz.newMeth(C$, 'next$I$I', function (state, level) {
return C$.nextStatePriv$O$I$I(this, state, level);
});

Clazz.newMeth(C$, 'nextStatePriv$O$I$I', function (oThis, state, level) {
var me=oThis;
if (me.interrupted) return false;
if (level != -2147483648) me.level=level;
if (state != -2147483648) me.state=state;
return me.machine.stateLoop$();
}, 1);

Clazz.newMeth(C$, 'delayedState$I$I', function (ms, stateNext) {
return this.delayedState$I$I$I(ms, stateNext, this.level);
});

Clazz.newMeth(C$, 'delayedState$I$I$I', function (ms, stateNext, levelNext) {
if (this.interrupted) return false;
if (ms == 0) return this.next$I$I(stateNext, levelNext);
if (stateNext != -2147483648) this.stateNext=stateNext;
if (levelNext != -2147483648) this.levelNext=levelNext;
{
var me = this;
setTimeout(function(){ p$1.nextState.apply(me, []);
},ms);
}
return true;
});

Clazz.newMeth(C$, 'delayedAction$I$I$S$java_awt_event_ActionListener', function (ms, id, command, listener) {
return this.delayedAction$I$I$S$java_awt_event_ActionListener$I$I(ms, id, command, listener, -2147483648, -2147483648);
});

Clazz.newMeth(C$, 'delayedAction$I$I$S$java_awt_event_ActionListener$I', function (ms, id, command, listener, state) {
return this.delayedAction$I$I$S$java_awt_event_ActionListener$I$I(ms, id, command, listener, state, -2147483648);
});

Clazz.newMeth(C$, 'delayedAction$I$I$S$java_awt_event_ActionListener$I$I', function (ms, id, command, listener, stateNext, levelNext) {
if (this.interrupted) return false;
var event=Clazz.new_($I$(1,1).c$$O$I$S,[this, id, command]);
if (ms == 0) {
listener.actionPerformed$java_awt_event_ActionEvent(event);
return (stateNext == -2147483648 && levelNext == -2147483648  || C$.nextStatePriv$O$I$I(this, stateNext == -2147483648 ? this.state : stateNext, levelNext == -2147483648 ? this.level : levelNext) );
}var me=this;
var timer=Clazz.new_([ms, id == 1001 ? listener : ((P$.SwingJSUtils$StateHelper$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingJSUtils$StateHelper$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (!this.b$['javajs.async.SwingJSUtils.StateHelper'].interrupted) this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(this.$finals$.event);
if (!this.b$['javajs.async.SwingJSUtils.StateHelper'].interrupted && (this.$finals$.stateNext != -2147483648 || this.$finals$.levelNext != -2147483648 ) ) $I$(3,"nextStatePriv$O$I$I",[this.$finals$.me, this.$finals$.stateNext == -2147483648 ? this.b$['javajs.async.SwingJSUtils.StateHelper'].state : this.$finals$.stateNext, this.$finals$.levelNext == -2147483648 ? this.b$['javajs.async.SwingJSUtils.StateHelper'].level : this.$finals$.levelNext]);
});
})()
), Clazz.new_(P$.SwingJSUtils$StateHelper$2.$init$,[this, {listener:listener,stateNext:stateNext,levelNext:levelNext,me:me,event:event}]))],$I$(2,1).c$$I$java_awt_event_ActionListener);
timer.setRepeats$Z(false);
timer.start$();
return true;
});

Clazz.newMeth(C$, 'delayedRun$I$Runnable', function (ms, runnable) {
Clazz.new_(C$.c$$javajs_async_SwingJSUtils_StateMachine,[null]).delayedRun$I$Runnable$I$I(ms, runnable, -2147483648, -2147483648);
}, 1);

Clazz.newMeth(C$, 'delayedRun$I$Runnable$I$I', function (ms, runnable, stateNext, levelNext) {
if (this.interrupted) return false;
if (ms == 0) {
return (stateNext == -2147483648 && levelNext == -2147483648  || this.nextStateIfUnchanged$O$O$I$I(this, runnable, stateNext == -2147483648 ? this.state : stateNext, levelNext == -2147483648 ? this.level : levelNext) );
}var me=this;
{
setTimeout(function() { me.nextStateIfUnchanged$O$O$I$I.apply(me, [me, runnable, stateNext, levelNext]);
},ms);
}
return true;
});

Clazz.newMeth(C$, 'nextStateIfUnchanged$O$O$I$I', function (oThis, runnable, stateNext, levelNext) {
var me=(oThis);
if (!me.interrupted) (runnable).run$();
if (!me.interrupted && (stateNext != -2147483648 || levelNext != -2147483648 ) ) C$.nextStatePriv$O$I$I(oThis, stateNext == -2147483648 ? me.state : stateNext, levelNext == -2147483648 ? me.level : levelNext);
return true;
});

Clazz.newMeth(C$, 'sleep$I', function (ms) {
var next=this.stateNext;
this.delayedState$I$I(ms, next);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
