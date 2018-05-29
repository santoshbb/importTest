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
}
]
}
