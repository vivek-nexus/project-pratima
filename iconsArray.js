const iconsArray = [
    {
        "fileName": "ic_send_money",
        "iconName": "Send money",
        "nomenclature": ["Pay", "Send", "Pay money", "Send money", "Give  money"],
        "notes": ["The upward arrow paired with a rupee symbol indicates outgoing money.",
            "The upward arrow without the context of the rupee could mean upload and the horizontal arrows are not very intuitive for the user to understand the direction of money."]
    },
    {
        "fileName": "ic_recieve_money",
        "iconName": "Receive money",
        "nomenclature": ["Request", "Request money", "Receive", "Receive money", "Get", "Get money", "Ask", "Ask for money"],
        "notes": ["The downward arrow paired with a rupee symbol indicates incoming money.",
            "The downward arrow without the context of the rupee could mean download and using horizontal arrows are not very intuitive for the user to understand the direction of money."]
    },
    {
        "fileName": "ic_bank_transfer",
        "iconName": "Bank transfer",
        "nomenclature": ["Bank transfer", "Bank"],
        "notes": ["Typically banks are identified as the building with a triangular roof and pillars across various payment apps. It proves efficient to build on this mental model."]
    },
    {
        "fileName": "ic_UPI_id",
        "iconName": "Pay to UPI ID",
        "nomenclature": ["Pay UPI", "UPI ID", "Pay to UPI", "Pay to UPI ID"],
        "notes": ["The Bhim UPI logo is widely accepted and is a veritable identity for mobile payments. Adding other symbols to the already established symbol would only dilute the message."]
    },
    {
        "fileName": "ic_self_transfer",
        "iconName": "Pay to self",
        "nomenclature": ["Pay to self", "Self pay", "Pay yourself", "Self transfer"],
        "notes": ["Self transfer could mean either transfering between two bank accounts that the person holds or transfering from a wallet to their bank account. Hence we have kept the icon ambiguous enough yet conveying that it only involves a single person — self."]
    },
    {
        "fileName": "ic_to_contact",
        "iconName": "Pay to contact",
        "nomenclature": ["Pay to contact", "Pay to mobile number", "Pay to mobile no.", "Pay to Mobile #", "Pay contact"],
        "notes": ["A phone book is a strong metaphor for contacts, pairing that with an upward arrow in this context would mean 'send money to contact.", "Having a phone symbol or just a contact book without the context of the verb would confuse the user on the action associated with it."]
    },
    {
        "fileName": "ic_qr",
        "iconName": "Scan QR",
        "nomenclature": ["Scan and pay", "Scan QR", "QR", "Pay via QR"],
        "notes": ["Ever since advent of smartphones, QR scanning has been associated with small grid of boxes in a square frame which resembles a simplified version of the actual QR code."]
    },
    {
        "fileName": "ic_view_transaction_history",
        "iconName": "Transaction history",
        "nomenclature": ["Past transactions", "View transactions", "Transactions", "Passbook"],
        "notes": ["The term passbook is always associated with a booklet that encompasses all the transactions conducted through an account. In this case, adding the binder rings reinforced the identity of the book symbol and addition of the rupee symbol set the context of money/ transaction."]
    },
    {
        "fileName": "ic_check_balance",
        "iconName": "Check balance",
        "nomenclature": ["Check balance", "Bank balance", "Check bank balance",
            "Balance check", "Balance"],
        "notes": ["Magnifying glass brought out thoughts such as search for money.",
            "A question mark indicates \"asking for something\" and rupee reinforces the same thought as \"asking for balance\"."]
    },
    {
        "fileName": "ic_success",
        "iconName": "Success",
        "nomenclature": ["Done", "Successful"],
        "notes": ["Tick communicates success state. Green colour is used to reinforce it.",
            "However, colour should not be used a fail-safe way to communicate due to accessibility reasons (colour blindness)."]
    },
    {
        "fileName": "ic_failure",
        "iconName": "Failure",
        "nomenclature": ["Failed", "Unsuccessful"],
        "notes": ["Cross communicates error state. Red colour is used to reinforce it.",
            "However, colour should not be used a fail-safe way to communicate due to accessibility reasons (colour blindness)."]
    },
    {
        "fileName": "ic_pending",
        "iconName": "Pending",
        "nomenclature": ["Pending", "Processing", "In transit", "In progress"],
        "notes": ["Timer with dotted lines communicates pending state."]
    },
];

export default iconsArray;