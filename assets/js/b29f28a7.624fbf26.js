"use strict";(self.webpackChunkrf_website=self.webpackChunkrf_website||[]).push([[1632],{14917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(74848),a=t(28453);const o={title:"Refactoring",description:"Revising code to improve its structure without changing its behavior.",tags:["Refactoring","Practice"],featured:{class:"c",element:"<action>Refactor</action>"},practice:{aka:["Code Cleanup","Code Optimization","Technical Debt Management","Factoring","Separation of Concerns","Modularisation","Creating Abstractions"],mitigates:[{tag:"Complexity Risk",reason:"Refactoring is aimed at making code more orthogonal, less duplicative and clearer to understand"},{tag:"Implementation Risk",reason:"Enhances code quality and maintainability."},{tag:"Communication Risk",reason:"Well-factored code should be easier to understand."}],attendant:[{tag:"Schedule Risk",reason:"Refactoring can be time-consuming and delay project timelines."},{tag:"Regression Risk",reason:"Done carelessly, refactoring can introduce new issues into the codebase"}],related:["../Development-and-Coding/Coding","../Testing-and-Quality-Assurance/Regression-Testing","../Planning-and-Management/Change-Management","../Planning-And-Management/Design"]}},r=void 0,s={id:"practices/Development-And-Coding/Refactoring",title:"Refactoring",description:"Revising code to improve its structure without changing its behavior.",source:"@site/docs/practices/Development-And-Coding/Refactoring.md",sourceDirName:"practices/Development-And-Coding",slug:"/practices/Development-And-Coding/Refactoring",permalink:"/practices/Development-And-Coding/Refactoring",draft:!1,unlisted:!1,editUrl:"https://github.com/risk-first/website/blob/master/docs/practices/Development-And-Coding/Refactoring.md",tags:[{inline:!1,label:"Refactoring",permalink:"/tags/Refactoring"},{inline:!1,label:"Practice",permalink:"/tags/Practice"}],version:"current",frontMatter:{title:"Refactoring",description:"Revising code to improve its structure without changing its behavior.",tags:["Refactoring","Practice"],featured:{class:"c",element:"<action>Refactor</action>"},practice:{aka:["Code Cleanup","Code Optimization","Technical Debt Management","Factoring","Separation of Concerns","Modularisation","Creating Abstractions"],mitigates:[{tag:"Complexity Risk",reason:"Refactoring is aimed at making code more orthogonal, less duplicative and clearer to understand"},{tag:"Implementation Risk",reason:"Enhances code quality and maintainability."},{tag:"Communication Risk",reason:"Well-factored code should be easier to understand."}],attendant:[{tag:"Schedule Risk",reason:"Refactoring can be time-consuming and delay project timelines."},{tag:"Regression Risk",reason:"Done carelessly, refactoring can introduce new issues into the codebase"}],related:["../Development-and-Coding/Coding","../Testing-and-Quality-Assurance/Regression-Testing","../Planning-and-Management/Change-Management","../Planning-And-Management/Design"]}},sidebar:"tutorialSidebar",previous:{title:"Prototyping",permalink:"/practices/Development-And-Coding/Prototyping"},next:{title:"Runtime Adoption",permalink:"/practices/Development-And-Coding/Runtime-Adoption"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Abstractions",id:"abstractions",level:2},{value:"External References",id:"external-references",level:2},{value:"See Also",id:"see-also",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{PracticeIntro:t,TagList:r}=n;return t||p("PracticeIntro",!0),r||p("TagList",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{details:o}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:['"Code refactoring is the process of restructuring existing computer code\u2014changing the factoring\u2014without changing its external behavior. Refactoring improves nonfunctional attributes of the software." - ',(0,i.jsxs)(n.a,{href:"https://en.wikipedia.org/wiki/Code_refactoring",children:["Code refactoring, ",(0,i.jsx)(n.em,{children:"Wikipedia"})]})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Refactoring involves revising and restructuring existing code to improve its readability, maintainability, and performance without changing its external behavior. This practice helps in reducing technical debt, enhancing code quality, and making the codebase easier to understand and modify."}),"\n",(0,i.jsx)(n.h2,{id:"abstractions",children:"Abstractions"}),"\n",(0,i.jsx)(n.p,{children:"Refactoring is all about ensuring you have the right abstractions."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'"An abstraction" is the outcome of this process\u2014a concept that acts as a common noun for all subordinate concepts and connects any related concepts as a group, field, or category.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"See:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/risks/Complexity-Risk#refactoring",children:"Refactoring"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/risks/Staging-And-Classifying#the-power-of-abstractions",children:"The Power of Abstractions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/risks/Complexity-Risk#hierarchies-and-modularisation",children:"Hierarchies and Modularisation"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"external-references",children:"External References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",children:"Separation of Concerns"})," Wikipedia Page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://martinfowler.com/books/refactoring.html",children:"Refactoring"})," Book by Martin Fowler."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsx)(r,{tag:"Refactoring"})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);