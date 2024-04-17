


  KJE.parameters.set("AMT_CURRENT",1000);
  KJE.parameters.set("AMT_SAVE_MONTH",200);
  KJE.parameters.set("FED_TAX_RATE",KJE.Default.TaxRate);
  KJE.parameters.set("INFLATION_RATE",KJE.Default.InflationRate);
  KJE.parameters.set("ROR_INVEST",KJE.Default.RORSave);
  KJE.parameters.set("STATE_TAX_RATE",KJE.Default.StateTaxRate);
  KJE.parameters.set("YEARS_TO_SAVE",10);


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


