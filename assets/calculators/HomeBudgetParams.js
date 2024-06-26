


  KJE.parameters.set("ADDITIONAL_FIELDS",true);
  KJE.parameters.set("COMPANY_SAVINGS_PLAN",0);
  KJE.parameters.set("FEDERAL_TAX_WITHHOLDING",0);
  KJE.parameters.set("INSURANCE_AND_BENEFITS",0);
  KJE.parameters.set("LOCAL_TAX_WITHHOLDING",0);
  KJE.parameters.set("MSG_TOTAL_PAYCHECK","Total net monthly pay is");
  KJE.parameters.set("MSG_YOUR_ADDITIONAL1","Other debt payments");
  KJE.parameters.set("MSG_YOUR_ADDITIONAL2","Other monthly expenses");
  KJE.parameters.set("MSG_YOUR_INCOME","Gross amount paid");
  KJE.parameters.set("OTHER_INCOME",0);
  KJE.parameters.set("OTHER_TAXES_AND_WITHHOLDINGS",0);

  KJE.parameters.set("STATE_TAX_WITHHOLDING",0);
  KJE.parameters.set("YOUR_ADDITIONAL1",0.0);
  KJE.parameters.set("YOUR_ADDITIONAL2",0.0);
  KJE.parameters.set("YOUR_AUTO_GAS_AND_MAINTENANCE",0);
  KJE.parameters.set("YOUR_AUTO_INSURANCE",0);
  KJE.parameters.set("YOUR_AUTO_PAYMENT",0);
  KJE.parameters.set("YOUR_AUTO_PAYMENT_2",0);
  KJE.parameters.set("YOUR_BANK_SERVICE_CHARGE",0);
  KJE.parameters.set("YOUR_CABLE",0);
  KJE.parameters.set("YOUR_CREDIT_CARD_PAYMENTS",0);
  KJE.parameters.set("YOUR_DONATIONS",0);
  KJE.parameters.set("YOUR_ELECTRIC",0);
  KJE.parameters.set("YOUR_FOOD",0);
  KJE.parameters.set("YOUR_GAS",0);
  KJE.parameters.set("YOUR_GENERAL_MERCHANDISE",0);
  KJE.parameters.set("YOUR_GIFT_EXPENSE",0);
  KJE.parameters.set("YOUR_HEALTH",0);
  KJE.parameters.set("YOUR_HOME_INSURANCE",0);
  KJE.parameters.set("YOUR_HOME_MAINTAINCE",0);
  KJE.parameters.set("YOUR_HOUSE_PAYMENT",0);
  KJE.parameters.set("YOUR_INCOME",0);
  KJE.parameters.set("YOUR_INTERNET",0);
  KJE.parameters.set("YOUR_LIFE",0);
  KJE.parameters.set("YOUR_MEDICAL",0);
  KJE.parameters.set("YOUR_SCHOOL_OR_DAYCARE",0);
  KJE.parameters.set("YOUR_SEWER",0);
  KJE.parameters.set("YOUR_TELEPHONE",0);
  KJE.parameters.set("YOUR_TRAVEL_AND_ENTERTAINMENT",0);


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


