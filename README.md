# Bart's Food

Bart's Food is a dummy project designed for ordering fast food. The project is developed and maintained by Bartosz Regula.

## Table of Contents

-   [Bart's Food](#barts-food)
    -   [Table of Contents](#table-of-contents)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Contributing](#contributing)
    -   [License](#license)

## Features

-   Well-organized repository structure for easy navigation and discovery of melas.
-   The website loads meals for the menu from an external Supabase database.
-   The website allows users to add meals to their cart using the "Add" button.
-   The cart functionality sums up the selected meals and provides options to increase the quantity using the "+" button or decrease it using the "-" button.
-   The total cost of selected meals automatically includes additional charges such as bag fees, service charges, and delivery fees.
-   The cart dynamically displays the amount remaining for free delivery, which is applied to orders over £30.
-   For orders over £60, a discount of 20% is applied to the total cost. The cart also displays the amount remaining to qualify for the discount after achieving free delivery.
-   The "Go to Checkout" button redirects users to a form where they can enter their details for order fulfillment.
-   The checkout form includes validation to ensure accurate data entry. However, for the purposes of this dummy project, fictitious data can be entered. The "Go to payment" button redirects users to a form where they can enter their card details.
-   The payment form includes validation to ensure accurate data entry, as well as in checkout from fictitious data that can be entered. The "Confirm Payment" button redirects users to a window with confirmation of the order and the time of its implementation, which is 50 minutes and is counted from the moment of placing the order.
-   After closing the confirmation window. The cart and data from local storage are cleared.

## Installation

To use or contribute to Bart's Food, follow these steps:

1. Clone the repository using the following command:
   git clone https://github.com/bartosz-regula/Bart-s-Food.git

2. Install the necessary dependencies by executing the following command in the project's root directory:

npm install

This will install all the required dependencies listed in the package.json file, including:

@supabase/supabase-js: "^2.20.0"
@testing-library/jest-dom: "^5.16.5"
@testing-library/react: "^13.4.0"
@testing-library/user-event: "^13.5.0"
react: "^18.2.0"
react-dom: "^18.2.0"
react-scripts: "5.0.1"
web-vitals: "^2.1.4"
The installation may take a moment, depending on your internet connection speed and the number of dependencies.

3. Once the dependencies are installed successfully, you can proceed with using or contributing to Bart's Food.

Note: Make sure you have Node.js installed on your system. If you don't have it installed, you can download and install it from https://nodejs.org.

## Usage

Once you have cloned the repository and installed the dependencies, you can start using Bart's Food by setting an order and filling in forms with fictitious data.

## Contributing

Contributions to Bart's Food are welcome and encouraged! If you would like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are well-documented.
4. Commit your changes with clear and descriptive messages.
5. Push your changes to your forked repository.
6. Submit a pull request, explaining the changes you have made.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software.
