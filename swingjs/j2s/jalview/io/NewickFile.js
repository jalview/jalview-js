(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'com.stevesoft.pat.Regex','jalview.io.DataSourceType','StringBuffer','jalview.datamodel.SequenceNode','jalview.util.MessageManager','java.util.StringTokenizer']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NewickFile", null, 'jalview.io.FileParse');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.HasBootstrap=false;
this.HasDistances=false;
this.RootHasDistance=false;
this.ReplaceUnderscores=false;
this.printRootInfo=true;
this.NodeSafeName=Clazz.array($I$(1), -1, [$I$(1,"perlCode$S",["m/[\\[,:\'()]/"]), $I$(1).perlCode$S("s/\'/\'\'/"), $I$(1).perlCode$S("s/\\/w/_/")]);
this.QuoteChar="\'";
},1);

C$.$fields$=[['Z',['HasBootstrap','HasDistances','RootHasDistance','ReplaceUnderscores','printRootInfo'],'C',['QuoteChar'],'O',['root','jalview.datamodel.SequenceNode','NodeSafeName','com.stevesoft.pat.Regex[]']]]

Clazz.newMeth(C$, 'c$$S', function (inStr) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inStr, $I$(2).PASTE]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_io_DataSourceType', function (inFile, protocol) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, protocol]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (source) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceNode', function (newtree) {
Clazz.super_(C$, this);
this.root=newtree;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceNode$Z', function (newtree, bootstrap) {
Clazz.super_(C$, this);
this.HasBootstrap=bootstrap;
this.root=newtree;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceNode$Z$Z', function (newtree, bootstrap, distances) {
Clazz.super_(C$, this);
this.root=newtree;
this.HasBootstrap=bootstrap;
this.HasDistances=distances;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceNode$Z$Z$Z', function (newtree, bootstrap, distances, rootdistance) {
Clazz.super_(C$, this);
this.root=newtree;
this.HasBootstrap=bootstrap;
this.HasDistances=distances;
this.RootHasDistance=rootdistance;
}, 1);

Clazz.newMeth(C$, 'ErrorStringrange$S$S$I$I$S', function (Error, Er, r, p, s) {
return ((Error == null ) ? "" : Error) + Er + " at position " + p + " ( " + s.substring$I$I(((p - r) < 0) ? 0 : (p - r), ((p + r) > s.length$()) ? s.length$() : (p + r)) + " )\n" ;
}, p$1);

Clazz.newMeth(C$, 'HasBootstrap$', function () {
return this.HasBootstrap;
});

Clazz.newMeth(C$, 'HasDistances$', function () {
return this.HasDistances;
});

Clazz.newMeth(C$, 'HasRootDistance$', function () {
return this.RootHasDistance;
});

Clazz.newMeth(C$, 'parse$', function () {
var nf;
{
var file=Clazz.new_($I$(3,1));
while ((nf=this.nextLine$()) != null ){
file.append$S(nf);
}
nf=file.toString();
}this.root=Clazz.new_($I$(4,1));
var realroot=null;
var c=this.root;
var d=-1;
var cp=0;
var Error=null;
var nodename=null;
var commentString2=null;
var DefDistance=0.001;
var DefBootstrap=-1;
var distance=DefDistance;
var bootstrap=DefBootstrap;
var ascending=false;
var majorsyms=Clazz.new_(["[(\\[\'),;]"],$I$(1,1).c$$S);
var nextcp=0;
var ncp=cp;
var parsednodename=false;
while (majorsyms.searchFrom$S$I(nf, cp) && (Error == null ) ){
var fcp=majorsyms.matchedFrom$();
var schar;
switch ((schar=nf.charAt$I(fcp)).$c()) {
case 40:
if (ascending) {
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "Unexpected \'(\'", 7, fcp, nf]);
continue;
}d++;
if (c.right$() == null ) {
c.setRight$jalview_datamodel_BinaryNode(Clazz.new_($I$(4,1).c$$O$jalview_datamodel_SequenceNode$S$F$I$Z,[null, c, null, DefDistance, DefBootstrap, false]));
c=c.right$();
} else {
if (c.left$() != null ) {
var tmpn=Clazz.new_($I$(4,1).c$$O$jalview_datamodel_SequenceNode$S$F$I$Z,[null, c, null, 0, 0, true]);
tmpn.SetChildren$jalview_datamodel_BinaryNode$jalview_datamodel_BinaryNode(c.left$(), c.right$());
c.setRight$jalview_datamodel_BinaryNode(tmpn);
}c.setLeft$jalview_datamodel_BinaryNode(Clazz.new_($I$(4,1).c$$O$jalview_datamodel_SequenceNode$S$F$I$Z,[null, c, null, DefDistance, DefBootstrap, false]));
c=c.left$();
}if (realroot == null ) {
realroot=c;
}nodename=null;
distance=DefDistance;
bootstrap=DefBootstrap;
cp=fcp + 1;
break;
case 39:
var qnodename=Clazz.new_(["\'([^\']|\'\')+\'"],$I$(1,1).c$$S);
if (qnodename.searchFrom$S$I(nf, fcp)) {
var nl=qnodename.stringMatched$().length$();
nodename= String.instantialize(qnodename.stringMatched$().substring$I$I(1, nl - 1));
var xpandquotes=$I$(1).perlCode$S("s/\'\'/\'/");
var widernodename=xpandquotes.replaceAll$S(nodename);
nodename=widernodename;
nextcp=fcp + nl + 1 ;
parsednodename=true;
} else {
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "Unterminated quotes for nodename", 7, fcp, nf]);
}break;
default:
if (schar == ";") {
if (d != -1) {
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "Wayward semicolon (depth=" + d + ")" , 7, fcp, nf]);
}}if (schar == "[") {
var comment=Clazz.new_($I$(1,1).c$$S,["]"]);
if (comment.searchFrom$S$I(nf, fcp)) {
nextcp=comment.matchedFrom$() + 1;
this.warningMessage="Tree file contained comments which may confuse input algorithm.";
break;
} else {
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "Unterminated comment", 3, fcp, nf]);
}}var fstring=nf.substring$I$I(ncp, fcp);
while (fstring.indexOf$I("]") > -1){
var cstart=fstring.indexOf$I("[");
var cend=fstring.indexOf$I("]");
commentString2=fstring.substring$I$I(cstart + 1, cend);
fstring=fstring.substring$I$I(0, cstart) + fstring.substring$I(cend + 1);
}
var uqnodename=Clazz.new_(["\\b([^\' :;\\](),]+)"],$I$(1,1).c$$S);
var nbootstrap=Clazz.new_(["\\s*([0-9+]+)\\s*:"],$I$(1,1).c$$S);
var ndist=Clazz.new_([":([-0-9Ee.+]+)"],$I$(1,1).c$$S);
if (!parsednodename && uqnodename.search$S(fstring) && ((uqnodename.matchedFrom$I(1) == 0) || (fstring.charAt$I(uqnodename.matchedFrom$I(1) - 1) != ":") )  ) {
if (nodename == null ) {
if (this.ReplaceUnderscores) {
nodename=uqnodename.stringMatched$I(1).replace$C$C("_", " ");
} else {
nodename=uqnodename.stringMatched$I(1);
}} else {
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "File has broken algorithm - overwritten nodename", 10, fcp, nf]);
}}if (nbootstrap.search$S(fstring)) {
if (nbootstrap.stringMatched$I(1).equals$O(uqnodename.stringMatched$I(1))) {
nodename=null;
}if (nodename == null  || nodename.length$() == 0  || nbootstrap.matchedFrom$I(1) > (uqnodename.matchedFrom$I(1) + uqnodename.stringMatched$().length$()) ) {
try {
bootstrap=(Integer.valueOf$S(nbootstrap.stringMatched$I(1))).intValue$();
this.HasBootstrap=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "Can\'t parse bootstrap value", 4, ncp + nbootstrap.matchedFrom$(), nf]);
} else {
throw e;
}
}
}}var nodehasdistance=false;
if (ndist.search$S(fstring)) {
try {
distance=(Float.valueOf$S(ndist.stringMatched$I(1))).floatValue$();
this.HasDistances=true;
nodehasdistance=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "Can\'t parse node distance value", 7, ncp + ndist.matchedFrom$(), nf]);
} else {
throw e;
}
}
}if (ascending) {
c.setName$S(nodename);
c.dist=(this.HasDistances) ? distance : DefDistance;
c.setBootstrap$I((this.HasBootstrap) ? bootstrap : DefBootstrap);
if (c === realroot ) {
this.RootHasDistance=nodehasdistance;
}p$1.parseNHXNodeProps$jalview_datamodel_SequenceNode$S.apply(this, [c, commentString2]);
commentString2=null;
} else {
var newnode=Clazz.new_([null, c, nodename, (this.HasDistances) ? distance : DefDistance, (this.HasBootstrap) ? bootstrap : DefBootstrap, false],$I$(4,1).c$$O$jalview_datamodel_SequenceNode$S$F$I$Z);
p$1.parseNHXNodeProps$jalview_datamodel_SequenceNode$S.apply(this, [c, commentString2]);
commentString2=null;
if (c.right$() == null ) {
c.setRight$jalview_datamodel_BinaryNode(newnode);
} else {
if (c.left$() == null ) {
c.setLeft$jalview_datamodel_BinaryNode(newnode);
} else {
var newdummy=Clazz.new_([null, c, null, (this.HasDistances ? 0 : DefDistance), 0, true],$I$(4,1).c$$O$jalview_datamodel_SequenceNode$S$F$I$Z);
newdummy.SetChildren$jalview_datamodel_BinaryNode$jalview_datamodel_BinaryNode(c.left$(), newnode);
c.setLeft$jalview_datamodel_BinaryNode(newdummy);
}}}if (ascending) {
c=c.AscendTree$();
if ((d > -1) && (c == null ) ) {
Error=p$1.ErrorStringrange$S$S$I$I$S.apply(this, [Error, "File broke algorithm: Lost place in tree (is there an extra \')\' ?)", 7, fcp, nf]);
}}if (nf.charAt$I(fcp) == ")") {
d--;
ascending=true;
} else {
if (nf.charAt$I(fcp) == ",") {
if (ascending) {
ascending=false;
} else {
if ((c.left$() != null ) && (!c.left$().isLeaf$()) ) {
c=c.left$();
}}}}nodename=null;
distance=DefDistance;
bootstrap=DefBootstrap;
commentString2=null;
parsednodename=false;
}
if (nextcp == 0) {
ncp=cp=fcp + 1;
} else {
cp=nextcp;
nextcp=0;
}}
if (Error != null ) {
throw (Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(5,"formatMessage$S$SA",["exception.newfile", Clazz.array(String, -1, [Error.toString()])])]));
}if (this.root == null ) {
throw (Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(5,"formatMessage$S$SA",["exception.newfile", Clazz.array(String, -1, [$I$(5).getString$S("label.no_tree_read_in")])])]));
}this.root=this.root.right$().detach$();
if (!this.RootHasDistance) {
this.root.dist=(this.HasDistances) ? 0 : DefDistance;
}});

Clazz.newMeth(C$, 'parseNHXNodeProps$jalview_datamodel_SequenceNode$S', function (c, commentString) {
if (commentString != null  && commentString.startsWith$S("&&NHX") ) {
var st=Clazz.new_([commentString.substring$I(5), ":"],$I$(6,1).c$$S$S);
while (st.hasMoreTokens$()){
var tok=st.nextToken$();
var colpos=tok.indexOf$S("=");
if (colpos > -1) {
var code=tok.substring$I$I(0, colpos);
var value=tok.substring$I(colpos + 1);
try {
if (code.toLowerCase$().equals$O("b")) {
var v=-1;
var iv=Float.valueOf$S(value);
v=iv.intValue$();
c.setBootstrap$I(v);
this.HasBootstrap=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't parse code '" + code + "' = '" + value + "'" );
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
}}
}}, p$1);

Clazz.newMeth(C$, 'getTree$', function () {
return this.root;
});

Clazz.newMeth(C$, 'print$', function () {
{
var tf=Clazz.new_($I$(3,1));
this.print$StringBuffer$jalview_datamodel_SequenceNode(tf, this.root);
return (tf.append$S(";").toString());
}});

Clazz.newMeth(C$, 'print$Z', function (withbootstraps) {
{
var boots=this.HasBootstrap;
this.HasBootstrap=withbootstraps;
var rv=this.print$();
this.HasBootstrap=boots;
return rv;
}});

Clazz.newMeth(C$, 'print$Z$Z', function (withbootstraps, withdists) {
{
var dists=this.HasDistances;
this.HasDistances=withdists;
var rv=this.print$Z(withbootstraps);
this.HasDistances=dists;
return rv;
}});

Clazz.newMeth(C$, 'print$Z$Z$Z', function (withbootstraps, withdists, printRootInfo) {
{
var rootinfo=printRootInfo;
this.printRootInfo=printRootInfo;
var rv=this.print$Z$Z(withbootstraps, withdists);
this.printRootInfo=rootinfo;
return rv;
}});

Clazz.newMeth(C$, 'getQuoteChar$', function () {
return this.QuoteChar;
});

Clazz.newMeth(C$, 'setQuoteChar$C', function (c) {
var old=this.QuoteChar;
this.QuoteChar=c;
return old;
});

Clazz.newMeth(C$, 'nodeName$S', function (name) {
if (this.NodeSafeName[0].search$S(name)) {
return this.QuoteChar + this.NodeSafeName[1].replaceAll$S(name) + this.QuoteChar ;
} else {
return this.NodeSafeName[2].replaceAll$S(name);
}}, p$1);

Clazz.newMeth(C$, 'printNodeField$jalview_datamodel_SequenceNode', function (c) {
return ((c.getName$() == null ) ? "" : p$1.nodeName$S.apply(this, [c.getName$()])) + ((this.HasBootstrap) ? ((c.getBootstrap$() > -1) ? ((c.getName$() != null  ? " " : "") + c.getBootstrap$()) : "") : "") + ((this.HasDistances) ? (":" + new Double(c.dist).toString()) : "") ;
}, p$1);

Clazz.newMeth(C$, 'printRootField$jalview_datamodel_SequenceNode', function (root) {
return (this.printRootInfo) ? (((root.getName$() == null ) ? "" : p$1.nodeName$S.apply(this, [root.getName$()])) + ((this.HasBootstrap) ? ((root.getBootstrap$() > -1) ? ((root.getName$() != null  ? " " : "") + +root.getBootstrap$()) : "") : "") + ((this.RootHasDistance) ? (":" + new Double(root.dist).toString()) : "") ) : "";
}, p$1);

Clazz.newMeth(C$, 'print$StringBuffer$jalview_datamodel_SequenceNode', function (tf, root) {
if (root != null ) {
if (root.isLeaf$() && this.printRootInfo ) {
tf.append$S(p$1.printRootField$jalview_datamodel_SequenceNode.apply(this, [root]));
} else {
if (root.isDummy$()) {
this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, root.right$());
this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, root.left$());
} else {
tf.append$S("(");
this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, root.right$());
if (root.left$() != null ) {
tf.append$S(",");
}this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, root.left$());
tf.append$S(")" + p$1.printRootField$jalview_datamodel_SequenceNode.apply(this, [root]));
}}}});

Clazz.newMeth(C$, '_print$StringBuffer$jalview_datamodel_SequenceNode', function (tf, c) {
if (c != null ) {
if (c.isLeaf$()) {
tf.append$S(p$1.printNodeField$jalview_datamodel_SequenceNode.apply(this, [c]));
} else {
if (c.isDummy$()) {
this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, c.left$());
if (c.left$() != null ) {
tf.append$S(",");
}this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, c.right$());
} else {
tf.append$S("(");
this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, c.right$());
if (c.left$() != null ) {
tf.append$S(",");
}this._print$StringBuffer$jalview_datamodel_SequenceNode(tf, c.left$());
tf.append$S(")" + p$1.printNodeField$jalview_datamodel_SequenceNode.apply(this, [c]));
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
