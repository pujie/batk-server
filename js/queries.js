var getProducts = () => {
        sql = 'select * from products'
        console.log('saveproduct query',sql)
        return sql;
    },
    insertProduct = obj => {
        sql = 'insert into products '
        sql+= '(name,sellingprice)'
        sql+= 'values '
        sql+= '("'+obj.name+'","'+obj.sellingprice+'")'
        console.log('saveproduct query',sql)
        return sql
    },
    updateProduct = obj => {
        sql = 'update products '
        sql+= 'set name="'+obj.name+'",sellingprice="'+obj.sellingprice+'" '
        sql+= 'where  '
        sql+= 'id="'+obj.id+'" '
        console.log('saveproduct query',sql)
        return sql
    }

    module.exports = {
        updateProduct:updateProduct,
        getProducts:getProducts,
        insertProduct:insertProduct
    }
