({
    doinit : function(component, event, helper) {
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
