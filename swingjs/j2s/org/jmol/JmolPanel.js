(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'org.jmol.JmolTable','org.jmol.JmolPanel','org.jmol.util.Logger','javax.swing.JFrame','org.jmol.AppCloser','javax.swing.JTable',['org.jmol.JmolTable','.JmolPanelJTableModel'],['org.jmol.JmolTable','.JmolColumnModelListener'],'javax.swing.JScrollPane','java.awt.Dimension',['org.jmol.JmolTable','.JmolPanelCellRenderer'],['org.jmol.JmolTable','.JmolPanelCellEditor'],'org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.JmolViewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolPanel", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewer=null;
this.adapter=null;
this.currentSize=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(10));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.adapter=Clazz.new_($I$(13));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
