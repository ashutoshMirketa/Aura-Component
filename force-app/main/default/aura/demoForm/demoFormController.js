({
	myAction : function(component, event, helper) {
		let Name = component.find("name").get("v.value")
		let Age= component.find("age").get("v.value")
		let Email= component.find("email").get("v.value")
		let Phone = component.find("phone").get("v.value")
		alert("Name: " + Name + "\n"+ "Age: " + Age + "\n"+ "Email: " + Email + "\n"+ "Phone: " + Phone);
		Name.reportValidity();
	}
})