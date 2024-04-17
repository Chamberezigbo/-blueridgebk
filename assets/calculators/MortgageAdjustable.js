
KJE.MortgageLoanCalculation=function(){this.MSG_ERROR_MAPR=KJE.parameters.get("","KJE1 MAPR exceeds allowable maximum of 36%, adjust fees to reduce the calculated MAPR.");this.bMAPR=KJE.parameters.get("USE_MAPR",false);this.bTERMINMONTHS=KJE.parameters.get("TERM_IN_MONTHS",false);this.MSG_YEAR_NUMBER=KJE.parameters.get("MSG_YEAR_NUMBER","Year Number");this.MSG_POP_PRINCIPAL=KJE.parameters.get("MSG_POP_PRINCIPAL","Total Principal for");this.MSG_POP_INTEREST=KJE.parameters.get("MSG_POP_INTEREST","Total Interest for");this.MSG_PRINCIPAL=KJE.parameters.get("MSG_PRINCIPAL","Principal");this.MSG_INTEREST=KJE.parameters.get("MSG_INTEREST","Interest");this.MSG_PRINCIPAL_BALANCE=KJE.parameters.get("MSG_PRINCIPAL_BALANCE","Principal Balance");this.MSG_POP_PRINCIPAL_NORMAL=KJE.parameters.get("MSG_POP_PRINCIPAL_NORMAL","Principal Balance for Normal Payments Year");this.MSG_POP_PRINCIPAL_PREPAY=KJE.parameters.get("MSG_POP_PRINCIPAL_PREPAY","Principal Balance for Prepayments Year");this.MSG_PREPAYMENTS=KJE.parameters.get("MSG_PREPAYMENTS","Prepayments");this.MSG_NORMAL_PAYMENTS=KJE.parameters.get("MSG_NORMAL_PAYMENTS","Normal");this.MSG_PREPAY_MESSAGE=KJE.parameters.get("MSG_PREPAY_MESSAGE","Your planned prepayment(s) will shorten your mortgage by PREPAY_SHORTEN_TERM.");this.MSG_RETURN_PAYMENT=KJE.parameters.get("MSG_RETURN_PAYMENT","A loan amount of LOAN_AMOUNT at INTEREST_RATE for TERM years will give you a monthly payment (PI) of MONTHLY_PI.");this.MSG_ERROR_BALLOON=KJE.parameters.get("MSG_ERROR_BALLOON","Loan term must be less than the amortization term.");this.PITI_PERCENT=KJE.parameters.get("PITI_PERCENT",false);this.SHOW_PITI=KJE.parameters.get("SHOW_PITI",false);this.USE_OTHER_FEES_AMOUNT=KJE.parameters.get("USE_OTHER_FEES_AMOUNT",true);this.ADJUSTABLE_RATE=false;this.PMI_CALCULATE=KJE.parameters.get("PMI_CALCULATE",false);this.PMI_RATE=KJE.parameters.get("PMI_RATE",0.5);this.MONTHLY_PMI=KJE.parameters.getSet("MONTHLY_PMI",0);this.PMI_PERCENTAGE=KJE.parameters.get("PMI_PERCENTAGE",0.2);this.oldLOAN_AMOUNT=0;this.oldDOWNPAYMENT_20=0;this.OTHER_FEES_MAPR=KJE.FloatArray(5);this.sSchedule=new KJE.Repeating();this.sAdjSchedule=null};KJE.MortgageLoanCalculation.prototype.clear=function(){for(var a=0;a<this.OTHER_FEES_MAPR.length;a++){this.OTHER_FEES_MAPR[a]=0}this.ADJUSTABLE_RATE_CAP=0;this.ADJUSTABLE_RATE_FEQ=12;this.ADJUSTABLE_RATE_FIXED=0;this.ADJUSTABLE_RATE_INCR=0;this.BALLOON_PAYMENT=0;this.DISCOUNT_POINTS_PERCENT=0;this.FEDERAL_TAX_RATE=0;this.INFLATION_RATE=3;this.INTEREST_ONLY=false;this.INTEREST_RATE=0;this.LOAN_AMOUNT=0;this.MARGINAL_TAX_RATE=0;this.MSG_TERM="";this.ORIGINATION_FEES_PERCENT=0;this.OTHER_FEES=0;this.OTHER_FEES_RATE=0;this.PREPAY_AMOUNT=0;this.PREPAY_BALLOON_PAYMENT=0;this.PREPAY_STARTS_WITH=1;this.PREPAY_TYPE=KJE.Default.PREPAY_NONE;this.PURCHASE_PRICE=0;this.DOWNPAYMENT=0;this.RATE_INDEX=0;this.RATE_INDEX_MARGIN=0;this.RECAST_TO_AMORTIZE=1000000;this.SAVINGS_RATE=0;this.STATE_TAX_RATE=0;this.TERM=0;this.TERM_BALLOON=0;this.YEARS_IN_HOME=0;this.YEARLY_HOME_INSURANCE=0;this.YEARLY_PROPERTY_TAXES=0;this.MONTHLY_HOME_ASSOCIATION=0;this.BY_YEAR=true};KJE.MortgageLoanCalculation.prototype.calculate=function(h){var aH=KJE;var V=this.ADJUSTABLE_RATE_CAP;var aO=this.ADJUSTABLE_RATE_FEQ;var m=this.ADJUSTABLE_RATE_FIXED;var M=this.ADJUSTABLE_RATE_INCR;var b=this.ADJUSTABLE_RATE;var aK=this.BALLOON_PAYMENT;var bn=this.bTERMINMONTHS;var X=this.DISCOUNT_POINTS_PERCENT;var aW=this.FEDERAL_TAX_RATE;var D=this.INFLATION_RATE;var ad=this.INTEREST_ONLY;var a2=this.INTEREST_RATE;var a7=this.LOAN_AMOUNT;var P=this.MARGINAL_TAX_RATE;var at=this.ORIGINATION_FEES_PERCENT;var O=this.OTHER_FEES_RATE;var Y=this.OTHER_FEES;var a5=this.OTHER_FEES_MAPR;var Q=this.PREPAY_AMOUNT;var d=this.PREPAY_BALLOON_PAYMENT;var bc=this.PREPAY_STARTS_WITH;var w=this.PREPAY_TYPE;var ae=this.PURCHASE_PRICE;var a8=this.DOWNPAYMENT;var aC=this.RATE_INDEX_MARGIN;var t=this.RATE_INDEX;var aL=this.RECAST_TO_AMORTIZE;var k=this.SAVINGS_RATE;var Z=this.STATE_TAX_RATE;var ax=this.TERM_BALLOON;var W=this.TERM;var I=this.YEARLY_HOME_INSURANCE;var aF=this.YEARLY_PROPERTY_TAXES;var aj=this.YEARS_IN_HOME;var al=this.BY_YEAR;var N="";var S=0;var j="";var ba=0;var bk=0;var E=0;var p=0;var ah=0;var aB=0;var bg=0;var aP=0;var ak=0;var aS=0;var bb=0;var l=0;var o=0;var U=this.MONTHLY_PMI;var f=0;var aI=0;var bh;var e=0;var R=0;var a1=0;var bq="";var ag=0;var aT=0;var bj=0;var av=0;var a9=0;var bd=0;var bi=0;var bw=0;var ay=0;var bl=0;var bf=0;var c=0;var be=0;var T=0;var af=0;var g=0;var aV=KJE.Default.MORTGAGE_TAX_DEDUCT_MAX_BALANCE;var a8=this.DOWNPAYMENT;var ae=this.PURCHASE_PRICE;if(ae==0&&!this.PMI_CALCULATE){ae=a7}else{a7=ae-a8;if(a7<0){a7=0}}if(this.PITI_PERCENT&&this.SHOW_PITI){this.YEARLY_PROPERTY_TAXES=aH.round((this.YEARLY_PROPERTY_TAXES/100)*ae);this.YEARLY_HOME_INSURANCE=aH.round((this.YEARLY_HOME_INSURANCE/100)*ae)}var a6=ae*this.PMI_PERCENTAGE;if(this.PMI_CALCULATE&&(a6!=this.oldDOWNPAYMENT_20||a7!=this.oldLOAN_AMOUNT)){if(a6>a8){U=a7*(this.PMI_RATE/1200)}else{U=0}}this.oldLOAN_AMOUNT=a7;this.oldDOWNPAYMENT_20=a6;if(bn){this.MONTHS=af=W%12;this.TERM=W=Math.floor(W/12)}var y=this.TOTAL_MONTHS=af+W*12;if(P==0){P=((Z/100)*(1-aW/100))*100+aW}if(ad){l=aH.round((a2/1200*a7),2)}else{l=aH.round(KJE.PMT(a2/1200,W*12+af,a7),2)}N=this.MSG_RETURN_PAYMENT;if(aj==0){aj=W+(af/12)}else{if(aj>W){aj=W+(af/12)}}var J=aj*12;if(!this.USE_OTHER_FEES_AMOUNT){Y=aH.round((O/100)*a7,2)}E=aH.round((X/100)*a7,2);aI=aH.round((at/100)*a7,2);bw=E+aI+Y;var C=0;for(var aA=0;aA<a5.length;aA++){C+=a5[aA]}bw+=C;aS=(a7/ae);bb=aH.round(I/12,2);f=aH.round(aF/12,2);MONTHLY_HOME_ASSOCIATION=this.MONTHLY_HOME_ASSOCIATION;o=bb+f+MONTHLY_HOME_ASSOCIATION+l+U;ah=aH.round((a2/1200)*a7,2);aB=(ad?0:l-ah);var v=a2/1200;var aR=P/100;var B=k/1200;g=(t+aC)/100;if(b&&g!=a2/100&&g!=0){if(a7<=0){bl=0}else{bl=KJE.MortgageLoanCalculation.APRAdjustable(W*12+af,a7-(!this.bMAPR?0:bw),bw,a2/100,m,aO,g,M/100,V)}}else{if(a7<=0){bl=0}else{bl=KJE.APR(W*12+af,l,v,a7-(!this.bMAPR?0:bw),bw)*12}}bf=aH.round(KJE.PMT(v,W*12+af,a7+(this.bMAPR?0:bw)),2);c=a7+(this.bMAPR?0:bw);bi=(a2/100)*(1-(aR*(a7>aV?aV/a7:1)));be=(bl)*(1-(aR*(a7>aV?aV/a7:1)));ay=0;ak=0;var az=false;if(ax>0){if(ax>W){throw this.MSG_ERROR_BALLOON}az=true}if(ad&&aL<ax){ax=W;az=true}var aE=Math.round(az?ax:W)+1;var aA=0;var aJ=this.DS_PRINCIPAL_BAL=KJE.FloatArray(aE);var aD=this.DS_PREPAY_PRINCIPAL_BAL=KJE.FloatArray(aE);var aY=this.DS_INTEREST_PAID=KJE.FloatArray(aE);var a4=this.DS_PAYMENTS=KJE.FloatArray(aE);var z=new Array(aE);var x=true;var a0=aF;av=(w==KJE.Default.PREPAY_ONETIME&&bc==0?Q:0);var bp=a7-av;var aX=0;var aG=0;var bu=0;var F=0;var ar=0;var aZ=(ad?ah:l);var bm=0;var K=0;var aQ=a7;var aw=0;var aq=0;var A=0;var bv=0;var L=0;var aa=l;var a3=0;var bs=0;var bo=0;var u=0;var ab=0;var bt=0;if(w==KJE.Default.PREPAY_NONE){x=false}if(bc==0&&w!=KJE.Default.PREPAY_ONETIME){bc=1}var ap=0;z[ap]="0";aD[ap]=bp;aJ[ap]=a7;aY[ap]=0;a4[ap]=0;ap+=1;if(h){var am=this.sSchedule;am.clearRepeat();if(x){am.addHeader("&nbsp;",{sCell:KJE._sHeadingUnderline,sContent:am.sReportCol("Regular Payment Schedule",10),sFormat:"COLSPAN=3"},{sCell:KJE._sHeadingUnderline,sContent:am.sReportCol("Prepayment Payment Schedule",11),sFormat:"COLSPAN=3"})}if(!al&&x){am.addHeader(am.sReportCol("<BR><BR>Nbr",1),am.sReportCol("<BR><BR>Payment",2),am.sReportCol("<BR><BR>Interest",4),am.sReportCol("Ending<BR>Principal<BR>Balance",5),am.sReportCol("<BR><BR>Payment",2),am.sReportCol("<BR><BR>Interest",4),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}else{if(!al&&!x){am.addHeader(am.sReportCol("<BR><BR>Nbr",1),am.sReportCol("<BR><BR>Payment",2),am.sReportCol("<BR><BR>Principal",3),am.sReportCol("<BR><BR>Interest",4),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}else{if(al&&x){am.addHeader(am.sReportCol("<BR><BR>Yr ",6),am.sReportCol("<BR>Total<BR>Payments",7),am.sReportCol("<BR>Interest<BR>Paid",8),am.sReportCol("Ending<BR>Principal<BR>Balance",5),am.sReportCol("<BR>Total<BR>Payments",7),am.sReportCol("<BR>Interest<BR>Paid",8),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}else{am.addHeader(am.sReportCol("<BR><BR>Year",6),am.sReportCol("<BR>Total<BR>Payments",7),am.sReportCol("<BR>Principal<BR>Paid",9),am.sReportCol("<BR>Interest<BR>Paid",8),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}}}if(x){am.addRepeat("&nbsp;","&nbsp;","&nbsp;",aH.dollars(aQ,2),(w==KJE.Default.PREPAY_ONETIME&&bc==0?aH.dollars(Q,2):""),"&nbsp;","&nbsp;",aH.dollars(bp,2))}else{am.addRepeat("&nbsp;","&nbsp;","&nbsp;","&nbsp;",aH.dollars(aQ,2))}}ba=l;var aN=l;var ac=l;var br=a2/100;var ao=a2/100;var aU=0;if(b&&M!=0){if(this.sAdjSchedule==null){this.sAdjSchedule=new KJE.Repeating()}var H=this.sAdjSchedule;H.clearRepeat();H.addHeader(H.sReportCol("Payment Number",12),H.sReportCol("Interest Rate",13),H.sReportCol("Monthly Payment",14));H.addRepeat("1",aH.percent(ao,2),aH.dollars(l,2))}var G=(az?ax*12:W*12+af);for(var au=1;au<=G;au++){aA=au-1;aZ=aN;aa=ac;bm=0;a3=0;if(x&&(bc<=au)){if(w==KJE.Default.PREPAY_ONETIME&&bc==au){bm=Q}else{if(w==KJE.Default.PREPAY_YEARLY){if(((au-bc)%12)==0){bm=Q}}else{if(w==KJE.Default.PREPAY_MONTHLY){bm=Q}}}}aw=aH.round(v*aQ,2);if(ad&&au<=aL){aa=aw}bo=aH.round(v*(aQ>aV?aV:aQ),2);aq=(ad&&au<aL?0:aa-aw);aQ-=aq;if(aQ==0){aa=0;aq=0;aw=0}else{if(aQ<0||(aQ>0.005&&G==au&&!az)){aq+=aQ;aQ=0;aa=aq+aw}else{if(G==au&&!az){aQ=0}}}aX=aH.round(v*bp,2);if(ad&&au<=aL){aZ=aX}u=aH.round(v*(bp>aV?aV:bp),2);if(ad&&au<aL){if(bp==0){aZ=0;aG=0;aX=0;bm=0}else{aG=aZ-aX;bp-=aG+bm;if(bp<0){bm+=bp;bp=0}}}else{aG=aZ-aX;bp-=aG+bm;if(bp==0){aZ=0;aG=0;aX=0;bm=0}else{if(bp<0){bm+=bp;if(bm<0){aG+=bm;bm=0}bp=0;aZ=aG+aX}else{if(bp>0.005&&G==au&&!az){aG+=bp;bp=0;aZ=aG+aX}else{if(G==au&&!az){bp=0}}}}}if(aZ<0){aZ=0}if(bp==0&&aT==0){ag=au;aT=W*12+af-au}bu+=aX;ab+=u;F+=aG;ar+=aZ;K+=bm;av+=aZ+bm;R+=aX;A+=aw;bt+=bo;bv+=aq;L+=aa;ay+=aa;ak+=aw;if((au%12)==0){if(au==12){bg=A;e=bu;aP=(P/100*(E+bt+a0));a3=aP}else{a0*=1+D;a3=((P/100)*(bt+a0))}bs+=a3;bt=0;ab=0;a3=0}if(az&&G==au){aK=aQ+aa;aQ=0;d=bp+aZ+bm;bp=0;ay-=aa;av-=bm+aZ}if(!al&&h){if(x){am.addRepeat(aH.number(au),aH.dollars((az&&G==au?aK:aa),2),aH.dollars(aw,2),aH.dollars(aQ,2),aH.dollars((az&&G==au?d:bm+aZ),2),aH.dollars(aX,2),aH.dollars(bp,2))}else{am.addRepeat(aH.number(au),aH.dollars((az&&G==au?aK:aa),2),aH.dollars((az&&G==au?aK-aw:aq),2),aH.dollars(aw,2),aH.dollars(aQ,2))}}if((au%12)==0){z[ap]=""+ap;if(az&&G==au){aD[ap]=d;aJ[ap]=aK}else{aD[ap]=bp;aJ[ap]=aQ}aY[ap]=A;a4[ap]=(az&&G==au?aK-aa+L:L);ap+=1;if(al&&h){if(x){am.addRepeat(aH.number(au/12),aH.dollars((az&&G==au?aK-aa+L:L),2),aH.dollars(A,2),aH.dollars(aQ,2),aH.dollars((az&&G==au?d-bm-aZ+ar+K:ar+K),2),aH.dollars(bu,2),aH.dollars(bp,2))}else{am.addRepeat(aH.number((au/12)),aH.dollars((az&&G==au?aK-aa+L:L),2),aH.dollars((az&&G==au?aK+bv-aw-aq:bv),2),aH.dollars(A,2),aH.dollars(aQ,2))}}A=0;bt=0;bv=0;L=0;bu=0;ab=0;F=0;ar=0;K=0}if((au==aL)||((au<m?1:(au-m)%aO)==0&&au!=1&&b&&au!=W*12+af&&M!=0&&au>=m)){ao+=M/100;if(ao>V/100){ao=V/100}if(ao<0.02){ao=0.02}if(ao!=br||(au==aL)){br=ao;v=ao/12;aN=aH.round(KJE.PMT(v,W*12+af-au,bp),2);ac=aH.round(KJE.PMT(v,W*12+af-au,aQ),2);if(S==0){S=ac}T=ac;if(ba<ac){ba=ac}if(b&&M!=0){H.addRepeat(au+1,aH.percent(ao,2),aH.dollars(ac,2))}}}}if(b&&M!=0){j=H.getRepeat();H.clearRepeat()}this.PREPAY_SHORTEN_TOTAL_MONTHS=aT;bj=(aT/12);aT=(aT%12);bq=this.MSG_PREPAY_MESSAGE;bk=(bs/(W+af/12));p=aQ;bh=bp;av=R+a7-bh;ay=ak+a7-p;var an=1;if(x){an=2}var aM=this.DS_INTEREST=new Array(an);var a=this.DS_PRINCIPAL=new Array(an);var ai=this.totalpaid_cats=new Array(an);aM[0]=ak;a[0]=a7-p;ai[0]=this.MSG_NORMAL_PAYMENTS;if(x){aM[1]=R;a[1]=a7-bh;ai[1]=this.MSG_PREPAYMENTS;a1=ak-R}this.cats=z;this.sReturnMessage=N;this.MARGINAL_TAX_RATE=P;this.ADJUSTABLE_AFTER_FIRST_ADJ=S;this.ADJUSTABLE_PAYMENT_AMTS=j;this.ADJUSTABLE_RATE_HIGHEST=ba;this.AVG_TAX_SAVINGS=bk;this.DISCOUNT_POINTS_AMT=E;this.ENDING_BALANCE=p;this.FIRST_MONTH_INTEREST=ah;this.FIRST_MONTH_PRINCIPAL=aB;this.FIRST_YEAR_INTEREST=bg;this.FIRST_YEAR_TAX_SAVINGS=aP;this.FULLY_INDEX_RATE=g;this.FULLY_INDEXED_PAYMENT=T;this.INTEREST_PAID=ak;this.LOAN_APR=bl;this.LOAN_APR_AFT=be;this.LOAN_APR_AMOUNT=c;this.LOAN_APR_PAYMENT=bf;this.LOAN_TO_VALUE=aS;this.MONTHLY_HOME_INSURANCE=bb;this.MONTHLY_PI=l;this.MONTHLY_PITI=o;this.MONTHLY_PROPERTY_TAXES=f;this.MONTHLY_HOME_ASSOCIATION=MONTHLY_HOME_ASSOCIATION;this.MONTHS=af;this.ORIGINATION_FEES_AMT=aI;this.PREPAY_ENDING_BALANCE=bh;this.PREPAY_FIRST_YEAR_INTEREST=e;this.PREPAY_INTEREST_PAID=R;this.PREPAY_INTEREST_SAVINGS=a1;this.PREPAY_MESSAGE=bq;this.PREPAY_PAYOFF_MONTHS=ag;this.PREPAY_SHORTEN_MONTHS=aT;this.PREPAY_SHORTEN_YEARS=bj;this.PREPAY_TOTAL_OF_PAYMENTS=av;this.PREPAY_TOTAL_VALUE=a9;this.PREPAY_TOTAL_VALUE_AFTX=bd;this.TAX_ADJ_RATE=bi;this.TOTAL_CLOSING_COSTS=bw;this.TOTAL_OF_PAYMENTS=ay;this.OTHER_FEES=Y;this.BALLOON_PAYMENT=aK;this.PREPAY_BALLOON_PAYMENT=d;this.REGULAR_PAYMENTS=aH.input(this.TERM_BALLOON*12-1);this.MONTHLY_PMI=U;this.MONTH_PMI_EXEMPT=(a8>=a6);this.LOAN_AMOUNT=a7;if(this.bMAPR>0){if(bl>0.36){throw KJE.replace("KJE1",aH.percent(bl,3),this.MSG_ERROR_MAPR)}}};KJE.MortgageLoanCalculation.prototype.formatReport=function(b){for(var a=0;a<this.OTHER_FEES_MAPR.length;a++){b.dollars("OTHER_FEES_MAPR"+(a+1),this.OTHER_FEES_MAPR[a])}b.year("FIXED_YEARS",this.ADJUSTABLE_RATE_FIXED/12);b.year("ADJUSTABLE_YEARS",this.TERM+this.MONTHS/12-this.ADJUSTABLE_RATE_FIXED/12);b.year("RECAST_TO_AMORTIZE_YEARS",this.RECAST_TO_AMORTIZE/12);b.number("RECAST_TO_AMORTIZE",this.RECAST_TO_AMORTIZE);b.number("REMAIN_AFTER_AMORTIZE",this.TERM*12+this.MONTHS-this.RECAST_TO_AMORTIZE);b.replace("MSG_TERM",this.MSG_TERM);b.replace("RESULT_MESSAGE",this.sReturnMessage);b.year("YEARS_IN_HOME",this.YEARS_IN_HOME);b.dollars("YEARLY_PROPERTY_TAXES",this.YEARLY_PROPERTY_TAXES);b.dollars("YEARLY_HOME_INSURANCE",this.YEARLY_HOME_INSURANCE);b.dollars("TOTAL_CLOSING_COSTS",this.TOTAL_CLOSING_COSTS);b.number("TERM_BALLOON",this.TERM_BALLOON);if(this.MONTHS>0){b.number("TERM",this.TERM*12+this.MONTHS);b.replace("years","months")}else{b.number("TERM",this.TERM)}b.taxRate("TAX_ADJ_RATE",this.TAX_ADJ_RATE);b.returnRate("SAVINGS_RATE",this.SAVINGS_RATE/100);b.dollars("PURCHASE_PRICE",this.PURCHASE_PRICE);b.dollars("DOWNPAYMENT",this.DOWNPAYMENT);b.number("ADJUSTABLE_RATE_FEQ",this.ADJUSTABLE_RATE_FEQ);b.percent("ADJUSTABLE_RATE_INCR",this.ADJUSTABLE_RATE_INCR/100,2);b.percent("ADJUSTABLE_RATE_CAP",this.ADJUSTABLE_RATE_CAP/100,3);b.replace("ADJUSTABLE_PAYMENT_AMTS",this.ADJUSTABLE_PAYMENT_AMTS);b.dollars("ADJUSTABLE_RATE_HIGHEST",this.ADJUSTABLE_RATE_HIGHEST);b.dollars("ADJUSTABLE_AFTER_FIRST_ADJ",this.ADJUSTABLE_AFTER_FIRST_ADJ);b.number("ADJUSTABLE_RATE_FIXED",this.ADJUSTABLE_RATE_FIXED);b.percent("RATE_INDEX_MARGIN",this.RATE_INDEX_MARGIN/100,3);b.percent("RATE_INDEX",this.RATE_INDEX/100,3);b.yesno("ADJUSTABLE_RATE",this.ADJUSTABLE_RATE);b.replace("REGULAR_PAYMENTS",this.REGULAR_PAYMENTS);if(this.PREPAY_TYPE==KJE.Default.PREPAY_NONE){b.replace("PREPAY_MESSAGE","");b.replace("PREPAY_TYPE",this.PREPAY_TYPE);b.replace("PREPAY_TOTAL_VALUE_AFTX","");b.replace("PREPAY_TOTAL_VALUE","");b.replace("PREPAY_TOTAL_OF_PAYMENTS","");b.replace("PREPAY_SHORTEN_TERM","");b.replace("PREPAY_STARTS_WITH","");b.replace("PREPAY_SHORTEN_YEARS","");b.replace("PREPAY_SHORTEN_MONTHS","");b.replace("PREPAY_INTEREST_SAVINGS","");b.replace("PREPAY_INTEREST_PAID","");b.replace("PREPAY_FIRST_YEAR_INTEREST","");b.replace("PREPAY_AMOUNT","");b.replace("PREPAY_ENDING_BALANCE","");b.replace("PREPAY_BALLOON_PAYMENT","");b.replace("PREPAY_PAYOFF_PERIODS","")}else{b.replace("PREPAY_MESSAGE",this.PREPAY_MESSAGE);b.replace("PREPAY_TYPE",KJE.Default.PREPAY_PERIODS[this.PREPAY_TYPE]);b.dollars("PREPAY_TOTAL_VALUE_AFTX",this.PREPAY_TOTAL_VALUE_AFTX);b.dollars("PREPAY_TOTAL_VALUE",this.PREPAY_TOTAL_VALUE);b.dollars("PREPAY_TOTAL_OF_PAYMENTS",this.PREPAY_TOTAL_OF_PAYMENTS);b.number("PREPAY_STARTS_WITH",this.PREPAY_STARTS_WITH);b.replace("PREPAY_SHORTEN_TERM",KJE.getTermLabel(this.PREPAY_SHORTEN_TOTAL_MONTHS));b.year("PREPAY_SHORTEN_YEARS",this.PREPAY_SHORTEN_YEARS);b.number("PREPAY_SHORTEN_MONTHS",this.PREPAY_SHORTEN_MONTHS);b.dollars("PREPAY_INTEREST_SAVINGS",this.PREPAY_INTEREST_SAVINGS);b.dollars("PREPAY_INTEREST_PAID",this.PREPAY_INTEREST_PAID);b.dollars("PREPAY_FIRST_YEAR_INTEREST",this.PREPAY_FIRST_YEAR_INTEREST);b.dollars("PREPAY_AMOUNT",this.PREPAY_AMOUNT);b.dollars("PREPAY_ENDING_BALANCE",this.PREPAY_ENDING_BALANCE);b.dollars("PREPAY_BALLOON_PAYMENT",this.PREPAY_BALLOON_PAYMENT);b.replace("PREPAY_PAYOFF_PERIODS",KJE.getTermLabel(this.PREPAY_PAYOFF_MONTHS))}b.dollars("OTHER_FEES",this.OTHER_FEES);b.percent("ORIGINATION_FEES_PERCENT",this.ORIGINATION_FEES_PERCENT/100,2);b.dollars("ORIGINATION_FEES_AMT",this.ORIGINATION_FEES_AMT);b.dollars("MONTHLY_PROPERTY_TAXES",this.MONTHLY_PROPERTY_TAXES);b.dollars("MONTHLY_HOME_ASSOCIATION",this.MONTHLY_HOME_ASSOCIATION);b.dollars("MONTHLY_PITI",this.MONTHLY_PITI);b.dollars("MONTHLY_PMI",this.MONTHLY_PMI);b.dollars("MONTHLY_PI",this.MONTHLY_PI);b.dollars("MONTHLY_HOME_INSURANCE",this.MONTHLY_HOME_INSURANCE);b.taxRate("MARGINAL_TAX_RATE",this.MARGINAL_TAX_RATE/100);b.taxRate("FEDERAL_TAX_RATE",this.FEDERAL_TAX_RATE/100);b.taxRate("STATE_TAX_RATE",this.STATE_TAX_RATE/100);b.percent("LOAN_TO_VALUE",this.LOAN_TO_VALUE,2);b.percent("LOAN_APR_AFT",this.LOAN_APR_AFT,3);b.dollars("LOAN_APR_PAYMENT",this.LOAN_APR_PAYMENT);b.dollars("LOAN_APR_AMOUNT",this.LOAN_APR_AMOUNT);b.percent("LOAN_APR",this.LOAN_APR,3);b.dollars("LOAN_AMOUNT",this.LOAN_AMOUNT);b.loanRate("INTEREST_RATE",this.INTEREST_RATE/100);b.dollars("INTEREST_PAID",this.INTEREST_PAID);b.inflationRate("INFLATION_RATE",this.INFLATION_RATE/100);b.dollars("FIRST_YEAR_TAX_SAVINGS",this.FIRST_YEAR_TAX_SAVINGS);b.dollars("FIRST_YEAR_INTEREST",this.FIRST_YEAR_INTEREST);b.dollars("FIRST_MONTH_PRINCIPAL",this.FIRST_MONTH_PRINCIPAL);b.dollars("FIRST_MONTH_INTEREST",this.FIRST_MONTH_INTEREST);b.number("DISCOUNT_POINTS_PERCENT",this.DISCOUNT_POINTS_PERCENT,2);b.dollars("DISCOUNT_POINTS_AMT",this.DISCOUNT_POINTS_AMT);b.dollars("AVG_TAX_SAVINGS",this.AVG_TAX_SAVINGS);b.dollars("TOTAL_OF_PAYMENTS",this.TOTAL_OF_PAYMENTS);b.dollars("ENDING_BALANCE",this.ENDING_BALANCE);b.dollars("BALLOON_PAYMENT",this.BALLOON_PAYMENT);b.dollars("FULLY_INDEXED_PAYMENT",this.FULLY_INDEXED_PAYMENT);b.dollars("MORTGAGE_TAX_DEDUCT_MAX_BALANCE",KJE.Default.MORTGAGE_TAX_DEDUCT_MAX_BALANCE);b.yesno("INTEREST_ONLY",this.INTEREST_ONLY?1:0);b.replace("CHECKBOX_BY_MONTH",(this.BY_YEAR?"":"CHECKED"));b.replace("CHECKBOX_BY_YEAR",(this.BY_YEAR?"CHECKED":""));b.replace("**REPEATING GROUP**",this.sSchedule.getRepeat())};KJE.MortgageLoanCalculation.prototype.getCategories=function(){return this.cats};KJE.MortgageLoanCalculation.prototype.getAmountPaidCategories=function(){return this.totalpaid_cats};KJE.MortgageLoanCalculation.APRAdjustable=function(t,q,d,k,s,j,c,f,l){var b=q;var p=k/12;var r=p;var h=KJE.PMT(p,t,b);var g=0;var e=new Array();e[0]=Math.round(100*(-q+d));for(var o=1;o<=t;o++){b-=h-(p*b);g+=h;e[o]=Math.round(100*h);if((o<s?1:(o-s)%j)==0&&o!=1&&o!=t){var m=c/12;if(m>(r+f)){m=r+f}if(m>l/12){m=l/12}if(m!=r){r=m;p=m;h=KJE.PMT(p,t-o,b)}}}var a=(c>k?c:k);return(KJE.MortgageLoanCalculation.IRR(e,a/12)*12)};KJE.MortgageLoanCalculation.IRR=function(f,e){var c=e/2;var b;var d=f.length;while(true){b=0;for(var a=0;a<d;a++){b+=f[a]/Math.pow((1+e),a)}if(b>-1&&b<1){break}e+=(b>0?c:-c);c=c/2}return e};KJE.Default.MORTGAGE_TAX_DEDUCT_MAX_BALANCE=750000;KJE.Default.PREPAY_NONE=0;KJE.Default.PREPAY_WEEKLY=1;KJE.Default.PREPAY_BIWEEKLY=2;KJE.Default.PREPAY_2XMONTHLY=3;KJE.Default.PREPAY_MONTHLY=4;KJE.Default.PREPAY_YEARLY=5;KJE.Default.PREPAY_ONETIME=6;KJE.Default.PREPAY_FREQUENCY=[0,52,26,24,12,1,0];[];KJE.Default.getPrepayDrop=function(c,b,g){KJE.Default.PREPAY_PERIOD_IDs=KJE.parameters.get("ARRAY_PREPAY_PERIOD_ID",[KJE.Default.PREPAY_NONE,KJE.Default.PREPAY_MONTHLY,KJE.Default.PREPAY_YEARLY,KJE.Default.PREPAY_ONETIME]);KJE.Default.PREPAY_PERIODS=KJE.parameters.get("ARRAY_PREPAY_PERIODS",[KJE.parameters.get("MSG_PREPAY_NONE","none"),"Weekly","bi-weekly","semi-monthly",KJE.parameters.get("MSG_PREPAY_MONTHLY","monthly"),KJE.parameters.set("MSG_PREPAY_YEARLY","yearly"),KJE.parameters.get("MSG_PREPAY_ONETIME","one-time")]);var a=KJE.Default.PREPAY_PERIOD_IDs;var f=a.length;var e=KJE.Default.PREPAY_PERIODS;var d=new Array(f);for(i=0;i<f;i++){d[i]=e[a[i]]}return KJE.getDropBox(c,KJE.parameters.get(c,(!b?KJE.Default.PAY_LOAN_IDs:b)),a,d,g)};KJE.CalcName="Adjustable Rate Mortgage Calculator";KJE.CalcType="mortgageadjustable";KJE.CalculatorTitleTemplate="Starting adjustable monthly payment is KJE1";KJE.parseInputs=function(a){a=KJE.replace("**TERM**",KJE.getMortgageTermDrop("TERM",30),a);return a};KJE.initialize=function(){KJE.CalcControl=new KJE.MortgageLoanCalculation();KJE.GuiControl=new KJE.MortgageAdjustable(KJE.CalcControl)};KJE.MortgageAdjustable=function(m){var d=KJE;var b=KJE.gLegend;var g=KJE.inputs.items;m.ADJUSTABLE_RATE=true;KJE.MortgageAmtSlider("LOAN_AMOUNT","Mortgage amount");KJE.MortgageTermDropBoxSlider("TERM","Term in years");KJE.MortgageRateSlider("INTEREST_RATE","Initial interest rate");KJE.Label("MONTHLY_PAYMENT",m.SHOW_PITI?"Monthly payment (PI)":"Initial monthly payment",null,null,"KJEBold");KJE.Radioboxes("BY_YEAR","Report amortization",true,"Annually","Monthly");KJE.NumberSlider("ADJUSTABLE_RATE_FIXED","Months before first adjustment",0,120,0);KJE.NumberSlider("ADJUSTABLE_RATE_FEQ","Months between adjustments",1,60,0);KJE.PercentSlider("ADJUSTABLE_RATE_INCR","Expected Adjustment",-5,5,2);KJE.PercentSlider("ADJUSTABLE_RATE_CAP","Interest rate cap",0,20,3);if(KJE.parameters.get("ADJUSTABLE_RATE_CAP_ABOVE",0)>0){g.ADJUSTABLE_RATE_CAP.setValue((KJE.parameters.get("INTEREST_RATE",0)+KJE.parameters.get("ADJUSTABLE_RATE_CAP_ABOVE",0)),true)}KJE.Label("ADJUSTABLE_RATE_HIGHEST","Maximum payment",null,null,"KJEBold");var a=KJE.parameters.get("MSG_DROPPER_TITLE","Loan information: ");var c=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","KJE1 loan for KJE2 years at KJE3");var o=KJE.parameters.get("MSG_PREPAY_IMMEDIATE","starting immediately");var e=function(){return a+KJE.subText(KJE.getKJEReplaced(c,d.dollars(m.LOAN_AMOUNT),d.number(m.TERM),d.percent(m.INTEREST_RATE/100,3)),"KJECenter")};KJE.addDropper(new KJE.Dropper("INPUTS",true,a,e),KJE.colorList[0]);var n=KJE.parameters.get("MSG_DROPPER2_TITLE","Adjustments:");var j=KJE.parameters.get("MSG_DROPPER2_TITLECLOSE","Rate fixed for KJE1 months, adjusts every KJE2 months KJE3");var k=function(){return n+KJE.subText(KJE.getKJEReplaced(j,g.ADJUSTABLE_RATE_FIXED.getFormatted(),g.ADJUSTABLE_RATE_FEQ.getFormatted(),g.ADJUSTABLE_RATE_INCR.getFormatted(),g.ADJUSTABLE_RATE_CAP.getFormatted()),"KJECenter")};KJE.addDropper(new KJE.Dropper("PREPAY",true,n,k),KJE.colorList[0]);var f=KJE.gNewGraph(KJE.gSTACKED,"GRAPH1",true,false,KJE.colorList[1],"Total Payments KJE1<div class='KJESubTitle'>Total Interest KJE2</div>");f._legend._iOrientation=(KJE.gLegend.TOP_RIGHT);f._showItemLabel=false;var h=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH2",true,true,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_TITLE2","Principal Balances by Year"));h._legend._iOrientation=KJE.gLegend.GRID_TOP_RIGHT;h._iArea=KJE.gGraphLine.AREA_ALL};KJE.MortgageAdjustable.prototype.setValues=function(b){var a=KJE.inputs.items;b.ADJUSTABLE_RATE_CAP=a.ADJUSTABLE_RATE_CAP.getValue();b.ADJUSTABLE_RATE_INCR=a.ADJUSTABLE_RATE_INCR.getValue();b.ADJUSTABLE_RATE_FEQ=a.ADJUSTABLE_RATE_FEQ.getValue();b.ADJUSTABLE_RATE_FIXED=a.ADJUSTABLE_RATE_FIXED.getValue();b.LOAN_AMOUNT=a.LOAN_AMOUNT.getValue();b.TERM=a.TERM.getValue();b.INTEREST_RATE=a.INTEREST_RATE.getValue();b.BY_YEAR=a.BY_YEAR.getValue();b.INTEREST_RATE=a.INTEREST_RATE.getValue()};KJE.MortgageAdjustable.prototype.refresh=function(f){var e=KJE;var d=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[0];var c=KJE.gGraphs[1];KJE.setTitleTemplate(e.dollars(f.SHOW_PITI?f.MONTHLY_PITI:f.MONTHLY_PI,2));a.removeAll();a.setGraphCategories(f.getAmountPaidCategories());a.setTitleTemplate(e.dollars(f.TOTAL_OF_PAYMENTS),e.dollars(f.INTEREST_PAID));a._axisX.setVisible(false);a.add(new KJE.gGraphDataSeries(f.DS_INTEREST,f.MSG_INTEREST,a.getColor(1),"",f.MSG_POP_INTEREST));a.add(new KJE.gGraphDataSeries(f.DS_PRINCIPAL,f.MSG_PRINCIPAL,a.getColor(2),"",f.MSG_POP_PRINCIPAL));a.paint();c.removeAll();c._titleXAxis.setText(f.MSG_YEAR_NUMBER);c.setGraphCategories(f.getCategories());c.add(new KJE.gGraphDataSeries(f.DS_PRINCIPAL_BAL,f.MSG_NORMAL_PAYMENTS,c.getColor(1),"",f.MSG_POP_PRINCIPAL_NORMAL+" "));c._legend.setVisible(false);c.paint();b.ADJUSTABLE_RATE_HIGHEST.setText(e.dollars(f.ADJUSTABLE_RATE_HIGHEST,2));b.MONTHLY_PAYMENT.setText(e.dollars(f.MONTHLY_PI,2))};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Mortgage information:</div></div> <div id=KJE-E-INPUTS > <div id=\"KJE-C-LOAN_AMOUNT\"><input id=\"KJE-LOAN_AMOUNT\" /></div> <div id=\"KJE-C-TERM\">**TERM**</div> <div id=\"KJE-C-INTEREST_RATE\"><input id=\"KJE-INTEREST_RATE\" /></div> <div id=\"KJE-C-MONTHLY_PAYMENT\"><div id=\"KJE-MONTHLY_PAYMENT\"></div></div> <div id=\"KJE-C-BY_YEAR\"><fieldset id='KJE-FS-BY_YEAR'><input id=\"KJE-BY_YEAR1\" type=radio name=BY_YEAR /><input id=\"KJE-BY_YEAR2\" type=radio name=BY_YEAR /></fieldset></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-PREPAY><div id=KJE-P-PREPAY>Adjustment information</div></div> <div id=KJE-E-PREPAY > <div id='KJE-C-ADJUSTABLE_RATE_FIXED'><input id='KJE-ADJUSTABLE_RATE_FIXED' /></div> <div id='KJE-C-ADJUSTABLE_RATE_FEQ'><input id='KJE-ADJUSTABLE_RATE_FEQ' /></div> <div id='KJE-C-ADJUSTABLE_RATE_INCR'><input id='KJE-ADJUSTABLE_RATE_INCR' /></div> <div id='KJE-C-ADJUSTABLE_RATE_CAP'><input id='KJE-ADJUSTABLE_RATE_CAP' /></div> <div id='KJE-C-ADJUSTABLE_AFTER_FIRST_ADJ'><div id='KJE-ADJUSTABLE_AFTER_FIRST_ADJ'></div></div> <div id='KJE-C-ADJUSTABLE_RATE_HIGHEST'><div id='KJE-ADJUSTABLE_RATE_HIGHEST'></div></div> <div class=KJEDropperSpacer></div> </div> **GRAPH1** **GRAPH2** ";KJE.DefinitionText=' <div><dt>Adjustable rate mortgage (ARM)</dt><dd>This calculator shows a "fully amortizing" ARM, which is the most common type of ARM. The monthly payment is calculated to pay off the entire mortgage balance at the end of a 30-year term. After the initial period, the interest rate and monthly payment adjust at the frequency specified. The amount an ARM can adjust each year, and over the life of the loan, are typically capped. Below is a list of common ARMs. <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Common Adjustable Rate Mortgages</caption> <thead class="KJEReportTHeader"> <tr class="KJEHeaderRow"><th class="KJEHeading KJECell40" scope="col">ARM Type</th><th class="KJEHeading KJECell60" scope="col">Months Fixed</th></tr> </thead> <tbody class="KJEReportTBody"> <tr class="KJEEvenRow"><th class="KJECellBorder KJELabel" scope="row">10/1 ARM</th><td class="KJECell KJELeft">Fixed for 120 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEOddRow"><th class="KJECellBorder KJELabel" scope="row">7/1 ARM</th><td class="KJECell KJELeft">Fixed for 84 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEEvenRow"><th class="KJECellBorder KJELabel" scope="row">5/1 ARM</th><td class="KJECell KJELeft">Fixed for 60 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEOddRow"><th class="KJECellBorder KJELabel" scope="row">3/1 ARM</th><td class="KJECell KJELeft">Fixed for 36 months, adjusts annually for the remaining term of the loan.</td></tr> <tr class="KJEEvenRow"><th class="KJECellBorder KJELabel" scope="row">10/6 month ARM</th><td class="KJECell KJELeft">Fixed for 120 months, adjusts every six months for the remaining term of the loan.</td></tr> <tr class="KJEOddRow"><th class="KJECellBorder KJELabel" scope="row">7/6 month ARM</th><td class="KJECell KJELeft">Fixed for 84 months, adjusts every six months for the remaining term of the loan.</td></tr> <tr class="KJEEvenRow"><th class="KJECellBorder KJELabel" scope="row">5/6 month ARM</th><td class="KJECell KJELeft">Fixed for 60 months, adjusts every six months for the remaining term of the loan.</td></tr> <tr class="KJEOddRow"><th class="KJECellBorder KJELabel" scope="row">3/6 month ARM</th><td class="KJECell KJELeft">Fixed for 36 months, adjusts every six months for the remaining term of the loan.</td></tr> </tbody> </table></div> </dd> </div> <div id=\'KJE-D-LOAN_AMOUNT\' ><dt>Mortgage amount</dt><dd>Original or expected balance for your mortgage.</dd></div> <div id=\'KJE-D-INTEREST_RATE\' ><dt>Initial interest rate</dt><dd>Initial annual interest rate for this mortgage. Please note that the interest rate is different from the Annual Percentage Rate (APR), which includes other expenses such as mortgage insurance, and the origination fee and or point(s), which were paid when the mortgage was first originated. The APR is normally higher than the simple interest rate.</dd></div> <div id=\'KJE-D-TERM\' ><dt>Term in years</dt><dd>The number of years over which you will repay this loan. The most common mortgage terms are 15 years and 30 years.</dd></div> <div id=\'KJE-D-ADJUSTABLE_RATE_CAP\' ><dt>Interest rate cap</dt><dd>This is the highest allowable interest rate for your mortgage. Your interest rate will not be adjusted above this rate.</dd></div> <div id=\'KJE-D-ADJUSTABLE_RATE_FIXED\' ><dt>Months before first adjustment</dt><dd>The number of months that the interest rate is fixed. After this period, the interest rate will be subject to rate adjustments. If you enter zero in this field, the tool assumes that the rate will begin making adjustments immediately after the initial "months between adjustments" period has passed. If any number other than zero is entered, the first adjustment will take place at that time, and adjustments will happen at the frequency entered in the "months between adjustments" field.</dd></div> <div id=\'KJE-D-ADJUSTABLE_RATE_INCR\' ><dt>Expected adjustment</dt><dd>The amount you believe that your mortgage\'s interest rate will change. This amount will be added to or subtracted from your interest rate.</dd></div> <div id=\'KJE-D-ADJUSTABLE_RATE_FEQ\' ><dt>Months between adjustments</dt><dd>The number of payment periods between potential adjustments to your interest rate. The most common is 12 months, which means your payment could change at most once per year. Loans using the SOFR benchmark have six months between adjustments. The SOFR benchmark is based on what U.S. financial institutions pay each other for overnight loans. It is often used as a replacement for the LIBOR benchmark which is no longer used. </dd></div> <div id=\'KJE-D-MONTHLY_PAYMENT\' ><dt>Initial monthly payment</dt><dd>Monthly principal and interest payment (PI) based on your beginning balance and initial interest rate.</dd></div> <div><dt>Total payments</dt><dd>Total of all monthly payments over the full term of the mortgage. This total payment amount assumes that there are no prepayments of principal.</dd></div> <div><dt>Total interest</dt><dd>Total of all interest paid over the full term of the mortgage. This total interest amount assumes that there are no prepayments of principal.</dd></div> ';KJE.ReportText=' <!--HEADING "How much will adjustable rate mortgage payments be?" HEADING--> <h2 class=\'KJEReportHeader KJEFontHeading\'>Your initial monthly payment is MONTHLY_PI.</h2> Your adjustable-rate mortgage of LOAN_AMOUNT for TERM years has an initial monthly payment of MONTHLY_PI. Your interest rate remains fixed at INTEREST_RATE for ADJUSTABLE_RATE_FIXED months. After that time, your interest rate is expected to change by ADJUSTABLE_RATE_INCR every ADJUSTABLE_RATE_FEQ months. Your highest monthly payment, in this scenario, would be ADJUSTABLE_RATE_HIGHEST. <p> ADJUSTABLE_PAYMENT_AMTS <p> **GRAPH** <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Mortgage Information</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell60" scope=\'row\'>Loan amount</th><td class="KJECell KJECell60">LOAN_AMOUNT</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Term</th><td class="KJECell">TERM years</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Initial interest rate</th><td class="KJECell">INTEREST_RATE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>First monthly payment</th><td class="KJECell">MONTHLY_PI</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Interest rate cap</th><td class="KJECell"> ADJUSTABLE_RATE_CAP</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Expected adjustment</th><td class="KJECell">ADJUSTABLE_RATE_INCR</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Rate remains fixed for</th><td class="KJECell">ADJUSTABLE_RATE_FIXED months</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Periods between adjustments</th><td class="KJECell">ADJUSTABLE_RATE_FEQ months</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total payments</th><td class="KJECellStrong">TOTAL_OF_PAYMENTS</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total interest</th><td class="KJECellStrong">INTEREST_PAID</td></tr> </tfoot> </table> </div> <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Payment Schedule</h2> **REPEATING GROUP** ';


