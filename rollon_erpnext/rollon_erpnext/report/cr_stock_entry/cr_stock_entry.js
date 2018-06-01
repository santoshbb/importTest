frappe.query_reports["CR Stock Entry"] = {
"filters": [
{
"fieldname":"from_date",
"label": __("FROM Date"),
"fieldtype": "Date",
"default": get_today()
},

{
"fieldname":"to_date",
"label": __("To Date"),
"fieldtype": "Date",
"default": get_today()
},

{
"fieldname":"cycle",
"label":__("Cycle"),
"fieldtype":"Link",
"default":"CY181900001"
},

{
"fieldname":"production_type",
"label":__("Production Type"),
"fieldtype":"Select",
"options":["Regular","D1","D2","D3","Stripping"],
"default":"Regular"
}
]
}
