(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'org.jmol.JmolTable','org.jmol.JmolPanel','org.jmol.util.Logger','javax.swing.JFrame','org.jmol.AppCloser','javax.swing.JTable',['org.jmol.JmolTable','.JmolPanelJTableModel'],['org.jmol.JmolTable','.JmolColumnModelListener'],'javax.swing.JScrollPane','java.awt.Dimension',['org.jmol.JmolTable','.JmolPanelCellRenderer'],['org.jmol.JmolTable','.JmolPanelCellEditor'],'org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.JmolViewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JmolPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(10,1));
},1);

C$.$fields$=[['O',['viewer','org.jmol.api.JmolViewer','adapter','org.jmol.api.JmolAdapter','currentSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.adapter=Clazz.new_($I$(13,1));
this.viewer=$I$(14).allocateViewer$O$org_jmol_api_JmolAdapter(this, this.adapter);
this.viewer.scriptWait$S("frank off;set defaultDirectory \'http://chemapps.stolaf.edu/jmol/docs/examples-11/data/\'");
}, 1);

Clazz.newMeth(C$, 'getViewer$', function () {
return this.viewer;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
this.viewer.setScreenDimension$I$I(this.currentSize.width, this.currentSize.height);
this.viewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
