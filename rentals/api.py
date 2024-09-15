import frappe

@frappe.whitelist(allow_guest=True)
def get_text():
    return "hisiby"

def get_emoju(doc,event):
    frappe.throw("^___^")

def get_query_conditions_for_veichle(user):
    return "name = 2"
