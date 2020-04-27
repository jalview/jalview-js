(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[[0,'java.io.BufferedWriter','java.io.FileWriter','Runtime','java.io.OutputStreamWriter','java.io.BufferedReader','java.io.InputStreamReader']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeGraphviz");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'treeToGraphvizPostscript$fr_orsay_lri_varna_models_treealign_Tree$S$S', function (tree, filename, title) {
var graphvizSource=C$.treeToGraphviz$fr_orsay_lri_varna_models_treealign_Tree$S(tree, title);
var fbw;
fbw=Clazz.new_([Clazz.new_($I$(2,1).c$$S,[filename])],$I$(1,1).c$$java_io_Writer);
var proc=$I$(3).getRuntime$().exec$S("dot -Tps");
var bw=Clazz.new_([Clazz.new_([proc.getOutputStream$()],$I$(4,1).c$$java_io_OutputStream)],$I$(1,1).c$$java_io_Writer);
var br=Clazz.new_([Clazz.new_([proc.getInputStream$()],$I$(6,1).c$$java_io_InputStream)],$I$(5,1).c$$java_io_Reader);
var bre=Clazz.new_([Clazz.new_([proc.getErrorStream$()],$I$(6,1).c$$java_io_InputStream)],$I$(5,1).c$$java_io_Reader);
bw.write$S(graphvizSource);
bw.close$();
{
var line=null;
while ((line=br.readLine$()) != null ){
fbw.write$S(line + "\n");
}
}{
var line=null;
while ((line=bre.readLine$()) != null ){
System.err.println$S(line);
}
}try {
proc.waitFor$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
fbw.close$();
}, 1);

Clazz.newMeth(C$, 'treeToGraphvizPostscript$fr_orsay_lri_varna_models_treealign_Tree$S', function (tree, filename) {
C$.treeToGraphvizPostscript$fr_orsay_lri_varna_models_treealign_Tree$S$S(tree, filename, filename);
}, 1);

Clazz.newMeth(C$, 'treeToGraphvizFile$fr_orsay_lri_varna_models_treealign_Tree$S$S', function (tree, filename, title) {
var bw;
bw=Clazz.new_([Clazz.new_($I$(2,1).c$$S,[filename])],$I$(1,1).c$$java_io_Writer);
bw.write$S(C$.treeToGraphviz$fr_orsay_lri_varna_models_treealign_Tree$S(tree, filename));
bw.close$();
}, 1);

Clazz.newMeth(C$, 'treeToGraphvizFile$fr_orsay_lri_varna_models_treealign_Tree$S', function (tree, filename) {
C$.treeToGraphvizFile$fr_orsay_lri_varna_models_treealign_Tree$S$S(tree, filename, filename);
}, 1);

Clazz.newMeth(C$, 'treeToGraphviz$fr_orsay_lri_varna_models_treealign_Tree$S', function (tree, title) {
return "digraph \"" + title + "\" {\n" + C$.subtreeToGraphviz$fr_orsay_lri_varna_models_treealign_Tree(tree) + "}\n" ;
}, 1);

Clazz.newMeth(C$, 'subtreeToGraphviz$fr_orsay_lri_varna_models_treealign_Tree', function (tree) {
var s="";
var myId=tree.toGraphvizNodeId$();
s += "\"" + myId + "\" [label=\"" + ((tree.getValue$() != null ) ? tree.getValue$().toGraphvizNodeName$() : "null") + "\"]\n" ;
for (var child, $child = tree.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
s += "\"" + myId + "\" -> \"" + child.toGraphvizNodeId$() + "\"\n" ;
s += C$.subtreeToGraphviz$fr_orsay_lri_varna_models_treealign_Tree(child);
}
return s;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
