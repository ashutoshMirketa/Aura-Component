({
    typeChange: function(component, event, helper) {
        let accountNumberField = component.find("accountNumberField");
        let typeField = component.find("typeField").get("v.value");
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
    },
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showNotice({
            "variant": "success",
            "title": "Account Created",
            "message": "Record is created"
        });
        let returnId = event.getParams().response;
        //let recordId=response.id;
        //console.log(recordId);           
        let pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: returnId.id,
                objectApiName: 'Account',
                actionName: 'view'
                }
            };           
            let navService = component.find("navService");
            navService.navigate(pageReference);
     }
    // handleSubmit: function(component, event, helper) {
    //     let response = event.getParams().response;
    //     let recordId=response.id;
    //     console.log(recordId);
            
        
    //     let pageReference = {
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: recordId,
    //             objectApiName: 'Account',
    //             actionName: 'view'
    //             }
    //         };
            
    //         let navService = component.find("navService");
    //         navService.navigate(pageReference);
    //     }
    
    

})
