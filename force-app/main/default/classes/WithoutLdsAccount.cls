public with sharing class WithoutLdsAccount {
    @AuraEnabled
    public static Id createAccountRecord(Account accountData) {
        // Perform any necessary validations or logic
        insert accountData;
        return accountData.Id;
    }
    @AuraEnabled
    public static Id updateAccount(Account accountData) {
        // Perform any necessary validations or logic
        update accountData;
        return accountData.Id;
    }
    
    @AuraEnabled
    public static List<String> getTypeValues() {
        Schema.DescribeFieldResult typeField = Account.Type.getDescribe();
        List<Schema.PicklistEntry> pValues = typeField.getPicklistValues();
        List<String> val = new List<String>();
        for (Schema.PicklistEntry p: pValues){
            val.add(p.getLabel());
    
        }
        return val;
       
    }
    @AuraEnabled

 public static Account getCurrentAccount(Id recordId){

 try {

 return [SELECT Id, Name, Type, AccountNumber, AnnualRevenue from Account WHERE Id =:recordId];

 } catch (Exception e) {

 throw new AuraHandledException(e.getMessage());

 }

 }
}

// public with sharing class WithoutLdsAccount {
//     @AuraEnabled
//     public static void createAccountRecord(Account accountData) {
//         // Perform any necessary validations or logic
//         insert accountData;
//     }
    
//     @AuraEnabled
//     public static List<String> getTypeValues() {
//         List<String> typeValues = new List<String>();
        
//         // Add field API names to the list
//         typeValues.add('Customer - Direct');
//         typeValues.add('Prospect');
//         typeValues.add('Customer - Channel');
//         typeValues.add('Channel Partner / Reseller');
//         typeValues.add('Installation Partner');
//         typeValues.add('Technology Partner');
//         typeValues.add('Other');
        
//         return typeValues;
//     }
// }

