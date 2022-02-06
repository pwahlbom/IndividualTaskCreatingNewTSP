var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["InStock"] = 2] = "InStock";
    ProductStatus[ProductStatus["OutOfStock"] = 4] = "OutOfStock";
    ProductStatus[ProductStatus["Unknown"] = 6] = "Unknown";
})(ProductStatus || (ProductStatus = {}));
;
var available = ProductStatus.OutOfStock;
console.log(available);
//# sourceMappingURL=ConstAndEnum.js.map