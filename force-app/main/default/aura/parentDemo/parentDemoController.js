({
    init : function(component, event, helper) {
            let tableData =[];
            component.set('v.tableData', tableData);
            component.set('v.columns', [
                { label: 'Name', fieldName: 'Name', type:'text'},
                { label: 'Age', fieldName: 'Age', type:'number'},
                { label: 'Phone', fieldName: 'Phone', type:'phone'},
                { label: 'Email', fieldName: 'Email', type:'email'}])

    }
})
