var products = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true

	},

	{
			category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},

	{
			category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},
	{
			category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
			category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
			category: 'Electronics',
		price: '$399.99',
		name: 'Nexus 7',
		inStock: true
	}

]
function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
			</tr>
	)
}
function ProductRow(props){
	if(props.product.inStock === true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}

	return(
		<tr>
			<td>{props.name}</td>
			<td>${props.price}</td>
		</tr>	
	)
}
function ProductTable(props){

	var rows = [];
	var lastCategory = "";
	var lastCategory = "";
	var key = 0;
	products.forEach(function(product, index){
		if(product.category != lastCategory){
			//we need to addthis to our rows array cause its a new cat
			rows.push(<ProductCategoryRow category={product.category} />)
			lastCategory = product.category;
			key++;
		}
		rows.push(<ProductRow product={index} />);
		key++;
	});


	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<ProductCategoryRow products={products} />
				<ProductRow products={products} />
			</tbody>	
		</table>	
	)
}

function SearchBar(props){
	return(
		<form class="search-bar">
			<input type="text" placeholder="Search..." />
			<div>
				<input type="checkbox" />&nbsp; Ony show products in stock
			</div>	
		</form>
	)
}
function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}
function Application(props){
	return(
		<FilterableProductTable products={props.products} />
	)

}
ReactDOM.render(
    <Application />,
    document.getElementById('container')
);