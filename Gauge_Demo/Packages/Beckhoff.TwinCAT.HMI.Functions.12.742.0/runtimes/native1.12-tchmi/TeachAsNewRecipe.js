var TcHmi;!function(e){let c;!function(c){let i;!function(c){c.TeachAsNewRecipe=function(c,i,n,o){i&&n?e.Server.RecipeManagement.teachAsNewRecipe(i,null,n,o,(function(n){return n.error?void c.error(n.error,{code:n.error,message:e.Errors[n.error],reason:"Function: TeachAsNewRecipe, Recipe "+i+" teaching failed",domain:"Function",errors:n.details?[n.details]:void 0}):(TCHMI_CONSOLE_LOG_LEVEL>=3&&e.Log.info("Recipe "+i+" teached successfull."),void c.success())})):c.success()}}(i=c.Beckhoff||(c.Beckhoff={})),c.registerFunctionEx("TeachAsNewRecipe","TcHmi.Functions.Beckhoff",i.TeachAsNewRecipe)}(c=e.Functions||(e.Functions={}))}(TcHmi||(TcHmi={}));