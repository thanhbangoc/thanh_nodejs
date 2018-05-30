'use strict';

var models = require("../models");

var FoodRepository = {
    create: function (food) {
        let new_food = new models.Food(food);
        return new_food.save();
    },
    findById: function(id){
        return models.Food.findOne({_id: id});
    }
}

module.exports = FoodRepository;
