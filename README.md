
# Bart's Food

![Logo](https://github.com/bartosz-regula/Bart-s-Food/blob/main/src/assets/images/bartsfood_logo_yellow_stars.png?raw=true)

Bart's Food is a dummy project designed for ordering fast food. The project is developed and maintained in React by Bartosz Regula.



## Demo

https://bartsfood.netlify.app/
## Table of Contents

-   [Bart's Food](#barts-food)
    -   [Demo](#demo)
    -   [Table of Contents](#table-of-contents)
    -   [Screenshots](#screenshots)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Contributing](#contributing)
    -   [License](#license)


## Screenshots

#### Section Header
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Header%20Section.png?raw=true)

#### Main Section with empty Cart
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Main%20Section%20with%20empty%20Cart.png?raw=true)

#### Main Section with items in Cart
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Main%20Section%20with%20items%20in%20Cart.png?raw=true)

#### Checkout Form
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Checkout%20Form.png?raw=true)

#### Payment Form
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Payment%20Form.png?raw=true)

#### Order Confirmation
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Order%20Confirmation.png?raw=true)

#### Footer Section
![App Screenshot](https://github.com/bartosz-regula/Bart-s-Food/blob/main/ScreenShots/Footer%20Section.png?raw=true)

## Features

- Fully responsive website.
- Well-organized website structure for easy navigation and discovery of melas.
- The website loads meals for the menu from an external Supabase database.
- The website allows users to add meals to their cart using the "Add" button.
- The cart functionality sums up the selected meals and provides options to increase the quantity using the "+" button or decrease it using the "-" button.
- The total cost of selected meals automatically includes additional charges such as bag fees, service charges, and delivery fees.
- The cart dynamically displays the amount remaining for free delivery, which is applied to orders over £30.
- For orders over £60, a discount of 20% is applied to the total cost. The cart also displays the amount remaining to qualify for the discount after achieving free delivery.
- The "Go to Checkout" button redirects users to a form where they can enter their details for order fulfillment.
- The checkout form includes validation to ensure accurate data entry. However, for the purposes of this dummy project, fictitious data can be entered. The "Go to payment" button redirects users to a form where they can enter their card details.
- The payment form includes validation to ensure accurate data entry, as well as in checkout from fictitious data that can be entered. The "Confirm Payment" button redirects users to a window with confirmation of the order and the time of its implementation, which is 50 minutes and is counted from the moment of placing the order.
- After closing the confirmation window. The cart and data from local storage are cleared.


## Installation

To use or contribute to Bart's Food, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/bartosz-regula/Bart-s-Food.git  

2.   Install the project dependencies:
     ```bash
     npm install.

3. Start the application:
    ```bash
     npm start

The application will be accessible at http://localhost:3000.

Note: Make sure you have Node.js installed on your system. If you don't have it installed, you can download and install it from https://nodejs.org.


## Technologies Used
  - **HTML5** and **CSS3**: Used for creating the structure and styling of the web pages.
  - **JavaScript**: Provides interactivity and dynamic functionality on the client-side.
  - **React**: A JavaScript library used for building the user interface and managing component-based architecture.
## Contributing

Contributions to Bart's Food are welcome and encouraged! If you would like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are well-documented.
4. Commit your changes with clear and descriptive messages.
5. Push your changes to your forked repository.
6. Submit a pull request, explaining the changes you have made.
## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) You are free to use, modify, and distribute this software.
