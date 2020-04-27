(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},I$=[[0,'javajs.async.AsyncDialog']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsyncFileChooser", null, 'javax.swing.JFileChooser', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isAsyncSave=true;
},1);

C$.$fields$=[['Z',['isAsyncSave'],'I',['optionSelected'],'O',['ok','Runnable','+cancel']]
,['Z',['notified']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
;C$.superclazz.c$$java_io_File.apply(this,[file]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$javax_swing_filechooser_FileSystemView', function (file, view) {
;C$.superclazz.c$$java_io_File$javax_swing_filechooser_FileSystemView.apply(this,[file, view]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'showDialog$java_awt_Component$S', function (frame, btnText) {
return C$.superclazz.prototype.showDialog$java_awt_Component$S.apply(this, [frame, btnText]);
});

Clazz.newMeth(C$, 'err', function () {
try {
throw Clazz.new_(Clazz.load('IllegalAccessException').c$$S,["Warning! AsyncFileChooser interface bypassed!"]);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalAccessException")){
e.printStackTrace$();
} else {
throw e;
}
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'showOpenDialog$java_awt_Component', function (frame) {
return p$1.err.apply(this, []);
});

Clazz.newMeth(C$, 'showSaveDialog$java_awt_Component', function (frame) {
this.isAsyncSave=false;
return C$.superclazz.prototype.showSaveDialog$java_awt_Component.apply(this, [frame]);
});

Clazz.newMeth(C$, 'showDialog$java_awt_Component$S$Runnable$Runnable', function (frame, btnLabel, ok, cancel) {
this.ok=ok;
if (this.getDialogType$() != 1 && cancel != null  ) p$1.notifyCancel.apply(this, []);
p$1.process$I.apply(this, [C$.superclazz.prototype.showDialog$java_awt_Component$S.apply(this, [frame, btnLabel])]);
});

Clazz.newMeth(C$, 'showOpenDialog$java_awt_Component$Runnable$Runnable', function (frame, ok, cancel) {
this.ok=ok;
if (cancel != null ) p$1.notifyCancel.apply(this, []);
p$1.process$I.apply(this, [C$.superclazz.prototype.showOpenDialog$java_awt_Component.apply(this, [frame])]);
});

Clazz.newMeth(C$, 'showSaveDialog$java_awt_Component$Runnable$Runnable', function (frame, ok, cancel) {
this.ok=ok;
this.cancel=cancel;
p$1.process$I.apply(this, [C$.superclazz.prototype.showSaveDialog$java_awt_Component.apply(this, [frame])]);
});

Clazz.newMeth(C$, 'getFileAsync$java_awt_Component$S$I$java_util_function_Function', function (parent, title, mode, processFile) {
var fc=Clazz.new_(C$);
fc.setDialogTitle$S(title);
var after=((P$.AsyncFileChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AsyncFileChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.processFile.apply$O(this.$finals$.fc.getSelectedFile$());
});
})()
), Clazz.new_(P$.AsyncFileChooser$1.$init$,[this, {fc:fc,processFile:processFile}]));
if (mode == 0) {
fc.showOpenDialog$java_awt_Component$Runnable$Runnable(parent, after, after);
} else {
fc.showSaveDialog$java_awt_Component$Runnable$Runnable(parent, after, after);
}}, 1);

Clazz.newMeth(C$, 'checkReplaceFileAsync$java_awt_Component$java_io_File$S$Runnable$Runnable', function (parent, outfile, title, yes, no) {
if (outfile.exists$()) {
$I$(1,"showYesNoAsync$java_awt_Component$O$S$java_awt_event_ActionListener",[parent, outfile + " exists. Replace it?", null, ((P$.AsyncFileChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AsyncFileChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
switch (e.getID$()) {
case 0:
this.$finals$.yes.run$();
break;
default:
if (this.$finals$.no != null ) this.$finals$.no.run$();
break;
}
});
})()
), Clazz.new_(P$.AsyncFileChooser$2.$init$,[this, {yes:yes,no:no}]))]);
} else {
yes.run$();
}}, 1);

Clazz.newMeth(C$, 'notifyCancel', function () {
if (!C$.notified) {
System.err.println$S("developer note: JavaScript cannot fire a FileChooser CANCEL action");
}C$.notified=true;
}, p$1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
switch (evt.getPropertyName$()) {
case "SelectedFile":
case "SelectedFiles":
p$1.process$I.apply(this, [this.optionSelected=(evt.getNewValue$() == null  ? 1 : 0)]);
break;
}
});

Clazz.newMeth(C$, 'process$I', function (ret) {
if (ret != -(-ret)) return;
this.optionSelected=ret;
var f=this.getSelectedFile$();
if (f == null ) {
if (this.cancel != null ) this.cancel.run$();
} else {
if (this.ok != null ) this.ok.run$();
}}, p$1);

Clazz.newMeth(C$, 'getSelectedOption$', function () {
return this.optionSelected;
});

Clazz.newMeth(C$, 'getFileBytes$java_io_File', function (f) {
return f.秘bytes ||null;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
