public class DataTableApexController{
    @AuraEnabled 
    public static List<Account> getAccounts() {
        return [select Id, Name, AnnualRevenue,Type,AccountNumber from Account WHERE AnnualRevenue!=null limit 15];
        
    } 
    @AuraEnabled
    public static  List<Account> deleteAcc(Id accId){
        Account acc = [select Id, Name, AnnualRevenue,Type,AccountNumber from Account WHERE Id=:accId];
        delete acc;
        return [select Id, Name, AnnualRevenue,Type,AccountNumber from Account WHERE AnnualRevenue!=null limit 15];
    }

    
}