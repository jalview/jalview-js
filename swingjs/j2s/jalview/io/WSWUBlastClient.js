(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'javax.swing.ImageIcon','Thread','jalview.util.MessageManager','uk.ac.ebi.www.WSWUBlastServiceLocator','uk.ac.ebi.www.InputParams','uk.ac.ebi.www.Data','jalview.analysis.AlignSeq','jalview.gui.CutAndPasteTransfer','java.util.Vector','jalview.gui.Desktop',['jalview.io.WSWUBlastClient','.BlastThread'],['jalview.io.WSWUBlastClient','.ImageTwirler'],'java.util.StringTokenizer','StringBuffer','jalview.gui.JvOptionPane','jalview.datamodel.DBRefEntry']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WSWUBlastClient", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ap=null;
this.al=null;
this.output=null;
this.jobsRunning=0;
this.suggestedIds=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.output=Clazz.new_($I$(8));
this.jobsRunning=0;
this.suggestedIds=Clazz.new_($I$(9));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_datamodel_AlignmentI$java_util_ArrayList', function (ap, al, ids) {
C$.$init$.apply(this);
this.ap=ap;
this.al=al;
this.output.setText$S($I$(3).getString$S("label.wswublast_client_credits"));
$I$(10).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.output, $I$(3).getString$S("label.blasting_for_unidentified_sequence"), 800, 300);
for (var i=0; i < ids.size$(); i++) {
var sequence=ids.get$I(i);
System.out.println$S(sequence.getName$());
var thread=Clazz.new_($I$(11).c$$jalview_datamodel_Sequence, [this, null, sequence]);
thread.start$();
this.jobsRunning++;
}
var thread=Clazz.new_($I$(12), [this, null]);
thread.start$();
}, 1);

Clazz.newMeth(C$, 'parseResult$jalview_datamodel_Sequence$S', function (seq, res) {
var st=Clazz.new_($I$(13).c$$S$S,[res, "\n"]);
var data;
var id2;
var maxFound=90;
var buffer=Clazz.new_($I$(14).c$$S,["\n\n" + seq.getName$() + " :" ]);
while (st.hasMoreTokens$()){
data=st.nextToken$();
if (data.indexOf$S(">UNIPROT") > -1) {
var index=data.indexOf$S(">UNIPROT") + 9;
id2=data.substring$I$I(index, data.indexOf$S$I(" ", index));
var identitiesFound=false;
while (!identitiesFound){
data=st.nextToken$();
if (data.indexOf$S("Identities") > -1) {
identitiesFound=true;
var value=Integer.parseInt$S(data.substring$I$I(data.indexOf$S("(") + 1, data.indexOf$S("%")));
if (value >= maxFound) {
maxFound=value;
buffer.append$S(" " + id2 + " " + value + "%; " );
this.suggestedIds.addElement$TE(Clazz.array(java.lang.Object, -1, [seq, id2]));
}}}
}}
this.output.appendText$S(buffer.toString());
});

Clazz.newMeth(C$, 'updateIds$', function () {
var reply=$I$(15).showConfirmDialog$java_awt_Component$O$S$I($I$(10).desktop, "Automatically update suggested ids?", "Auto replace sequence ids", 0);
if (reply == 0) {
var keys=this.suggestedIds.elements$();
while (keys.hasMoreElements$()){
var object=keys.nextElement$();
var oldseq=object[0];
oldseq.setName$S(object[1].toString());
for (var i=0; i < this.al.getHeight$(); i++) {
if (this.al.getSequenceAt$I(i).getDatasetSequence$() === oldseq ) {
this.al.getSequenceAt$I(i).setName$S(oldseq.getName$());
break;
}}
var entries=oldseq.getDBRefs$();
if (entries != null  && entries.size$() > 0 ) {
oldseq.addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_($I$(16).c$$S$S$S,["UNIPROT", "0", entries.get$I(0).getAccessionId$()]));
}}
}this.ap.paintAlignment$Z$Z(true, false);
});
;
(function(){var C$=Clazz.newClass(P$.WSWUBlastClient, "ImageTwirler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.imageIcon=null;
this.imageIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.imageIndex=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.imageIcon=Clazz.array($I$(1), [9]);
for (var i=0; i < 9; i++) {
var url=this.getClass$().getResource$S("/images/dna" + (i + 1) + ".gif" );
if (url != null ) {
this.imageIcon[i]=Clazz.new_($I$(1).c$$java_net_URL,[url]);
}}
}, 1);

Clazz.newMeth(C$, 'run$', function () {
while (this.this$0.jobsRunning > 0){
try {
$I$(2).sleep$J(100);
this.imageIndex++;
this.imageIndex%=9;
this.this$0.output.setFrameIcon$javax_swing_Icon(this.imageIcon[this.imageIndex]);
this.this$0.output.setTitle$S($I$(3).formatMessage$S$SA("label.blasting_for_unidentified_sequence_jobs_running", Clazz.array(String, -1, [Integer.valueOf$I(this.this$0.jobsRunning).toString()])));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
if (this.this$0.jobsRunning == 0) {
this.this$0.updateIds$.apply(this.this$0, []);
}});
})()
;
(function(){var C$=Clazz.newClass(P$.WSWUBlastClient, "BlastThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.jobid=null;
this.jobComplete=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.jobComplete=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_Sequence', function (sequence) {
Clazz.super_(C$, this,1);
System.out.println$S("blasting for: " + sequence.getName$());
this.sequence=sequence;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.StartJob$();
while (!this.jobComplete){
try {
var service=Clazz.new_($I$(4));
var wublast=service.getWSWUBlast$();
var results=wublast.getResults$S(this.jobid);
if (results != null ) {
var result= String.instantialize(wublast.poll$S$S(this.jobid, "tooloutput"));
this.this$0.parseResult$jalview_datamodel_Sequence$S.apply(this.this$0, [this.sequence, result]);
this.jobComplete=true;
this.this$0.jobsRunning--;
} else {
$I$(2).sleep$J(10000);
System.out.println$S("WSWuBlastClient: I'm alive " + this.sequence.getName$() + " " + this.jobid );
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}
});

Clazz.newMeth(C$, 'StartJob$', function () {
var params=Clazz.new_($I$(5));
params.setProgram$S("blastp");
params.setDatabase$S("uniprot");
params.setMatrix$S("pam10");
params.setNumal$I(5);
params.setSensitivity$S("low");
params.setSort$S("totalscore");
params.setOutformat$S("txt");
params.setAsync$Z(true);
try {
var inputs=Clazz.array($I$(6), [1]);
var input=Clazz.new_($I$(6));
input.setType$S("sequence");
input.setContent$S($I$(7).extractGaps$S$S("-. ", this.sequence.getSequenceAsString$()));
inputs[0]=input;
var service=Clazz.new_($I$(4));
var wublast=service.getWSWUBlast$();
this.jobid=wublast.runWUBlast$uk_ac_ebi_www_InputParams$uk_ac_ebi_www_DataA(params, inputs);
} catch (exp) {
if (Clazz.exceptionOf(exp,"Exception")){
this.jobComplete=true;
this.this$0.jobsRunning--;
System.err.println$S("WSWUBlastClient error:\n" + exp.toString());
exp.printStackTrace$();
} else {
throw exp;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
