function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello! What can I help you with?";

    } else if (input == "goodbye") {
        return "Thank you for using our website";

    } else if (input == "what types of books do you have") {
        return "We offer a wide range of books, including fiction, non-fiction, mystery, romance, and more";

    } else if (input == "are there any discounts or promotions") {
        return "Yes, we often have promotions and discounts";

    } else if (input == "can I search for a book or author") {
        return "Yes, you can use the search bar on the homepage to enter the book title or author's name";

    } else if (input == "what payment methods do you accept") {
        return "We accept a variety of payment methods, including credit/debit cards";

    } else if (input == "is my personal information secure") {
        return "Yes, we prioritize the security of your information";

    } else if (input == "do you have a customer support team") {
        return "Yes, we have a dedicated customer support team. You can contact them through by emailing .com.";

    } else {
        return " Please try to ask something!";
    }
}