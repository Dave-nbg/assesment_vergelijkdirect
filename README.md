# Vergelijkdirect.com code challenge
##See README in car-comparison-form for the installation instructions

## Before starting the coding

* Make sure you've read all the descriptions
* Ask questions if you have any
* Set yourself a deadline for delivery of the challenge and let us know this deadline. We will be expecting a code by that time.

## Requirements
Build a car comparison input form. We expect that the form meets the following requirements:

### The customer needs to fill in the following information.
- License plate
  - Make sure that the input follows the next format XXXXXX (Remove dashes and always use capital). X - number or letter.
  - Retrieve information about vehicle from license plate (https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=RK55NV) and present brand (merk) and manufacturing year (datum_eerste_toelating) to the form UI. Please note: RDW webservice only accept capital letters RK55NV instead of rk55nv
  - Show an error message for the format if it is not correct. Or if the license is not a valid license plate.
- Zipcode
  - Make sure that the input follows the next format ####AA (Always use capital and remove spaces). # - number, A - letter.
  - Make sure that the input, if filled in, else trigger an error message.
- House number
  - Make sure that the input only allows numbers
  - Make sure that the input, if filled in, else trigger an error message.
- House number addition
  - Make sure that the input only allows numbers and/or letters
- Birthdate
  - Make sure that the input follows the next format DD-MM-YYYY.
  - Make sure that the date is valid.
  - Make sure the user is between 18 and 100 years of age.
  - Show an error message for these above cases if triggered.
  - Make sure that the input, if filled in, else trigger an error message.
- Claim Free years
  - Options should be between -5 and (current year - birthdate year - 18(Legal age)). For Example, (2024 - 1980) - 18 = 26 (maximum allowed years). Default selected value should be 0.
- Kilometrage
  - Options for Kilometrage are:
    - 0 t/m 7500 KM
    - 7501 t/m 10000 KM
    - 10001 t/m 12000 KM
    - 12001 t/m 15000 KM
    - 15000 t/m 20000 KM
    - 20001 t/m 25000 KM
    - 25001 t/m 30000 KM
    - 30001 t/m 90000 KM
  - Default selected value should be 7501 t/m 10000 KM
- A button that sends all values selected into queryparams url https://en.wikipedia.org/wiki/Query_string

## Technical challenges
- To solve the task, use framework Vue.js version 3 https://vuejs.org/
- Use typescript whenever possible
- Split HTML into multiple components https://vuejs.org/api/sfc-spec.html
- Add field validation https://vee-validate.logaretm.com/v4/
- Build unit tests for the components
- Describe the process of installing and running the project for testing (see README in car-comparison-form folder) .

## UI
For this section, you can choose your own implementation. This can be bootstrap, Tailwind or any other libraries you want or standard CSS.

## Project delivery

* The delivery of the project will be accepted only in github or bitbucket.
* Deliver your code in `master` branch
