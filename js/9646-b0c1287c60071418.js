!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9a756a7b-516d-48ef-9305-6ba083a8fca2",e._sentryDebugIdIdentifier="sentry-dbid-9a756a7b-516d-48ef-9305-6ba083a8fca2")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9646],{9037:function(e,t,r){"use strict";var i=r(27573),n=r(35725),a=r(45531),s=r.n(a),o=r(7653),l=r(28650),c=r(63004),d=r.n(c);let u=(0,o.forwardRef)((e,t)=>{let{variant:r,type:a="button",size:o="md",fullWidth:c=!1,loading:u=!1,disabled:g=!1,destructive:h=!1,className:_,startIcon:m,endIcon:f,...p}=e;return(0,i.jsx)(l.Z,{...p,ref:t,type:a,className:s()(d().button,_,d()[`button--size-${o}`],d()[`button--variant-${r}`],{[d()["button--disabled"]]:g,[d()["button--loading"]]:u,[d()["button--destructive"]]:h,[d()["button--fullWidth"]]:c}),"aria-disabled":g||u,onClick:e=>{if(u||g){e.preventDefault();return}p.onClick?.(e)},children:u?(0,n.Z)("Laddar"):(0,i.jsxs)(i.Fragment,{children:[m,p.children,f]})})});t.Z=u},21009:function(e,t,r){"use strict";r.d(t,{AuthenticationProvider:function(){return eL},FV:function(){return eN},rJ:function(){return eH},vg:function(){return eq},Fp:function(){return eb},kV:function(){return e2},zP:function(){return e4},ih:function(){return e0},a9:function(){return eK},Ey:function(){return el},A:function(){return eG},wh:function(){return e3},$q:function(){return e1},HT:function(){return e5},k3:function(){return e7},Tt:function(){return ea}});var i=r(27573),n=r(83499),a=r(57748),s=r(43640),o=r(59373),l=r(91138),c=r(66221),d=r(96669),u=r(9037),g=r(76863),h=r(38556),_=r(26165),m=r(98535),f=r(92575),p=r(7653);let b={en:"English",sv:"Swedish"},y=async()=>{let e=new n.OL,t=Object.entries(b).map(async t=>{let[r,i]=t;return{code:r,locale:(await e.getLocaleWithClaims({language:i})).locale}});for(let e of(await Promise.all(t)))e.locale&&f.ag.addResourceBundle(e.code,f.A7,e.locale,!1,!0);f.ag.reloadResources()};var x=r(49811),v=r(52784),w=r(68548),Z=r(35725),j=r(40785),z=r(26821),C=r(65880),P=r(23618),S=r(839),A=r(69203),L=r(86286),k=r(79162),T=r(59245),N=r(35273),I=r(45531),D=r.n(I);let O=(0,p.createContext)({userID:"",activeOrganizationID:""}),E=O.Provider,U=()=>(0,p.useContext)(O),R=e=>e.user_is_admin||e.user_is_scheduler||e.user_is_manager||"ServiceAccount"===e.user_category;var W=r(76546),H=r.n(W),M=e=>{let{profile:t,onSelect:r,app:n,disabled:s}=e,{t:o}=(0,f.T_)(),l="Admin"===n&&!R(t),{activeOrganizationID:c,userID:d}=U(),u=a.wy.useOrganizationMutation({onSuccess:()=>l?window.location.href=h.D.LMS_URL:(window.location.href="/",r?.())}),g=c===t.organization_id&&d===t.user_id;return(0,i.jsxs)("button",{type:"button",disabled:s,onClick:()=>{u.mutate({organization_id:t.organization_id,user_id:t.user_id})},className:H().profileCard,children:[(0,i.jsxs)("div",{className:D()(H().profileAvatars,{[H()["profileAvatars--disabled"]]:s}),children:[(0,i.jsx)("div",{className:D()(H().userAvatarWrapper,{[H()["userAvatarWrapper--active"]]:g}),children:(0,i.jsx)(_.Yt,{user:{id:t.user_id,first_name:t.user_first_name,last_name:t.user_last_name,profile_image_file_url:t.user_profile_image_url},size:"8xl",className:H().userAvatar})}),(0,i.jsx)(N.ld,{organization:{display_name:t.organization_name,logo_file_url:t.organization_logo_url},size:"md",className:H().organizationAvatar})]}),(0,i.jsxs)("div",{className:D()(H().profileName,{[H()["profileName--disabled"]]:s}),children:[(0,i.jsx)("p",{className:T.X.Label_SM_Semibold,children:`${t.user_first_name} ${t.user_last_name}`}),(0,i.jsx)("p",{className:D()(T.X.Label_XS_Regular,H().profileName__userRole),children:o(_.p5.getRoleFromProfile({profile:t,disabled:s}))})]})]})},F=r(82824),$=r.n(F),B=e=>{let{userProfiles:t,onSelect:r,app:n,organizationName:a,disabled:s}=e;return(0,i.jsxs)("div",{className:$().organizationCard,children:[(0,i.jsx)("div",{className:$().organizationCard__cardHeader,children:(0,i.jsx)("p",{className:T.X.Label_XS_Semibold,children:a})}),(0,i.jsx)("div",{className:$().organizationCard__cardContent,children:t.map(e=>e.organization_name===a?(0,i.jsx)(M,{disabled:s,profile:e,onSelect:r,app:n},e.user_id+e.organization_id):null)})]},a)},Y=r(10865),Q=r.n(Y),J=e=>{let{onLogOut:t}=e,{t:r}=(0,f.T_)();return(0,i.jsx)("div",{className:Q().selectProfile__bottomBar,children:(0,i.jsx)(l.Z,{endIcon:(0,i.jsx)(k.J,{name:"icon-arrow-out-16"}),onClick:t,size:"sm",variant:"primary",children:r(f.ZT.Login.Logout)})})},X=r(43482),q=r(35542),V=r.n(q),G=e=>{let{onLogOut:t}=e,{t:r}=(0,f.T_)();return(0,i.jsxs)("div",{className:V().selectProfile__topBar,children:[(0,i.jsx)(C.default,{src:X.Z,alt:"Logo",height:28}),(0,i.jsx)(l.Z,{endIcon:(0,i.jsx)(k.J,{name:"icon-arrow-out-16"}),onClick:t,size:"sm",variant:"primary",children:r(f.ZT.Login.Logout)})]})},K=r(24826),ee=r.n(K);let et=e=>Array.from(new Set(e.map(e=>e.organization_name))).sort();var er=e=>{let{app:t,userProfiles:r,disabledUserProfiles:n,onSelect:a,onLogOut:s}=e,{t:o}=(0,f.T_)(),l=(0,A.Z)();return(0,L.Z)(o(f.ZT.PageTitle.SelectProfile)),(0,i.jsx)(S.Z,{className:ee().scrollable,children:(0,i.jsxs)("div",{className:ee().selectProfile,children:[(0,i.jsx)(G,{onLogOut:s}),(0,i.jsxs)("div",{className:ee().selectProfile__content,children:[l?(0,i.jsx)("h4",{className:T.X.Heading_XL,children:o(f.ZT.Login.ChooseStudent)}):(0,i.jsx)("h2",{className:T.X.Heading_4XL,children:o(f.ZT.Login.ChooseStudent)}),r.length>0?(0,i.jsx)("div",{className:ee().selectProfile__profilesWrapper,children:et(r).map(e=>(0,i.jsx)(B,{onSelect:a,app:t,userProfiles:r,organizationName:e},e))}):null,n.length>0?(0,i.jsxs)("div",{className:ee().noAccessWrapper,children:[(0,i.jsxs)("div",{className:ee().noAccessWrapper__heading,children:[(0,i.jsx)(k.J,{name:"icon-padlock-closed-24"}),(0,i.jsx)("h6",{className:T.X.Heading_MD,children:o(f.ZT.Login.ChooseDisabledStudent)})]}),et(n).map(e=>(0,i.jsx)("div",{children:(0,i.jsx)(B,{userProfiles:n,organizationName:e,disabled:!0,app:t})},e))]}):null]}),(0,i.jsx)(J,{onLogOut:s})]})})};let ei=(0,p.createContext)({topOrganizationID:"",activeOrganizationID:"",userID:"",studentUserID:"",studentUserIDOrUserID:"",userCategory:"Employee",roles:[],organizationCategory:"Organization",isGuardianModeActive:!1,openProfileSelect:()=>{},setStatus:()=>{},isAdult:!1,refetchAuth:()=>{}}),en=ei.Provider,ea=()=>(0,p.useContext)(ei);var es=r(72142),eo=r(12157);let el=!!("localhost"!==window.location.hostname&&h.D.YOUR_LOCAL_IP&&h.D.DEV),ec=el&&h.D.YOUR_LOCAL_IP?`${h.D.YOUR_LOCAL_IP}:3050`:h.D.SSO_URL,ed=el&&h.D.YOUR_LOCAL_IP?`${h.D.YOUR_LOCAL_IP}:3020`:h.D.ADMIN_URL,eu="tokenExpiresAt",eg=e=>e?.organization!==null,eh=[es.b.AuthenticationClaimsIssuer.User,es.b.AuthenticationClaimsIssuer.Support,es.b.AuthenticationClaimsIssuer.RefreshToken],e_=e=>!!e&&!eh.some(t=>t===e.issuer),em=(e,t)=>!!e?.organization&&!!("LMS"===t||e.organization.user_category===es.b.UserCategory.ServiceAccount||"Admin"===t&&(e.organization.user_employee_roles.includes("ADMIN")||e.organization.user_employee_roles.includes("SCHEDULER")||e.organization.user_employee_roles.includes("MANAGER"))),ef=(e,t)=>!!e?.organization&&("LMS"!==t||e.organization.organization_category===es.b.OrganizationCategory.School),ep=()=>{v.Z.set(eu,eo.Z.getUTC(eo.Z.incrementHours(new Date,10)))},eb=()=>{if(!ec)throw Error("Missing REDIRECT_URL");window.location.href=`${ec}/logout?redirect=${window.location.href}`},ey=new n.$h,ex=()=>{window.location.href=`${ec??""}?redirect=${window.location.href}`},ev=()=>{let e=(0,m.Z)();(0,p.useEffect)(()=>{let t=setInterval(()=>{let t=v.Z.get(eu);if(t&&new Date(t)<new Date){if(!e){ex();return}ey.appCookie({}).then(e=>{if(!e.reauthenticate){ep();return}ex()}).catch(e=>{let t=(0,s.aY)(e);(500===t||403===t)&&eb()})}},1e3);return()=>{clearInterval(t)}},[e])};var ew=r(11595),eZ=r.n(ew);let ej=new n.$h,ez=new n.KD,eC=async e=>{let{claims:t}=await ej.getAuthenticationClaims({});if(!t||e_(t))return{status:"redirect",redirectURL:`${ec}?redirect=${window.location.href}`};v.Z.set(eu,t.expires_at);let{user_profiles:r,disabled_user_profiles:i}=await ez.listUserProfiles({});if(eg(t))return em(t,e)?ef(t,e)?{status:"showPlatform",claims:t,userProfiles:r,disabledUserProfiles:i}:{status:"redirect",redirectURL:ed}:{status:"userIsNotAdmin",claims:t,userProfiles:r,disabledUserProfiles:i};if(r.length>1)return{status:"userNeedsToSelectProfile",claims:t,userProfiles:r,disabledUserProfiles:i};let n=r[0];return n?(await ej.organization({organization_id:n.organization_id,user_id:n.user_id}),eC(e)):{status:"userDoesNotHaveAnyProfiles",claims:t}},eP=e=>{let t=(0,a.gr)(),r=(0,m.Z)(),[i,n]=(0,p.useState)("init"),[o,l]=(0,p.useState)(),[c,d]=(0,p.useState)([]),[u,g]=(0,p.useState)([]),h=(0,p.useCallback)(async()=>{let r=await eC(e);if("redirect"===r.status){window.location.href=r.redirectURL??"";return}await y(),n(r.status),l(r.claims),d(r.userProfiles??[]),g(r.disabledUserProfiles??[]),t.setListUserProfilesQueryData({},{user_profiles:r.userProfiles??[],disabled_user_profiles:r.disabledUserProfiles??[]})},[e,t]);return(0,p.useEffect)(()=>{if(!r){h();return}ej.appCookie({}).then(e=>{h(),e.app_cookie&&(0,w.ZP)({message:w.hW.AppToken,value:e.app_cookie}),e.reauthenticate||ep()}).catch(e=>{let t=(0,s.aY)(e);if(500===t||403===t){eb();return}h()})},[h,r]),{status:i,claims:o,userProfiles:c,refetch:h,setStatus:n,disabledUserProfiles:u}},eS=()=>{let e=a.Ck.useListUserProfilesQuery({},{staleTime:1/0});return e.data&&e.data.user_profiles.length>1},eA=()=>(0,i.jsx)("div",{className:eZ().background,children:(0,i.jsx)(d.Z,{center:!0,style:{inlineSize:"100%",blockSize:"100%"},children:(0,i.jsx)(g.Z,{useMinimumTime:!0})})});var eL=e=>{let{app:t,children:r}=e,{t:n}=(0,f.T_)(),a=(0,z.NL)(),{status:s,claims:g,userProfiles:m,refetch:p,setStatus:b,disabledUserProfiles:y}=eP(t);ev();let{currentUser:v}=(0,_.xJ)("showPlatform"===s),S=()=>{a.clear(),p()};if("serverError"===s)return(0,i.jsxs)("div",{className:eZ().background,children:[(0,i.jsx)(C.default,{src:x.Z.ServerDown,alt:"Server down illustration",width:300}),(0,i.jsx)(o.Z,{variant:"h2",style:{marginBlock:20},align:"center",color:"secondary",weight:500,children:(0,Z.Z)("Hoppsan, det verkar vara n\xe5got fel p\xe5 v\xe5r server just nu! F\xf6rs\xf6k igen senare!")}),j.Z.isDevelop||j.Z.isDev||j.Z.isLocal?(0,i.jsx)(l.Z,{variant:"secondary",size:"md",startIcon:(0,i.jsx)(c.Z,{variant:"solid",fontAwesomeIcon:"rotate-right"}),onClick:()=>{window.location.reload()},children:(0,Z.Z)("F\xf6rs\xf6k igen")}):null]});if("userNeedsToSelectProfile"===s){let e=g?.organization?.user_id,r=g?.organization?.active_organization_id;return(0,i.jsx)(E,{value:{userID:e||"",activeOrganizationID:r||""},children:(0,i.jsx)("div",{className:eZ().background,children:(0,i.jsx)(er,{app:t,userProfiles:m,onSelect:()=>{S(),(0,w.ZP)({message:w.hW.Authenticated})},disabledUserProfiles:y,onLogOut:eb})})})}if("userDoesNotHaveAnyProfiles"===s)return(0,i.jsxs)("div",{className:eZ().background,children:[(0,i.jsx)(C.default,{src:x.Z.NotFound,alt:"No results illustration",width:400}),(0,i.jsx)("h3",{style:{marginBlock:20},children:n(f.ZT.Login.NoProfile)}),(0,i.jsx)(l.Z,{variant:"primary",size:"md",onClick:eb,children:n(f.ZT.Login.Logout)})]});if("showPlatform"===s&&g?.organization&&v){let e=g.organization;return(0,i.jsx)(en,{value:{topOrganizationID:e.top_organization_id,activeOrganizationID:e.active_organization_id,userID:e.user_id,studentUserID:e.student_user_id,studentUserIDOrUserID:e.student_user_id||e.user_id,userCategory:e.user_category,roles:e.user_employee_roles,organizationCategory:e.organization_category,isGuardianModeActive:!!e.student_user_id,openProfileSelect:()=>{b("userNeedsToSelectProfile")},setStatus:b,isAdult:e.user_is_adult??!1,refetchAuth:S},children:r})}return"userIsNotAdmin"===s?(0,i.jsx)(P.VA,{children:(0,i.jsxs)("div",{className:eZ().background,children:[(0,i.jsx)(C.default,{src:x.Z.Lost,alt:"No permission illustration",width:350,style:{marginBottom:40}}),(0,i.jsx)("h1",{children:n(f.ZT.Login.ErrorOther)}),(0,i.jsx)("h3",{children:n(f.ZT.Status.PermissionQuestion)}),(0,i.jsxs)(d.Z,{gap:10,style:{marginBlockStart:20},children:[m.length>1?(0,i.jsx)(l.Z,{variant:"primary",size:"md",onClick:()=>{b("userNeedsToSelectProfile")},children:n(f.ZT.Profile.Change)}):null,(0,i.jsx)(u.Z,{variant:"secondary",size:"md",href:h.D.LMS_URL,children:n(f.ZT.Status.PermissionErrorPlatform)}),(0,i.jsx)(l.Z,{variant:"secondary",size:"md",onClick:eb,children:n(f.ZT.Login.Logout)})]})]})}):(0,i.jsx)(eA,{})},ek=r(42274),eT=r(25913),eN=e=>{let{onClick:t}=e,{t:r}=(0,f.T_)(),{openProfileSelect:n}=ea();return eS()?(0,i.jsx)(ek.Z,{title:r(f.ZT.Profile.Change),children:(0,i.jsx)(eT.Z,{"aria-label":r(f.ZT.Profile.Change),variant:"tertiary",size:"sm",onClick:()=>{n(),t?.()},children:(0,i.jsx)(k.J,{name:"icon-arrow-left-right-24"})})}):null},eI=r(93139),eD=r(98138),eO=r(49660),eE=r(14207),eU=r(31283),eR=r(94567),eW=r.n(eR),eH=e=>{let{open:t,onSubmitCode:r,onClose:n,title:a,subTitle:s}=e,{t:c}=(0,f.T_)(),{form:u}=(0,eE.cI)(),g=(0,eU.Z)(),[h,_]=(0,p.useState)(!1);return(0,p.useEffect)(()=>()=>{u.reset(),g.clear()},[t,u]),(0,i.jsx)(eI.Z,{"aria-label":c(f.ZT.Login.EnterPassword),open:t,onClose:n,children:(0,i.jsxs)("div",{style:{padding:20,inlineSize:400},children:[(0,i.jsx)("h3",{children:a??c(f.ZT.Login.EnterPassword)}),(0,i.jsx)(eT.Z,{"aria-label":c(f.ZT.Common.Close),variant:"tertiary",size:"sm",style:{position:"absolute",top:5,right:5},onClick:n,children:(0,i.jsx)(k.J,{name:"icon-xmark-24"})}),s?(0,i.jsx)(o.Z,{color:"secondary",children:s}):null,(0,i.jsxs)(eD.Z,{onSubmit:u.handleSubmit(e=>{if(!e.password){g.new((0,Z.Z)("Inget l\xf6senord angivet"));return}_(!0),r(e.password).then(n).catch(()=>{g.new(c(f.ZT.Login.WrongPassword))}).finally(()=>{_(!1)})}),children:[(0,i.jsxs)(d.Z,{gap:10,align:"center",style:{marginBlockStart:10},children:[(0,i.jsx)(eO.Z,{...u.register("password"),type:"password",size:"lg",placeholder:c(f.ZT.Login.Password),"aria-label":c(f.ZT.Login.Password),className:eW().passwordInput,error:g.visible,autoComplete:"off",autoFocus:!0}),(0,i.jsx)(l.Z,{variant:"primary",type:"submit",size:"lg",loading:h,children:c(f.ZT.Common.Continue)})]}),g.visible?(0,i.jsx)(o.Z,{color:"danger",children:g.text}):null]})]})})},eM=r(79198),eF=r(89077),e$=r.n(eF);let eB=new n.$h,eY=new n.KD,eQ=e=>{let{requireAuthenticatedAdmin:t,onSubmit:r,error:n,isLoading:a}=e,{t:s}=(0,f.T_)(),{form:c}=(0,eE.cI)(),[d,u]=(0,p.useState)(),[g,h]=(0,p.useState)(),_=(0,p.useCallback)(async e=>{let r=await eB.sendTwoFactorCode({force:e?.force??!1,require_authenticated_admin:t});u(r.expires_at),h(r.phone_number)},[t]);return(0,p.useEffect)(()=>{_()},[_]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{color:"secondary",children:(0,Z.Z)(`En kod har skickats till ${g??""}`)}),d?(0,i.jsx)(eX,{codeExpiresAt:d}):null,(0,i.jsxs)(eD.Z,{onSubmit:c.handleSubmit(r),children:[(0,i.jsx)(eO.Z,{...c.register("code"),inputMode:"numeric",size:"lg",placeholder:(0,Z.Z)("Kod"),"aria-label":(0,Z.Z)("Kod"),error:n.visible,autoComplete:"off",autoFocus:!0,className:e$().input}),n.visible?(0,i.jsx)(o.Z,{color:"danger",size:14,children:n.text}):null,(0,i.jsx)(l.Z,{variant:"primary",size:"md",type:"submit",fullWidth:!0,style:{marginBlockStart:10},loading:a,children:s(f.ZT.Common.Continue)}),(0,i.jsx)(l.Z,{variant:"tertiary",size:"md",onClick:async()=>_({force:!0}),fullWidth:!0,style:{marginBlockStart:10},children:(0,Z.Z)("Skicka ny kod")})]})]})},eJ=()=>{let{t:e}=(0,f.T_)(),{setCurrentUser:t}=(0,_.xJ)(),{form:r}=(0,eE.cI)(),n=async e=>{t((await eY.updateUserAsEmployeeWithReturnObject({phone_number1:e.phoneNumber})).user_placement)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{color:"secondary",children:[(0,i.jsx)(c.Z,{variant:"solid",color:"danger",fontAwesomeIcon:"triangle-exclamation",style:{marginInlineEnd:5}}),(0,Z.Z)("Ditt konto saknar telefonnummer, ange ett nedan")]}),(0,i.jsxs)(eD.Z,{onSubmit:r.handleSubmit(n),children:[(0,i.jsx)(eO.Z,{...r.register("phoneNumber"),placeholder:"+46700000000",autoComplete:"tel",size:"lg","aria-label":e(f.ZT.Common.Phone),autoFocus:!0,className:e$().input}),(0,i.jsx)(l.Z,{variant:"primary",size:"md",type:"submit",fullWidth:!0,style:{marginBlockStart:10},children:e(f.ZT.Common.Save)})]})]})},eX=e=>{let{codeExpiresAt:t}=e,r=(0,eM.Z)();return eo.Z.after(r,t)?(0,i.jsxs)(o.Z,{color:"secondary",size:14,children:[(0,i.jsx)(c.Z,{variant:"solid",color:"danger",fontAwesomeIcon:"triangle-exclamation",style:{marginInlineEnd:5}}),(0,Z.Z)('Koden har g\xe5tt ut, tryck p\xe5 "Skicka ny kod"')]}):(0,i.jsxs)(o.Z,{color:"secondary",size:14,children:[(0,i.jsx)(c.Z,{variant:"solid",fontAwesomeIcon:"clock",style:{marginInlineEnd:5}}),(0,Z.Z)(`Koden \xe4r giltig i ${eo.Z.getDurationBetweenDates(t,r)}`)]})};var eq=e=>{let{open:t,onSubmitCode:r,onClose:n,requireAuthenticatedAdmin:a=!1,title:s,subTitle:l}=e,{form:c}=(0,eE.cI)(),d=(0,eU.Z)(),{t:u}=(0,f.T_)(),{currentUser:g}=(0,_.xJ)(),[h,m]=(0,p.useState)(!1);return(0,p.useEffect)(()=>()=>{c.reset(),d.clear()},[t,c]),(0,i.jsx)(eI.Z,{"aria-label":(0,Z.Z)("Verifiera identitet"),open:t,onClose:n,children:(0,i.jsxs)("div",{style:{padding:20,inlineSize:400,textAlign:"center"},children:[(0,i.jsx)("h2",{children:s??(0,Z.Z)("Verifiera identitet")}),(0,i.jsx)(eT.Z,{"aria-label":u(f.ZT.Common.Close),variant:"tertiary",size:"sm",style:{position:"absolute",top:5,right:5},onClick:n,children:(0,i.jsx)(k.J,{name:"icon-xmark-24"})}),l?(0,i.jsx)(o.Z,{color:"secondary",children:l}):null,g?.phone_number1?(0,i.jsx)(eQ,{requireAuthenticatedAdmin:a,onSubmit:e=>{if(!e.code){d.new((0,Z.Z)("Ingen kod angiven"));return}m(!0),r(e.code).then(n).catch(()=>{d.new((0,Z.Z)("Felaktig kod!"))}).finally(()=>{m(!1)})},isLoading:h,error:d}):(0,i.jsx)(eJ,{})]})})},eV=r(93419);let eG=()=>{let e=a.rk.useHasAdminPhoneNumberQuery({},{staleTime:1/0});return{hasAdminPhoneNumber:e.data?.has_admin_phone_number??!1}},eK=()=>{let{studentUserID:e}=ea(),t=a.Ck.useGetUserPlacementQuery({user_id:e??""},{enabled:!!e});return t.data?.user_placement},e0=()=>{let{userCategory:e,roles:t}=ea();return(0,p.useMemo)(()=>{let r="Employee"===e,i="Student"===e,n="Guardian"===e,a="ServiceAccount"===e,s=t.includes(es.b.AuthenticationClaimsOrganizationUserEmployeeRoles.ADMIN),o=t.includes(es.b.AuthenticationClaimsOrganizationUserEmployeeRoles.CARE_TEAM),l=t.includes(es.b.AuthenticationClaimsOrganizationUserEmployeeRoles.MANAGER);return{isEmployee:r||a,isStudent:i,isGuardian:n,isServiceAccount:a,isAdmin:s||a,isCareTeam:o||a,isManager:l||a,isOtherPersonnel:t.includes(es.b.AuthenticationClaimsOrganizationUserEmployeeRoles.OTHER_PERSONNEL)||a,isScheduler:t.includes(es.b.AuthenticationClaimsOrganizationUserEmployeeRoles.SCHEDULER)||a,isTeacher:t.includes(es.b.AuthenticationClaimsOrganizationUserEmployeeRoles.TEACHER)||a}},[e,t])},e1=()=>{let e=e4(),t=a.T4.useListOrganizationSchoolTypeYearsQuery({query:{params:{equals:{organization_school_type_id:e?.id??""}}}},{enabled:!!e?.id,staleTime:1/0});return t.data?.organization_school_type_years??[]},e5=()=>{let{activeOrganizationID:e}=ea(),t=a.T4.useListOrganizationSchoolTypeYearsQuery({school_organization_id:e,query:{}},{enabled:!!e,staleTime:1/0});return t.data?.organization_school_type_years??[]},e2=()=>{let{activeOrganizationID:e}=ea(),{organization:t,setOrganization:r}=(0,N.Tk)(e);return(0,p.useEffect)(()=>{t&&(0,eV.$p)("organization",{id:t.id,name:t.display_name})},[t]),{organization:t,setOrganization:r}},e4=()=>{let{activeOrganizationID:e}=ea();return(0,N.Ob)(e)},e3=()=>{let{organization:e}=e2();return{hasUseElementaryCourses:e?.school?.use_elementary_courses??!1}},e7=()=>{let e=e4();return e?{schoolYearOptions:_.p5.getSchoolYearOptionsForTypeOfSchooling(e.type_of_schooling)}:{schoolYearOptions:[]}}},35273:function(e,t,r){"use strict";r.d(t,{ld:function(){return u},Tk:function(){return a},$Y:function(){return l},Ob:function(){return o}});var i=r(57748),n=r(26821);let a=e=>{let t=i.T4.useGetOrganizationQuery({id:e??""},{enabled:!!e,staleTime:1/0}),r=(0,n.NL)();return{organization:t.data?.organization,setOrganization:e=>{r.setQueryData(t.queryKey,e)}}},s=()=>{let e=i.T4.useListOrganizationSchoolTypesQuery({},{staleTime:1/0});return{organizationSchoolTypes:e.data?.organization_school_types??[],isLoading:e.isPending,queryKey:e.queryKey}},o=e=>{let{organization:t}=a(e),{organizationSchoolTypes:r}=s();return r.find(e=>e.id===t?.school?.organization_school_type_id)},l=()=>{let e=i.T4.useListOrganizationSchoolTypeYearsQuery({query:{}},{staleTime:1/0});return e.data?.organization_school_type_years??[]};var c=r(27573),d=r(88324),u=(0,r(7653).forwardRef)((e,t)=>{let{organization:r,size:i,className:n,style:a}=e;return(0,c.jsx)(d.Z,{ref:t,src:r?.logo_file_url,alt:r?.display_name,size:i,className:n,style:a,children:r?.display_name[0]})});r(88297);var g=r(14207);r(92575),r(59245);var h=r(24297);r(54375),r(79162),r(24251),new h.Ip,r(27620),new h.Ip,r(26165),r(45531),r(9537);var _=r(35725);let m=RegExp("^\\+[1-9]\\d{4,14}$"),f=g.wh.string().regex(m,(0,_.Z)("Ogiltigt telefonnummer")).or(g.wh.literal("")),p=g.wh.object({content:g.wh.string(),text:g.wh.string()});g.wh.object({DisplayName:g.wh.string(),ShortName:g.wh.string(),ContactInformation:g.wh.string().transform(g.Pb),WebsiteURL:g.wh.string().transform(g.Pb).transform(e=>{if(null===e)return null;let t=e.trim();return t.startsWith("https://")||t.startsWith("http://")?t:`https://${t}`}).refine(e=>{if(null===e)return!0;try{return new URL(e),!0}catch{return!1}}),EmailAddress:g.wh.string().transform(g.Pb),PhoneNumber:f.transform(g.Pb),OrganizationNumber:g.wh.string().transform(g.Pb),OrganizationCode:g.wh.string().transform(g.Pb),MunicipalityCode:g.wh.string().transform(g.Pb),PostalAddress:g.wh.string().transform(g.Pb),PostalCode:g.wh.string().transform(g.Pb),City:g.wh.string().transform(g.Pb),CountryCode:g.wh.string().transform(g.Pb),OrganizationSchoolTypeID:g.wh.string(),SchoolUnitCode:g.wh.string().transform(g.Pb),CSNSchoolCode:g.wh.string().transform(g.Pb),Organizer:g.wh.string().transform(g.Pb),TimeZone:g.wh.string(),ParentOrganizationID:g.wh.string().transform(g.Pb),LogoImageFileID:g.wh.string().or(g.wh.undefined()).transform(g.Pb),LogoImageFileURL:g.wh.string().or(g.wh.undefined()),BackdropImageFileID:g.wh.string().or(g.wh.undefined()).transform(g.Pb),BackdropImageFileURL:g.wh.string().or(g.wh.undefined()),ExternalSource:g.wh.string().or(g.wh.undefined()).transform(g.Pb),ExternalID:g.wh.string().or(g.wh.undefined()).transform(g.Pb),Description:p.or(g.wh.undefined()).transform(e=>void 0===e?null:e),OwnerUserID:g.wh.string().or(g.wh.null()).transform(g.Pb),PrincipalUserID:g.wh.string().or(g.wh.null()).transform(g.Pb),HasStudentsWithLearningDisabilities:g.wh.boolean(),UseElementaryCourses:g.wh.boolean()})},79198:function(e,t,r){"use strict";var i=r(7653);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,[t,r]=(0,i.useState)(new Date);return(0,i.useEffect)(()=>{let t=setInterval(()=>{r(new Date)},e);return()=>{clearInterval(t)}},[e]),t}},86286:function(e,t,r){"use strict";var i=r(7653);t.Z=e=>{(0,i.useEffect)(()=>{document.title=e},[e])}},49811:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var i={Empty:{src:"/_next/static/media/empty.f6ca7a0b.svg",height:790,width:1010,blurWidth:0,blurHeight:0},ServerDown:{src:"/_next/static/media/server_down.4b2ebe4c.svg",height:699,width:1120,blurWidth:0,blurHeight:0},Friendship:{src:"/_next/static/media/friendship.0c2fcac6.svg",height:781,width:1142,blurWidth:0,blurHeight:0},Selection:{src:"/_next/static/media/selection.bc518af4.svg",height:526,width:748,blurWidth:0,blurHeight:0},NotFound:{src:"/_next/static/media/not_found.05e5635f.svg",height:778,width:1121,blurWidth:0,blurHeight:0},Relaxation:{src:"/_next/static/media/relaxation.a583ea9b.svg",height:773,width:655,blurWidth:0,blurHeight:0},Lost:{src:"/_next/static/media/lost.93a620ca.svg",height:708,width:885,blurWidth:0,blurHeight:0},Guy:{src:"/_next/static/media/guy.43c49054.svg",height:236,width:175,blurWidth:0,blurHeight:0},Girl:{src:"/_next/static/media/girl.54810340.svg",height:234,width:140,blurWidth:0,blurHeight:0},PersonalInformation:{src:"/_next/static/media/personal_information.04488ec0.svg",height:245,width:656,blurWidth:0,blurHeight:0},Search:{src:"/_next/static/media/search.e4d3cadf.svg",height:597,width:872,blurWidth:0,blurHeight:0}}},40785:function(e,t,r){"use strict";var i=r(38556);let n=i.D.ENVIRONMENT,a=i.D.DEV;class s{static get environment(){return n}static get isLocal(){return a}static get isDev(){return"dev"===n}static get isDevelop(){return"develop"===n}static get isStaging(){return"staging"===n}static get isDemo(){return"demo"===n}static get isProduction(){return"production"===n}}t.Z=s},68548:function(e,t,r){"use strict";var i,n,a,s,o,l;r.d(t,{hW:function(){return i}}),(s=i||(i={})).TriggerNotification="trigger-notification",s.OnboardingCompleted="onboarding-completed",s.UpdateToken="update-token",s.OpenSettings="open-settings",s.DarkModeChanged="dark-mode-changed",s.LightModeChanged="light-mode-changed",s.Authenticated="authenticated",s.DecrementBadgeCount="decrement-badge-count",s.IncrementBadgeCount="increment-badge-count",s.SetBadgeCount="set-badge-count",s.SignOut="sign-out",s.TriggerHapticFeedback="trigger-haptic-feedback",s.AppToken="app-token",(o=n||(n={})).Success="success",o.Warning="warning",o.Error="error",(l=a||(a={})).Light="light",l.Medium="medium",l.Heavy="heavy",t.ZP=e=>{let t;t="value"in e?`${e.message}:${e.value}`:e.message,"ReactNativeWebView"in window&&window.ReactNativeWebView.postMessage(t)}},11595:function(e){e.exports={background:"style_background__a7b0_"}},76546:function(e){e.exports={profileCard:"style_profileCard__gXJpT",organizationAvatar:"style_organizationAvatar__48rLv",userAvatarWrapper:"style_userAvatarWrapper__rYQNl","userAvatarWrapper--active":"style_userAvatarWrapper--active__TOT0l",userAvatar:"style_userAvatar___6uyc",profileName:"style_profileName__x7Kx7",profileName__userRole:"style_profileName__userRole__InjPO",profileAvatars:"style_profileAvatars__MRyYm","profileAvatars--disabled":"style_profileAvatars--disabled__SD3Q8","profileName--disabled":"style_profileName--disabled__g97aZ"}},82824:function(e){e.exports={organizationCard:"style_organizationCard__TX51e",organizationCard__cardHeader:"style_organizationCard__cardHeader__uyLcJ",organizationCard__cardContent:"style_organizationCard__cardContent__QaULV"}},10865:function(e){e.exports={selectProfile__bottomBar:"style_selectProfile__bottomBar__hIAte"}},35542:function(e){e.exports={selectProfile__topBar:"style_selectProfile__topBar___nibl"}},24826:function(e){e.exports={scrollable:"style_scrollable__kV1qd",selectProfile:"style_selectProfile__nuRWT",selectProfile__content:"style_selectProfile__content__U_EkJ",selectProfile__profilesWrapper:"style_selectProfile__profilesWrapper__AqvxX",noAccessWrapper:"style_noAccessWrapper__vxLqa",noAccessWrapper__heading:"style_noAccessWrapper__heading__MdGf1"}},94567:function(e){e.exports={passwordInput:"style_passwordInput__w0bwO"}},89077:function(e){e.exports={input:"style_input__fh_JU"}},24251:function(e){e.exports={backdrop:"style_backdrop__mHMQ3"}},27620:function(e){e.exports={logoWrapper:"style_logoWrapper__UAeLj",logo:"style_logo__F1YUQ"}},9537:function(e){e.exports={selectedUserWrapper:"style_selectedUserWrapper__Day0Q",userListHeader:"style_userListHeader__TkkXL",userListWrapper:"style_userListWrapper__0bAgG",userListItem:"style_userListItem__Hhu4J","userListItem--active":"style_userListItem--active__oxFAn"}},43482:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.fbb13871.svg",height:1e3,width:1e3,blurWidth:0,blurHeight:0}}}]);