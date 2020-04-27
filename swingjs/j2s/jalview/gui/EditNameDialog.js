(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Font','javax.swing.JButton','jalview.util.MessageManager','javax.swing.JPanel','javax.swing.BoxLayout','java.awt.FlowLayout','javax.swing.JLabel','javax.swing.JTextField','jalview.gui.JvOptionPane']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EditNameDialog");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ok=Clazz.new_([$I$(3).getString$S("action.accept")],$I$(2,1).c$$S);
this.cancel=Clazz.new_([$I$(3).getString$S("action.cancel")],$I$(2,1).c$$S);
},1);

C$.$fields$=[['O',['id','javax.swing.JTextField','+description','ok','javax.swing.JButton','+cancel','panel','javax.swing.JPanel']]
,['O',['COURIER_12','java.awt.Font']]]

Clazz.newMeth(C$, 'getName$', function () {
return this.id.getText$();
});

Clazz.newMeth(C$, 'getDescription$', function () {
if (this.description.getText$().length$() < 1) {
return null;
} else {
return this.description.getText$();
}});

Clazz.newMeth(C$, 'c$$S$S$S$S', function (name, desc, label1, label2) {
;C$.$init$.apply(this);
this.panel=Clazz.new_($I$(4,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1).c$$java_awt_Container$I,[this.panel, 1]));
var namePanel=Clazz.new_([Clazz.new_($I$(6,1).c$$I,[2])],$I$(4,1).c$$java_awt_LayoutManager);
var descriptionPanel=Clazz.new_([Clazz.new_($I$(6,1).c$$I,[2])],$I$(4,1).c$$java_awt_LayoutManager);
this.panel.add$java_awt_Component(namePanel);
this.panel.add$java_awt_Component(descriptionPanel);
var nameLabel=Clazz.new_($I$(7,1).c$$S,[label1]);
nameLabel.setFont$java_awt_Font(C$.COURIER_12);
namePanel.add$java_awt_Component(nameLabel);
this.id=Clazz.new_($I$(8,1).c$$S$I,[name, 40]);
namePanel.add$java_awt_Component(this.id);
this.description=Clazz.new_($I$(8,1).c$$S$I,[desc, 40]);
if (desc != null  || label2 != null  ) {
var descLabel=Clazz.new_($I$(7,1).c$$S,[label2]);
descLabel.setFont$java_awt_Font(C$.COURIER_12);
descriptionPanel.add$java_awt_Component(descLabel);
descriptionPanel.add$java_awt_Component(this.description);
}}, 1);

Clazz.newMeth(C$, 'showDialog$javax_swing_JComponent$S$Runnable', function (parent, title, action) {
var options=Clazz.array(java.lang.Object, -1, [$I$(3).getString$S("action.ok"), $I$(3).getString$S("action.cancel")]);
$I$(9).newOptionDialog$java_awt_Component(parent).setResponseHandler$O$Runnable(new Integer(0), action).showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S(this.panel, title, 1, -1, null, options, $I$(3).getString$S("action.ok"));
});

C$.$static$=function(){C$.$static$=0;
C$.COURIER_12=Clazz.new_($I$(1,1).c$$S$I$I,["Courier", 0, 12]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
