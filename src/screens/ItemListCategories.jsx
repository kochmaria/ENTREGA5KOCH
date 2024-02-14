import { Text, View , FlatList} from "react-native";
import allProducts from '../data/productos.json'
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function ItemListCategories ({category}) {
   const [products, setProducts] = useState([]);
   const [keyword, setKeyword] = useState ("");

   useEffect (() => {
    if (category) {
        const products = allProducts.filter ((product)=>product.category === category)
        const filterProducts = products.filter ((product)=> product.title.includes(keyword) );
        setProducts (filterProducts)
    }
   }, [category, keyword])



    return (
        <View> 
           <Search keyword = {keyword}onSearch ={setKeyword}></Search>
            <FlatList
                data={products}
                renderItem={({item})=> <ProductItem product= {item}/>}
                keyExtractor={(item)=> item.id}/>
        </View>
    )
}

export default ItemListCategories;
