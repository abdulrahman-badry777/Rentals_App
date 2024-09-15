// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    on_load(frm) {
        console.log('runnig load....')
    },
	refresh(frm) {
        if(frm.add.status !== "New") {
            frm.add_custom_button("accept",() => {
                frm.set_value("status","Accepted");
                frm.save()
            },"actions")
        

            frm.add_custom_button("reject",() => {
                frm.set_value("status","Rejected");
                frm.save()
            },"actions")
    }
	},
    status(frm) {
        console.log("status changed")
    }
});
