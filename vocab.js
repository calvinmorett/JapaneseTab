/* calls Jisho API */

/*

THINGS TO DO

Romaji
Katakana
Make icons svg and less pixellated and gross
Change popup to show the format of how the new tab page is
Make UI more aesthetic and Japanese - DONE

*/

var wordList = [

  // got a list of common english words
  "ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "ago","agree","ahead","aid","air","airplane","alike","alive",
  "all","allow","almost","alone","along","aloud","already",
  "also","am","among","amount","ancient","angle","angry",
  "animal","announced","another","answer","ants","any","anybody","anyone",
  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
  "appropriate","are","area","arm","army","around","arrange","arrangement",
  "arrive","arrow","art","article","as","aside","ask","asleep",
  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
  "attention","audience","author","automobile","available","average","avoid","aware",
  "away","baby","back","bad","badly","bag","balance","ball",
  "balloon","band","bank","bar","bare","bark","barn",
  "baseball","basic","basis","basket","bat","battle","be","bean",
  "bear","beat","beautiful","beauty","became","because","become","becoming",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "black","blanket","blew","blind","block","blood","blow",
  "blue","board","boat","body","bone","book","border","born",
  "both","bottle","bottom","bound","bow","bowl","box","boy",
  "brain","branch","brass","brave","bread","break","breakfast","breath",
  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
  "broad","broke","broken","brother","brought","brown","buffalo",
  "build","building","built","buried","burn","burst","bus","bush",
  "business","busy","but","butter","buy","by","cabin","cage",
  "cake","call","calm","camp","can","canal",
  "cannot","cap","capital","captured","car","carbon","card",
  "care","careful","carefully","carried","carry","case","cast","castle",
  "cat","catch","cattle","caught","cause","cave","cell","cent",
  "center","central","century","certain","certainly","chain","chair","chamber",
  "chance","change","changing","chapter","character","characteristic","charge","chart",
  "check","cheese","chemical","chest","chicken","chief","child","children",
  "choice","choose","chose","chosen","church","circle","circus","citizen",
  "city","classroom","claws","clay","clean","clear","clearly",
  "climate","climb","clock","close","closer","cloth","clothes",
  "clothing","cloud","club","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "comfortable","coming","command","common","community","company","compare",
  "compass","complete","completely","complex","composed","composition","compound","concerned",
  "condition","congress","connected","consider","consist","consonant","constantly","construction",
  "contain","continent","continued","contrast","control","conversation","cook","cookies",
  "cool","copper","corn","corner","correct","cost",
  "cotton","could","count","country","couple","courage","course","court",
  "cover","cow","cowboy","crack","create","creature","crew",
  "crop","cross","crowd","cry","cup","curious","current","curve",
  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
  "dark","darkness","date","daughter","dawn","day","dead","deal",
  "dear","death","decide","declared","deep","deeply","deer","definition",
  "degree","depend","depth","describe","desert","design","desk","detail",
  "determine","develop","development","diagram","diameter","did","die","differ",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","dollar","done","donkey","door",
  "dot","double","doubt","down","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","driver","driving",
  "drop","dropped","drove","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","either","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","felt","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "fire","fireplace","firm","first","fish","five","fix","flag",
  "flame","flat","flew","flies","flight","floating","floor","flow",
  "flower","fly","fog","folks","follow","food","foot","football",
  "for","force","foreign","forest","forget","forgot","forgotten","form",
  "former","fort","forth","forty","forward","fought","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","game","garage","garden","gas","gasoline","gate",
  "gather","gave","general","generally","gentle","get","getting",
  "giant","gift","girl","give","given","giving","glad","glass",
  "globe","go","goes","gold","golden","gone","good","goose",
  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
  "graph","grass","gravity","gray","great","greater","greatest","greatly",
  "green","grew","ground","group","grow","grown","growth","guard",
  "guess","guide","gulf","gun","habit","had","hair","half",
  "halfway","hall","hand","handle","handsome","hang","happen","happened",
  "happily","happy","harbor","hard","harder","hardly","has","hat",
  "have","having","hay","he","headed","heading","health","heard",
  "hearing","heart","heat","heavy","height","held","hello","help",
  "helpful","her","herd","here","herself","hidden","hide","high",
  "higher","highest","highway","hill","him","himself","his","history",
  "hit","hold","hole","hollow","home","honor","hope","horn",
  "horse","hospital","hot","hour","house","how","however","huge",
  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
  "hurt","husband","ice","idea","identity","if","ill","image",
  "imagine","immediately","importance","important","impossible","improve","in",
  "include","including","income","increase","indeed","independent","indicate","individual",
  "industry","influence","information","inside","instance","instant","instead",
  "instrument","interest","interior","into","introduced","invented","involved","iron",
  "is","island","it","its","itself","jack","jar","jet",
  "job","join","joined","journey","joy","judge","jump",
  "just","keep","kept","key","kids","kill","kind","kitchen",
  "knew","know","knowledge","known","label","labor","lack",
  "lady","laid","lake","lamp","land","language","large","larger",
  "largest","last","late","later","laugh","law","lay","layers",
  "lead","leader","leaf","learn","least","leather","leave","leaving",
  "left","leg","length","lesson","let","letter","level",
  "library","lie","life","lift","light","like","likely","limited",
  "lion","lips","liquid","listen","little","live",
  "living","load","local","locate","location","log","lonely","long",
  "longer","look","loose","lose","loss","lost","lot","loud",
  "love","lovely","low","lower","luck","lucky","lunch","lungs",
  "lying","machine","machinery","mad","made","magic","magnet","mail",
  "main","mainly","major","make","making","man","managed","manner",
  "manufacturing","many","map","mark","market","married","mass","massage",
  "master","material","mathematics","matter","may","maybe","me","meal",
  "mean","means","meant","measure","meat","medicine","meet","melted",
  "member","memory","men","mental","merely","met","metal","method",
  "mice","middle","might","mighty","mile","military","milk","mill",
  "mind","minerals","minute","mirror","missing","mission","mistake",
  "mix","mixture","model","molecular","moment","money","monkey",
  "month","mood","moon","more","morning","most","mostly","mother",
  "motion","motor","mountain","mouse","mouth","move","movement","movie",
  "moving","mud","muscle","music","must","my","myself",
  "mysterious","nails","name","nation","national","native","natural","naturally",
  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
  "never","new","news","newspaper","next","nice","night","nine",
  "no","nobody","nodded","noise","none","noon","north",
  "nose","not","note","noted","nothing","notice","noun","now",
  "number","numeral","object","observe","obtain","occasionally","occur",
  "ocean","of","off","offer","office","officer","official","oil",
  "old","older","oldest","on","once","one","only","onto",
  "open","operation","opportunity","opposite","or","orange","orbit",
  "order","ordinary","organization","organized","origin","original","other",
  "our","ourselves","outer","outline","outside","over","own",
  "owner","oxygen","pack","package","page","paid","pain","paint",
  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
  "park","part","particles","particular","particularly","partly","parts","party",
  "pass","passage","past","path","pattern","pay","peace","pen",
  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
  "person","personal","pet","phrase","physical","pick","picture",
  "pictured","pie","piece","pig","pile","pilot",
  "pipe","pitch","place","plain","plan","plane","planet","planned",
  "planning","plant","plastic","plate","plates","play","pleasant","please",
  "pleasure","plenty","plural","plus","poem","poet","poetry",
  "point","pole","police","policeman","political","pond","pony","pool",
  "poor","popular","population","port","position","positive","possible",
  "possibly","post","pot","potatoes","pour","powder","power",
  "powerful","practical","practice","prepare","present","president","press","pressure",
  "pretty","prevent","previous","price","pride","primitive","principal","principle",
  "printed","private","prize","probably","problem","process","produce","product",
  "production","program","progress","promised","proper","properly","property","protection",
  "proud","prove","provide","public","pull","pupil","pure","purple",
  "purpose","push","put","putting","quarter","queen","question","quick",
  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
  "rain","raise","ran","ranch","range","rapidly","rate","rather",
  "raw","rays","reach","read","reader","ready","realize",
  "rear","reason","recall","receive","recent","recently","recognize","record",
  "red","refer","refused","region","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","replied","report",
  "represent","require","research","respect","rest","result","return","review",
  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
  "rise","rising","river","road","roar","rock","rocket","rocky",
  "rod","roll","roof","room","root","rope","rose","rough",
  "round","route","row","rubbed","rubber","rule","ruler","run",
  "running","rush","sad","saddle","safe","safety","said","sail",
  "sale","salmon","salt","same","sand","sang","sat","satellites",
  "satisfied","save","saved","saw","scale","scared","scene",
  "school","science","scientific","scientist","score","screen","sea","search",
  "season","seat","second","secret","section","see","seed","seeing",
  "seems","seen","seldom","select","selection","sell","send","sense",
  "sent","sentence","separate","series","serious","service","sets",
  "setting","settle","settlers","seven","several","shade","shadow","shake",
  "shaking","shall","shallow","shape","share","sharp","she","sheep",
  "sheet","shelf","shells","shelter","shine","shining","ship","shirt",
  "shoe","shoot","shop","shore","short","shorter","shot",
  "shoulder","shout","show","shown","shut","sick","sides","sight",
  "sign","signal","silence","silent","silk","silly","silver","similar",
  "simple","simplest","simply","since","sing","single","sink","sister",
  "sit","sitting","situation","six","size","skill","skin","sky",
  "slabs","slave","sleep","slept","slight","slightly","slip",
  "slipped","slope","slow","small","smaller","smallest","smell",
  "smile","smoke","smooth","snake","snow","so","soap","social",
  "society","soft","soil","solar","sold","soldier","solid",
  "solution","solve","some","somebody","somehow","someone","something","sometime",
  "somewhere","son","song","soon","sort","sound","source","south",
  "space","speak","special","species","specific","speech","speed",
  "spell","spend","spent","spider","spin","spirit","spite","split",
  "spoken","sport","spread","spring","square","stage","stairs","stand",
  "standard","star","stared","start","state","statement","station","stay",
  "steady","steam","steel","steep","stems","step","stepped",
  "stiff","still","stock","stomach","stone","stood","stop","stopped",
  "store","storm","story","straight","strange","stranger","straw",
  "stream","street","strength","stretch","strike","string","strip","strong",
  "stronger","struck","structure","struggle","stuck","student","studied","studying",
  "subject","substance","success","successful","such","sudden","suddenly","sugar",
  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
  "swept","swim","swimming","swing","swung","syllable","symbol","system",
  "table","tail","take","taken","tales","talk","tall","tank",
  "tape","task","taste","taught","tax","tea","teach","teacher",
  "team","tears","teeth","telephone","television","tell","temperature","ten",
  "term","terrible","thank","that","thee",
  "them","themselves","then","theory","there","therefore","these","they",
  "thick","thin","thing","think","third","thirty","this","those",
  "thou","though","thought","thousand","thread","three","threw","throat",
  "through","throughout","throw","thrown","thumb","thus","thy","tide",
  "tie","tight","till","time","tin","tiny","tip",
  "tired","title","tobacco","today","together","told","tomorrow",
  "tone","tongue","tonight","too","took","tool","top","topic",
  "torn","total","touch","toward","tower","town","toy","trace",
  "track","trade","traffic","trail","train","transportation","trap","travel",
  "treated","tree","triangle","tribe","trick","tried","trip","troops",
  "tropical","trouble","truck","trunk","truth","try","tube","tune",
  "turn","twelve","twenty","twice","two","type","typical","uncle",
  "under","underline","understanding","unhappy","union","unit","universe","unknown",
  "unless","until","unusual","up","upon","upper","upward","us",
  "use","useful","using","usual","usually","valley","valuable","value",
  "vapor","variety","various","vast","vegetable","verb","vertical","very",
  "vessels","victory","view","village","visit","visitor","voice","volume",
  "vote","vowel","voyage","wait","walk","wall","want",
  "war","warm","warn","wash","waste","watch","water",
  "wave","way","we","weak","wealth","wear","weather","week",
  "weigh","weight","welcome","well","west",
  "wet","whale","what","whatever","wheat","wheel","when","whenever",
  "where","wherever","whether","which","while","whispered","whistle","white",
  "who","whole","whom","whose","why","wide","widely","wife",
  "wild","will","willing","win","wind","window","wing","winter",
  "wire","wise","wish","with","within","without","wolf","women",
  "won","wonder","wonderful","wood","wooden","wool","word","wore",
  "work","worker","world","worried","worry","worse","worth","would",
  "wrapped","write","writer","writing","written","wrong","wrote","yard",
  "year","yellow","yes","yesterday","you","young","younger",
  "your","yourself","youth","zero","zebra","zoo","zulu"
];

// get a random word from above list
var keyword = wordList[Math.floor(Math.random() * (wordList.length))];

//  Make an API call
var xhr = new XMLHttpRequest();

var apiurl = 'https://jisho.org/api/v1/search/words?keyword=' + keyword;
xhr.open("GET", apiurl, false);
xhr.send(); 

// Store result in appropriate variables
var result = JSON.parse(xhr.responseText)["data"][0];

var kanji = result["japanese"][0]["word"];
//var katakana = result["japanese"][0]["word"]; //katakana is wrong fix it
var hiragana = result["japanese"][0]["reading"];
var thepartofspeech = result["senses"][0]["parts_of_speech"];
var thedefinition = result["senses"][0]["english_definitions"];

// remove strings from objects and prettify
var actualposstring = ""
for (a = 0; a < thepartofspeech.length; a++) {
    actualposstring += thepartofspeech[a];
    
    if (a < thepartofspeech.length - 1) {
        actualposstring += ', ';
    }
    
}

// remove strings from objects and prettify
var actualdefstring = "";
for (a = 0; a < thedefinition.length; a++) {
    actualdefstring += thedefinition[a];
    
    if (a < thedefinition.length - 1) {
        actualdefstring += ', ';
    }
    
}

actualdefstring.slice(0, actualdefstring.length - 1);

document.getElementById("kanji").innerHTML = kanji;
//document.getElementById("katakana").innerHTML = katakana;
document.getElementById("hiragana").innerHTML = hiragana;
document.getElementById("part of speech").innerHTML = actualposstring.toLowerCase();
document.getElementById("definition").innerHTML = actualdefstring.toLowerCase();

function onAnchorClick(event) {
  chrome.tabs.create({ url: event.srcElement.href });
  return false;
}

function buildPopupDom(mostVisitedURLs) {
  var popupDiv = document.getElementById('mostVisited_div');
  var ul = popupDiv.appendChild(document.createElement('ul'));
  var desired_url_num = 12;

  for (var i = 0; i < desired_url_num; i++) {
    
    var a_link = ul.appendChild(document.createElement('a'));
    a_link.href = mostVisitedURLs[i].url; 

    var li = a_link.appendChild(document.createElement('li'));
    li.className = "link";
    
    var img = li.appendChild(document.createElement("img"));
    var a = li.appendChild(document.createElement('a'));

    img.src = "http://www.google.com/s2/favicons?domain=" + mostVisitedURLs[i].url;
    img.className = "favicon";
    a.href = mostVisitedURLs[i].url;
    a.className = "link_text";

    var url_title = (mostVisitedURLs[i].title);

    if (mostVisitedURLs[i].url == "http://www.youtube.com/") {
      url_title = "YouTube";}

    if (mostVisitedURLs[i].url == "http://www.google.com") {
      url_title = "Google";}

    if (mostVisitedURLs[i].url == "http://www.facebook.com/") {
      url_title = "Facebook";}

    if (mostVisitedURLs[i].url == "http://www.baidu.com") {
      url_title = "Baidu";}

    if (mostVisitedURLs[i].url == "http://www.yahoo.com") {
      url_title = "Yahoo";}

    if (mostVisitedURLs[i].url == "http://www.gmail.com/") {
      url_title = "Gmail";}

    if (mostVisitedURLs[i].url == "http://drive.google.com/") {
      url_title = "Google Drive";}

    if (mostVisitedURLs[i].url == "https://twitter.com/") {
      url_title = "Twitter";}


    a.appendChild(document.createTextNode(url_title));
  }
}
chrome.topSites.get(buildPopupDom);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', 'UA-84005100-1', 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');
ga('send', 'pageview', '/vocab.html');




