function calc() {
    // Defining fees for each job type
    const fees = {
        Webdev: 100000,
        Fin_An: 80000,
        Appdev: 120000,
        Bus_An: 90000,
        Design: 70000,
        Mark_An: 600000,
        Review: 5000
    };

    // Getting the checkbox elements
    var Webdev = document.getElementById("Webdev");
    var Fin_An = document.getElementById("Fin_An");
    var Appdev = document.getElementById("Appdev");
    var Bus_An = document.getElementById("Bus_An");
    var Design = document.getElementById("Design");
    var Mark_An = document.getElementById("Mark_An");
    var Review = document.getElementById("Review");

    // Initializing total fee
    var totalFee = 0;

    // Calculating total fee based on selected checkboxes
    if (Webdev.checked) totalFee += fees.Webdev;
    if (Fin_An.checked) totalFee += fees.Fin_An;
    if (Appdev.checked) totalFee += fees.Appdev;
    if (Bus_An.checked) totalFee += fees.Bus_An;
    if (Design.checked) totalFee += fees.Design;
    if (Mark_An.checked) totalFee += fees.Mark_An;
    if (Review.checked) totalFee += fees.Review;
    

    // Displaying the total fee
    alert("Total Fee: LKR" + totalFee);
}