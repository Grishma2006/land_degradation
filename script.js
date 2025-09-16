// ================== Translations ==================
const I18N = {
  en: {
    // Navigation
    nav_home:"Home", nav_soil:"Soil", nav_causes:"Causes", nav_prev:"Prevention", nav_help:"Help",

    // Common
    more_info:"More info:",

    // Home
    home_title:"Healthy Soil. Better Yields.",
    home_intro:"Tap an option below. Simple language, pictures, and audio help included.",
    home_card_soil:"Check Soil", home_card_causes:"Causes", home_card_prev:"Prevention", home_card_help:"Help & Audio",
home_card_soil_desc:"Identify your soil type and get practical solutions with pictures and voice support.",
home_card_causes_desc:"Learn what human and natural activities harm the soil, with real examples.",
home_card_prev_desc:"Discover simple, eco-friendly methods to protect and restore soil health.",
home_card_help_desc:"Step-by-step guide to using this website effectively in your own language.",

    // Soil
    soil_title:"Select your soil condition",
    soil_dry:"Dry", soil_dry_desc:"Dry soil lacks moisture and nutrients. Farmers should use mulch, compost, and drought-resistant crops.",
    soil_cracked:"Cracked", soil_cracked_desc:"Cracks mean water loss and poor organic matter. Compost, cover crops, and reduced tillage help improve it.",
    soil_sandy:"Sandy", soil_sandy_desc:"Sandy soil drains water quickly and loses nutrients. Adding compost and frequent light irrigation helps crops grow.",
    soil_wet:"Wet/Waterlogged", soil_wet_desc:"Wet soil lacks air for roots. Drainage channels, raised beds, and controlled irrigation prevent damage.",

    sol_title:"Solution",
    btn_listen:"Listen", btn_copy:"Copy", btn_print:"Print", btn_reset:"Reset",

    // Causes
    causes_title:"What harms the soil?",
    cause_deforest:"Deforestation", cause_deforest_desc:"Trees removed → soil erodes.",
    cause_deforest_more:"Without tree roots to hold it, soil easily washes away in rain and wind.",
    cause_grazing:"Overgrazing", cause_grazing_desc:"Too many animals → no grass cover.",
    cause_grazing_more:"When animals eat grass faster than it regrows, soil becomes bare and erodes.",
    cause_chem:"Excess chemicals", cause_chem_desc:"Kills soil life, makes it salty.",
    cause_chem_more:"Overuse of pesticides and fertilizers damages soil microbes and fertility.",
    cause_poll:"Pollution & waste", cause_poll_desc:"Dirty water/garbage harms fields.",
    cause_poll_more:"Industrial waste, sewage, and plastics make the soil toxic for plants and people.",

    // Prevention
    prev_title:"Simple prevention steps",
    prev_trees:"Plant trees/grass", prev_trees_desc:"Roots hold soil. Plant on borders.",
    prev_trees_more:"Agroforestry and planting shelterbelts protect soil from erosion and improve fertility.",
    prev_water:"Smart irrigation", prev_water_desc:"Use drip/sprinkler; mulch saves water.",
    prev_water_more:"Efficient irrigation reduces waterlogging and saves groundwater.",
    prev_organic:"Organic matter", prev_organic_desc:"Compost + manure feed soil life.",
    prev_organic_more:"Using farmyard manure, compost, and green manure increases soil fertility.",
    prev_rotation:"Crop rotation", prev_rotation_desc:"Rotate crops; add legumes.",
    prev_rotation_more:"Rotating cereals with legumes improves soil nitrogen and reduces pests.",

    // Help
    help_title:"How to use",
    help_s1:"Choose language at top.",
    help_s2:"Tap a picture (Soil/Cause/Prevention).",
    help_s3:"Read the tip or press speaker to listen.",
    help_s4:"Follow simple steps in your field.",

    quiz_correct:"✅ Correct answer!",
    quiz_wrong:"❌ Try again!"
  },

  hi: {
    nav_home:"होम", nav_soil:"मिट्टी", nav_causes:"कारण", nav_prev:"रोकथाम", nav_help:"मदद",

    more_info:"अधिक जानकारी:",

    home_title:"स्वस्थ मिट्टी, अच्छी पैदावार।",
    home_intro:"नीचे विकल्प चुनें। आसान भाषा, चित्र और ऑडियो सहायता।",
    home_card_soil:"मिट्टी जाँच", home_card_causes:"कारण", home_card_prev:"रोकथाम", home_card_help:"मदद व ऑडियो",
home_card_soil_desc:"अपनी मिट्टी की पहचान करें और चित्र व आवाज़ के साथ सरल समाधान पाएँ।",
home_card_causes_desc:"जानें कि मानव और प्राकृतिक गतिविधियाँ मिट्टी को कैसे नुकसान पहुँचाती हैं।",
home_card_prev_desc:"मिट्टी की रक्षा व सुधार के लिए सरल और पर्यावरण-अनुकूल उपाय खोजें।",
home_card_help_desc:"इस वेबसाइट को अपनी भाषा में उपयोग करने के लिए चरण-दर-चरण मार्गदर्शन।",

    soil_title:"अपनी मिट्टी की स्थिति चुनें",
    soil_dry:"सूखी", soil_dry_desc:"सूखी मिट्टी में नमी और पोषण की कमी होती है। मल्च, कम्पोस्ट और सूखा सहन करने वाली फसलें लें।",
    soil_cracked:"फटी हुई", soil_cracked_desc:"दरारें पानी की कमी और जैविक पदार्थ की कमी दिखाती हैं। कम्पोस्ट और ढकाव फसलें मदद करती हैं।",
    soil_sandy:"रेतीली", soil_sandy_desc:"रेतीली मिट्टी जल्दी पानी निकाल देती है। कम्पोस्ट और बार-बार हल्की सिंचाई से सुधार होता है।",
    soil_wet:"गीली/जलभराव", soil_wet_desc:"गीली मिट्टी में जड़ों के लिए हवा नहीं रहती। जल निकासी और उठी हुई क्यारियाँ मदद करती हैं।",

    sol_title:"समाधान",
    btn_listen:"सुनें", btn_copy:"कॉपी करें", btn_print:"प्रिंट", btn_reset:"रीसेट",

    causes_title:"मिट्टी को क्या नुकसान पहुँचाता है?",
    cause_deforest:"वनों की कटाई", cause_deforest_desc:"पेड़ हटे → मिट्टी बह गई।",
    cause_deforest_more:"पेड़ों की जड़ें न होने से बारिश व हवा में मिट्टी बह जाती है।",
    cause_grazing:"अत्यधिक चराई", cause_grazing_desc:"बहुत जानवर → घास खत्म।",
    cause_grazing_more:"जब जानवर घास को तेजी से खा जाते हैं तो मिट्टी नंगी होकर बह जाती है।",
    cause_chem:"अधिक रसायन", cause_chem_desc:"मिट्टी का जीवन नष्ट, खारापन बढ़ा।",
    cause_chem_more:"अधिक कीटनाशक व उर्वरक उपयोग से मिट्टी के जीवाणु व उर्वरता घटती है।",
    cause_poll:"प्रदूषण व कचरा", cause_poll_desc:"गंदा पानी/कचरा खेत खराब।",
    cause_poll_more:"औद्योगिक कचरा, सीवेज व प्लास्टिक मिट्टी को विषैला बनाते हैं।",

    prev_title:"सरल रोकथाम के उपाय",
    prev_trees:"पेड़/घास लगाएँ", prev_trees_desc:"जड़ें मिट्टी को पकड़ती हैं।",
    prev_trees_more:"कृषिवनिकी व पेड़ लगाने से मिट्टी कटाव कम होता है और उर्वरता बढ़ती है।",
    prev_water:"स्मार्ट सिंचाई", prev_water_desc:"ड्रिप/स्प्रिंकलर उपयोग करें।",
    prev_water_more:"कुशल सिंचाई से जलभराव कम होता है और भूजल बचता है।",
    prev_organic:"जैविक खाद", prev_organic_desc:"कम्पोस्ट व गोबर डालें।",
    prev_organic_more:"खेत की खाद, कम्पोस्ट व हरी खाद से मिट्टी की उर्वरता बढ़ती है।",
    prev_rotation:"फसल चक्र", prev_rotation_desc:"फसल बदलें, दलहन जोड़ें।",
    prev_rotation_more:"अनाज के साथ दलहन की फसलें लेने से मिट्टी में नाइट्रोजन बढ़ती है और कीट कम होते हैं।",

    help_title:"कैसे उपयोग करें",
    help_s1:"ऊपर भाषा चुनें।",
    help_s2:"चित्र पर टैप करें (मिट्टी/कारण/रोकथाम)।",
    help_s3:"सुझाव पढ़ें या स्पीकर दबाएँ।",
    help_s4:"अपने खेत में लागू करें।",

    quiz_correct:"✅ सही जवाब!",
    quiz_wrong:"❌ दुबारा प्रयास करें!"
  },

  mr: {
    nav_home:"मुखपृष्ठ", nav_soil:"माती", nav_causes:"कारणे", nav_prev:"प्रतिबंध", nav_help:"मदत",

    more_info:"अधिक माहिती:",

    home_title:"सुदृढ माती, चांगले उत्पादन.",
    home_intro:"खालील पर्याय निवडा. सोपी भाषा, चित्रे व आवाज मदत उपलब्ध.",
    home_card_soil:"माती तपासा", home_card_causes:"कारणे", home_card_prev:"प्रतिबंध", home_card_help:"मदत व आवाज",
home_card_soil_desc:"आपली माती ओळखा आणि चित्रे व आवाजासह सोपे उपाय मिळवा.",
home_card_causes_desc:"मानवी व नैसर्गिक कृतींमुळे मातीला कसे नुकसान होते ते जाणून घ्या.",
home_card_prev_desc:"मातीचे संरक्षण व पुनरुज्जीवन करण्यासाठी सोपे, पर्यावरणपूरक उपाय शिका.",
home_card_help_desc:"ही वेबसाईट आपल्या भाषेत वापरण्यासाठी टप्प्याटप्प्याने मार्गदर्शन.",

    soil_title:"आपली माती निवडा",
    soil_dry:"कोरडी", soil_dry_desc:"कोरड्या मातीत आर्द्रता व पोषणाची कमतरता असते. मल्च, कंपोस्ट व दुष्काळसह पीके घ्या.",
    soil_cracked:"फुटलेली", soil_cracked_desc:"भेगा म्हणजे पाणी व सेंद्रिय द्रव्याची कमतरता. कंपोस्ट व आच्छादन पीके मदत करतात.",
    soil_sandy:"वाळूमिश्रित", soil_sandy_desc:"वाळूमिश्रित माती पाणी पटकन गाळते. कंपोस्ट व वारंवार हलके सिंचन उपयुक्त.",
    soil_wet:"ओलसर/पाणथळ", soil_wet_desc:"ओलसर मातीत मुळांसाठी हवा राहत नाही. नाले व उठाव पाटे फायदेशीर.",

    sol_title:"उपाय",
    btn_listen:"ऐका", btn_copy:"कॉपी करा", btn_print:"प्रिंट", btn_reset:"रीसेट",

    causes_title:"मातीचे नुकसान कशामुळे होते?",
    cause_deforest:"वनतोड", cause_deforest_desc:"झाडे कापली → माती वाहून गेली.",
    cause_deforest_more:"झाडांची मुळे नसल्याने पावसात व वाऱ्यात माती वाहते.",
    cause_grazing:"अतिरिक्त चरणे", cause_grazing_desc:"जास्त जनावरे → गवत संपले.",
    cause_grazing_more:"जेव्हा जनावरे गवत पटकन खातात तेव्हा माती उघडी पडते व वाहते.",
    cause_chem:"जास्त रसायने", cause_chem_desc:"मातीचे जीवन नष्ट, खारटपणा वाढतो.",
    cause_chem_more:"जास्त कीटकनाशक व खते वापरल्याने मातीतील जीवाणू व सुपीकपणा कमी होतो.",
    cause_poll:"प्रदूषण व कचरा", cause_poll_desc:"घाण पाणी/कचरा मातीला हानिकारक.",
    cause_poll_more:"औद्योगिक कचरा, गटाराचे पाणी व प्लास्टिक माती विषारी करतात.",

    prev_title:"सोपे प्रतिबंधक उपाय",
    prev_trees:"झाडे/गवत लावा", prev_trees_desc:"मुळे माती धरून ठेवतात.",
    prev_trees_more:"कृषिवन व झाडे लावल्याने माती वाहून जाणे थांबते व सुपीकता वाढते.",
    prev_water:"स्मार्ट सिंचन", prev_water_desc:"ड्रिप/स्प्रिंकलर वापरा.",
    prev_water_more:"कार्यक्षम सिंचनाने पाणी साठणे कमी होते व भूजल वाचते.",
    prev_organic:"सेंद्रिय खत", prev_organic_desc:"कंपोस्ट व शेणखत वापरा.",
    prev_organic_more:"खत, कंपोस्ट व हिरवळीची खते वापरल्याने मातीची सुपीकता वाढते.",
    prev_rotation:"पीक पद्धती", prev_rotation_desc:"पीके बदलून घ्या, डाळी जोडा.",
    prev_rotation_more:"धान्याबरोबर डाळी घेतल्याने नायट्रोजन वाढते व कीड कमी होते.",

    help_title:"कसे वापरावे",
    help_s1:"वर भाषा निवडा.",
    help_s2:"चित्रावर टॅप करा (माती/कारणे/प्रतिबंध).",
    help_s3:"सल्ला वाचा किंवा स्पीकर दाबा.",
    help_s4:"शेतात पाळा.",

    quiz_correct:"✅ बरोबर उत्तर!",
    quiz_wrong:"❌ पुन्हा प्रयत्न करा!"
  }
};

// ================== Language Control ==================
function getLang(){ return localStorage.getItem('lang') || 'mr'; }
function setLang(lang){ localStorage.setItem('lang', lang); translatePage(); }

function translatePage(){
  const lang = getLang();
  const map = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(map[key]) el.textContent = map[key];
  });
  const sel = document.getElementById('langSel');
  if(sel) sel.value = lang;
}

// ================== Speech ==================
function speakText(text, lang){
  if(!('speechSynthesis' in window)) return alert('Speech not supported');
  const utter = new SpeechSynthesisUtterance(text);
  const voiceLang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-US';
  const voices = speechSynthesis.getVoices();
  utter.voice = voices.find(v=>v.lang.startsWith(voiceLang)) || voices[0];
  utter.lang = utter.voice?.lang || voiceLang;
  speechSynthesis.cancel(); speechSynthesis.speak(utter);
}

// ================== Soil Solutions ==================
const SOIL_SOL = {
  dry: {
    en:["Mulch soil to keep water.","Use drip/sprinkler.","Choose drought-tolerant crops."],
    hi:["मल्चिंग करें ताकि नमी बनी रहे।","ड्रिप/स्प्रिंकलर सिंचाई करें।","सूखा सहन करने वाली फसलें चुनें।"],
    mr:["मल्च वापरा.","ड्रिप/स्प्रिंकलर वापरा.","दुष्काळ सहन करणारी पीके लावा."]
  },
  cracked: {
    en:["Add compost + manure.","Reduce tillage.","Keep soil covered with straw."],
    hi:["कम्पोस्ट व गोबर डालें।","जुताई कम करें।","भुसा ढककर रखें।"],
    mr:["कंपोस्ट व शेणखत घाला.","नांगरणी कमी करा.","भुसा घालून झाका."]
  },
  sandy: {
    en:["Mix compost for holding water.","Frequent light irrigation.","Windbreak trees on borders."],
    hi:["कम्पोस्ट मिलाएँ।","बार-बार हल्की सिंचाई करें।","सीमाओं पर पेड़ लगाएँ।"],
    mr:["कंपोस्ट मिसळा.","वारंवार हलकी पाणी द्या.","काठावर झाडे लावा."]
  },
  wet: {
    en:["Make drainage channels.","Raised beds for crops.","Avoid over-irrigation."],
    hi:["नाले बनाइए।","उठी हुई क्यारियाँ बनाइए।","अत्यधिक सिंचाई से बचें।"],
    mr:["नाले तयार करा.","उठाव पाटे बनवा.","जास्त सिंचन करू नका."]
  }
};

function currentLang(){ return getLang(); }
function listToSpeech(lines){ return lines.join('. '); }

// ================== Quiz ==================
function checkAnswer(btn, correct){
  const lang = currentLang();
  const msg = (btn.dataset.answer === correct) ? I18N[lang].quiz_correct : I18N[lang].quiz_wrong;
  alert(msg);
}

// ================== Page Wiring ==================
document.addEventListener('DOMContentLoaded', ()=>{
  // Language
  const sel = document.getElementById('langSel');
  if(sel){ sel.value = getLang(); sel.addEventListener('change', e=> setLang(e.target.value)); }
  translatePage();

  // Soil choice cards
  document.querySelectorAll('.card-choice').forEach(card=>{
    const btn = card.querySelector('.btn');
    if(btn){
      btn.addEventListener('click', ()=>{
        const soil = card.getAttribute('data-soil');
        const lang = currentLang();
        const list = SOIL_SOL[soil][lang];
        const box = document.getElementById('solutionBox');
        const ul = document.getElementById('solList');
        ul.innerHTML = '';
        list.forEach(line=>{ let li=document.createElement('li'); li.textContent=line; ul.appendChild(li); });
        box.classList.remove('hidden');
        speakText(listToSpeech(list), lang);
      });
    }
  });

  // Speak buttons on cause/prevention cards
  document.querySelectorAll('.speak').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = currentLang();
      const card = btn.closest('.card');
      const text = Array.from(card.querySelectorAll('h3,p')).map(n=>n.textContent.trim()).join('. ');
      speakText(text, lang);
    });
  });

  // Help page play button
  const playHelp = document.getElementById('playHelp');
  if(playHelp){
    playHelp.addEventListener('click', ()=>{
      const lang = currentLang();
      const lines = ['help_s1','help_s2','help_s3','help_s4'].map(k=>I18N[lang][k]);
      speakText(lines.join('. '), lang);
    });
  }
});
