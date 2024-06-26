


  KJE.parameters.set("YEARS",10);
  KJE.parameters.set("ADDITIONAL_CONTRIBUTIONS",50);
  KJE.parameters.set("COMPOUND_INTEREST",KJE.CompoundSavingsCalc.COMPOUND_ANNUAL);
  KJE.parameters.set("DEPOSIT_FREQUENCY",KJE.CompoundSavingsCalc.DEPOSIT_MONTHLY);
  KJE.parameters.set("ERROR_MSG2","Time to save must be at least one period");
  KJE.parameters.set("RATE_OF_RETURN",KJE.Default.RORSave);
  KJE.parameters.set("SIMPLE",false);
  KJE.parameters.set("STARTING_AMOUNT",1000);
  KJE.parameters.set("PERIODS_HIDE",true);

    
KJE.ReportProcess = function(sText) {
sText= KJE.replace("appraised","assessed value",sText);
sText= KJE.replace("Appraised","Assessed value",sText);
return KJE.replace("value value","value",sText);
}


KJE.parseDefinitions = function(sText) {
sText= KJE.replace("appraised","assessed value",sText);
sText= KJE.replace("Appraised","Assessed value",sText);
return KJE.replace("value value","value",sText);
}
/**V3_CUSTOM_CODE**/
/* <!--
  Financial Calculators, &copy;1998-2022 KJE Computer Solutions, Inc.
  For more information please see:
  <A HREF="https://www.dinkytown.net">https://www.dinkytown.net</A>
 -->
 */


