import frappe
def execute():
    Veichles = frappe.db.get_all("Veichle")
    for v in Veichles:
        vehicleo = frappe.get_doc("Veichle",v)
        vehicleo.set_title()
        vehicleo.save()

    frappe.db.commit()