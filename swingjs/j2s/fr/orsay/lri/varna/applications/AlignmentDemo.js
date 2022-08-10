(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},I$=[[0,'javax.swing.JPanel','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','fr.orsay.lri.varna.models.rna.RNA','java.awt.Color','fr.orsay.lri.varna.VARNAPanel','java.awt.Dimension','java.awt.Font','java.awt.BorderLayout','java.awt.GridLayout']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentDemo", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._tools=Clazz.new_($I$(1,1));
this._input=Clazz.new_($I$(1,1));
this._seq1Panel=Clazz.new_($I$(1,1));
this._seq2Panel=Clazz.new_($I$(1,1));
this._struct1Panel=Clazz.new_($I$(1,1));
this._struct2Panel=Clazz.new_($I$(1,1));
this._info=Clazz.new_($I$(2,1));
this._struct1=Clazz.new_(["(((((.(((((----....----))))).(((((....)))))..)))))"],$I$(3,1).c$$S);
this._struct2=Clazz.new_(["(((((.(((((((((....))))))))).--------------..)))))"],$I$(3,1).c$$S);
this._seq1=Clazz.new_($I$(3,1).c$$S,["CGCGCACGCGA----UAUU----UCGCGUCGCGCAUUUGCGCGUAGCGCG"]);
this._seq2=Clazz.new_($I$(3,1).c$$S,["CGCGCACGCGSGCGCGUUUGCGCUCGCGU---------------AGCGCG"]);
this._struct1Label=Clazz.new_($I$(2,1).c$$S,[" Str1:"]);
this._struct2Label=Clazz.new_($I$(2,1).c$$S,[" Str2:"]);
this._seq1Label=Clazz.new_($I$(2,1).c$$S,[" Seq1:"]);
this._seq2Label=Clazz.new_($I$(2,1).c$$S,[" Seq2:"]);
this._goButton=Clazz.new_($I$(4,1).c$$S,["Go"]);
this._str1Backup="";
this._str2Backup="";
this._seq1Backup="";
this._seq2Backup="";
this._RNA=Clazz.new_($I$(5,1));
this._backgroundColor=$I$(6).white;
},1);

C$.$fields$=[['Z',['_error'],'I',['_algoCode'],'S',['_str1Backup','_str2Backup','_seq1Backup','_seq2Backup'],'O',['_vpMaster','fr.orsay.lri.varna.VARNAPanel','_tools','javax.swing.JPanel','+_input','+_seq1Panel','+_seq2Panel','+_struct1Panel','+_struct2Panel','_info','javax.swing.JLabel','_struct1','javax.swing.JTextField','+_struct2','+_seq1','+_seq2','_struct1Label','javax.swing.JLabel','+_struct2Label','+_seq1Label','+_seq2Label','_goButton','javax.swing.JButton','_RNA','fr.orsay.lri.varna.models.rna.RNA','_backgroundColor','java.awt.Color']]
,['S',['errorOpt']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this._vpMaster=Clazz.new_([this.getSeq1$(), this.getStruct1$(), this.getSeq2$(), this.getStruct2$(), 2, ""],$I$(7,1).c$$S$S$S$S$I$S);
this._vpMaster.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[600, 400]));
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
var marginTools=40;
this.setBackground$java_awt_Color(this._backgroundColor);
this._vpMaster.setBackground$java_awt_Color(this._backgroundColor);
var textFieldsFont=$I$(9).decode$S("MonoSpaced-PLAIN-12");
this._goButton.addActionListener$java_awt_event_ActionListener(((P$.AlignmentDemo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignmentDemo$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['fr.orsay.lri.varna.applications.AlignmentDemo']._vpMaster.drawRNA$S$S$S$S$I(this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'].getSeq1$.apply(this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'], []), this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'].getStruct1$.apply(this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'], []), this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'].getSeq2$.apply(this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'], []), this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'].getStruct2$.apply(this.b$['fr.orsay.lri.varna.applications.AlignmentDemo'], []), this.b$['fr.orsay.lri.varna.applications.AlignmentDemo']._vpMaster.getDrawMode$());
this.b$['fr.orsay.lri.varna.applications.AlignmentDemo']._vpMaster.repaint$();
});
})()
), Clazz.new_(P$.AlignmentDemo$1.$init$,[this, null])));
this._seq1Label.setHorizontalTextPosition$I(2);
this._seq1Label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[marginTools, 15]));
this._seq1.setFont$java_awt_Font(textFieldsFont);
this._seq1Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this._seq1Panel.add$java_awt_Component$O(this._seq1Label, "West");
this._seq1Panel.add$java_awt_Component$O(this._seq1, "Center");
this._seq2Label.setHorizontalTextPosition$I(2);
this._seq2Label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[marginTools, 15]));
this._seq2.setFont$java_awt_Font(textFieldsFont);
this._seq2Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this._seq2Panel.add$java_awt_Component$O(this._seq2Label, "West");
this._seq2Panel.add$java_awt_Component$O(this._seq2, "Center");
this._struct1Label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[marginTools, 15]));
this._struct1Label.setHorizontalTextPosition$I(2);
this._struct1.setFont$java_awt_Font(textFieldsFont);
this._struct1Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this._struct1Panel.add$java_awt_Component$O(this._struct1Label, "West");
this._struct1Panel.add$java_awt_Component$O(this._struct1, "Center");
this._struct2Label.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[marginTools, 15]));
this._struct2Label.setHorizontalTextPosition$I(2);
this._struct2.setFont$java_awt_Font(textFieldsFont);
this._struct2Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this._struct2Panel.add$java_awt_Component$O(this._struct2Label, "West");
this._struct2Panel.add$java_awt_Component$O(this._struct2, "Center");
this._input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1).c$$I$I,[4, 0]));
this._input.add$java_awt_Component(this._seq1Panel);
this._input.add$java_awt_Component(this._struct1Panel);
this._input.add$java_awt_Component(this._seq2Panel);
this._input.add$java_awt_Component(this._struct2Panel);
var goPanel=Clazz.new_($I$(1,1));
goPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this._tools.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this._tools.add$java_awt_Component$O(this._input, "Center");
this._tools.add$java_awt_Component$O(this._info, "South");
this._tools.add$java_awt_Component$O(goPanel, "East");
goPanel.add$java_awt_Component$O(this._goButton, "Center");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
var VARNAs=Clazz.new_($I$(1,1));
VARNAs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1).c$$I$I,[1, 1]));
VARNAs.add$java_awt_Component(this._vpMaster);
this.getContentPane$().add$java_awt_Component$O(VARNAs, "Center");
this.getContentPane$().add$java_awt_Component$O(this._tools, "South");
this.setVisible$Z(true);
this._vpMaster.getVARNAUI$().UIRadiate$();
}, p$1);

Clazz.newMeth(C$, 'getRNA$', function () {
if (!(this._str1Backup.equals$O(this.getStruct1$()) && this._str2Backup.equals$O(this.getStruct2$()) && this._seq1Backup.equals$O(this.getSeq1$()) && this._seq2Backup.equals$O(this.getSeq2$())  )) {
this._vpMaster.drawRNA$S$S$S$S$I(this.getSeq1$(), this.getStruct1$(), this.getSeq2$(), this.getStruct2$(), this._vpMaster.getDrawMode$());
this._RNA=this._vpMaster.getRNA$();
this._str1Backup=this.getStruct1$();
this._str2Backup=this.getStruct2$();
this._seq1Backup=this.getSeq1$();
this._seq2Backup=this.getSeq2$();
}return this._RNA;
});

Clazz.newMeth(C$, 'getStruct1$', function () {
return p$1.cleanStruct$S.apply(this, [this._struct1.getText$()]);
});

Clazz.newMeth(C$, 'getStruct2$', function () {
return p$1.cleanStruct$S.apply(this, [this._struct2.getText$()]);
});

Clazz.newMeth(C$, 'getSeq1$', function () {
return p$1.cleanStruct$S.apply(this, [this._seq1.getText$()]);
});

Clazz.newMeth(C$, 'getSeq2$', function () {
return p$1.cleanStruct$S.apply(this, [this._seq2.getText$()]);
});

Clazz.newMeth(C$, 'cleanStruct$S', function (struct) {
struct=struct.replaceAll$S$S("[:-]", "-");
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

Clazz.newMeth(C$, 'get_seq$', function () {
return this._seq1;
});

Clazz.newMeth(C$, 'set_seq$javax_swing_JTextField', function (_seq) {
this._seq1=_seq;
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

Clazz.newMeth(C$, 'onWarningEmitted$S', function (s) {
});

C$.$static$=function(){C$.$static$=0;
C$.errorOpt="error";
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
