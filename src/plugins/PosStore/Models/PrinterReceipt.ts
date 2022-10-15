export default class PrinterReceipt{
    Row: Array<PrinterReceiptRow>
    Name?: string = "21001"
    Version?: string = "6"
}

export class PrinterReceiptRow{
    LeftColumn?: string = ""
    RightColumn?: string = ""
    Text?: string = ""
    Format?: string //QR
    Value?: string //QR value
    BarCode?: string //true для QR
}

 //     receipt = JSON.stringify({"Row":[
        //         {"LeftColumn":"","RightColumn":"","Text":"Wir erinnern Sie daran,"},
        //         {"LeftColumn":"","RightColumn":"","Text":"dass Sie ohne Aktivierung den"},
        //         {"LeftColumn":"","RightColumn":"","Text":"angesammelten Bonus nicht"},
        //         {"LeftColumn":"","RightColumn":"","Text":"nutzen können."},
        //         {"LeftColumn":"","RightColumn":"","Text":"Laden Sie zum Aktivieren die"},
        //         {"LeftColumn":"","RightColumn":"","Text":"Anwendung herunter"},

        //         {"LeftColumn":"","RightColumn":"","Format":"QR","Value":"Data.QRUrl","BarCode":"true"},
                
        //         {"LeftColumn":"","RightColumn":"","Text":"oder gehen Sie auf die Website"},
        //         {"LeftColumn":"","RightColumn":"","Text":"https://kundenkarte.online"}
        //         ],"Name":"21001","Version":"6"});

        // }
        //receipt = receipt.replace('Data.QRUrl',LoyaltyAPI.config.AppDownloadUrl||"https://kundenkarte.online/app.html");