({
	// init : function(component, event, helper) {
	// 	let tableData =[];
	// 	component.set('v.tableData', tableData);
	// 	component.set('v.columns', [
	// 		{ label: 'Name', fieldName: 'Name', type:'text'},
	// 		{ label: 'Age', fieldName: 'Age', type:'number'},
	// 		{ label: 'Phone', fieldName: 'Phone', type:'phone'},
	// 		{ label: 'Email', fieldName: 'Email', type:'email'}
	// 	]);
		// let Name = component.find("name").get("v.value")
		// let Age= component.find("age").get("v.value")
		// let Email= component.find("email").get("v.value")
		// let Phone = component.find("phone").get("v.value")
		// // if(!Name || !Age || !Email || !Phone)
		// 	// alert(" Please fill the details")
		
		// else{
		// alert("Name: " + Name + "\n"+ "Age: " + Age + "\n"+ "Email: " + Email + "\n"+ "Phone: " + Phone);}
	
	// },
	getData : function (component, event, helper){
	let name = component.find("Name").get("v.value");
	let age = component.find("Age").get("v.value");
	let email = component.find("Email").get("v.value");
	let phone = component.find("Phone").get("v.value");
	let tableData =component.get("v.tableData");

	tableData.push({
		Name:name,
		Age:age,
		Phone:phone,
		Email:email

	});
	if(!name || !age || !email || !phone)
	alert(" Please fill the details")

	else{
		alert("Name: " + name + "\n"+ "Age: " + age + "\n"+ "Email: " + email + "\n"+ "Phone: " + phone);
		component.set("v.tableData",tableData);
		console.log(JSON.stringify(tableData));
		typeof tableData;
	}
	let nameEmpty= component.find("Name").set("v.value","");
	let ageEmpty= component.find("Age").set("v.value","");
	let emailEmpty= component.find("Email").set("v.value","");
	let phoneEmpty= component.find("Phone").set("v.value","");
}
	// displayTable : function(component, event, helper){
	// 	let table =component.find("table");
	// 	$A.util.removeClass(table, "slds-hide");
	// 	$A.util.addClass(table, "slds-show");
	// 	let name = component.find("name").get("v.value");
	// 	let age = component.find("age").get("v.value");
	// 	let email = component.find("email").get("v.value");
	// 	let phone = component.find("phone").get("v.value");
	// 	if(name && age && phone && email){
	// 	let info = {'Name': name, 'Age': age, 'Phone': phone, 'Email': email };
	// 	let infoList = component.get("v.infoList");
	// 	infoList.push(info);
	// 	component.set("v.infoList",infoList);

	// 	}
	// 	let nameEmpty= component.find("name").set("v.value","");
	// 	let ageEmpty= component.find("age").set("v.value","");
	// 	let emailEmpty= component.find("email").set("v.value","");
	// 	let phoneEmpty= component.find("phone").set("v.value","");
		// if(!name || !age || !email || !phone)
		// 	alert(" Please fill the details")
		
		// else{
		// alert("Name: " + name + "\n"+ "Age: " + age + "\n"+ "Email: " + email + "\n"+ "Phone: " + phone);}
	// }
})