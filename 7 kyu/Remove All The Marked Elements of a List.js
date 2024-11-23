// https://www.codewars.com/kata/563089b9b7be03472d00002b

Array.prototype.remove_ = function(integer_list, values_list) {
    return integer_list.filter((el) => !values_list.includes(el))
}