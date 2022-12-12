const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const productMessage = require("../models/models.js");

const { validate, User } = require("../models/user.js");

//add product
exports.postProduct = async (req, res) => {
  console.log(req.body);
  try {
    const oneproduct = await productMessage.create(req.body);
    res.json({
      success: true,
      messaeg: "product added",
      data: oneproduct,
    });
  } catch (error) {
    res.json({
      success: false,
      messaeg: "something went wrong in create controller" + error,
      data: null,
    });
  }
};

//get product
exports.getProduct = async (req, res) => {
  try {
    const getALlproduct = await productMessage.find();

    res.json({
      success: true,
      message: "product received successfully",
      data: getALlproduct,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "something went wrong in find controller" + error,
      data: null,
    });
  }
};

//delete product
exports.deleteProduct = async (req, res) => {
  try {
    const singleproductdelete = await productMessage.findByIdAndDelete(
      req.params.id
    );
    res.json({
      success: true,
      messaeg: "product deleted",
      data: singleproductdelete,
    });
  } catch (error) {
    res.json({
      success: false,
      messaeg: "something went wrong in find controller" + error,
      data: null,
    });
  }
};

//edit product

exports.editProduct = async (req, res) => {
  try {
    const editSingleProduct = await productMessage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Product updated successfully",
      data: editSingleProduct,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong in edit" + error,
      data: null,
    });
  }
};

exports.filterProduct = async (req, res) => {
  const match = {};

  if (req.query.category) {
    match.category = req.query.category;
  }
  try {
    // const filterByCategory = await productMessage.findById(req.params.category);
    // res.json({
    //   success: true,
    //   message: "product filtered by category",
    //   data: filterByCategory,
    // });
  } catch (error) {
    res.json({
      success: false,
      message: "something went wrong",
      data: null,
    });
  }
};
