/*
    MEWAT SAATHI
    SCHOLARSHIP DATABASE
    Academic Year: 2026-27

    Important:
    - Official sources only
    - Unknown benefit amounts are NOT invented
    - Direct application URL is used only where verified
*/

const NSP = "https://scholarships.gov.in/Students";
const RAJ = "https://scholarship.rajasthan.gov.in/";

const scholarships = [

{
id:"pm-yasasvi-college",

nameHi:"PM YASASVI Top Class Education - College",
nameEn:"PM YASASVI Top Class Education in College",

benefitHi:"Scholarship/support — exact benefit scheme rules और eligible institution के अनुसार।",
benefitEn:"Scholarship/support as per scheme rules and eligible institution.",

shortHi:"OBC, EBC और DNT students के लिए higher education support.",
shortEn:"Higher education support for eligible OBC, EBC and DNT students.",

eligibilityHi:"OBC, EBC या DNT category के eligible students. Final eligibility official scheme rules पर निर्भर है.",
eligibilityEn:"Eligible OBC, EBC or DNT students. Final eligibility depends on official scheme rules.",

levels:["ug","pg"],
categories:["obc","ebc","dnt"],
genders:["any"],
states:["all"],
courses:["engineering","medical","science","arts","commerce","other"],

levelLabel:"UG / College",
categoryLabel:"OBC / EBC / DNT",
courseLabel:"Higher Education",
stateLabel:"All India",

documentsHi:["Aadhaar","Marksheet","Category Certificate","Income Certificate यदि applicable","Bank details"],
documentsEn:["Aadhaar","Marksheet","Category Certificate","Income Certificate if applicable","Bank details"],

processHi:[
"NSP पर OTR पूरा करें.",
"Official portal पर login करें.",
"अपनी eligibility verify करें.",
"Application submit करके verification status देखें."
],

processEn:[
"Complete OTR on NSP.",
"Login to the official portal.",
"Verify your eligibility.",
"Submit the application and track verification."
],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal (NSP)",
lastVerified:"September 2026",

notesHi:"Apply करने से पहले official scheme details जरूर check करें.",
notesEn:"Always check the official scheme details before applying."
},

{
id:"pm-yasasvi-school",

nameHi:"PM YASASVI Top Class Education - School",
nameEn:"PM YASASVI Top Class Education in Schools",

benefitHi:"School education के लिए scholarship/support, scheme rules के अनुसार.",
benefitEn:"Scholarship/support for school education as per scheme rules.",

shortHi:"OBC, EBC और DNT students के लिए school-level support.",
shortEn:"School-level support for eligible OBC, EBC and DNT students.",

eligibilityHi:"Eligible OBC, EBC और DNT students. Current cycle में renewal/application conditions official portal पर देखें.",
eligibilityEn:"Eligible OBC, EBC and DNT students. Check current application and renewal conditions on the official portal.",

levels:["class8","class9","class10","class11","class12"],
categories:["obc","ebc","dnt"],
genders:["any"],
states:["all"],
courses:["school"],

levelLabel:"School",
categoryLabel:"OBC / EBC / DNT",
courseLabel:"School",
stateLabel:"All India",

documentsHi:["Aadhaar","School records","Category Certificate","Income-related documents if required"],
documentsEn:["Aadhaar","School records","Category Certificate","Income-related documents if required"],

processHi:["NSP OTR करें.","Official NSP पर application/renewal check करें.","School/institute verification पूरा कराएं."],
processEn:["Complete NSP OTR.","Check application/renewal on official NSP.","Complete school/institute verification."],

deadline:"30-09-2026 (Renewal listing)",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal (NSP)",
lastVerified:"September 2026",

notesHi:"Current listing renewal के लिए है; Fresh eligibility अलग हो सकती है.",
notesEn:"The current listing shown is for renewal; fresh eligibility may differ."
},

{
id:"pm-usp-csss",

nameHi:"PM-USP Central Sector Scholarship",
nameEn:"PM-USP Central Sector Scheme of Scholarship for College and University Students",

benefitHi:"College/University students के लिए scholarship support.",
benefitEn:"Scholarship support for eligible college/university students.",

shortHi:"Merit-based higher education scholarship.",
shortEn:"Merit-based higher education scholarship.",

eligibilityHi:"Eligible college/university students; merit and other official conditions apply.",
eligibilityEn:"Eligible college/university students; merit and other official conditions apply.",

levels:["ug","pg"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"College / University",
categoryLabel:"Merit Based",
courseLabel:"Higher Education",
stateLabel:"All India",

documentsHi:["Aadhaar","Marksheets","Bank details","Other documents as requested by NSP"],
documentsEn:["Aadhaar","Marksheets","Bank details","Other documents as requested by NSP"],

processHi:["OTR करें.","NSP login करें.","Scholarship application भरें.","Institute verification पूरा कराएं."],
processEn:["Complete OTR.","Login to NSP.","Fill the scholarship application.","Complete institute verification."],

deadline:"30-09-2026 (Renewal listing)",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal (NSP)",
lastVerified:"September 2026",

notesHi:"NSP के अनुसार current 2026-27 listing में renewal application open है.",
notesEn:"NSP currently lists renewal applications as open for AY 2026-27."
},

{
id:"aicte-pragati-degree",

nameHi:"AICTE Pragati Scholarship - Technical Degree",
nameEn:"AICTE Pragati Scholarship - Technical Degree",

benefitHi:"Technical Degree पढ़ने वाली eligible girl students के लिए scholarship support.",
benefitEn:"Scholarship support for eligible girl students pursuing technical degree education.",

shortHi:"AICTE-approved technical degree courses में girls के लिए support.",
shortEn:"Support for girls in eligible AICTE-approved technical degree courses.",

eligibilityHi:"Eligible girl students studying an eligible technical degree programme.",
eligibilityEn:"Eligible girl students studying an eligible technical degree programme.",

levels:["ug"],
categories:["all"],
genders:["female"],
states:["all"],
courses:["engineering"],

levelLabel:"Technical Degree",
categoryLabel:"Eligible Students",
courseLabel:"Engineering / Technical",
stateLabel:"All India",

documentsHi:["Aadhaar","Marksheets","Admission details","Bank details","Other official documents"],
documentsEn:["Aadhaar","Marksheets","Admission details","Bank details","Other official documents"],

processHi:["NSP OTR करें.","Official NSP application करें.","Institute verification कराएं."],
processEn:["Complete NSP OTR.","Apply through official NSP.","Complete institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / AICTE",
lastVerified:"September 2026",

notesHi:"Technical degree की exact eligibility official scheme specification में check करें.",
notesEn:"Check the official scheme specification for exact technical-degree eligibility."
},

{
id:"aicte-pragati-diploma",

nameHi:"AICTE Pragati Scholarship - Technical Diploma",
nameEn:"AICTE Pragati Scholarship - Technical Diploma",

benefitHi:"Eligible girl students के technical diploma education के लिए scholarship support.",
benefitEn:"Scholarship support for eligible girl students in technical diploma education.",

shortHi:"Technical Diploma करने वाली girls के लिए support.",
shortEn:"Support for girls pursuing eligible technical diploma programmes.",

eligibilityHi:"Eligible girl students in approved technical diploma programmes.",
eligibilityEn:"Eligible girl students in approved technical diploma programmes.",

levels:["diploma"],
categories:["all"],
genders:["female"],
states:["all"],
courses:["engineering"],

levelLabel:"Technical Diploma",
categoryLabel:"Eligible Students",
courseLabel:"Technical Diploma",
stateLabel:"All India",

documentsHi:["Aadhaar","Admission proof","Marksheets","Bank details"],
documentsEn:["Aadhaar","Admission proof","Marksheets","Bank details"],

processHi:["OTR करें.","NSP पर application करें.","Institute verification पूरा करें."],
processEn:["Complete OTR.","Apply on NSP.","Complete institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / AICTE",
lastVerified:"September 2026",

notesHi:"Exact course/institution eligibility official portal पर check करें.",
notesEn:"Check exact course/institution eligibility on the official portal."
},

{
id:"aicte-saksham-degree",

nameHi:"AICTE Saksham Scholarship - Technical Degree",
nameEn:"AICTE Saksham Scholarship - Technical Degree",

benefitHi:"Eligible specially-abled students के technical degree education के लिए support.",
benefitEn:"Support for eligible specially-abled students pursuing technical degree education.",

shortHi:"Technical degree में eligible specially-abled students के लिए scholarship.",
shortEn:"Scholarship for eligible specially-abled students in technical degree programmes.",

eligibilityHi:"Eligible specially-abled students studying approved technical degree programmes.",
eligibilityEn:"Eligible specially-abled students studying approved technical degree programmes.",

levels:["ug"],
categories:["disability"],
genders:["any"],
states:["all"],
courses:["engineering"],

levelLabel:"Technical Degree",
categoryLabel:"Disability",
courseLabel:"Engineering / Technical",
stateLabel:"All India",

documentsHi:["Aadhaar","Disability-related document","Admission proof","Marksheets","Bank details"],
documentsEn:["Aadhaar","Disability-related document","Admission proof","Marksheets","Bank details"],

processHi:["NSP OTR करें.","Official scheme select करें.","Application submit करें.","Institute verification कराएं."],
processEn:["Complete NSP OTR.","Select the official scheme.","Submit application.","Complete institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / AICTE",
lastVerified:"September 2026",

notesHi:"Disability/UDID related current NSP requirements भी check करें.",
notesEn:"Check current NSP requirements related to disability/UDID."
},

{
id:"aicte-saksham-diploma",

nameHi:"AICTE Saksham Scholarship - Technical Diploma",
nameEn:"AICTE Saksham Scholarship - Technical Diploma",

benefitHi:"Eligible specially-abled diploma students के लिए education support.",
benefitEn:"Education support for eligible specially-abled diploma students.",

shortHi:"Technical diploma में specially-abled students के लिए scholarship.",
shortEn:"Scholarship for specially-abled students in technical diploma programmes.",

eligibilityHi:"Eligible specially-abled students in approved technical diploma programmes.",
eligibilityEn:"Eligible specially-abled students in approved technical diploma programmes.",

levels:["diploma"],
categories:["disability"],
genders:["any"],
states:["all"],
courses:["engineering"],

levelLabel:"Technical Diploma",
categoryLabel:"Disability",
courseLabel:"Technical",
stateLabel:"All India",

documentsHi:["Aadhaar","Disability-related document","Admission proof","Marksheets"],
documentsEn:["Aadhaar","Disability-related document","Admission proof","Marksheets"],

processHi:["OTR करें.","NSP पर scheme चुनें.","Application submit करें.","Institute verification कराएं."],
processEn:["Complete OTR.","Select the scheme on NSP.","Submit application.","Complete institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / AICTE",
lastVerified:"September 2026",

notesHi:"Final eligibility official scheme rules पर निर्भर है.",
notesEn:"Final eligibility depends on official scheme rules."
},

{
id:"aicte-swanath-degree",

nameHi:"AICTE Swanath Scholarship - Technical Degree",
nameEn:"AICTE Swanath Scholarship - Technical Degree",

benefitHi:"Eligible technical degree students के लिए education support.",
benefitEn:"Education support for eligible technical degree students.",

shortHi:"Eligible students के लिए technical degree scholarship.",
shortEn:"Technical degree scholarship for eligible students.",

eligibilityHi:"Scheme-specific eligible students in technical degree programmes.",
eligibilityEn:"Scheme-specific eligible students in technical degree programmes.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["engineering"],

levelLabel:"Technical Degree",
categoryLabel:"Scheme Specific",
courseLabel:"Technical",
stateLabel:"All India",

documentsHi:["Aadhaar","Admission proof","Marksheets","Relevant supporting documents"],
documentsEn:["Aadhaar","Admission proof","Marksheets","Relevant supporting documents"],

processHi:["OTR करें.","Scheme eligibility पढ़ें.","Application submit करें."],
processEn:["Complete OTR.","Read scheme eligibility.","Submit application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / AICTE",
lastVerified:"September 2026",

notesHi:"Swanath की specific eligibility official scheme page पर जरूर check करें.",
notesEn:"Check specific Swanath eligibility on the official scheme page."
},

{
id:"aicte-swanath-diploma",

nameHi:"AICTE Swanath Scholarship - Technical Diploma",
nameEn:"AICTE Swanath Scholarship - Technical Diploma",

benefitHi:"Eligible technical diploma students के लिए education support.",
benefitEn:"Education support for eligible technical diploma students.",

shortHi:"Technical diploma students के लिए AICTE support.",
shortEn:"AICTE support for eligible technical diploma students.",

eligibilityHi:"Scheme-specific eligible students in technical diploma programmes.",
eligibilityEn:"Scheme-specific eligible students in technical diploma programmes.",

levels:["diploma"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["engineering"],

levelLabel:"Technical Diploma",
categoryLabel:"Scheme Specific",
courseLabel:"Technical",
stateLabel:"All India",

documentsHi:["Aadhaar","Admission proof","Marksheets","Relevant documents"],
documentsEn:["Aadhaar","Admission proof","Marksheets","Relevant documents"],

processHi:["OTR करें.","Official eligibility check करें.","Application submit करें."],
processEn:["Complete OTR.","Check official eligibility.","Submit application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / AICTE",
lastVerified:"September 2026",

notesHi:"Final eligibility official portal पर check करें.",
notesEn:"Check final eligibility on the official portal."
},

{
id:"national-pg-studies",

nameHi:"National Scholarship for Post Graduate Studies",
nameEn:"National Scholarship for Post Graduate Studies",

benefitHi:"Eligible PG students के लिए higher education scholarship support.",
benefitEn:"Higher education scholarship support for eligible PG students.",

shortHi:"Post Graduate students के लिए UGC scholarship.",
shortEn:"UGC scholarship for eligible postgraduate students.",

eligibilityHi:"Eligible postgraduate students according to UGC scheme conditions.",
eligibilityEn:"Eligible postgraduate students according to UGC scheme conditions.",

levels:["pg"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["science","arts","commerce","other"],

levelLabel:"PG",
categoryLabel:"Merit Based",
courseLabel:"Post Graduation",
stateLabel:"All India",

documentsHi:["Aadhaar","PG admission/academic documents","Bank details"],
documentsEn:["Aadhaar","PG admission/academic documents","Bank details"],

processHi:["OTR करें.","NSP पर application करें.","Institute verification पूरा करें."],
processEn:["Complete OTR.","Apply on NSP.","Complete institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / UGC",
lastVerified:"September 2026",

notesHi:"Current NSP listing में application 16-09-2026 से open दिखाई गई है.",
notesEn:"The current NSP listing shows applications opening from 16-09-2026."
},

{
id:"beedi-prematric",

nameHi:"Beedi/Cine/IOMC/LSDM Wards - Pre-Matric Assistance",
nameEn:"Financial Assistance for Education to Wards of Beedi/Cine/IOMC/LSDM - Pre-Matric",

benefitHi:"Eligible workers' wards के school education के लिए financial assistance.",
benefitEn:"Financial assistance for eligible workers' wards in school education.",

shortHi:"Specific worker categories के बच्चों के लिए pre-matric assistance.",
shortEn:"Pre-matric assistance for eligible children of specified workers.",

eligibilityHi:"Eligible wards covered under the relevant worker welfare scheme.",
eligibilityEn:"Eligible wards covered under the relevant worker welfare scheme.",

levels:["class6","class7","class8","class9","class10"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["school"],

levelLabel:"Pre-Matric",
categoryLabel:"Scheme Specific",
courseLabel:"School",
stateLabel:"All India",

documentsHi:["Aadhaar","School certificate","Worker-related supporting document","Bank details"],
documentsEn:["Aadhaar","School certificate","Worker-related supporting document","Bank details"],

processHi:["OTR करें.","Scheme eligibility check करें.","Application submit करें."],
processEn:["Complete OTR.","Check scheme eligibility.","Submit application."],

deadline:"30-09-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Ministry of Labour & Employment",
lastVerified:"September 2026",

notesHi:"Worker category की exact eligibility official scheme details में देखें.",
notesEn:"Check exact worker-category eligibility in the official scheme details."
},

{
id:"beedi-postmatric",

nameHi:"Beedi/Cine/IOMC/LSDM Wards - Post-Matric Assistance",
nameEn:"Financial Assistance for Education to Wards of Beedi/Cine/IOMC/LSDM - Post-Matric",

benefitHi:"Eligible workers' wards के post-matric education के लिए financial assistance.",
benefitEn:"Financial assistance for eligible workers' wards in post-matric education.",

shortHi:"Post-matric students के लिए specific worker welfare assistance.",
shortEn:"Worker welfare education assistance for post-matric students.",

eligibilityHi:"Eligible wards covered by the applicable worker welfare scheme.",
eligibilityEn:"Eligible wards covered by the applicable worker welfare scheme.",

levels:["class11","class12","iti","diploma","ug","pg"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Post-Matric",
categoryLabel:"Scheme Specific",
courseLabel:"Multiple",
stateLabel:"All India",

documentsHi:["Aadhaar","Academic documents","Worker-related document","Bank details"],
documentsEn:["Aadhaar","Academic documents","Worker-related document","Bank details"],

processHi:["OTR करें.","Official scheme rules पढ़ें.","Application submit करें."],
processEn:["Complete OTR.","Read official scheme rules.","Submit application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Ministry of Labour & Employment",
lastVerified:"September 2026",

notesHi:"Exact eligible worker category official rules में check करें.",
notesEn:"Check the exact eligible worker category in official rules."
},

{
id:"sc-top-class",

nameHi:"Top Class Education Scholarship for SC Students",
nameEn:"Central Sector Scheme of Top Class Education for SC Students",

benefitHi:"Eligible SC students के higher education के लिए scholarship support.",
benefitEn:"Scholarship support for eligible SC students in higher education.",

shortHi:"SC students के लिए top-class higher education support.",
shortEn:"Top-class higher education support for SC students.",

eligibilityHi:"Eligible SC students meeting the official scheme conditions.",
eligibilityEn:"Eligible SC students meeting the official scheme conditions.",

levels:["ug","pg"],
categories:["sc"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"SC",
courseLabel:"Higher Education",
stateLabel:"All India",

documentsHi:["Aadhaar","SC Certificate","Academic documents","Income-related documents if required"],
documentsEn:["Aadhaar","SC Certificate","Academic documents","Income-related documents if required"],

processHi:["OTR करें.","NSP पर scheme चुनें.","Application भरें.","Institute verification पूरा करें."],
processEn:["Complete OTR.","Select the scheme on NSP.","Fill application.","Complete institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Department of Social Justice & Empowerment",
lastVerified:"September 2026",

notesHi:"Exact institution/course conditions official specification में check करें.",
notesEn:"Check exact institution/course conditions in the official specification."
},

{
id:"disability-prematric",

nameHi:"Pre-Matric Scholarship for Students with Disabilities",
nameEn:"Pre-Matric Scholarship for Students with Disabilities",

benefitHi:"Eligible students with disabilities के school education के लिए scholarship support.",
benefitEn:"Scholarship support for eligible students with disabilities in school education.",

shortHi:"School-level students with disabilities के लिए support.",
shortEn:"School-level scholarship support for students with disabilities.",

eligibilityHi:"Eligible students with disabilities under official scheme conditions.",
eligibilityEn:"Eligible students with disabilities under official scheme conditions.",

levels:["class6","class7","class8","class9","class10"],
categories:["disability"],
genders:["any"],
states:["all"],
courses:["school"],

levelLabel:"Pre-Matric",
categoryLabel:"Disability",
courseLabel:"School",
stateLabel:"All India",

documentsHi:["Aadhaar","Disability/UDID details as required","School documents","Bank details"],
documentsEn:["Aadhaar","Disability/UDID details as required","School documents","Bank details"],

processHi:["Required UDID/Aadhaar process पूरा करें.","NSP OTR करें.","Application submit करें."],
processEn:["Complete required UDID/Aadhaar process.","Complete NSP OTR.","Submit application."],

deadline:"30-09-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Department of Empowerment of Persons with Disabilities",
lastVerified:"September 2026",

notesHi:"NSP के अनुसार disabled students को application से पहले UDID portal related process पूरा करना होता है.",
notesEn:"NSP states that disabled students must complete the required UDID-related process before submitting the application."
},

{
id:"disability-postmatric",

nameHi:"Post-Matric Scholarship for Students with Disabilities",
nameEn:"Post-Matric Scholarship for Students with Disabilities",

benefitHi:"Eligible students with disabilities के post-matric education के लिए scholarship support.",
benefitEn:"Scholarship support for eligible students with disabilities in post-matric education.",

shortHi:"Class 11 से higher education तक eligible students के लिए support.",
shortEn:"Support for eligible students from post-matric education onwards.",

eligibilityHi:"Eligible students with disabilities according to official conditions.",
eligibilityEn:"Eligible students with disabilities according to official conditions.",

levels:["class11","class12","iti","diploma","ug","pg"],
categories:["disability"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Post-Matric",
categoryLabel:"Disability",
courseLabel:"Multiple",
stateLabel:"All India",

documentsHi:["Aadhaar","UDID/disability document","Academic documents","Bank details"],
documentsEn:["Aadhaar","UDID/disability document","Academic documents","Bank details"],

processHi:["Required UDID process check करें.","OTR करें.","NSP application submit करें."],
processEn:["Check required UDID process.","Complete OTR.","Submit NSP application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Department of Empowerment of Persons with Disabilities",
lastVerified:"September 2026",

notesHi:"Final eligibility official scheme rules पर निर्भर है.",
notesEn:"Final eligibility depends on official scheme rules."
},

{
id:"disability-top-class",

nameHi:"Top Class Education for Students with Disabilities",
nameEn:"Scholarship for Top Class Education for Students with Disabilities",

benefitHi:"Eligible students with disabilities के higher education के लिए scholarship support.",
benefitEn:"Higher education scholarship support for eligible students with disabilities.",

shortHi:"Higher education में eligible students with disabilities के लिए support.",
shortEn:"Higher education support for eligible students with disabilities.",

eligibilityHi:"Eligible students with disabilities meeting official conditions.",
eligibilityEn:"Eligible students with disabilities meeting official conditions.",

levels:["ug","pg"],
categories:["disability"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"Disability",
courseLabel:"Higher Education",
stateLabel:"All India",

documentsHi:["Aadhaar","UDID/disability document","Academic records","Bank details"],
documentsEn:["Aadhaar","UDID/disability document","Academic records","Bank details"],

processHi:["UDID-related requirement पूरा करें.","NSP OTR करें.","Application और institute verification पूरा करें."],
processEn:["Complete UDID-related requirements.","Complete NSP OTR.","Complete application and institute verification."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Department of Empowerment of Persons with Disabilities",
lastVerified:"September 2026",

notesHi:"Current NSP announcements में disabled applicants के UDID requirements बताए गए हैं.",
notesEn:"Current NSP announcements mention UDID requirements for disabled applicants."
},

{
id:"nmms",

nameHi:"National Means-cum-Merit Scholarship",
nameEn:"National Means-cum-Merit Scholarship",

benefitHi:"Eligible school students के लिए merit-cum-means based scholarship support.",
benefitEn:"Merit-cum-means based scholarship support for eligible school students.",

shortHi:"School students के लिए important central scholarship.",
shortEn:"Important central scholarship for eligible school students.",

eligibilityHi:"Eligible school students meeting merit and income conditions of the scheme.",
eligibilityEn:"Eligible school students meeting the scheme's merit and income conditions.",

levels:["class8","class9","class10","class11","class12"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["school"],

levelLabel:"School",
categoryLabel:"Merit + Means",
courseLabel:"School",
stateLabel:"All India",

documentsHi:["Aadhaar","School records","Income-related documents","Marksheets"],
documentsEn:["Aadhaar","School records","Income-related documents","Marksheets"],

processHi:["Official eligibility देखें.","OTR/application process पूरा करें.","School/institute verification कराएं."],
processEn:["Check official eligibility.","Complete OTR/application process.","Complete school/institute verification."],

deadline:"30-09-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Department of School Education & Literacy",
lastVerified:"September 2026",

notesHi:"Current 2026-27 NSP listing में student application last date 30-09-2026 है.",
notesEn:"The current 2026-27 NSP listing shows 30-09-2026 as the student application deadline."
},

{
id:"st-higher-education",

nameHi:"National Fellowship and Scholarship for Higher Education of ST Students",
nameEn:"National Fellowship and Scholarship for Higher Education of ST Students",

benefitHi:"Eligible ST students के higher education के लिए scholarship support.",
benefitEn:"Higher education scholarship support for eligible ST students.",

shortHi:"ST students के higher education के लिए central support.",
shortEn:"Central higher education support for ST students.",

eligibilityHi:"Eligible ST students meeting official scheme conditions.",
eligibilityEn:"Eligible ST students meeting official scheme conditions.",

levels:["ug","pg","phd"],
categories:["st"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"ST",
courseLabel:"Higher Education",
stateLabel:"All India",

documentsHi:["Aadhaar","ST Certificate","Academic documents","Bank details"],
documentsEn:["Aadhaar","ST Certificate","Academic documents","Bank details"],

processHi:["OTR करें.","Official NSP scheme चुनें.","Application submit करें."],
processEn:["Complete OTR.","Select the official NSP scheme.","Submit application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Ministry of Tribal Affairs",
lastVerified:"September 2026",

notesHi:"Exact course/institution conditions official scheme details में देखें.",
notesEn:"Check exact course/institution conditions in the official scheme details."
},

{
id:"railways-pm-scholarship",

nameHi:"Prime Minister's Scholarship Scheme - Ministry of Railways",
nameEn:"Prime Minister's Scholarship Scheme for Ministry of Railways",

benefitHi:"Eligible wards under the Railway-related scheme के लिए scholarship support.",
benefitEn:"Scholarship support for eligible wards under the Railway-related scheme.",

shortHi:"Railway employees/eligible category के wards के लिए scheme.",
shortEn:"Scheme for eligible wards under the Railway-related category.",

eligibilityHi:"Specific eligibility applies. Check official scheme specification before applying.",
eligibilityEn:"Specific eligibility applies. Check official scheme specification before applying.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"Scheme Specific",
courseLabel:"Multiple",
stateLabel:"All India",

documentsHi:["Aadhaar","Academic records","Railway-related eligibility document","Bank details"],
documentsEn:["Aadhaar","Academic records","Railway-related eligibility document","Bank details"],

processHi:["OTR करें.","Scheme-specific eligibility check करें.","NSP application करें."],
processEn:["Complete OTR.","Check scheme-specific eligibility.","Apply through NSP."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Ministry of Railways",
lastVerified:"September 2026",

notesHi:"यह general scholarship नहीं है; Railway-related eligibility जरूरी है.",
notesEn:"This is not a general scholarship; Railway-related eligibility applies."
},

{
id:"capf-pm-scholarship",

nameHi:"PM Scholarship Scheme - CAPF & Assam Rifles",
nameEn:"Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",

benefitHi:"Eligible wards of the covered personnel के higher education के लिए scholarship support.",
benefitEn:"Higher education scholarship support for eligible wards of covered personnel.",

shortHi:"CAPF/Assam Rifles personnel की eligible category के wards के लिए.",
shortEn:"For eligible wards under the CAPF/Assam Rifles category.",

eligibilityHi:"Specific ward/academic conditions apply.",
eligibilityEn:"Specific ward and academic conditions apply.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"Scheme Specific",
courseLabel:"Multiple",
stateLabel:"All India",

documentsHi:["Aadhaar","Academic documents","Service/ward eligibility documents"],
documentsEn:["Aadhaar","Academic documents","Service/ward eligibility documents"],

processHi:["OTR करें.","Official scheme conditions check करें.","NSP application submit करें."],
processEn:["Complete OTR.","Check official scheme conditions.","Submit NSP application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Ministry of Home Affairs",
lastVerified:"September 2026",

notesHi:"यह scheme specific personnel/ward category के लिए है.",
notesEn:"This scheme is restricted to the specified personnel/ward category."
},

{
id:"police-martyr-pm-scholarship",

nameHi:"PM Scholarship Scheme - Martyred Police Personnel Wards",
nameEn:"PM Scholarship Scheme for Wards of States/UTs Police Personnel Martyred During Terror/Naxal Attacks",

benefitHi:"Eligible wards के higher education के लिए scholarship support.",
benefitEn:"Higher education scholarship support for eligible wards.",

shortHi:"Specific martyr police personnel category के wards के लिए.",
shortEn:"For eligible wards under the specified martyred police personnel category.",

eligibilityHi:"Specific police personnel/ward conditions apply.",
eligibilityEn:"Specific police personnel/ward conditions apply.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"Scheme Specific",
courseLabel:"Multiple",
stateLabel:"All India",

documentsHi:["Aadhaar","Academic records","Relevant service/ward documents"],
documentsEn:["Aadhaar","Academic records","Relevant service/ward documents"],

processHi:["OTR करें.","Scheme eligibility check करें.","NSP application करें."],
processEn:["Complete OTR.","Check scheme eligibility.","Apply on NSP."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / Ministry of Home Affairs",
lastVerified:"September 2026",

notesHi:"Eligibility बहुत specific है; official scheme details जरूर पढ़ें.",
notesEn:"Eligibility is specific; read the official scheme details carefully."
},

{
id:"railways-support",

nameHi:"PM Scholarship - Railway Category",
nameEn:"Prime Minister's Scholarship Scheme for Ministry of Railways",

benefitHi:"Eligible Railway-category students के लिए higher education support.",
benefitEn:"Higher education support for eligible Railway-category students.",

shortHi:"Railway-related eligible wards के लिए scholarship.",
shortEn:"Scholarship for eligible wards under the Railway category.",

eligibilityHi:"Eligibility is limited to the scheme's specified Railway category.",
eligibilityEn:"Eligibility is limited to the scheme's specified Railway category.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"UG",
categoryLabel:"Scheme Specific",
courseLabel:"Multiple",
stateLabel:"All India",

documentsHi:["Aadhaar","Academic documents","Railway-related proof"],
documentsEn:["Aadhaar","Academic documents","Railway-related proof"],

processHi:["OTR करें.","Official scheme rules check करें.","Application submit करें."],
processEn:["Complete OTR.","Check official scheme rules.","Submit application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal",
lastVerified:"September 2026",

notesHi:"Duplicate application से बचें; अपने लिए applicable scheme ही select करें.",
notesEn:"Avoid duplicate applications; select only the scheme applicable to you."
},

{
id:"rajasthan-cm-he",

nameHi:"Rajasthan CM Higher Education Scholarship Scheme",
nameEn:"Rajasthan CM Higher Education Scholarship Scheme",

benefitHi:"Rajasthan के eligible students को higher education के लिए scholarship support.",
benefitEn:"Scholarship support for eligible Rajasthan students pursuing higher education.",

shortHi:"Rajasthan state की higher education scholarship.",
shortEn:"Rajasthan state higher education scholarship.",

eligibilityHi:"Rajasthan students meeting the scheme's academic and other conditions.",
eligibilityEn:"Rajasthan students meeting the scheme's academic and other conditions.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["rajasthan"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"State Scheme",
courseLabel:"College / University",
stateLabel:"Rajasthan",

documentsHi:["Aadhaar","Rajasthan-related documents","Academic documents","Bank details"],
documentsEn:["Aadhaar","Rajasthan-related documents","Academic documents","Bank details"],

processHi:["Rajasthan Scholarship Portal खोलें.","Student registration/login करें.","Scheme select करें.","Application submit करें."],
processEn:["Open Rajasthan Scholarship Portal.","Register/login as student.","Select the scheme.","Submit application."],

deadline:"Official portal पर current date check करें.",
applyUrl:RAJ,
directApply:false,

sourceName:"Rajasthan Scholarship Portal - Government of Rajasthan",
lastVerified:"September 2026",

notesHi:"Rajasthan portal पर CM Higher Education Scholarship Scheme listed है. Current deadline portal पर verify करें.",
notesEn:"The Rajasthan portal lists the CM Higher Education Scholarship Scheme. Verify the current deadline on the portal."
},

{
id:"rajasthan-devnarayan",

nameHi:"Devnarayan Girls Student Scholar Incentive Scheme",
nameEn:"Devnarayan Girls Student Scholar Incentive Scheme",

benefitHi:"Eligible Rajasthan girls के graduation/postgraduation education के लिए incentive support.",
benefitEn:"Incentive support for eligible Rajasthan girls at graduate/postgraduate level.",

shortHi:"Rajasthan की eligible girls के लिए graduation/PG incentive.",
shortEn:"Graduate/postgraduate incentive for eligible Rajasthan girls.",

eligibilityHi:"Eligible Rajasthan girl students according to the scheme conditions.",
eligibilityEn:"Eligible Rajasthan girl students according to scheme conditions.",

levels:["ug","pg"],
categories:["all"],
genders:["female"],
states:["rajasthan"],
courses:["all"],

levelLabel:"Graduate / Postgraduate",
categoryLabel:"State Scheme",
courseLabel:"College / University",
stateLabel:"Rajasthan",

documentsHi:["Aadhaar","Academic records","Rajasthan-related documents","Bank details"],
documentsEn:["Aadhaar","Academic records","Rajasthan-related documents","Bank details"],

processHi:["Rajasthan Scholarship Portal पर जाएँ.","Student registration/login करें.","Scheme select करें.","Application submit करें."],
processEn:["Open Rajasthan Scholarship Portal.","Register/login as student.","Select the scheme.","Submit application."],

deadline:"Official portal पर current date check करें.",
applyUrl:RAJ,
directApply:false,

sourceName:"Rajasthan Scholarship Portal - Government of Rajasthan",
lastVerified:"September 2026",

notesHi:"Official Rajasthan portal पर scheme listed है. Current eligibility/date वहीं verify करें.",
notesEn:"The scheme is listed on the official Rajasthan portal. Verify current eligibility/date there."
},

{
id:"rajasthan-devnarayan-scooty",

nameHi:"Devnarayan Girls Student Scooty Distribution Scheme",
nameEn:"Devnarayan Girls Student Scooty Distribution Scheme",

benefitHi:"Eligible Rajasthan girl students के लिए scheme rules के अनुसार scooty-related benefit.",
benefitEn:"Scooty-related benefit for eligible Rajasthan girl students as per scheme rules.",

shortHi:"Meritorious eligible girls के लिए Rajasthan state benefit.",
shortEn:"Rajasthan state benefit for eligible meritorious girls.",

eligibilityHi:"Eligibility is based on official Rajasthan scheme conditions.",
eligibilityEn:"Eligibility is based on official Rajasthan scheme conditions.",

levels:["ug"],
categories:["all"],
genders:["female"],
states:["rajasthan"],
courses:["all"],

levelLabel:"UG",
categoryLabel:"State Scheme",
courseLabel:"College",
stateLabel:"Rajasthan",

documentsHi:["Aadhaar","Marksheets","Rajasthan documents","Other documents required by portal"],
documentsEn:["Aadhaar","Marksheets","Rajasthan documents","Other documents required by portal"],

processHi:["Official Rajasthan portal खोलें.","Eligibility check करें.","Application process पूरा करें."],
processEn:["Open the official Rajasthan portal.","Check eligibility.","Complete the application process."],

deadline:"Official portal पर current date check करें.",
applyUrl:RAJ,
directApply:false,

sourceName:"Rajasthan Scholarship Portal - Government of Rajasthan",
lastVerified:"September 2026",

notesHi:"Scooty benefit के लिए exact merit/eligibility official portal पर check करें.",
notesEn:"Check exact merit/eligibility requirements for the scooty benefit on the official portal."
},

{
id:"rajasthan-meritorious-scooty",

nameHi:"Meritorious Girls Student Scooty Distribution Scheme",
nameEn:"Meritorious Girls Student Scooty Distribution Scheme",

benefitHi:"Eligible meritorious Rajasthan girl students के लिए scooty-related benefit.",
benefitEn:"Scooty-related benefit for eligible meritorious Rajasthan girl students.",

shortHi:"Meritorious girls के लिए Rajasthan state scheme.",
shortEn:"Rajasthan state scheme for meritorious girls.",

eligibilityHi:"Merit and other conditions apply according to the official scheme.",
eligibilityEn:"Merit and other conditions apply according to the official scheme.",

levels:["class12","ug"],
categories:["all"],
genders:["female"],
states:["rajasthan"],
courses:["all"],

levelLabel:"12th / UG",
categoryLabel:"State Scheme",
courseLabel:"Education",
stateLabel:"Rajasthan",

documentsHi:["Aadhaar","Marksheets","Admission documents","Other official documents"],
documentsEn:["Aadhaar","Marksheets","Admission documents","Other official documents"],

processHi:["Rajasthan Scholarship Portal पर eligibility देखें.","Student process पूरा करें.","Application submit करें."],
processEn:["Check eligibility on Rajasthan Scholarship Portal.","Complete student process.","Submit application."],

deadline:"Official portal पर current date check करें.",
applyUrl:RAJ,
directApply:false,

sourceName:"Rajasthan Scholarship Portal - Government of Rajasthan",
lastVerified:"September 2026",

notesHi:"Current eligibility और merit criteria portal पर verify करें.",
notesEn:"Verify current eligibility and merit criteria on the official portal."
},

{
id:"rajasthan-free-higher",

nameHi:"Nishulk Uchh Siksha Yojna",
nameEn:"Nishulk Uchh Siksha Yojna",

benefitHi:"Eligible Rajasthan students के higher education cost के लिए state support.",
benefitEn:"State support toward higher education costs for eligible Rajasthan students.",

shortHi:"Eligible students के लिए free higher education related state support.",
shortEn:"State support related to free higher education for eligible students.",

eligibilityHi:"Eligibility and institution/course conditions are determined by the Rajasthan scheme.",
eligibilityEn:"Eligibility and institution/course conditions are determined by the Rajasthan scheme.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["rajasthan"],
courses:["all"],

levelLabel:"Higher Education",
categoryLabel:"State Scheme",
courseLabel:"College",
stateLabel:"Rajasthan",

documentsHi:["Aadhaar","Academic documents","Rajasthan documents","Income/category documents if applicable"],
documentsEn:["Aadhaar","Academic documents","Rajasthan documents","Income/category documents if applicable"],

processHi:["Official Rajasthan portal पर registration/login करें.","Scheme select करें.","Eligibility check करें.","Application submit करें."],
processEn:["Register/login on the official Rajasthan portal.","Select the scheme.","Check eligibility.","Submit application."],

deadline:"Official portal पर current date check करें.",
applyUrl:RAJ,
directApply:false,

sourceName:"Rajasthan Scholarship Portal - Government of Rajasthan",
lastVerified:"September 2026",

notesHi:"Exact free-education coverage official scheme rules में check करें.",
notesEn:"Check exact free-education coverage in the official scheme rules."
},

{
id:"rajasthan-bed-sambal",

nameHi:"Widow/Divorcee Chief Minister B.Ed. Sambal Scheme",
nameEn:"Widow/Divorcee Chief Minister B.Ed. Sambal Scheme",

benefitHi:"Eligible widow/divorcee students के B.Ed. education के लिए state support.",
benefitEn:"State support for eligible widow/divorcee students pursuing B.Ed.",

shortHi:"Rajasthan की eligible widow/divorcee B.Ed. students के लिए.",
shortEn:"For eligible widow/divorcee B.Ed. students in Rajasthan.",

eligibilityHi:"Eligible widow/divorcee students meeting the scheme conditions.",
eligibilityEn:"Eligible widow/divorcee students meeting the scheme conditions.",

levels:["ug"],
categories:["all"],
genders:["female"],
states:["rajasthan"],
courses:["other"],

levelLabel:"B.Ed.",
categoryLabel:"State Scheme",
courseLabel:"B.Ed.",
stateLabel:"Rajasthan",

documentsHi:["Aadhaar","B.Ed. admission documents","Relevant status document","Academic records"],
documentsEn:["Aadhaar","B.Ed. admission documents","Relevant status document","Academic records"],

processHi:["Rajasthan Scholarship Portal खोलें.","Scheme details पढ़ें.","Eligibility check करें.","Application submit करें."],
processEn:["Open Rajasthan Scholarship Portal.","Read scheme details.","Check eligibility.","Submit application."],

deadline:"Official portal पर current date check करें.",
applyUrl:RAJ,
directApply:false,

sourceName:"Rajasthan Scholarship Portal - Government of Rajasthan",
lastVerified:"September 2026",

notesHi:"Exact eligibility और document requirements official portal पर check करें.",
notesEn:"Check exact eligibility and document requirements on the official portal."
},

{
id:"icar-nts-ug",

nameHi:"ICAR National Talent Scholarship - UG",
nameEn:"ICAR National Talent Scholarship (NTS-UG)",

benefitHi:"Eligible agriculture students के लिए ICAR scholarship support.",
benefitEn:"ICAR scholarship support for eligible agriculture students.",

shortHi:"Agriculture UG students के लिए ICAR scholarship.",
shortEn:"ICAR scholarship for eligible agriculture UG students.",

eligibilityHi:"Eligible students according to ICAR scheme conditions.",
eligibilityEn:"Eligible students according to ICAR scheme conditions.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["agriculture"],

levelLabel:"UG",
categoryLabel:"Merit Based",
courseLabel:"Agriculture",
stateLabel:"All India",

documentsHi:["Aadhaar","Academic records","Admission details","Bank details"],
documentsEn:["Aadhaar","Academic records","Admission details","Bank details"],

processHi:["NSP OTR करें.","ICAR scheme eligibility check करें.","Application submit करें."],
processEn:["Complete NSP OTR.","Check ICAR scheme eligibility.","Submit application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / ICAR",
lastVerified:"September 2026",

notesHi:"Agriculture course और institution की exact eligibility official rules में देखें.",
notesEn:"Check exact agriculture course and institution eligibility in official rules."
},

{
id:"icar-pgs",

nameHi:"ICAR Post Graduate Scholarship",
nameEn:"ICAR Post Graduate Scholarship (PGS)",

benefitHi:"Eligible agriculture PG students के लिए ICAR scholarship support.",
benefitEn:"ICAR scholarship support for eligible agriculture PG students.",

shortHi:"Agriculture PG students के लिए support.",
shortEn:"Support for eligible agriculture PG students.",

eligibilityHi:"Eligible agriculture postgraduate students according to ICAR rules.",
eligibilityEn:"Eligible agriculture postgraduate students according to ICAR rules.",

levels:["pg"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["agriculture"],

levelLabel:"PG",
categoryLabel:"Merit Based",
courseLabel:"Agriculture",
stateLabel:"All India",

documentsHi:["Aadhaar","PG admission documents","Academic records","Bank details"],
documentsEn:["Aadhaar","PG admission documents","Academic records","Bank details"],

processHi:["OTR करें.","Official ICAR scheme details पढ़ें.","NSP application submit करें."],
processEn:["Complete OTR.","Read official ICAR scheme details.","Submit NSP application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / ICAR",
lastVerified:"September 2026",

notesHi:"Current ICAR course/institution conditions जरूर verify करें.",
notesEn:"Verify current ICAR course/institution conditions."
},

{
id:"ugc-ner-ishan",

nameHi:"Ishan Uday Special Scholarship",
nameEn:"Ishan Uday Special Scholarship Scheme for NER",

benefitHi:"North Eastern Region के eligible students के लिए higher education scholarship support.",
benefitEn:"Higher education scholarship support for eligible students from the North Eastern Region.",

shortHi:"NER students के लिए special scholarship.",
shortEn:"Special scholarship for eligible NER students.",

eligibilityHi:"Students must meet NER and other official scheme conditions.",
eligibilityEn:"Students must meet NER and other official scheme conditions.",

levels:["ug"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["all"],

levelLabel:"UG",
categoryLabel:"NER Specific",
courseLabel:"Higher Education",
stateLabel:"North Eastern Region",

documentsHi:["Aadhaar","Domicile/region documents","Academic records"],
documentsEn:["Aadhaar","Domicile/region documents","Academic records"],

processHi:["OTR करें.","NER eligibility check करें.","NSP application submit करें."],
processEn:["Complete OTR.","Check NER eligibility.","Submit NSP application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / UGC",
lastVerified:"September 2026",

notesHi:"यह Haryana/Rajasthan/UP के सामान्य students के लिए नहीं है; NER eligibility जरूरी है.",
notesEn:"This is not a general Haryana/Rajasthan/UP scholarship; NER eligibility applies."
},

{
id:"nec-merit",

nameHi:"NEC Merit Scholarship",
nameEn:"Financial Support to Students of NER for Higher Professional Courses",

benefitHi:"NER के eligible students को higher professional courses के लिए support.",
benefitEn:"Support for eligible NER students pursuing higher professional courses.",

shortHi:"North Eastern Region के students के लिए.",
shortEn:"For eligible students from the North Eastern Region.",

eligibilityHi:"NER and scheme-specific conditions apply.",
eligibilityEn:"NER and scheme-specific conditions apply.",

levels:["ug","pg"],
categories:["all"],
genders:["any"],
states:["all"],
courses:["engineering","medical","science","other"],

levelLabel:"Professional Higher Education",
categoryLabel:"NER Specific",
courseLabel:"Professional Courses",
stateLabel:"North Eastern Region",

documentsHi:["Aadhaar","NER-related documents","Academic records"],
documentsEn:["Aadhaar","NER-related documents","Academic records"],

processHi:["OTR करें.","Official eligibility check करें.","NSP application submit करें."],
processEn:["Complete OTR.","Check official eligibility.","Submit NSP application."],

deadline:"31-10-2026",
applyUrl:NSP,
directApply:false,

sourceName:"National Scholarship Portal / NEC",
lastVerified:"September 2026",

notesHi:"यह Mewat/Haryana/Rajasthan/UP के सामान्य students के लिए नहीं है.",
notesEn:"This is not for general students from Mewat/Haryana/Rajasthan/UP."
}

];