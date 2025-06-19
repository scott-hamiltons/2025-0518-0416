anychart.onDocumentReady(function () {

    // create data
    const data = {
        "nodes": [
            // parent company
            { "id": "Volkswagen Group", "group": "CoreCompany" },
            // child companies
            { "id": "Audi", "group": "ChildCompany" },
            { "id": "CUPRA", "group": "ChildCompany" },
            { "id": "Ducati", "group": "ChildCompany" },
            { "id": "Lamborghini", "group": "ChildCompany" },
            { "id": "MAN", "group": "ChildCompany" },
            { "id": "Porsche", "group": "ChildCompany" },
            { "id": "Scania", "group": "ChildCompany" },
            { "id": "SEAT", "group": "ChildCompany" },
            { "id": "Škoda", "group": "ChildCompany" },
            { "id": "Volkswagen", "group": "ChildCompany" },
            // products
            { "id": "Audi Cars", "group": "Product" },
            { "id": "Audi SUVs", "group": "Product" },
            { "id": "Audi Electric Vehicles", "group": "Product" },
            { "id": "CUPRA Performance Cars", "group": "Product" },
            { "id": "CUPRA SUVs", "group": "Product" },
            { "id": "Ducati Motorcycles", "group": "Product" },
            { "id": "Lamborghini Sports Cars", "group": "Product" },
            { "id": "Lamborghini SUVs", "group": "Product" },
            { "id": "MAN Trucks", "group": "Product" },
            { "id": "MAN Buses", "group": "Product" },
            { "id": "Porsche Sports Cars", "group": "Product" },
            { "id": "Porsche SUVs", "group": "Product" },
            { "id": "Porsche Sedans", "group": "Product" },
            { "id": "Scania Trucks", "group": "Product" },
            { "id": "Scania Buses", "group": "Product" },
            { "id": "SEAT Cars", "group": "Product" },
            { "id": "SEAT SUVs", "group": "Product" },
            { "id": "SEAT Electric Vehicles", "group": "Product" },
            { "id": "Škoda Cars", "group": "Product" },
            { "id": "Škoda SUVs", "group": "Product" },
            { "id": "Škoda Electric Vehicles", "group": "Product" },
            { "id": "Volkswagen Cars", "group": "Product" },
            { "id": "Volkswagen SUVs", "group": "Product" },
            { "id": "Volkswagen Vans", "group": "Product" },
            { "id": "Volkswagen Trucks", "group": "Product" }
        ],
        "edges": [
            // parent to child companies
            { "from": "Volkswagen Group", "to": "Audi" },
            { "from": "Volkswagen Group", "to": "CUPRA" },
            { "from": "Volkswagen Group", "to": "Ducati" },
            { "from": "Volkswagen Group", "to": "Lamborghini" },
            { "from": "Volkswagen Group", "to": "MAN" },
            { "from": "Volkswagen Group", "to": "Porsche" },
            { "from": "Volkswagen Group", "to": "Scania" },
            { "from": "Volkswagen Group", "to": "SEAT" },
            { "from": "Volkswagen Group", "to": "Škoda" },
            { "from": "Volkswagen Group", "to": "Volkswagen" },
            // child companies to products
            { "from": "Audi", "to": "Audi Cars" },
            { "from": "Audi", "to": "Audi SUVs" },
            { "from": "Audi", "to": "Audi Electric Vehicles" },
            { "from": "CUPRA", "to": "CUPRA Performance Cars" },
            { "from": "CUPRA", "to": "CUPRA SUVs" },
            { "from": "Ducati", "to": "Ducati Motorcycles" },
            { "from": "Lamborghini", "to": "Lamborghini Sports Cars" },
            { "from": "Lamborghini", "to": "Lamborghini SUVs" },
            { "from": "MAN", "to": "MAN Trucks" },
            { "from": "MAN", "to": "MAN Buses" },
            { "from": "Porsche", "to": "Porsche Sports Cars" },
            { "from": "Porsche", "to": "Porsche SUVs" },
            { "from": "Porsche", "to": "Porsche Sedans" },
            { "from": "Scania", "to": "Scania Trucks" },
            { "from": "Scania", "to": "Scania Buses" },
            { "from": "SEAT", "to": "SEAT Cars" },
            { "from": "SEAT", "to": "SEAT SUVs" },
            { "from": "SEAT", "to": "SEAT Electric Vehicles" },
            { "from": "Škoda", "to": "Škoda Cars" },
            { "from": "Škoda", "to": "Škoda SUVs" },
            { "from": "Škoda", "to": "Škoda Electric Vehicles" },
            { "from": "Volkswagen", "to": "Volkswagen Cars" },
            { "from": "Volkswagen", "to": "Volkswagen SUVs" },
            { "from": "Volkswagen", "to": "Volkswagen Vans" },
            { "from": "Volkswagen", "to": "Volkswagen Trucks" }
        ]
    };

    // initialize the network graph with the provided data structure
    const chart = anychart.graph(data);

    // Customization step #1:
    // display chart node labels
    chart.nodes().labels().enabled(true);

    // Customization step #2:
    // configure edge tooltips
    chart.edges().tooltip().format("{%from} owns {%to}");

    // Customization step #3:
    // customizing node appearance:
    // 1) configure settings for nodes representing the core company
    chart.group('CoreCompany')
        .stroke('none')
        .height(45)
        .fill('red')
        .labels().fontSize(15);
    // 2) configure settings for nodes representing child companies
    chart.group('ChildCompany')
        .stroke('none')
        .height(25)
        .labels().fontSize(12);
    // 3) configure settings for nodes representing products
    chart.group('Product')
        .shape('square')
        .stroke('black', 1)
        .height(15)
        .labels().enabled(false);

    // Customization step #4:
    // set the title of the chart for context
    chart.title("Volkswagen Group Network");

    // specify the HTML container ID where the chart will be rendered
    chart.container("container");

    // initiate the rendering of the chart
    chart.draw();

});