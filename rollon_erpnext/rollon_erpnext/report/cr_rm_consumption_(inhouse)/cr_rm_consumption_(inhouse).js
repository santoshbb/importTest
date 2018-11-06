frappe.query_reports["CR RM Consumption (Inhouse)"] = {
"filters" : [

{
"fieldname":"from_date",
"label":("From Date"),
"fieldtype":"Date",
"default":frappe.datetime.month_start(date),
"reqd":1
},

{
"fieldname":"to_date",
"label":("To Date"),
"fieldtype":"Date",
"default":get_today()
},

{
"fieldname":"purpose",
"label":("Purpose"),
"fieldtype":"Read Only",
"options":["Manufacture","Subcontract"],
"default":"Manufacture"
},

{
"fieldname":"item_group",
"label":("Item Group"),
"fieldtype":"Read Only",
"options":["Raw Material", "SFG"],
"default":"Raw Material"
}

]

}
