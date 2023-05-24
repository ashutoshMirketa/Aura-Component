({
    init: function(component, event, helper) {
        let recordId=component.get("v.recordId");
        if(recordId){
            let action = component.get("c.getCurrentAccount");
            action.setParams({
            recordId: recordId
    });
    action.setCallback(this, function(response){
    let state = response.getState();
    if (state === "SUCCESS") {
    let account = response.getReturnValue();
    component.set("v.newAccount", account);
    }
    });
        $A.enqueueAction(action);
    }
        
        // Fetch account fields metadata from Apex controller
    let action = component.get("c.getTypeValues");
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let fieldMap = response.getReturnValue();
                let accountFields =[];
                console.log(fieldMap);
                for(let val in fieldMap){
                    accountFields.push(val);
                }                
                component.set("v.accountFields", fieldMap);
            }
        });
        $A.enqueueAction(action);
    },

    createAccount: function(component, event, helper) {
        let newAccount = component.get("v.newAccount");
        // let account = component.get("v.Account");

 //let action = component.get("c.insertAccount");

 //var account = component.get("v.Account");

        let recordId = component.get("v.recordId");
        let action;
        if (recordId) {
        // Perform update operation
        newAccount.Id = recordId;
        action = component.get("c.updateAccount");
        }
        else {
        // Perform insert operation
        action = component.get("c.createAccountRecord");
        }
        // let action = component.get("c.createAccountRecord");
        action.setParams({
            accountData: newAccount
        });
        action.setCallback(this, function(response) {
        let state = response.getState();
        if (state === "SUCCESS") {
        console.log('Record Created Successfully!!');
        console.log("Success");
        let accountId = response.getReturnValue();
        console.log(accountId);
        component.find("navService").navigate({
        "type": "standard__recordPage",
        "attributes": {
        "recordId": accountId,
        "objectApiName": "Account",
        "actionName": "view"
        }
        });
        console.log("Account created successfully");
        }
        else if (state === "ERROR") {
            let errors = response.getError();
            if (errors){
                console.log("Error creating account:", JSON.stringify(errors));
                }
            }
        });
        $A.enqueueAction(action);      
    },
    typeChange: function(component, event, helper) {
        let accountNumberField = component.find("accountNumber");
        let typeField = component.find("accountType").get("v.value");
        if(typeField !=""){
            accountNumberField.set("v.required", true);
        }
        else{
            accountNumberField.set("v.required", false);
        }
        //let annualRevenueField = component.find("annualRevenueField");
        if (typeField === "Prospect" || typeField === "Other") {
            //component.set("v.disabled", true);
            component.set("v.show_rev",false);
            // accountNumberField.set("v.required", true);
            
        } else {
            //component.set("v.disabled", false);
            component.set("v.show_rev",true);
            // accountNumberField.set("v.required", false);
        }
    }
})




// ({
//     init: function(component, event, helper) {
//         // Fetch account fields metadata from Apex controller
//         let fieldsAction = component.get("c.getTypeValues");
//         fieldsAction.setCallback(this, function(response) {
//             let state = response.getState();
//             if (state === "SUCCESS") {
//                 component.set("v.accountFields", response.getReturnValue());
//             }
//         });
//         $A.enqueueAction(fieldsAction);
//     },
    
//     createAccount: function(component, event, helper) {
//         // Create a new account record
//         let newAccount = {};
        
//         // Retrieve field values from the form
//         newAccount.Name = component.find("accountName").get("v.value");
//         newAccount.Type = component.find("accountType").get("v.value");
//         newAccount.AccountNumber = component.find("accountNumber").get("v.value");
//         newAccount.AnnualRevenue = component.find("annualRevenue").get("v.value");
        
//         // Create the account record
//         let action = component.get("c.createAccountRecord");
//         action.setParams({
//             "accountData": newAccount
//         });
//         action.setCallback(this, function(response) {
//             let state = response.getState();
//             if (state === "SUCCESS") {
//                 let isSuccess = response.getReturnValue();
//                 if (isSuccess) {
//                     console.log("Account created successfully");
//                 } else {
//                     console.log("Account creation failed");
//                 }
//             } else if (state === "ERROR") {
//                 let errors = response.getError();
//                 if (errors) {
//                     console.log("Error creating account:", errors);
//                 }
//             }
//         });
//         $A.enqueueAction(action);
//     }
// })




// ({
//     init: function(component, event, helper) {
//         // Fetch account fields metadata from Apex controller
//         let fieldsAction = component.get("c.getTypeValues");
//         fieldsAction.setCallback(this, function(response) {
//             let state = response.getState();
//             if (state === "SUCCESS") {
//                 component.set("v.accountFields", response.getReturnValue());
//             }
//         });
//         $A.enqueueAction(fieldsAction);
//     },
    
//     createAccount: function(component, event, helper) {
//         // Create a new account record
//         let newAccount = component.get("v.newAccount");
        
//         // Retrieve field values from the form
//         newAccount.Name = component.find("accountName").get("v.value");
//         newAccount.Type = component.find("accountType").get("v.value");
//         newAccount.AccountNumber = component.find("accountNumber").get("v.value");
//         newAccount.AnnualRevenue = component.find("annualRevenue").get("v.value");
        
//         // Create the account record
//         let action = component.get("c.createAccountRecord");
//         action.setParams({
//             accountData: newAccount
//         });
//         action.setCallback(this, function(response) {
//             let state = response.getState();
//             if (state === "SUCCESS") {
//                 console.log("Account created successfully");
//             } else if (state === "ERROR") {
//                 let errors = response.getError();
//                 if (errors) {
//                     console.log("Error creating account:", JSON.stringify(errors));
//                 }
//             }
//         });
//         $A.enqueueAction(action);
//     }
// })
