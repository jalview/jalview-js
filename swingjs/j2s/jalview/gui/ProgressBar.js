(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.GridLayout','java.util.Hashtable','javax.swing.SwingUtilities','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JProgressBar','javax.swing.JLabel','javax.swing.JButton','jalview.util.MessageManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProgressBar", null, null, 'jalview.gui.IProgressIndicator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['progressBars','java.util.Map','+progressBarHandlers','statusPanel','javax.swing.JPanel','statusBar','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$javax_swing_JPanel$javax_swing_JLabel', function (container, statusBar) {
;C$.$init$.apply(this);
if (container == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (!Clazz.getClass($I$(1)).isAssignableFrom$Class(container.getLayout$().getClass$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Container must have GridLayout"]);
}this.statusPanel=container;
this.statusBar=statusBar;
this.progressBars=Clazz.new_($I$(2,1));
this.progressBarHandlers=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'operationInProgress$', function () {
if (this.progressBars != null  && this.progressBars.size$() > 0 ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'setProgressBar$S$J', function (message, id) {
$I$(3,"invokeLater$Runnable",[((P$.ProgressBar$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressBar$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var progressPanel=this.b$['jalview.gui.ProgressBar'].progressBars.get$O(new Long(this.$finals$.id));
if (progressPanel != null ) {
this.b$['jalview.gui.ProgressBar'].progressBars.remove$O(new Long(this.$finals$.id));
if (this.$finals$.message != null  && this.b$['jalview.gui.ProgressBar'].statusBar != null  ) {
this.b$['jalview.gui.ProgressBar'].statusBar.setText$S(this.$finals$.message);
}if (this.b$['jalview.gui.ProgressBar'].progressBarHandlers.containsKey$O(new Long(this.$finals$.id))) {
this.b$['jalview.gui.ProgressBar'].progressBarHandlers.remove$O(new Long(this.$finals$.id));
}this.b$['jalview.gui.ProgressBar'].removeRow$javax_swing_JPanel.apply(this.b$['jalview.gui.ProgressBar'], [progressPanel]);
} else {
progressPanel=Clazz.new_([Clazz.new_($I$(5,1).c$$I$I,[10, 5])],$I$(4,1).c$$java_awt_LayoutManager);
var progressBar=Clazz.new_($I$(6,1));
progressBar.setIndeterminate$Z(true);
progressPanel.add$java_awt_Component$O(Clazz.new_($I$(7,1).c$$S,[this.$finals$.message]), "West");
progressPanel.add$java_awt_Component$O(progressBar, "Center");
this.b$['jalview.gui.ProgressBar'].addRow$javax_swing_JPanel.apply(this.b$['jalview.gui.ProgressBar'], [progressPanel]);
this.b$['jalview.gui.ProgressBar'].progressBars.put$O$O(new Long(this.$finals$.id), progressPanel);
}this.b$['jalview.gui.ProgressBar'].refreshLayout$.apply(this.b$['jalview.gui.ProgressBar'], []);
});
})()
), Clazz.new_(P$.ProgressBar$1.$init$,[this, {message:message,id:id}]))]);
});

Clazz.newMeth(C$, 'refreshLayout$', function () {
var root=$I$(3).getRoot$java_awt_Component(this.statusPanel);
if (root != null ) {
root.validate$();
}});

Clazz.newMeth(C$, 'removeRow$javax_swing_JPanel', function (progressPanel) {
{
this.statusPanel.remove$java_awt_Component(progressPanel);
var layout=this.statusPanel.getLayout$();
layout.setRows$I(layout.getRows$() - 1);
this.statusPanel.remove$java_awt_Component(progressPanel);
}});

Clazz.newMeth(C$, 'addRow$javax_swing_JPanel', function (progressPanel) {
{
var layout=this.statusPanel.getLayout$();
layout.setRows$I(layout.getRows$() + 1);
this.statusPanel.add$java_awt_Component(progressPanel);
}});

Clazz.newMeth(C$, 'registerHandler$J$jalview_gui_IProgressIndicatorHandler', function (id, handler) {
var us=this;
$I$(3,"invokeLater$Runnable",[((P$.ProgressBar$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressBar$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var progressPanel=this.b$['jalview.gui.ProgressBar'].progressBars.get$O(new Long(this.$finals$.id));
if (progressPanel == null ) {
System.err.println$S("call setProgressBar before registering the progress bar\'s handler.");
return;
}if (!this.$finals$.handler.canCancel$()) {
return;
}this.b$['jalview.gui.ProgressBar'].progressBarHandlers.put$O$O(new Long(this.$finals$.id), this.$finals$.handler);
var cancel=Clazz.new_([$I$(9).getString$S("action.cancel")],$I$(8,1).c$$S);
cancel.addActionListener$java_awt_event_ActionListener(((P$.ProgressBar$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressBar$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.handler.cancelActivity$J(this.$finals$.id);
this.$finals$.us.setProgressBar$S$J($I$(9,"formatMessage$S$OA",["label.cancelled_params", Clazz.array(java.lang.Object, -1, [(this.$finals$.progressPanel.getComponent$I(0)).getText$()])]), this.$finals$.id);
});
})()
), Clazz.new_(P$.ProgressBar$2$1.$init$,[this, {handler:this.$finals$.handler,id:this.$finals$.id,progressPanel:progressPanel,us:this.$finals$.us}])));
progressPanel.add$java_awt_Component$O(cancel, "East");
this.b$['jalview.gui.ProgressBar'].refreshLayout$.apply(this.b$['jalview.gui.ProgressBar'], []);
});
})()
), Clazz.new_(P$.ProgressBar$2.$init$,[this, {handler:handler,id:id,us:us}]))]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
