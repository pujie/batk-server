var getProducts = () => {
        sql = 'select * from products'
        console.log('saveproduct query',sql)
        return sql;
    },
    updateProduct = obj => {
        sql = 'insert into products '
        sql+= '(name,sellingprice)'
        sql+= 'values '
        sql+= '("'+obj.name+'","'+obj.sellingprice+'")'
        console.log('saveproduct query',sql)
        return sql
    }
    module.exports = {
        getProducts:getProducts,
        updateProduct:updateProduct
    }
