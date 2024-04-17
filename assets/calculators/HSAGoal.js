
KJE.Default.SINGLE_COVERAGE=0;KJE.Default.FAMILY_COVERAGE=1;KJE.Default.COVERAGE_INDEX=[KJE.Default.SINGLE_COVERAGE,KJE.Default.FAMILY_COVERAGE];KJE.Default.COVERAGE_SELECTION=["Single","Family"];KJE.Default.HSA_DEFAULT_YEAR=1;KJE.Default.HSA_PRIOR_YEAR=0;KJE.Default.HSA_CURRENT_YEAR=1;KJE.Default.PLAN_YEAR_INDEX=[KJE.Default.HSA_PRIOR_YEAR,KJE.Default.HSA_CURRENT_YEAR];KJE.Default.PLAN_YEAR_SELECTION=["2023","2024"];KJE.Default.PLAN_YEAR=[2023,2024];KJE.Default.MAXIMUM_FAMILY=8300;KJE.Default.MINIMUM_INDIVIDUAL=1600;KJE.Default.MINIMUM_FAMILY=3200;KJE.Default.CATCHUP_AGE=55;KJE.Default.CATCHUP_AMOUNT=1000;KJE.Default.MAXIMUM_POCKET_INDIVIDUAL=8050;KJE.Default.MAXIMUM_POCKET_FAMILY=16100;KJE.Default.MAXIMUM_INDIVIDUAL=3850;KJE.Default.HSAGetPlanYear=function(a){return KJE.Default.PLAN_YEAR_SELECTION[a]};KJE.Default.HSAGetPlanYearInt=function(a){return KJE.Default.PLAN_YEAR[a]};KJE.Default.HSASetYearValues=function(a){if(a==1){KJE.Default.MAXIMUM_INDIVIDUAL=4150;KJE.Default.MAXIMUM_FAMILY=8300;KJE.Default.MINIMUM_INDIVIDUAL=1600;KJE.Default.MINIMUM_FAMILY=3200;KJE.Default.MAXIMUM_POCKET_INDIVIDUAL=8050;KJE.Default.MAXIMUM_POCKET_FAMILY=16100}else{KJE.Default.MAXIMUM_INDIVIDUAL=3850;KJE.Default.MAXIMUM_FAMILY=7750;KJE.Default.MINIMUM_INDIVIDUAL=1500;KJE.Default.MINIMUM_FAMILY=3000;KJE.Default.MAXIMUM_POCKET_INDIVIDUAL=7500;KJE.Default.MAXIMUM_POCKET_FAMILY=15000}};KJE.Default.CATCHUP_AGE=55;KJE.Default.CATCHUP_AMOUNT=1000;KJE.Default.RETIREMENT_CREDIT=500;KJE.Default.PREMIUM_DEFAULT_HSA_INDIVIDUAL=300;KJE.Default.PREMIUM_DEFAULT_HSA_FAMILY=1000;KJE.Default.PREMIUM_DEFAULT_TRAD_INDIVIDUAL=500;KJE.Default.PREMIUM_DEFAULT_TRAD_FAMILY=1400;KJE.Default.TRAD_DEFAULT_DEDUCTIBLE_INDIVIDUAL=1400;KJE.Default.TRAD_DEFAULT_DEDUCTIBLE_FAMILY=2500;KJE.Default.TRAD_DEFAULT_POCKET_INDIVIDUAL=5000;KJE.Default.TRAD_DEFAULT_POCKET_FAMILY=10000;KJE.parameters.set("PPO_EMPLOYEE_PREMIUM_SINGLE",2000);KJE.parameters.set("PPO_EMPLOYER_PREMIUM_SINGLE",4700);KJE.parameters.set("PPO_EMPLOYEE_PREMIUM_FAMILY",5650);KJE.parameters.set("PPO_EMPLOYER_PREMIUM_FAMILY",13150);KJE.parameters.set("HDHP_EMPLOYEE_PREMIUM_SINGLE",1850);KJE.parameters.set("HDHP_EMPLOYER_PREMIUM_SINGLE",4250);KJE.parameters.set("HDHP_EMPLOYEE_PREMIUM_FAMILY",5300);KJE.parameters.set("HDHP_EMPLOYER_PREMIUM_FAMILY",12300);KJE.Default.HSALimitsDefinition="This table shows the limits for HSA's in 2024.<div class='KJEReportTableDiv'><table class='KJEReportTable KJEReportTableShrink'><caption class='KJEHeaderRow KJEHeading'>Health Savings Accounts (HSA) Contribution and Limits</caption><thead><tr class=KJEFooterRow><td class='KJEColumnHeader KJECell10'></td><th class='KJEColumnHeader KJECell225' scope='col'>2024</th><th class='KJEColumnHeader KJECell225' scope='col'>2023</th><th class='KJEColumnHeader KJECell225' scope='col'>Change</th></tr></thead><tr class='KJEOddRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>HSA Contribution Limit</th><td class='KJECell KJECellBorder'>Single: $4,150<br>Family: $8,300</td><td class='KJECell KJECellBorder'>Single: $3,850<br>Family: $7,750</td><td class='KJECell'>Single: +$300<br>Family: +$550</td></tr><tr class='KJEEvenRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>HSA catch-up contributions<sup>*</sup></th><td class='KJECell KJECellBorder'>$1,000</td><td class='KJECell KJECellBorder'>$1,000</td><td class='KJECell'>No change, not indexed to inflation</td></tr><tr class='KJEOddRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>HDHP minimum deductible</th><td class='KJECell KJECellBorder'>Single: $1,600<br>Family: $3,200</td><td class='KJECell KJECellBorder'>Single: $1,500<br>Family: $3,000</td><td class='KJECell'>Self-only: +$100<br>Family: +$200</td></tr><tr class='KJEEvenRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>HDHP maximum out-of-pocket<sup>**</sup></th><td class='KJECell KJECellBorder'>Single: $8,050<br>Family: $16,100</td><td class='KJECell KJECellBorder'>Single: $7,500<br>Family: $15,000</td><td class='KJECell'>Single: +$550<br>Family: +$1100</td></tr><tr class=KJEFooterRow><td class='KJEFooter KJELabelPad' COLSPAN='4' ><div class=KJECenter><sup>*</sup>Catch-up contributions can be made anytime during the year in which the participant turns 55.<br><sup>**</sup>This includes deductible amount, co-payments and other non-premium payments.</div></td></tr></table></div><p>Please note, you are no longer eligible to make HSA contributions starting in the first month that you are eligible for and enrolled in Medicare Part A or B. <p>Source and complete details on HSAs you may wish review: <a href='https://www.irs.gov/forms-pubs/about-publication-969'  target=blank>About Publication 969, Health Savings Accounts and Other Tax-Favored Health Plans</a>";KJE.definitions.set("**HSA_LIMITS_DEFINITION**",KJE.Default.HSALimitsDefinition);KJE.definitions.set("**HSA_MINDEDUCTIBLE_DEFINITION**","In 2024, for a HDHP, the minimum deductible amount is $1,500 for self-only coverage and $3,000 for family coverage.");KJE.definitions.set("**HSA_OUTOFPOCKET_DEFINITION**","For 2024, the HSA out-of-pocket maximum is $7,500 for self only coverage and $15,000 for family coverage.");KJE.definitions.set("**HSA_MAXIMUMCONTRIBUTION_DEFINITION**","For 2024, the maximum contribution to an HSA is $3,850 for self-only coverage and $7,750 for family coverage.");KJE.HSAGoalCalc=function(){this.YEARS_TO_SAVE=0;this.INSURANCE_DEDUCTIBLE_AMOUNT=0;this.TYPE_OF_INSURANCE_COVERAGE=0;this.MAXIMUM_ANNUAL_CONTRIBUTION=0;this.MONTHLY_ALLOWABLE_CONTRIBUTION=0;this.INFLATION_RATE=0;this.MSG_ERROR1=KJE.parameters.get("MSG_ERROR1","Deductible amount must be MINIMUM_INDIVIDUAL or greater for individual HDHPs.");this.MSG_ERROR2=KJE.parameters.get("MSG_ERROR2","Deductible amount must be MINIMUM_FAMILY or greater for family HDHPs.");this.MSG_ERROR5=KJE.parameters.get("MSG_ERROR5","Your current spending exceeds your maximum HSA contribution.");this.MSG_ERROR6=KJE.parameters.get("MSG_ERROR6","Deductible amount must be MAXIMUM_POCKET_INDIVIDUAL or less for individual HDHPs.");this.MSG_MADE=KJE.parameters.get("MSG_MADE","You are on track to meet your goal.");this.MSG_FAIL=KJE.parameters.get("MSG_FAIL","You need to make a few changes in your plan.");this.MSG_CHANGE_FAIL=KJE.parameters.get("MSG_CHANGE_FAIL","With a current balance of AMT_CURRENT, to reach your target of AMT_TARGET in YEARS_TO_SAVE years you need net savings of USE_SAVE_MONTH per month and have a rate of return of ROR_INVEST. Unfortunately, you are limited to a maximum monthly contribution of AMT_SAVE_MONTH. You may need to reduce your spending or change your HDHP to allow you to save more and meet your goal.");this.MSG_CHANGE_MADE=KJE.parameters.get("MSG_CHANGE_MADE","With a current balance of AMT_CURRENT, to reach your target of AMT_TARGET in YEARS_TO_SAVE years you need net savings of USE_SAVE_MONTH per month and have a rate of return of ROR_INVEST.");this.sSchedule=new KJE.Repeating()};KJE.HSAGoalCalc.prototype.clear=function(){this.AMT_TARGET=0;this.AMT_CURRENT=0;this.AMT_SPEND_MONTH=0;this.ROR_INVEST=0;this.PLAN_OWNER_FIFTYFIVE=false;this.PLAN_SPOUSE_FIFTYFIVE=false;this.PLAN_YEAR=0};KJE.HSAGoalCalc.prototype.calculate=function(C){var g=KJE;var s=this.PLAN_YEAR;KJE.Default.HSASetYearValues(s);var l=this.AMT_TARGET;var D=this.AMT_CURRENT;var m=this.AMT_SPEND_MONTH;var w=this.ROR_INVEST;var B=12;var o=this.YEARS_TO_SAVE;if(this.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.SINGLE_COVERAGE&&this.INSURANCE_DEDUCTIBLE_AMOUNT<KJE.Default.MINIMUM_INDIVIDUAL){throw (KJE.replace("MINIMUM_INDIVIDUAL",g.dollars(KJE.Default.MINIMUM_INDIVIDUAL),this.MSG_ERROR1))}if(this.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.FAMILY_COVERAGE&&this.INSURANCE_DEDUCTIBLE_AMOUNT<KJE.Default.MINIMUM_FAMILY){throw (KJE.replace("MINIMUM_FAMILY",g.dollars(KJE.Default.MINIMUM_FAMILY),this.MSG_ERROR2))}if(this.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.SINGLE_COVERAGE&&this.INSURANCE_DEDUCTIBLE_AMOUNT>KJE.Default.MAXIMUM_POCKET_INDIVIDUAL){throw (KJE.replace("MAXIMUM_POCKET_INDIVIDUAL",g.dollars(KJE.Default.MAXIMUM_POCKET_INDIVIDUAL),this.MSG_ERROR6))}if(this.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.FAMILY_COVERAGE&&this.INSURANCE_DEDUCTIBLE_AMOUNT>KJE.Default.MAXIMUM_POCKET_FAMILY){throw (KJE.replace("MAXIMUM_POCKET_FAMILY",g.dollars(KJE.Default.MAXIMUM_POCKET_FAMILY),this.MSG_ERROR7))}if(this.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.SINGLE_COVERAGE){this.MAXIMUM_ANNUAL_CONTRIBUTION=KJE.Default.MAXIMUM_INDIVIDUAL}else{this.MAXIMUM_ANNUAL_CONTRIBUTION=KJE.Default.MAXIMUM_FAMILY}if(this.PLAN_OWNER_FIFTYFIVE){this.MAXIMUM_ANNUAL_CONTRIBUTION+=KJE.Default.CATCHUP_AMOUNT}if(this.PLAN_SPOUSE_FIFTYFIVE&&this.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.FAMILY_COVERAGE){this.MAXIMUM_ANNUAL_CONTRIBUTION+=KJE.Default.CATCHUP_AMOUNT}else{this.PLAN_SPOUSE_FIFTYFIVE=false}this.MONTHLY_ALLOWABLE_CONTRIBUTION=g.round(this.MAXIMUM_ANNUAL_CONTRIBUTION/12,2);var n=this.MONTHLY_ALLOWABLE_CONTRIBUTION;var v=o*B;var y=KJE.ROR_PERIOD(w/100,B);var q=n-m;if(q<0){throw this.MSG_ERROR5}var a=KJE.HSAGoalCalc.solveForSaveAmt(l,D,y,v,q);var t="";var e=false;var p="";var r=0;if(a+m<=n){t=this.MSG_MADE;e=true;p=this.MSG_CHANGE_MADE;r=a}else{t=this.MSG_FAIL;e=false;p=this.MSG_CHANGE_FAIL;r=n-m}var A=this.DS_NEW=KJE.FloatArray(o);var f=this.DS_AFI=KJE.FloatArray(o);var k=this.cats=KJE.FloatArray(o);if(C){var j=this.sSchedule;j.clearRepeat();j.addHeader(j.sReportCol("Year",1),j.sReportCol("Interest",2),j.sReportCol("Amount Saved",3),j.sReportCol("Amount Spent",4),j.sReportCol("Balance",5));j.addRepeat("&nbsp;","&nbsp;","&nbsp;","&nbsp;",g.dollars(D))}var d=KJE.HSAGoalCalc.solveAmtAtYear;var E=g.round(d(0,r,D,B,y),2);var c=0;var z=E;var h=KJE.Default.HSAGetPlanYearInt(this.PLAN_YEAR);for(var x=0;x<o;x++){E=g.round(d(x+1,r,D,B,y),2);A[x]=(E);c=KJE.NPV_AMT(this.INFLATION_RATE/100,x+1,E);f[x]=(c);k[x]=g.input(x+h);if(C){j.addRepeat(k[x],g.dollars(E-z-B*r,2),g.dollars(B*(r+m),2),g.dollars(B*m,2),g.dollars(E,2));z=E}}var u=KJE.NPV_AMT(this.INFLATION_RATE/100,this.YEARS_TO_SAVE,E);if(u<0){u=0}var b=u-u;this.MONTHS_BF_TARGET=v;this.ROR_MONTHLY_PERC=y;this.RQD_SAVE_MONTH=a;this.AMT_SAVE_MONTH=n;this.YOU_MADE_IT=t;this.MADE_IT=e;this.CHANGE_MSG=p;this.USE_SAVE_MONTH=r;this.ENDING_BALANCE=E;this.AMOUNT_REDUCED_BY_INFLATION=b;this.AMOUNT_SAVED_AFI=u};KJE.HSAGoalCalc.prototype.formatReport=function(a){a.replace("CHANGE_MSG",this.CHANGE_MSG);a.dollars("AMT_CURRENT",this.AMT_CURRENT);a.dollars("AMT_SAVE_MONTH",this.AMT_SAVE_MONTH);a.dollars("AMT_SPEND_MONTH",this.AMT_SPEND_MONTH);a.returnRate("ROR_INVEST",this.ROR_INVEST/100);a.year("YEARS_TO_SAVE",this.YEARS_TO_SAVE);a.returnRate("ROR_MONTHLY_PERC",this.ROR_MONTHLY_PERC);a.dollars("RQD_SAVE_MONTH",this.RQD_SAVE_MONTH);a.dollars("USE_SAVE_MONTH",this.USE_SAVE_MONTH);a.dollars("RQD_NET_SAVE_MONTH",this.RQD_SAVE_MONTH+this.AMT_SPEND_MONTH);a.replace("YOU_MADE_IT",this.YOU_MADE_IT);a.dollars("AMT_TARGET",this.AMT_TARGET);a.dollars("INSURANCE_DEDUCTIBLE_AMOUNT",this.INSURANCE_DEDUCTIBLE_AMOUNT);a.replace("TYPE_OF_INSURANCE_COVERAGE",KJE.Default.COVERAGE_SELECTION[this.TYPE_OF_INSURANCE_COVERAGE]);a.dollars("MAXIMUM_ANNUAL_CONTRIBUTION",this.MAXIMUM_ANNUAL_CONTRIBUTION);a.dollars("MONTHLY_ALLOWABLE_CONTRIBUTION",this.MONTHLY_ALLOWABLE_CONTRIBUTION);a.dollars("ENDING_BALANCE",this.ENDING_BALANCE);a.year("PLAN_YEAR",KJE.Default.HSAGetPlanYear(this.PLAN_YEAR));a.dollars("AMOUNT_SAVED_AFI",this.AMOUNT_SAVED_AFI);a.inflationRate("INFLATION_RATE",this.INFLATION_RATE/100);a.yesno("PLAN_SPOUSE_FIFTYFIVE",this.PLAN_SPOUSE_FIFTYFIVE);a.yesno("PLAN_OWNER_FIFTYFIVE",this.PLAN_OWNER_FIFTYFIVE);a.replace("**REPEATING GROUP**",this.sSchedule.getRepeat())};KJE.HSAGoalCalc.solveAmtAtYear=function(b,e,a,c,d){return KJE.round(KJE.FV_AMT(d,b*c,a)+KJE.FV_BEGIN(d,b*c,e),2)};KJE.HSAGoalCalc.solveForSaveAmt=function(a,b,g,d,e){e=100000/2;var f=100000/4;for(var c=0;c<30;c++){if(this.ifTargetGreater(a,b,g,d,e)){e+=f}else{e-=f}f=f/2}return e};KJE.HSAGoalCalc.ifTargetGreater=function(a,b,e,c,d){return(a>KJE.FV_AMT(e,c,b)+KJE.FV_BEGIN(e,c,d))};KJE.CalcName="Health Savings Account (HSA) Goal Calculator";KJE.CalcType="HSAGoal";KJE.CalculatorTitle="Health Savings Account (HSA) Goal Calculator";KJE.parseInputs=function(a){sCalculateByDrop=KJE.getDropBox("TYPE_OF_INSURANCE_COVERAGE",KJE.parameters.get("TYPE_OF_INSURANCE_COVERAGE",KJE.Default.SINGLE_COVERAGE),KJE.Default.COVERAGE_INDEX,KJE.Default.COVERAGE_SELECTION);a=KJE.replace("**TYPE_OF_INSURANCE_COVERAGE**",sCalculateByDrop,a);sCalculateByDrop=KJE.getDropBox("PLAN_YEAR",KJE.parameters.get("PLAN_YEAR",KJE.Default.HSA_DEFAULT_YEAR),KJE.Default.PLAN_YEAR_INDEX,KJE.Default.PLAN_YEAR_SELECTION);a=KJE.replace("**PLAN_YEAR**",sCalculateByDrop,a);return a};KJE.initialize=function(){KJE.CalcControl=new KJE.HSAGoalCalc();KJE.GuiControl=new KJE.HSAGoal(KJE.CalcControl)};KJE.HSAGoal=function(c){this.MSG_GRAPH2=KJE.parameters.get("MSG_GRAPH2","Your maximum net savings of KJE1 per month leaves you short.");this.MSG_GRAPH3=KJE.parameters.get("MSG_GRAPH3","Net savings of KJE1 per month should allow you to meet your goal.");this.MSG_GRAPH1=KJE.parameters.get("MSG_GRAPH1","Ending Balance");this.MSG_GRAPH4=KJE.parameters.get("MSG_GRAPH4","After inflation");KJE.DollarSlider("INSURANCE_DEDUCTIBLE_AMOUNT","HDHP deductible amount",0,KJE.Default.MAXIMUM_POCKET_FAMILY,0,0,1);KJE.DollarSlider("AMT_CURRENT","Current HSA balance",0,10000000,0,0,3);KJE.DollarSlider("AMT_TARGET","HSA savings goal",0,10000000,0,0,3);KJE.DollarSlider("AMT_SPEND_MONTH","Monthly health care expenses",0,90000,0,0,9);KJE.InvestRateSlider("ROR_INVEST","Annual rate of return");KJE.NumberSlider("YEARS_TO_SAVE","Years before retirement",0,45,0);KJE.DropBox("TYPE_OF_INSURANCE_COVERAGE","HDHP coverage type");KJE.DropBox("PLAN_YEAR","Plan year");KJE.InflationRateSlider("INFLATION_RATE","Expected inflation rate");KJE.Checkbox("PLAN_OWNER_FIFTYFIVE","You are 55+",false,"Check here if you, as the plan owner, will be 55 or older this year.");KJE.Checkbox("PLAN_SPOUSE_FIFTYFIVE","Spouse is 55+",false,"Check here if your spouse will be 55 or older this year.");var a=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH1",true,false,KJE.colorList[1],"KJE1");a._axisX._fSpacingPercent=0.1;a._legend.setVisible(true);a._titleXAxis.setText(KJE.parameters.get("MSG_GRAPH4","balance by year"));var b=KJE.parameters.get("MSG_DROPPER_TITLE","Health Savings Account (HSA) Goal Calculator Inputs:");KJE.addDropper(new KJE.Dropper("INPUTS",true,b,b),KJE.colorList[0])};KJE.HSAGoal.prototype.setValues=function(b){var a=KJE.inputs.items;b.INSURANCE_DEDUCTIBLE_AMOUNT=a.INSURANCE_DEDUCTIBLE_AMOUNT.getValue();b.TYPE_OF_INSURANCE_COVERAGE=a.TYPE_OF_INSURANCE_COVERAGE.getValue();b.AMT_SPEND_MONTH=a.AMT_SPEND_MONTH.getValue();b.ROR_INVEST=a.ROR_INVEST.getValue();b.YEARS_TO_SAVE=a.YEARS_TO_SAVE.getValue();b.AMT_CURRENT=a.AMT_CURRENT.getValue();b.AMT_TARGET=a.AMT_TARGET.getValue();b.INFLATION_RATE=a.INFLATION_RATE.getValue();b.PLAN_OWNER_FIFTYFIVE=a.PLAN_OWNER_FIFTYFIVE.getValue();b.PLAN_YEAR=a.PLAN_YEAR.getValue();if(b.TYPE_OF_INSURANCE_COVERAGE==KJE.Default.FAMILY_COVERAGE||(b.CHANGE_IN_COVERAGE&&b.NEW_TYPE_OF_COVERAGE==KJE.Default.FAMILY_COVERAGE)){a.PLAN_SPOUSE_FIFTYFIVE.enable();b.PLAN_SPOUSE_FIFTYFIVE=a.PLAN_SPOUSE_FIFTYFIVE.getValue()}else{a.PLAN_SPOUSE_FIFTYFIVE.disable();b.PLAN_SPOUSE_FIFTYFIVE=false}};KJE.HSAGoal.prototype.refresh=function(e){var d=KJE;var c=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[0];a.removeAll();a._showItemLabel=(e.DS_NEW.length<8);a.setGraphCategories(e.cats);a.add(new KJE.gGraphDataSeries(e.DS_NEW,this.MSG_GRAPH1+" ",a.getColor(1),d.dollars(e.ENDING_BALANCE),this.MSG_GRAPH1+" "+KJE.MSG_YEAR_LBL));a.add(new KJE.gGraphDataSeries(e.DS_AFI,this.MSG_GRAPH4+" ",a.getColor(2),d.dollars(e.AMOUNT_SAVED_AFI),this.MSG_GRAPH4+" "+KJE.MSG_YEAR_LBL));a.setTitleTemplate(KJE.getKJEReplaced((e.MADE_IT?this.MSG_GRAPH3:this.MSG_GRAPH2),d.dollars(e.USE_SAVE_MONTH,2)));a.paint()};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-PLAN_YEAR'>**PLAN_YEAR**</div> <div id='KJE-C-TYPE_OF_INSURANCE_COVERAGE'>**TYPE_OF_INSURANCE_COVERAGE**</div> <div id='KJE-C-INSURANCE_DEDUCTIBLE_AMOUNT'><input id='KJE-INSURANCE_DEDUCTIBLE_AMOUNT' /></div> <hr class=KJEDivide /> <div id='KJE-C-AMT_TARGET'><input id='KJE-AMT_TARGET' /></div> <div id='KJE-C-AMT_CURRENT'><input id='KJE-AMT_CURRENT' /></div> <div id='KJE-C-YEARS_TO_SAVE'><input id='KJE-YEARS_TO_SAVE' /></div> <div id='KJE-C-AMT_SPEND_MONTH'><input id='KJE-AMT_SPEND_MONTH' /></div> <div id='KJE-C-ROR_INVEST'><input id='KJE-ROR_INVEST' /></div> <div id='KJE-C-INFLATION_RATE'><input id='KJE-INFLATION_RATE' /></div> <div id='KJE-C-PLAN_OWNER_FIFTYFIVE'><input id='KJE-PLAN_OWNER_FIFTYFIVE' type=checkbox name='PLAN_OWNER_FIFTYFIVE' /></div> <div id='KJE-C-PLAN_SPOUSE_FIFTYFIVE'><input id='KJE-PLAN_SPOUSE_FIFTYFIVE' type=checkbox name='PLAN_SPOUSE_FIFTYFIVE' /></div> <div class=KJEDropperSpacer></div> </div> **GRAPH1** ";KJE.DefinitionText=" <div><dt>Health Savings Account (HSA)</dt><dd>An HSA is a tax-advantaged account established to pay for qualified medical expenses of an account holder who is covered under a high-deductible health plan. With money from this account, you pay for health care expenses until your deductible is met. Any unused funds are yours to retain in your HSA and accumulate towards your future health care expenses or your retirement.<p>In order to put money into an HSA you are required to have a High Deductible Health Plan (HDHP) in effect for either you or your family. A HDHP is simply health insurance that meets certain minimum deductible and maximum out-of-pocket expense requirements. **HSA_LIMITS_DEFINITION**</dd></div> <div id='KJE-D-INSURANCE_DEDUCTIBLE_AMOUNT' ><dt>High Deductible Health Plan (HDHP) deductible amount</dt><dd>Your HDHP deductible amount is the amount you pay toward your own medical expenses, in a given year, before your insurance begins to cover any expenses. **HSA_MINDEDUCTIBLE_DEFINITION** </dd></div> <div id='KJE-D-TYPE_OF_INSURANCE_COVERAGE' ><dt>High Deductible Health Plan (HDHP) coverage type</dt><dd>Choose the insurance coverage type for your HDHP. Your choices are 'Family' or 'Single'.</dd></div> <div id='KJE-D-PLAN_YEAR' ><dt>Plan year</dt><dd>Select the plan year for your contribution. This will affect contribution limits and plan requirements that are adjusted annually. The deadline for all HSA contributions for a year is April 15th of the following year. It is the same as the individual tax filing deadline.</dd></div> <div id='KJE-D-AMT_TARGET' ><dt>HSA savings goal</dt><dd>The amount you wish to have in your HSA account when you retire.</dd></div> <div id='KJE-D-YEARS_TO_SAVE' ><dt>Years before retirement</dt><dd>The number of years you will be able to save (contribute) into your HSA before you retire.</dd></div> <div id='KJE-D-AMT_CURRENT' ><dt>Current Health Savings Account (HSA) balance</dt><dd>The total amount currently saved in your HSA.</dd></div> <div id='KJE-D-AMT_SPEND_MONTH' ><dt>Monthly health care expenses</dt><dd>The amount per month you expect to spend on qualifying medical expenses.</dd></div> <div id='KJE-D-ROR_INVEST' ><dt>Annual rate of return</dt><dd>This is the annual rate of return you expect to receive on your HSA funds. **ROR_DEFINITION**</dd></div> <div id='KJE-D-INFLATION_RATE' ><dt>Expected inflation rate</dt><dd>**INFLATION_DEFINITION**</dd></div> <div id='KJE-D-PLAN_OWNER_FIFTYFIVE' ><dt>You are 55+</dt><dd>Check here if you, as the plan owner, will be 55 or older in the plan year. Your age is used to determine if you are eligible to contribute additional catch-up contributions to your HSA. If you are 55 or older and your HDHP is in effect, you are eligible to deposit catch-up contributions. The catch-up contribution amount is $1,000 which is not indexed for inflation. By checking the box you are indicating you are 55 or older this year and are still covered by an HDHP.<p> Catch-up contributions are not prorated. You can deposit the entire amount into your HSA as long as you are 55 or older at some point during the year.</dd></div> <div id='KJE-D-PLAN_SPOUSE_FIFTYFIVE' ><dt>Spouse is 55+</dt><dd>Check here if your spouse will be 55 or older in the plan year. Your spouse's age is used to determine what catch-up contribution amount they can deposit into their own HSA. By checking the box you are indicating your spouse is 55 or older this year <strong>and</strong> that they are eligible to contribute into an HSA. Please note, your spouse must have an HSA account established in their name and be eligible to make contributions into that account. For example, if your spouse is covered by your family HDHP and is over 55, but has enrolled in Medicare, they would be ineligible to make a catch-up contribution.</dd></div> ";KJE.ReportText=' <!--HEADING "Health Savings Account (HSA) Goal Results" HEADING--> <!-- \\Main Area\\ --> <h2 class=\'KJEReportHeader KJEFontHeading\'>YOU_MADE_IT </h2> CHANGE_MSG **GRAPH** <h2 class=\'KJEReportHeader KJEFontHeading\'>Results Summary</h2> <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Results Summary Plan Year PLAN_YEAR</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>High Deductible Health Plan (HDHP) coverage type</th><td class="KJECell"> TYPE_OF_INSURANCE_COVERAGE </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell60" scope=\'row\'>High Deductible Health Plan (HDHP) deductible amount</th><td class="KJECell KJECell40"> INSURANCE_DEDUCTIBLE_AMOUNT </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>HSA savings goal</th><td class="KJECell">AMT_TARGET</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Years before retirement</th><td class="KJECell">YEARS_TO_SAVE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Current Health Savings Account (HSA) balance</th><td class="KJECell">AMT_CURRENT</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Monthly healthcare expenses</th><td class="KJECell">AMT_SPEND_MONTH</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Annual rate of return</th><td class="KJECell">ROR_INVEST</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Owner eligible for catch-up contributions in PLAN_YEAR? </th><td class="KJECell"> PLAN_OWNER_FIFTYFIVE </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Spouse eligible catch-up contributions in PLAN_YEAR? </th><td class="KJECell"> PLAN_SPOUSE_FIFTYFIVE </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Maximum monthly contribution*</th><td class="KJECell" > AMT_SAVE_MONTH </td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Monthly HSA contribution required* </th><td class="KJECellStrong">RQD_NET_SAVE_MONTH</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Monthly HSA net savings required* </th><td class="KJECellStrong">USE_SAVE_MONTH</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total in HSA after YEARS_TO_SAVE years</th><td class="KJECellStrong">ENDING_BALANCE</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>HSA Savings after INFLATION_RATE inflation</th><td class="KJECellStrong">AMOUNT_SAVED_AFI</td></tr> </tfoot> </table> </div> <div class=KJEInset> <p class=KJEFooter>*Catch-up contributions are only taken into account if you are currently eligible and over 55. </div> <h2 class=\'KJEScheduleHeader KJEFontHeading\'>HSA Savings results by year</h2> **REPEATING GROUP** ';
// 01/02/2024 Copyright 2024 KJE Computer Solutions, Inc.  Licensed for use on data2.profitstarscms.com denmarkstate.com ramseybank.com www.centurybanknet.com foresightbank.com fnb-hartford.com

