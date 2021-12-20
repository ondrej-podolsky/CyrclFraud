const dataApi = "https://api.cyrkl.com/cdi/products";
async function loadProducts() {
    const response = await fetch(dataApi);
    const products = await response.json();
    console.log(products);



    document.write("<table>");
    for (var i = 0; i < products.length; i++) {
        document.write("<tr>");
        // append each person to our page
        document.write("<td>" + products[i].id + "</td>");
        document.write("<td>" + products[i].description0 + "</td>");

        document.write("<td>" + products[i].price + "</td>");

        document.write("<td>" + products[i].postal + "</td>");

        document.write("<td>" + products[i].name0 + "</td>");
        document.write("<tr>");
    }
    document.write("</table>");
}
loadProducts();