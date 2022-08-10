(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuffer','java.io.StringWriter','java.io.PrintWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentProperties");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['alignment','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI',  function (alignment) {
;C$.$init$.apply(this);
this.alignment=alignment;
}, 1);

Clazz.newMeth(C$, 'writeProperties$java_io_PrintWriter$Z',  function (pw, html) {
var nl=html ? "<br>" : System.getProperty$S("line.separator");
var avg=0;
var min=2147483647;
var max=0;
for (var i=0; i < this.alignment.getHeight$(); i++) {
var size=1 + this.alignment.getSequenceAt$I(i).getEnd$() - this.alignment.getSequenceAt$I(i).getStart$();
avg+=size;
if (size > max) {
max=size;
}if (size < min) {
min=size;
}}
avg=avg / this.alignment.getHeight$();
pw.print$S(nl);
pw.print$S("Sequences: " + this.alignment.getHeight$());
pw.print$S(nl);
pw.print$S("Minimum Sequence Length: " + min);
pw.print$S(nl);
pw.print$S("Maximum Sequence Length: " + max);
pw.print$S(nl);
pw.print$S("Average Length: " + (avg|0));
if ((this.alignment).alignmentProperties != null ) {
pw.print$S(nl);
pw.print$S(nl);
if (html) {
pw.print$S("<table border=\"1\">");
}var props=(this.alignment).alignmentProperties;
var en=props.keys$();
while (en.hasMoreElements$()){
var key=en.nextElement$().toString();
var vals=props.get$O(key).toString();
if (html) {
var val=Clazz.new_($I$(1,1));
var pos=0;
var npos;
do {
npos=vals.indexOf$S$I("\n", pos);
if (npos == -1) {
val.append$S(vals.substring$I(pos));
} else {
val.append$S(vals.substring$I$I(pos, npos));
val.append$S("<br>");
}pos=npos + 1;
} while (npos != -1);
pw.print$S("<tr><td>" + key + "</td><td>" + val + "</td></tr>" );
} else {
pw.print$S(nl + key + "\t" + vals );
}}
if (html) {
pw.print$S("</table>");
}}});

Clazz.newMeth(C$, 'formatAsString$',  function () {
return this.formatReport$Z(false);
});

Clazz.newMeth(C$, 'formatReport$Z',  function (html) {
var content=Clazz.new_($I$(2,1));
this.writeProperties$java_io_PrintWriter$Z(Clazz.new_($I$(3,1).c$$java_io_Writer,[content]), html);
return content.getBuffer$();
});

Clazz.newMeth(C$, 'formatAsHtml$',  function () {
return this.formatReport$Z(true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
