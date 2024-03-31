import 'package:flutter/material.dart';

final double iconSize = 24.0;

CarList carList = CarList(cars: [
  Car(companyName: "Bajaj", carName: "threewheel", price: 2000, imgList: [
    "1.png",
    "2.jpg",
  ], offerDetails: [
    {Icon(Icons.bluetooth, size: iconSize) : "Automatic"},
{Icon(Icons.airline_seat_individual_suite, size: iconSize) : "4 seats"},
{Icon(Icons.pin_drop, size: iconSize) : "3.4L"},
{Icon(Icons.shutter_speed, size: iconSize) : "SHP"},
{Icon(Icons.invert_colors, size: iconSize) : "Variant Color"},
  ], features: [
    {Icon(Icons.bluetooth, size:iconSize): "Bluetooth"},
{Icon(Icons.usb, size:iconSize): "USB Port"},
{Icon(Icons.power_settings_new, size:iconSize): "Keyless"},
{Icon(Icons.android, size:iconSize): "Android Auto"},
{Icon(Icons.ac_unit, size:iconSize): "AC"},
  ], specification: [
    {
Icon(Icons.av_timer, size: iconSize): {"Milegp(upto)" : "24.2kmpl"}
},
{
Icon(Icons.power, size: iconSize): {"Engine(upto)" : "250cc"}
},
{
Icon(Icons.assignment_late, size: iconSize): {"BHP" : "700"}
},
{
Icon(Icons.account_balance_wallet, size: iconSize): {"More Specs" : "14.2kmpl"}
},

  ])
]);

class CarList {
  List<Car> cars;

  CarList({
    required this.cars,
  })
}

class Car {
  String companyName;
  String carName;
  int price;
  List<String> imgList;
  List<Map<Icon, String>> offerDetails;
  List<Map<Icon, String>> features;
  List<Map<Icon, Map<String, String>>> specification;

  Car({
    required this.companyName,
    required this.carName,
    required this.price,
    required this.imgList,
    required this.offerDetails,
    required this.features,
    required this.specification,
  });
}
