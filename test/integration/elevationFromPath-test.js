var vows = require('vows'),
  assert = require('assert'),
  GoogleMapsAPI = require('../../lib/index');

vows.describe('elevationFromPath').addBatch({
  'Simple elevationFromPath request (43.07333,-89.4026|41.850033,-87.6500523)': {
    topic: function(){
      var gm = new GoogleMapsAPI();
      gm.elevationFromPath('43.07333,-89.4026|41.850033,-87.6500523', '10', this.callback, 'false');
    },
    'returns as a valid request': function(err, result){
      assert.equal(result.status , 'OK');
    },
    'returns the expected number of samples': function(err, result){
      assert.notEqual(result.results, false);
      assert.equal(result.results.length , 10);
    },
    'returns the expected elevation for Chicago': function(err, result){
      if (err) throw err;
      if (!result || !result.results || !result.results.length) return;
      assert.equal(Math.round(result.results[9].elevation) , 179);
    }
  }
}).export(module);


var tooLongForGoogle =
  "42.233167,-71.475141|42.231813,-71.477802|42.2325,-71.479332|42.235003,-71.478509|42.23663,-71.476585|42.236069,-71.474188|42.234782,-71.47375|42.233651,-71.472736|42.232583,-71.472161|42.231611,-71.472123|" +
  "42.230551,-71.474505|42.229304,-71.475523|42.229743,-71.476897|42.231129,-71.477775|42.232236,-71.476559|42.233133,-71.475043|42.234393,-71.473395|42.234427,-71.473494|42.225212,-71.477197|42.226611,-71.475798|" +
  "42.228311,-71.477173|42.22915,-71.474977|42.230248,-71.474195|42.23108,-71.472386|42.230825,-71.470825|42.231444,-71.47051|42.232913,-71.46921|42.233814,-71.469197|42.23422,-71.470424|42.233816,-71.470748|" +
  "42.235371,-71.472166|42.236272,-71.470456|42.236755,-71.4681|42.236183,-71.467932|42.237428,-71.466962|42.237873,-71.468046|42.23749,-71.469098|42.238301,-71.469905|42.238501,-71.468992|42.241302,-71.466047|" +
  "42.241781,-71.463884|42.242639,-71.464208|42.242581,-71.463527|42.243371,-71.463655|42.242612,-71.465419|42.243769,-71.466919|42.245152,-71.464597|42.245775,-71.465785|42.247161,-71.464966|42.24657,-71.458931|" +
  "42.240585,-71.46088|42.233432,-71.466855|42.230899,-71.470731|42.246102,-71.475639|42.244165,-71.470279|42.244167,-71.470182|42.241075,-71.486544|42.233428,-71.482075|42.231093,-71.478445|42.232469,-71.476415|" +
  "42.232469,-71.476415|42.237965,-71.493087|42.231532,-71.487405|42.230937,-71.484958|42.22623,-71.477746|42.223808,-71.471448|42.22388,-71.471451|42.244642,-71.468811|42.244642,-71.46879|42.24462,-71.46879|" +
  "42.244685,-71.468811|42.244663,-71.469197|42.244384,-71.469541|42.244127,-71.469884|42.244148,-71.470506|42.244792,-71.470206|42.245371,-71.470013|42.245994,-71.470184|42.246594,-71.47027|42.247067,-71.469798|" +
  "42.247474,-71.468961|42.247732,-71.46806|42.247646,-71.467352|42.247174,-71.467073|42.24668,-71.466794|42.24653,-71.466343|42.247024,-71.466|42.247496,-71.465356|42.247303,-71.464713|42.247195,-71.463919|" +
  "42.247109,-71.463189|42.247024,-71.46246|42.246959,-71.461794|42.246959,-71.462181|42.247024,-71.462867|42.247109,-71.463597|42.247174,-71.464305|42.24726,-71.46497|42.247388,-71.465571|42.247517,-71.466172|" +
  "42.24741,-71.466515|42.247152,-71.466665|42.246959,-71.466751|42.24668,-71.466751|42.246122,-71.466644|42.245436,-71.466537|42.244728,-71.466515|42.244041,-71.466622|42.243762,-71.466773|42.243783,-71.466944|" +
  "42.243719,-71.467052|42.243655,-71.467137|42.243633,-71.467245|42.24359,-71.46733|42.243569,-71.467373|42.243526,-71.467416|42.24344,-71.467309|42.243311,-71.466794|42.242968,-71.466172|42.242775,-71.465871|" +
  "42.242453,-71.4657|42.24211,-71.465721|42.241917,-71.465914|42.241724,-71.466193|42.241423,-71.466515|42.241209,-71.467052|42.241101,-71.467566|42.240908,-71.46791|42.240801,-71.468232|42.240736,-71.468554|" +
  "42.240672,-71.468875|42.240629,-71.46924|42.240694,-71.469584|42.240822,-71.469841|42.240908,-71.47012|42.241037,-71.470377|42.241209,-71.470656|42.24138,-71.470957|42.241616,-71.470935|42.241917,-71.470957|" +
  "42.242303,-71.471021|42.242968,-71.470935|42.243612,-71.471171|42.244148,-71.471107|42.244277,-71.470914|42.244277,-71.470592|42.244277,-71.470592|42.24447,-71.470292|42.244771,-71.470099|42.245049,-71.46997|" +
  "42.245371,-71.469948|42.2458,-71.470034|42.246251,-71.470099|42.246745,-71.470034|42.247174,-71.469498|42.247474,-71.46879|42.24771,-71.468039|42.247667,-71.467502|42.247303,-71.46733|42.247024,-71.467137|" +
  "42.246809,-71.466837|42.246788,-71.466472|42.24726,-71.466172|42.247474,-71.465271|42.247109,-71.464906|42.247045,-71.464262|42.246981,-71.463618|42.246938,-71.462996|42.246873,-71.462417|42.246809,-71.461945|" +
  "42.246852,-71.462417|42.246916,-71.463039|42.247002,-71.463661|42.247088,-71.464283|42.247152,-71.464863|42.247303,-71.465421|42.24741,-71.465957|42.247453,-71.466408|42.247388,-71.46673|42.24726,-71.466923|" +
  "42.247088,-71.467052|42.246852,-71.467073|42.246444,-71.467052|42.245886,-71.46703|42.245286,-71.467159|42.244599,-71.467352|42.24447,-71.467438|42.24447,-71.467545|42.244406,-71.467652|42.244277,-71.467738|" +
  "42.244148,-71.467824|42.24402,-71.467888|42.243869,-71.46791|42.243719,-71.467867|42.243526,-71.467588|42.243354,-71.467245|42.243161,-71.46688|42.242968,-71.466515|42.241874,-71.465828|42.241638,-71.466022|" +
  "42.241466,-71.466472|42.241209,-71.466966|42.24093,-71.467395|42.240672,-71.467781|42.240479,-71.468124|42.240372,-71.468403|42.240264,-71.468661|42.2402,-71.468897|42.240157,-71.469133|42.240136,-71.469412|" +
  "42.240093,-71.469734|42.240114,-71.470013|42.240243,-71.47027|42.240372,-71.47042|42.240479,-71.470592|42.240651,-71.470764|42.240844,-71.470978|42.240994,-71.471214|42.24123,-71.471107|42.241466,-71.471021|" +
  "42.241702,-71.471043|42.242024,-71.471064|42.242668,-71.471128|42.243161,-71.471407|42.243505,-71.471386|42.243805,-71.471021|42.243912,-71.470571|42.243912,-71.470571|42.243934,-71.470034|42.244298,-71.469691|" +
  "42.245607,-71.470206|42.246144,-71.470356|42.246723,-71.47042|42.247303,-71.470077|42.24771,-71.46939|42.247989,-71.468554|42.248096,-71.46776|42.248096,-71.467116|42.247732,-71.466923|42.247431,-71.466644|" +
  "42.247195,-71.4663|42.247603,-71.465979|42.248011,-71.465206|42.247624,-71.46482|42.247496,-71.464155|42.24741,-71.46349|42.247303,-71.462846|42.247217,-71.462224|42.247109,-71.461816|42.247152,-71.462352|" +
  "42.247195,-71.462975|42.24726,-71.463618|42.247303,-71.464198|42.247345,-71.464777|42.247431,-71.465335|42.247517,-71.465871|42.247453,-71.466215|42.247281,-71.4663|42.247131,-71.466429|42.246959,-71.466537|" +
  "42.246723,-71.466601|42.246401,-71.466601|42.2458,-71.466579|42.245286,-71.466687|42.244685,-71.466923|42.244599,-71.467545|42.244663,-71.467996|42.244685,-71.468296|42.244749,-71.468489|42.244813,-71.468639|42.244835,-71.46879|" +
  "42.244728,-71.468854|42.244642,-71.468897|42.245711,-71.476375|42.242756,-71.476454|42.239633,-71.477592|42.238147,-71.479715|42.234442,-71.481121|42.230937,-71.484958|42.226311,-71.487297|42.226384,-71.487251|" +
  "42.238,-71.493169|42.246158,-71.475746|42.247805,-71.47455|42.252054,-71.471273|42.253871,-71.468872|42.255494,-71.467092|42.256845,-71.461229|42.256808,-71.461276|42.244771,-71.46894|42.244771,-71.468961|" +
  "42.244706,-71.469047|42.244384,-71.46939|42.243805,-71.470356|42.244663,-71.469905|42.244899,-71.469734|42.245092,-71.469669|42.245178,-71.469669|42.246294,-71.469862|42.247152,-71.469777|42.247581,-71.468489|" +
  "42.247646,-71.468232|42.247624,-71.467373|42.247174,-71.466665|42.247131,-71.466601|42.246873,-71.466472|42.246766,-71.466451|42.246594,-71.466193|42.24653,-71.46615|42.245564,-71.465571|42.245564,-71.465571|" +
  "42.245522,-71.465571|42.245178,-71.465421|42.244921,-71.465528|42.244706,-71.465657|42.244105,-71.465828|42.242861,-71.46615|42.242839,-71.467373|42.242925,-71.46718|42.242947,-71.467094|42.243054,-71.467094|" +
  "42.242453,-71.465764|42.242281,-71.465399|42.242217,-71.465399|42.242067,-71.465399|42.242024,-71.465421|42.242002,-71.465442|42.241852,-71.465592|42.241638,-71.465807|42.241294,-71.466408|42.241123,-71.466472|" +
  "42.240801,-71.466601|42.240543,-71.467288|42.240071,-71.468296|42.2399,-71.468596|42.239943,-71.46894|42.239943,-71.469069|42.239814,-71.469197|42.239728,-71.469584|42.239749,-71.469777|42.239792,-71.469884|" +
  "42.240243,-71.470485|42.241359,-71.471879|42.244341,-71.470785|42.244427,-71.470463|42.244427,-71.469455|42.244728,-71.468897|42.24462,-71.468704";

var tooLongCount = tooLongForGoogle.split("|").length;

vows.describe('elevationFromPath when path is too long').addBatch({
  'Simple elevationFromPath request (43.07333,-89.4026|41.850033,-87.6500523)': {
    topic: function(){
      var gm = new GoogleMapsAPI({encode_polylines: false});
      gm.elevationFromPath(tooLongForGoogle, tooLongCount, this.callback, 'false');
    },
    'returns as a valid request': function(err, result){
      assert.equal(result.status , 'OK');
    },
    'returns the expected number of samples': function(err, result){
      assert.equal(result.results.length , tooLongCount);
    }
  }
}).export(module);
