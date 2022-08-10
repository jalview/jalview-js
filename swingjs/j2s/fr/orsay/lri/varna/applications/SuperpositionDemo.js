(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},I$=[[0,'javax.swing.JPanel','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','fr.orsay.lri.varna.models.rna.RNA','java.awt.Color','fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.VARNAPanel','java.awt.Dimension','java.awt.Font','fr.orsay.lri.varna.models.rna.Mapping','java.awt.BorderLayout','java.awt.GridLayout','fr.orsay.lri.varna.controlers.ControleurInterpolator']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SuperpositionDemo", null, 'javax.swing.JFrame', 'fr.orsay.lri.varna.interfaces.InterfaceVARNAListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._tools=Clazz.new_($I$(1,1));
this._input=Clazz.new_($I$(1,1));
this._seqPanel=Clazz.new_($I$(1,1));
this._struct1Panel=Clazz.new_($I$(1,1));
this._struct2Panel=Clazz.new_($I$(1,1));
this._info=Clazz.new_($I$(2,1));
this._struct1=Clazz.new_(["(((((.(((((----....----))))).(((((....)))))..)))))"],$I$(3,1).c$$S);
this._struct2=Clazz.new_(["(((((.(((((((((....))))))))).--------------..)))))"],$I$(3,1).c$$S);
this._seq1=Clazz.new_($I$(3,1).c$$S,["CGCGCACGCGAUAUUUCGCGUCGCGCAUUUGCGCGUAGCGCG"]);
this._seq2=Clazz.new_($I$(3,1).c$$S,["CGCGCACGCGAUAUUUCGCGUCGCGCAUUUGCGCGUAGCGCG"]);
this._struct1Label=Clazz.new_($I$(2,1).c$$S,[" Str1:"]);
this._struct2Label=Clazz.new_($I$(2,1).c$$S,[" Str2:"]);
this._seqLabel=Clazz.new_($I$(2,1).c$$S,[" Seq:"]);
this._goButton=Clazz.new_($I$(4,1).c$$S,["Go"]);
this._switchButton=Clazz.new_($I$(4,1).c$$S,["Switch"]);
this._str1Backup="";
this._str2Backup="";
this._RNA1=Clazz.new_($I$(5,1));
this._RNA2=Clazz.new_($I$(5,1));
this._backgroundColor=$I$(6).white;
this._currentDisplay=1;
},1);

C$.$fields$=[['Z',['_error'],'I',['_algoCode','_currentDisplay'],'S',['_str1Backup','_str2Backup'],'O',['_vpMaster','fr.orsay.lri.varna.VARNAPanel','+_vpSlave','_tools','javax.swing.JPanel','+_input','+_seqPanel','+_struct1Panel','+_struct2Panel','_info','javax.swing.JLabel','_struct1','javax.swing.JTextField','+_struct2','+_seq1','+_seq2','_struct1Label','javax.swing.JLabel','+_struct2Label','+_seqLabel','_goButton','javax.swing.JButton','+_switchButton','_RNA1','fr.orsay.lri.varna.models.rna.RNA','+_RNA2','_backgroundColor','java.awt.Color']]
,['S',['errorOpt']]]

Clazz.newMeth(C$, 'createStyle$S', function (txt) {
var result=Clazz.new_($I$(7,1));
try {
result.assignParameters$S(txt);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionParameterError")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'applyTo$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_rna_ModelBaseStyle$IA', function (vp, mb, indices) {
for (var i=0; i < indices.length; i++) {
var m=vp.getRNA$().getBaseAt$I(indices[i]);
m.setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(mb);
if (m.getElementStructure$() != -1) {
vp.getRNA$().getBaseAt$I(m.getElementStructure$()).setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(mb);
}}
vp.repaint$();
});

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
try {
this._vpMaster=Clazz.new_([this.getText1$(), this.getStruct1$()],$I$(8,1).c$$S$S);
this._vpSlave=Clazz.new_([this.getText2$(), this.getStruct2$()],$I$(8,1).c$$S$S);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
this._vpMaster.errorDialog$Exception(e);
} else {
throw e;
}
}
this._vpMaster.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[400, 400]));
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
var marginTools=40;
this.setBackground$java_awt_Color(this._backgroundColor);
this._vpMaster.setBackground$java_awt_Color(this._backgroundColor);
this._vpMaster.addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener(this);
this._vpSlave.setBackground$java_awt_Color($I$(6).decode$S("#F0F0F0"));
this._vpMaster.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this.getRNA$I((this._currentDisplay) % 2));
this._vpSlave.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this.getRNA$I((this._currentDisplay + 1) % 2));
var textFieldsFont=$I$(10).decode$S("MonoSpaced-PLAIN-12");
this._seqLabel.setHorizontalTextPosition$I(2);
this._seqLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[marginTools, 15]));
this._seq1.setFont$java_awt_Font(textFieldsFont);
this._seq1.setText$S(this.getRNA1$().getSeq$());
this._seq2.setFont$java_awt_Font(textFieldsFont);
this._seq2.setText$S(this.getRNA2$().getSeq$());
this._goButton.addActionListener$java_awt_event_ActionListener(((P$.SuperpositionDemo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SuperpositionDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay=(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay + 1) % 2;
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpMaster.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getRNA$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay]));
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpSlave.drawRNA$fr_orsay_lri_varna_models_rna_RNA(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getRNA$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay + 1) % 2]));
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].onStructureRedrawn$.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], []);
});
})()
), Clazz.new_(P$.SuperpositionDemo$1.$init$,[this, null])));
this._switchButton.addActionListener$java_awt_event_ActionListener(((P$.SuperpositionDemo$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SuperpositionDemo$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay=(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay + 1) % 2;
var m=$I$(11,"readMappingFromAlignment$S$S",[this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getStruct$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay]), this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getStruct$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay + 1) % 2])]);
var m2=$I$(11,"readMappingFromAlignment$S$S",[this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getStruct$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay + 1) % 2]), this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getStruct$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay])]);
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpMaster.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getRNA$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay]), m);
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpSlave.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getRNA$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay + 1) % 2]), m2);
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].onStructureRedrawn$.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], []);
} catch (e3) {
if (Clazz.exceptionOf(e3,"fr.orsay.lri.varna.exceptions.MappingException")){
try {
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpMaster.drawRNAInterpolated$S$S(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getText$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay]), this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'].getStruct$I.apply(this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo'], [this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._currentDisplay]));
} catch (e1) {
if (Clazz.exceptionOf(e1,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else {
throw e3;
}
}
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpMaster.repaint$();
this.b$['fr.orsay.lri.varna.applications.SuperpositionDemo']._vpSlave.repaint$();
});
})()
), Clazz.new_(P$.SuperpositionDemo$2.$init$,[this, null])));
this._seqPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this._seqPanel.add$java_awt_Component$O(this._seqLabel, "West");
this._seqPanel.add$java_awt_Component$O(this._seq1, "Center");
this._struct1Label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[marginTools, 15]));
this._struct1Label.setHorizontalTextPosition$I(2);
this._struct1.setFont$java_awt_Font(textFieldsFont);
this._struct1Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this._struct1Panel.add$java_awt_Component$O(this._struct1Label, "West");
this._struct1Panel.add$java_awt_Component$O(this._struct1, "Center");
this._struct2Label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(9,1).c$$I$I,[marginTools, 15]));
this._struct2Label.setHorizontalTextPosition$I(2);
this._struct2.setFont$java_awt_Font(textFieldsFont);
this._struct2Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this._struct2Panel.add$java_awt_Component$O(this._struct2Label, "West");
this._struct2Panel.add$java_awt_Component$O(this._struct2, "Center");
this._input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[3, 0]));
this._input.add$java_awt_Component(this._seqPanel);
this._input.add$java_awt_Component(this._struct1Panel);
this._input.add$java_awt_Component(this._struct2Panel);
var goPanel=Clazz.new_($I$(1,1));
goPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this._tools.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
this._tools.add$java_awt_Component$O(this._input, "Center");
this._tools.add$java_awt_Component$O(this._info, "South");
this._tools.add$java_awt_Component$O(goPanel, "East");
goPanel.add$java_awt_Component$O(this._goButton, "Center");
goPanel.add$java_awt_Component$O(this._switchButton, "South");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1)));
var VARNAs=Clazz.new_($I$(1,1));
VARNAs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[1, 2]));
VARNAs.add$java_awt_Component(this._vpMaster);
VARNAs.add$java_awt_Component(this._vpSlave);
this.getContentPane$().add$java_awt_Component$O(VARNAs, "Center");
this.getContentPane$().add$java_awt_Component$O(this._tools, "South");
this.setVisible$Z(true);
this._vpMaster.getVARNAUI$().UIRadiate$();
this._vpSlave.getVARNAUI$().UIRadiate$();
this.onStructureRedrawn$();
}, p$1);

Clazz.newMeth(C$, 'getMasterRNA$', function () {
return this.getRNA$I(this._currentDisplay);
});

Clazz.newMeth(C$, 'getSlaveRNA1$', function () {
return this.getRNA$I((this._currentDisplay + 1) % 2);
});

Clazz.newMeth(C$, 'getSlaveRNA2$', function () {
return this.getRNA$I((this._currentDisplay + 2) % 2);
});

Clazz.newMeth(C$, 'getRNA$I', function (i) {
if (i == 0) {
return this.getRNA1$();
} else {
return this.getRNA2$();
}});

Clazz.newMeth(C$, 'getRNA1$', function () {
if (!this._str1Backup.equals$O(this.getStruct1$())) {
try {
this._RNA1.setRNA$S$S(this.getText1$(), this.getStruct1$());
this._RNA1.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(this._vpMaster.getDrawMode$(), this._vpMaster.getConfig$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e1 = e$$;
{
this._vpMaster.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionDrawingAlgorithm")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
this._str1Backup=this.getStruct1$();
}return this._RNA1;
});

Clazz.newMeth(C$, 'getRNA2$', function () {
if (!this._str2Backup.equals$O(this.getStruct2$())) {
try {
this._RNA2.setRNA$S$S(this.getText2$(), this.getStruct2$());
this._RNA2.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(this._vpMaster.getDrawMode$(), this._vpMaster.getConfig$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e1 = e$$;
{
this._vpMaster.errorDialog$Exception(e1);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionDrawingAlgorithm")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
this._str2Backup=this.getStruct2$();
}return this._RNA2;
});

Clazz.newMeth(C$, 'getText$I', function (i) {
return "";
});

Clazz.newMeth(C$, 'getStruct$I', function (i) {
if (i == 0) return this._struct1.getText$();
 else return this._struct2.getText$();
});

Clazz.newMeth(C$, 'getText1$', function () {
return this._seq1.getText$();
});

Clazz.newMeth(C$, 'getText2$', function () {
return this._seq2.getText$();
});

Clazz.newMeth(C$, 'getStruct1$', function () {
return p$1.cleanStruct$S.apply(this, [this._struct1.getText$()]);
});

Clazz.newMeth(C$, 'getStruct2$', function () {
return p$1.cleanStruct$S.apply(this, [this._struct2.getText$()]);
});

Clazz.newMeth(C$, 'cleanStruct$S', function (struct) {
struct=struct.replaceAll$S$S("[:-]", "");
return struct;
}, p$1);

Clazz.newMeth(C$, 'getParameterInfo$', function () {
var info=Clazz.array(String, -2, [Clazz.array(String, -1, ["sequenceDBN", "String", "A raw RNA sequence"]), Clazz.array(String, -1, ["structureDBN", "String", "An RNA structure in dot bracket notation (DBN)"]), Clazz.array(String, -1, [C$.errorOpt, "boolean", "To show errors"])]);
return info;
});

Clazz.newMeth(C$, 'init$', function () {
this._vpMaster.setBackground$java_awt_Color(this._backgroundColor);
this._error=true;
});

Clazz.newMeth(C$, 'getSafeColor$S$java_awt_Color', function (col, def) {
var result;
try {
result=$I$(6).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
result=$I$(6).getColor$S$java_awt_Color(col, def);
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
return def;
} else {
throw e2;
}
}
} else {
throw e;
}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'get_varnaPanel$', function () {
return this._vpMaster;
});

Clazz.newMeth(C$, 'set_varnaPanel$fr_orsay_lri_varna_VARNAPanel', function (surface) {
this._vpMaster=surface;
});

Clazz.newMeth(C$, 'get_struct$', function () {
return this._struct1;
});

Clazz.newMeth(C$, 'set_struct$javax_swing_JTextField', function (_struct) {
this._struct1=_struct;
});

Clazz.newMeth(C$, 'get_info$', function () {
return this._info;
});

Clazz.newMeth(C$, 'set_info$javax_swing_JLabel', function (_info) {
this._info=_info;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var d=Clazz.new_(C$);
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'onStructureRedrawn$', function () {
try {
var m=$I$(11,"readMappingFromAlignment$S$S",[this.getStruct$I((this._currentDisplay + 1) % 2), this.getStruct$I((this._currentDisplay) % 2)]);
$I$(14,"moveNearOtherRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping",[this.getRNA$I((this._currentDisplay) % 2), this.getRNA$I((this._currentDisplay + 1) % 2), m]);
this._vpSlave.repaint$();
this._vpMaster.repaint$();
} catch (e3) {
if (Clazz.exceptionOf(e3,"fr.orsay.lri.varna.exceptions.MappingException")){
System.out.println$S(e3.toString());
} else {
throw e3;
}
}
});

Clazz.newMeth(C$, 'onWarningEmitted$S', function (s) {
});

Clazz.newMeth(C$, 'onLoad$S', function (path) {
});

Clazz.newMeth(C$, 'onLoaded$', function () {
});

Clazz.newMeth(C$, 'onUINewStructure$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA', function (v, r) {
});

Clazz.newMeth(C$, 'onZoomLevelChanged$', function () {
});

Clazz.newMeth(C$, 'onTranslationChanged$', function () {
});

C$.$static$=function(){C$.$static$=0;
C$.errorOpt="error";
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
