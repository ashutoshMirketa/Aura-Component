({
    doInit:function (component, event, helper){
        let actions = [
            {label: 'Edit', name: 'edit'},           
            {label: 'Delete', name: 'delete'}          
            ]
            component.set("v.columns",[
               {label: 'Account Name', fieldName: 'accountName', type: 'url',       
               typeAttributes:{ label : {fieldName:'Name'}, target: '_blank' }},            
               {label: 'Account Number', fieldName: 'AccountNumber'},            
               {label: 'Type', fieldName: 'Type', type: 'text'},  
               {label: 'Annual Revenue', fieldName: 'AnnualRevenue',type: 'number'},         
               {type: 'action', typeAttributes:{ rowActions : actions}}  
                ]);
            let action=component.get("c.getAccounts");
            action.setCallback(this, function(response){
            let responseValue= response.getReturnValue();
            responseValue.forEach(function(responseValue){

                responseValue.accountName = '/' + responseValue.Id; 
                
                });
            component.set("v.acc",responseValue);
       });
       $A.enqueueAction(action);

    },
    handleRow : function(component, event, helper){
        let data = event.getParam('action');
        let row = event.getParam('row');
        let recId = row.Id;
        console.log(data.name);
        switch(data.name) {
            case 'edit':
                console.log("2");
                 $A.get("e.force:editRecord").setParams({"recordId": recId}).fire();
                 break;
            case 'delete':
                let action=component.get("c.deleteAcc");
                action.setParams({
                    accId:recId
                });
                action.setCallback(this, function(response){
                    let state =response.getState();
                    if(state=='Success'){
                        console.log("Deleted");
                        let responseValue= response.getReturnValue();
                        responseValue.forEach(function(responseValue){
                        responseValue.accountName = '/' + responseValue.Id; 
                        
                    });
                    component.set("v.acc",responseValue);
                    }
                });
                $A.enqueueAction(action);
                break;
        }
    },
    showData : function(component, event, helper){
        let modalBody;
        $A.createComponent("c:FormWithoutLds", {},
           function(content, status) {
               if (status === "SUCCESS") {
                   modalBody = content;
                   component.find('overlayLib').showCustomModal({
                       header: "Account",
                       body: modalBody,
                       showCloseButton: true,
                    //    cssClass: "mymodal",
                       closeCallback: function() {
                           alert('You closed the alert!');
                       }
                   })
               }
           });

    }
    
})
