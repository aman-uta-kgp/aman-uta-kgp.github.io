(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},55:function(e,a,t){e.exports=t.p+"static/media/new_profile_image_cropped.9911ab5f.png"},57:function(e,a,t){e.exports=t.p+"static/media/ratings_image.2bf1f77f.png"},58:function(e,a,t){e.exports=t.p+"static/media/churn.5116b6dd.png"},59:function(e,a,t){e.exports=t.p+"static/media/BSM_model_image.35046de2.png"},60:function(e,a,t){e.exports=t.p+"static/media/Binomial_CRR.e73e4d2d.png"},61:function(e,a,t){e.exports=t.p+"static/media/loan_amortization.bd287f65.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/fastapi_sklearn.f7d742fc.png"},68:function(e,a,t){e.exports=t(94)},75:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){e.exports=t.p+"static/media/sklearn_genetic_opt.23273bc8.png"},91:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(17),r=t.n(l),o=t(27),c=t(7),s=t(66),m=t(6),u=t(39),d=t(52),p=t(10),g=t(29),E=(t(46),t(50)),f={sidebarData:[{id:"menu-0",title:"Home",path:"/portfolio",icon:i.a.createElement(p.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Projects",path:"/projects",icon:i.a.createElement(p.e,{size:35}),className:"nav-text"},{id:"menu-3",title:"Skills",path:"/skills",icon:i.a.createElement(p.a,{size:35}),className:"nav-text"},{id:"menu-4",title:"Resume",path:"https://drive.google.com/file/d/1AHxbZNgGrXxRpZCNqWfJ9CtVQqUBZ45q/view?usp=sharing",icon:i.a.createElement(E.a,{size:35}),className:"nav-text"}]};t(42),t(28),t(75);var h=function(e){var a=(e||{}).onSelection;return i.a.createElement(g.a,null,f.sidebarData.map(function(e){return i.a.createElement(g.a.Item,{key:e.id},"Resume"===e.title?i.a.createElement(g.a.Link,{href:e.path,target:"_blank",rel:"noopener noreferrer"},e.icon,i.a.createElement("span",null,e.title)):i.a.createElement(g.a.Link,{as:o.b,to:e.path,onClick:a},e.icon,i.a.createElement("span",null,e.title)))}))},k=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1];return i.a.createElement(u.a,{className:"navbar",expand:"sm",expanded:t},i.a.createElement(d.a,{fluid:!0},i.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return l(!t&&"expanded")}},i.a.createElement(p.f,{className:"toggle-icon"})),i.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(h,{onSelection:function(){l(!1)}}))))},b=t(97),y=t(98),v=t(53),_=t.n(v),N=function(e){return i.a.createElement(_.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},S=function(e){var a=(e||{}).about||{},t=a.start,n=a.exit;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},t.map(function(e,a){return i.a.createElement(i.a.Fragment,{key:a},e,i.a.createElement("br",null))}),n)))},w=t(43),x=(t(83),t(54)),z=(t(84),function(e){var a=e||{},t=a.tags,n=a.id;return i.a.createElement("div",{className:"tags"},t&&t.map(function(e,a){return i.a.createElement(x.a,{pill:!0,className:"tag mr-2 mb-2",key:n+a,bg:"secondary"},e)}))}),A=(t(85),function(e){var a=(e||{}).items;return i.a.createElement(w.VerticalTimeline,null,a.map(function(e){var a=e||{},t=a.id,n=a.date,l=a.icon,r=a.title,o=a.company,c=a.description,s=a.tags;return i.a.createElement(w.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:n,icon:l,key:t},i.a.createElement("h2",{className:"vertical-timeline-element-title"},i.a.createElement("strong",null,r)),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},o),i.a.createElement("p",{className:"vertical-timeline-element-description"},c),i.a.createElement(z,{id:t,tags:s}))}))}),M=t(24),C=t(56),T=t(33),I=t(35),L=t(55),P=t.n(L),B={greeting:i.a.createElement("div",{className:"greeting-container"},i.a.createElement("img",{src:P.a,alt:"Aman Sharma",className:"profile-image"}),i.a.createElement("h1",{className:"heading"},"Hi! I'm ",i.a.createElement("strong",{className:"main-name"}," Aman Sharma"))),titles:["A Risk Professional","A Data Scientist","A Longhorn","An IITian"],about:{start:["With ~3 years of experience in risk analytics coupled with an FRM certification,"," I bring to the table expertise in the financial services industry and data science applications"],exit:"I am currently a grad student UT Austin's MS program in Business Analytics - Financial Analytics concentration."},workTimeline:[{id:"work-3",title:["Graduate Student : MS Business Analytics"],company:i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"larger",display:"block",marginTop:"0"}},"UT Austin"),i.a.createElement("div",{style:{fontSize:"smaller",display:"block",marginTop:"0"}}," McCombs School of Business")),description:"Coursework : Advaned Machine Learning, Financial Modeling, Fixed Income Analysis",date:"June' 24 - May' 25",icon:i.a.createElement(C.a,null),tags:["python","llm","R","SQL"]},{id:"work-2",title:"Manager - Risk Analytics",company:i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"larger",display:"block",marginTop:"0"}},"Drip Capital"),i.a.createElement("div",{style:{fontSize:"smaller",display:"block",marginTop:"0"}}," YC & Sequoia backed Series C startup")),description:i.a.createElement("ul",null,i.a.createElement("li",null,"Managed portfolio risk of loan book sized 50 Mn+ USD, 150+ US SMEs "),i.a.createElement("li",null,"Developed ML based probabilistic credit and fraud risk controls"),i.a.createElement("li",null,"Onboarded new data vendors - credit bureaus, alternate data providers etc")),date:"Sep' 22 - May' 24",icon:i.a.createElement(M.b,null),tags:["ml","AWS","financial statement analysis","credit risk modelling","risk management","PostgreSQL"]},{id:"work-3",title:"Risk Analyst II",company:i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"larger",display:"block",marginTop:"0"}},"American Express"),i.a.createElement("div",{style:{fontSize:"smaller",display:"block",marginTop:"0"}}," US Consumer Cards Business")),description:i.a.createElement("ul",null,i.a.createElement("li",null,"Managed Sentinel, pre - underwriting risk control, baking in company's macro economic outlook into model threholds"),i.a.createElement("li",null,"Nominated for Howard's Advisory Board as B30 & 35 representative ")),date:"Aug' 21 - Sep' 22",icon:i.a.createElement(T.a,null),tags:["boosting","HiveQL","python","SAS","leadership"]},{id:"work-2",title:"Undergraduate & Graduate Student",company:i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"larger",display:"block",marginTop:"0"}},"IIT Kharagpur (KGP)"),i.a.createElement("div",{style:{fontSize:"smaller",display:"block",marginTop:"0"}}," Bachelors & Masters in Chemical Engineering")),description:i.a.createElement("ul",null,i.a.createElement("li",null,"Awared Honorable Mention at graduation"),i.a.createElement("li",null,"International Internship - ML Research Intern, NTHU Taiwan "),i.a.createElement("li",null,"Student Activities - Governor, Business Club; Captain, Inter IIT Case Study Team, NSS Volunteer ")),date:"Jul' 16 - Jul' 21",icon:i.a.createElement(I.b,null),tags:["C","C++","MATLAB","neural networks","bayesian optimization","volunteering"]}]},j=(t(86),function(){return i.a.createElement("section",null,i.a.createElement(d.a,{fluid:!0,className:"home-content",id:"home"},i.a.createElement(b.a,null,i.a.createElement(y.a,{className:"home-header",style:{textAlign:"center"}},i.a.createElement("div",null,B.greeting),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(N,{titles:B.titles})),i.a.createElement("div",null,i.a.createElement(S,{about:B.about}))))),i.a.createElement(d.a,{fluid:!0,className:"resume-content",id:"resume"},i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(A,{items:B.workTimeline}))))}),R=(t(30),function(e){return i.a.createElement("ul",{className:"card__footer"},e.item.links.map(function(a){return i.a.createElement("li",{key:e.item.id+a.name,title:a.name},i.a.createElement("a",{className:"card__btn",href:a.url,target:e.item.target,rel:"noopener noreferrer"},a.icon))}))}),U=function(e){return i.a.createElement("div",{className:"card",key:e.item.id},i.a.createElement("a",{style:{display:"flex"},href:e.item.links[0].url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:{backgroundImage:"url('"+e.item.image+"')"},className:"card__img",alt:e.item.title})),i.a.createElement("div",{className:"card__body"},i.a.createElement("h3",{className:"card__title"},i.a.createElement("strong",null,e.item.title)),i.a.createElement("p",{className:"card__description"},e.item.description),i.a.createElement("hr",{className:"card__line"}),i.a.createElement(R,{item:e.item})))},O=t(57),F=t.n(O),D=t(58),G=t.n(D),K=t(59),H=t.n(K),V=t(60),Q=t.n(V),Z=t(61),q=t.n(Z),J=[{id:"project-5",title:"Credit Rating Migration & Adverse News ",links:[{name:"repo",url:"https://github.com/aman-uta-kgp/credit_rating_migration",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/aman-uta-kgp/credit_rating_migration/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://github.com/aman-uta-kgp/credit_rating_migration/subscription",icon:i.a.createElement(p.b,null)}],image:F.a,description:"Does adverse public information like litigation or judgements influence company credit ratings? Let's find out.",target:"_blank"},{id:"project-4",title:"Customer Churn Prediction in Telecom Industry",links:[{name:"repo",url:"https://github.com/aman-uta-kgp/customer_churn_prediction",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/aman-uta-kgp/customer_churn_prediction/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://github.com/aman-uta-kgp/customer_churn_prediction/subscription",icon:i.a.createElement(p.b,null)}],image:G.a,description:"Using customer churn prediction to maximize portfolio LTV under retention budget constraints",target:"_blank"},{id:"project-3",title:"BSM Options Pricing Model",links:[{name:"repo",url:"https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine/subscription",icon:i.a.createElement(p.b,null)}],image:H.a,description:"Implementation of Black Scholes Merton Option Pricing Model for a non dividend paying European option.",target:"_blank"},{id:"project-2",title:"Binomial Pricing using CRR Strategy",links:[{name:"repo",url:"https://github.com/aman-uta-kgp/binomial_pricing_model",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/aman-uta-kgp/binomial_pricing_model/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://github.com/aman-uta-kgp/binomial_pricing_model/subscription",icon:i.a.createElement(p.b,null)}],image:Q.a,description:"Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",target:"_blank"},{id:"project-1",title:"Loan Amortization Calculator",links:[{name:"repo",url:"https://github.com/aman-uta-kgp/loan_amortization",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/aman-uta-kgp/loan_amortization/fork",icon:i.a.createElement(M.a,null)},{name:"subscription",url:"https://github.com/aman-uta-kgp/loan_amortization/subscription",icon:i.a.createElement(p.b,null)}],image:q.a,description:"C++ implementation of a vanilla loan amortization schedule.",target:"_blank"}],Y=(t(87),function(){return i.a.createElement("div",{className:"wrapper"},J.map(function(e){return i.a.createElement(U,{item:e})}))}),W=t(45),X=(t(47),function(e){return i.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,a){return i.a.createElement("li",{className:e.className,key:e.id},e.icon,i.a.createElement("p",{className:e.className+"-text"},e.text))}))}),$=t(12),ee=t(62),ae=t(36),te=t(44),ne={mainSkills:[{id:"skills-0",className:"skill-icon",icon:i.a.createElement($.f,{size:50}),text:"Python"},{id:"skills-1",className:"skill-icon",icon:i.a.createElement($.g,{size:50}),text:"R"},{id:"skills-2",className:"skill-icon",icon:i.a.createElement(te.a,{size:50}),text:"C / C++"},{id:"skills-3",className:"skill-icon",icon:i.a.createElement(te.b,{size:50}),text:"MATLAB"},{id:"skills-4",className:"skill-icon",icon:i.a.createElement($.d,{size:50}),text:"PostgreSQL"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(ee.a,{size:50}),text:"MySQL"}],complementarySkills:[{id:"skills-6",className:"skill-icon",icon:i.a.createElement(ae.a,{size:50}),text:"AMS Sagemaker"},{id:"skills-7",className:"skill-icon",icon:i.a.createElement($.e,{size:50}),text:"Power BI"},{id:"skills-8",className:"skill-icon",icon:i.a.createElement($.c,{size:50}),text:"MS Office Suite"},{id:"skills-9",className:"skill-icon",icon:i.a.createElement($.h,{size:50}),text:"Tableau"},{id:"skills-10",className:"skill-icon",icon:i.a.createElement($.b,{size:50}),text:"Metabase"}]},ie=function(){return i.a.createElement("section",{id:"skills"},i.a.createElement("div",null,i.a.createElement("div",{className:"skills-div"},i.a.createElement("h1",{className:"main-skills-h1"},i.a.createElement("span",{className:"main-skills"},i.a.createElement("strong",null,"Languages"))),i.a.createElement(W.a,{effect:"bounce"},i.a.createElement("div",{className:"main-skills"},i.a.createElement(X,{config:ne.mainSkills}))),i.a.createElement("h1",{className:"main-skills-h1"},i.a.createElement("span",{className:"complementary-skills"},i.a.createElement("strong",null,"Tools & Platforms"))),i.a.createElement(W.a,{effect:"bounce"},i.a.createElement("div",{className:"complementary-skills"},i.a.createElement(X,{config:ne.complementarySkills}))))))},le=t(64),re=t.n(le),oe=[{id:"blog-8",title:"How to Solve Scheduling Problems in Python",links:[{name:"article",url:"https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451",icon:i.a.createElement($.a,null)}],image:"https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",description:"Use linear programming to minimize the difference between required and scheduled resources.",target:"_blank"},{id:"blog-7",title:"Adaptive Parameters Methods for Machine Learning",links:[{name:"article",url:"https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71",icon:i.a.createElement($.a,null)}],image:"https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",description:"Let's explore some methods to adapt your parameters over time.",target:"_blank"},{id:"blog-6",title:"Evolutionary Feature Selection for Machine Learning",links:[{name:"article",url:"https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12",icon:i.a.createElement($.a,null)}],image:"https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",description:"Learn how to make feature selection for machine learning algorithms using evolutionary models.",target:"_blank"},{id:"blog-5",title:"Real-time anomaly detection with Apache Kafka and Python",links:[{name:"article",url:"https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9",icon:i.a.createElement($.a,null)},{name:"repo",url:"https://github.com/customizedMe",icon:i.a.createElement(p.c,null)}],image:"https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",description:"Learn how to make predictions over streaming data coming from Kafka using Python.",target:"_blank"},{id:"blog-4",title:"Serve a machine learning model using Sklearn, FastAPI, and Docker",links:[{name:"article",url:"https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b",icon:i.a.createElement($.a,null)},{name:"repo",url:"https://github.com/rodrigo-arenas/fast-ml-deploy",icon:i.a.createElement(p.c,null)}],image:re.a,description:"Get your model machine learning model to production as a containerized API.",target:"_blank"},{id:"blog-3",title:"Are You Still Using Grid Search for Hyperparameters Optimization?",links:[{name:"article",url:"https://towardsdatascience.com/hyperparameters-tuning-from-grid-search-to-optimization-a09853e4e9b8",icon:i.a.createElement($.a,null)}],image:"https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",description:"Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",target:"_blank"},{id:"blog-2",title:"Tune Your Scikit-learn Model Using Evolutionary Algorithms",links:[{name:"article",url:"https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16",icon:i.a.createElement($.a,null)}],image:"https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",description:"Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",target:"_blank"},{id:"blog-1",title:"Manage your machine learning life cycle with MLflow in Python",links:[{name:"article",url:"https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682",icon:i.a.createElement($.a,null)},{name:"repo",url:"https://github.com/rodrigo-arenas/mlflow-basics",icon:i.a.createElement(p.c,null)}],image:"https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",description:"Enable collaboration across data scientists; gain control over different models versions, multiple experiments within the same problem, and models management and deployment.",target:"_blank"},{id:"blog-0",title:"Workforce planning optimization using Python",links:[{name:"article",url:"https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a",icon:i.a.createElement($.a,null)}],image:"https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",description:"Learn how to find the optimal number of positions needed to manage incoming traffic.",target:"_blank"}],ce=function(){return i.a.createElement("div",{className:"wrapper"},oe.map(function(e){return i.a.createElement(U,{item:e})}))};var se=function(){var e=Object(c.e)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},me=t(65),ue={icons:[{id:"footer-0",url:"https://github.com/aman-uta-kgp",className:"social-icon",target:"_blank",icon:i.a.createElement(p.c,{size:50})},{id:"footer-1",url:"https://www.linkedin.com/in/sharmaaman5598",className:"social-icon",target:"_blank",icon:i.a.createElement(ae.b,{size:50})},{id:"footer-2",url:"mailto:aman.sharma@utexas.edu",className:"social-icon",target:"_blank",icon:i.a.createElement(I.a,{size:50})},{id:"footer-2",url:"tel:(737)-368-6870",className:"social-icon",target:"_blank",icon:i.a.createElement(me.a,{size:50}),title:"(737) - 368 - 6870"}]},de=(t(49),function(){return i.a.createElement("div",{className:"social-icons"},ue.icons.map(function(e){return i.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,title:e.title,rel:"noopener noreferrer"},e.icon)}))}),pe=function(){return i.a.createElement(d.a,{fluid:!0,className:"footer"},i.a.createElement(b.a,null,i.a.createElement(y.a,{className:"footer-body"},i.a.createElement(de,null))))};t(91),t(92);"undefined"!==typeof Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio"}).REACT_APP_TRACKING_ID&&s.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio"}).REACT_APP_TRACKING_ID);var ge=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(k,null),i.a.createElement("br",null),i.a.createElement(se,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/portfolio",exact:!0,element:i.a.createElement(j,null)}),i.a.createElement(c.a,{path:"/projects",exact:!0,element:i.a.createElement(Y,null)}),i.a.createElement(c.a,{path:"/blogs",exact:!0,element:i.a.createElement(ce,null)}),i.a.createElement(c.a,{path:"/skills",exact:!0,element:i.a.createElement(ie,null)})),i.a.createElement(pe,null)))};t(93);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ge,null)),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.88283110.chunk.js.map