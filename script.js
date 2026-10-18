const challenges = [
  {
    tag: "تنبيه من قسم الإنتاج",
    title: "نقص مفاجئ في الموظفين",
    description: "قبل موعد تجهيز شحنة زجاج بيوم واحد، تغيّب موظفان من قسم التغليف. عليك اختيار أفضل طريقة لتعويض النقص دون الإضرار بسير العمل.",
    sceneClass: "app-scene-challenge1",
    sceneKey: "employees",
    sceneIcon: "👥",
    sceneTitle: "موقف تشغيلي",
    sceneHint: "وازني بين السرعة والتكلفة",
    guideHint: "يا ساتر! عندنا نقص مفاجئ قبل تسليم الشحنة. هل نحلها داخليًا أم ندفع أكثر لبديل أسرع؟",
    options: [
      {
        title: "إعادة توزيع الموظفين",
        cost: 800,
        text: "حل داخلي سريع بأقل تكلفة، مع زيادة مؤقتة في ضغط العمل بالقسم الآخر.",
        level: "good",
        sceneAction: "stage-redistribute",
        resultTitle: "إدارة مالية جيدة جدًا!",
        resultMessage: "نجحت في تعويض النقص بأقل تكلفة مع الاستفادة من الموارد البشرية المتاحة.",
        resultIcon: "👏",
        impactLabel: "قرار متزن وذكي",
      },
      {
        title: "الاستعانة بعمالة مؤقتة",
        cost: 2000,
        text: "تعويض النقص دون التأثير على الأقسام الأخرى، لكن بتكلفة أعلى.",
        level: "medium",
        sceneAction: "stage-tempStaff",
        resultTitle: "إدارة مالية متوسطة.",
        resultMessage: "عالجت نقص الموظفين دون الضغط على الأقسام الأخرى، لكنك أنفقت مبلغًا أكبر رغم توفر بديل داخلي مناسب.",
        resultIcon: "💸",
        impactLabel: "حل سريع لكن أعلى تكلفة",
      },
    ],
  },
  {
    tag: "تنبيه من قسم الجودة",
    title: "تكلفة الجودة",
    description: "ارتفعت نسبة الألواح الزجاجية المرفوضة من 3% إلى 7% خلال الأسبوع الماضي. تشير المراجعة الأولية إلى أخطاء متكررة في إجراءات الفحص اليدوي.",
    sceneClass: "app-scene-challenge2",
    sceneKey: "quality",
    sceneIcon: "🔍",
    sceneTitle: "تحسين الجودة",
    sceneHint: "اختاري حلاً يعالج السبب الحقيقي",
    guideHint: "نسبة الرفض ارتفعت. الحل الأرخص الآن ليس دائمًا الأفضل لاحقًا... فكري في جذور المشكلة.",
    options: [
      {
        title: "تدريب موظفي الفحص والجودة",
        cost: 2200,
        text: "استثمار في معالجة السبب المحتمل للمشكلة وتقليل الأخطاء مستقبلًا.",
        level: "good",
        sceneAction: "stage-training",
        resultTitle: "إدارة مالية جيدة جدًا!",
        resultMessage: "استثمرت في معالجة السبب المحتمل للمشكلة، مما يساعد على تقليل الأخطاء المتكررة والخسائر مستقبلًا.",
        resultIcon: "✅",
        impactLabel: "استثمار يعالج الجذر",
      },
      {
        title: "تكثيف الفحص اليدوي فقط",
        cost: 1200,
        text: "حل أسرع وأقل تكلفة الآن، لكنه لا يعالج سبب المشكلة بالكامل.",
        level: "medium",
        sceneAction: "stage-manualOnly",
        resultTitle: "إدارة مالية متوسطة.",
        resultMessage: "ساعدت في اكتشاف الألواح غير المطابقة، لكن السبب الأساسي للأخطاء قد يستمر مما يعني احتمالية تكاليف إضافية مستقبلًا.",
        resultIcon: "🔎",
        impactLabel: "تحكم مؤقت بالمشكلة",
      },
    ],
  },
  {
    tag: "تنبيه من الإدارة المالية",
    title: "العقد المغري",
    description: "وصل عرض لتوريد دفعة إضافية من الزجاج بقيمة 9,000 ريال، لكن تنفيذ العقد يتطلب دفع 4,000 ريال الآن، بينما سيقوم العميل بالسداد بعد 30 يومًا. كما أوصى المسؤول المالي بالحفاظ على احتياطي نقدي لا يقل عن 2,000 ريال للطوارئ.",
    sceneClass: "app-scene-challenge3",
    sceneKey: "contract",
    sceneIcon: "💰",
    sceneTitle: "قرار مالي",
    sceneHint: "حافظي على السيولة قبل التوسع",
    guideHint: "العقد يبدو مغريًا، لكن لا تنسي الاحتياطي النقدي. الربح المستقبلي لا يفيد إذا ضاقت السيولة الآن.",
    options: [
      {
        title: "قبول العقد الآن",
        cost: 4000,
        text: "فرصة لتحقيق عائد مستقبلي، لكنها قد تضغط السيولة الحالية بشكل كبير.",
        level: "medium",
        sceneAction: "stage-acceptDeal",
        resultTitle: "إدارة مالية متوسطة.",
        resultMessage: "قد يحقق العقد ربحًا مستقبلًا، لكن السيولة المتاحة انخفضت قبل تحصيل الإيرادات، مما قد يضعف قدرة المصنع على مواجهة الطوارئ.",
        resultIcon: "⚠️",
        impactLabel: "ربح محتمل مقابل ضغط نقدي",
      },
      {
        title: "تأجيل قبول العقد",
        cost: 0,
        text: "المحافظة على السيولة الحالية وتفادي ضغط مالي إضافي على التشغيل.",
        level: "good",
        sceneAction: "stage-delayDeal",
        resultTitle: "إدارة مالية جيدة جدًا!",
        resultMessage: "أعطيت الأولوية لاستقرار المصنع واحتياجاته التشغيلية بدل الالتزام بعقد جديد قبل التأكد من توفر السيولة الكافية.",
        resultIcon: "🛡️",
        impactLabel: "حفاظ ممتاز على السيولة",
      },
    ],
  },
];


const $ = id => document.getElementById(id);
const game = $("game"), art = $("worldArt"), text = $("storyText"), action = $("action"), choices = $("decisions");
const stageLabels = ["قسم التغليف", "قسم الجودة", "الإدارة المالية"];
const stageStories = [
  "قبل تسليم شحنة زجاج بيوم، غاب موظفان عن قسم التغليف! عندنا خياران لتعويض النقص دون تعطيل العمل. أيهما تختارين؟",
  "نسبة الألواح المرفوضة ارتفعت من 3٪ إلى 7٪، ويبدو أن الفحص اليدوي يسبب أخطاء متكررة. كيف نواجه المشكلة؟",
  "أمامنا عقد بقيمة 9,000 ريال، يتطلب دفع 4,000 الآن والتحصيل بعد 30 يومًا. نحتاج أيضًا احتياطي طوارئ لا يقل عن 2,000 ريال. ما قرارك؟"
];
const artTemplates = [
 `<div class="art" id="currentArt"><div class="worker a"></div><div class="worker b"></div><div class="worker c"></div><div class="warning">⚠</div><div class="boxitem"></div><div class="boxitem two"></div><div class="machine stopped"></div></div>`,
 `<div class="art" id="currentArt"><div class="quality-glass g1"></div><div class="quality-glass g2"></div><div class="quality-glass g3"></div><span class="reject r1">×</span><span class="reject r2">×</span><span class="reject r3">×</span><div class="lens"></div></div>`,
 `<div class="art" id="currentArt"><div class="contract-paper"></div><div class="coins">🪙</div><div class="reserve">الاحتياطي النقدي<div class="reserve-bar"><div></div></div></div></div>`
];
let index = 0, balance = 10000, good = 0, medium = 0, selection = null, state = "intro", transitioning = false;
function money(n){return n.toLocaleString("en-US")+" ر.س"}
function setStory(s,mood="happy"){text.textContent=s;$("turso").classList.toggle("worried",mood==="worried")};
function setAction(label,enabled=true){action.textContent=label;action.hidden=false;action.disabled=!enabled};
function updateHud(){ $("balance").textContent=money(balance);document.querySelectorAll('.step').forEach((el,i)=>{el.classList.toggle('current',i===index);el.classList.toggle('done',i<index)})};
function intro(){index=0;balance=10000;good=0;medium=0;state='intro';transitioning=false;game.dataset.view='intro';game.dataset.phase='idle';$("openingTitle").hidden=false;$("sceneLabel").textContent="مصنع أفق الزجاج";art.innerHTML=artTemplates[0];choices.replaceChildren();choices.hidden=true;$("summary").hidden=true;setStory('أهلًا بك في مصنع أفق الزجاج! لديك ميزانية إضافية قدرها 10,000 ريال وثلاثة تحديات لإدارة الموارد البشرية والمالية. جاهزة نبدأ؟');setAction('ابدأ المهمة ←');updateHud()};
function beginChallenge(){state='scene';transitioning=false;game.dataset.view='challenge';game.dataset.phase='alert';$("openingTitle").hidden=true;$("sceneLabel").textContent=stageLabels[index];choices.replaceChildren();choices.hidden=true;$("summary").hidden=true;art.innerHTML=artTemplates[index];updateHud();setStory(index===0?'يلا نبدأ الجولة الأولى! تابعي خط الإنتاج...':index===1?'ننتقل الآن إلى قسم الجودة. راقبي ألواح الزجاج.':'وصلنا للإدارة المالية. هذه آخر مهمة!');setAction('شوفي المشكلة ←')};
function showProblem(){state='choice';game.dataset.phase='choice';setStory(stageStories[index],'worried');action.hidden=true;choices.replaceChildren();choices.hidden=false;challenges[index].options.forEach((opt,i)=>{const b=document.createElement('button');b.className='decision';b.type='button';b.innerHTML='<strong>'+opt.title+'</strong><small>التكلفة: '+money(opt.cost)+'</small>';b.addEventListener('click',()=>selectOption(opt,b));choices.appendChild(b)});};
function selectOption(opt,button){if(state!=='choice'||transitioning)return;transitioning=true;state='outcome';selection=opt;game.dataset.phase='outcome';choices.querySelectorAll('button').forEach(b=>{b.disabled=true;b.classList.toggle('chosen',b===button)});const a=$('currentArt');a.classList.add('outcome',opt.level);if(index===0){a.querySelector('.machine').classList.remove('stopped');if(opt.level==='good'){a.querySelector('.worker.c').style.background='#53c4bc'}};const cost=opt.cost;balance-=cost;if(opt.level==='good')good++;else medium++;updateHud();const fx=$('effect');fx.textContent=cost?'− '+money(cost):'بدون تكلفة إضافية';fx.classList.add('show');setStory(opt.resultMessage,opt.level==='good'?'happy':'worried');setTimeout(()=>fx.classList.remove('show'),900);setTimeout(()=>{$('summary').hidden=false;$('summary').textContent=opt.resultTitle+' · المتبقي '+money(balance);choices.hidden=true;setAction(index===2?'شوفي النتيجة النهائية ←':'متابعة المهمة ←');state='result';transitioning=false},1000)};
function final(){state='final';game.dataset.view='final';game.dataset.phase='final';choices.hidden=true;$("summary").hidden=false;art.innerHTML=artTemplates[2];$("sceneLabel").textContent='نهاية المهمة';let title,summary;if(good===3){title='خبير في إدارة الموارد!';summary='أحسنت! تمكنت من الموازنة بين احتياجات التشغيل والحفاظ على استقرار الميزانية باتخاذ قرارات ذكية في جميع التحديات.'}else if(good===2){title='لديك حس إداري جيد';summary='اتخذت قرارات جيدة في معظم المواقف، وكان لديك وعي واضح بأهمية التوازن بين الموارد البشرية والمالية.'}else{title='بداية جيدة وتحتاج إلى تطوير';summary='قراراتك ساعدت المصنع على الاستمرار، لكن الإدارة المالية تحتاج إلى دقة أكبر لتحقيق أفضل توازن ممكن.'}setStory(summary);$('summary').textContent=title+' ⭐ | قرارات ممتازة: '+good+' | قرارات متوسطة: '+medium+' | الرصيد النهائي: '+money(balance);setAction('العب مرة ثانية ↺')};
action.addEventListener('click',()=>{if(transitioning)return;if(state==='intro')beginChallenge();else if(state==='scene')showProblem();else if(state==='result'){if(index<2){index++;beginChallenge()}else final()}else if(state==='final')intro()});
intro();
