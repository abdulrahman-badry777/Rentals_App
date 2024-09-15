// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Veichle", {
	refresh(frm) {
        // frm.get_field("testing_html").$wrapper.append("<h1>hi hi man </h1>");
	},
    my_summary(frm) {
        // console.log("hi")
        frm.get_field("testing_html").$wrapper.append("<h1>hi hi man </h1>");
    }
});
