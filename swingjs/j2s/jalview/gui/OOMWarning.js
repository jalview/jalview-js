(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.bin.Cache','javax.swing.SwingUtilities','jalview.gui.Desktop','jalview.gui.JvOptionPane','jalview.util.MessageManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OOMWarning", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.action=null;
this.instructions="";
this.desktop=null;
},1);

C$.$fields$=[['S',['action','instructions'],'O',['desktop','java.awt.Component']]
,['Z',['oomInprogress']]]

Clazz.newMeth(C$, 'c$$S$OutOfMemoryError$java_awt_Component', function (action, oomex, instance) {
;C$.$init$.apply(this);
if (!C$.oomInprogress) {
C$.oomInprogress=true;
this.action=action;
this.desktop=instance;
if (oomex != null ) {
if ($I$(1).log != null ) {
$I$(1).log.error$O$Throwable("Out of Memory when " + action, oomex);
} else {
System.err.println$S("Out of Memory when " + action);
oomex.printStackTrace$();
}}$I$(2).invokeLater$Runnable(this);
System.gc$();
}}, 1);

Clazz.newMeth(C$, 'c$$S$OutOfMemoryError', function (string, oomerror) {
C$.c$$S$OutOfMemoryError$java_awt_Component.apply(this, [string, oomerror, $I$(3).desktop]);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
C$.oomInprogress=false;
$I$(4,"showInternalMessageDialog$java_awt_Component$S$S$I",[this.desktop, $I$(5,"formatMessage$S$SA",["warn.out_of_memory_when_action", Clazz.array(String, -1, [this.action])]), $I$(5).getString$S("label.out_of_memory"), 2]);
});

C$.$static$=function(){C$.$static$=0;
C$.oomInprogress=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
